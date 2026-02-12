"""Tests for WebSocket State Manager."""
import asyncio
import json
from unittest.mock import patch, AsyncMock, MagicMock, call

import pytest
from websockets.exceptions import ConnectionClosed

from websocket_manager import WebSocketStateManager


# ---------------------------------------------------------------------------
# Fixtures
# ---------------------------------------------------------------------------

@pytest.fixture
def full_config():
    """Config with all features enabled and entities set."""
    return {
        "HASS_WEBSOCKET_URL": "ws://supervisor/core/websocket",
        "HASS_API_URL": "http://supervisor/core/api",
        "ENABLE_GARAGE": True,
        "ENTITY_GARAGE_DOOR": "cover.garage_door",
        "ENABLE_DOORBELL": True,
        "ENTITY_DOORBELL": "binary_sensor.doorbell",
        "ENABLE_LAUNDRY": True,
        "LAUNDRY_MACHINES": [
            {"entity_id": "sensor.washer", "name": "Washer"},
            {"entity_id": "sensor.dryer", "name": "Dryer"},
        ],
        "ENABLE_EV": True,
        "ENTITY_PRECLIMATE_STATUS": "sensor.ev_preclimate",
        "ENTITY_CHARGING_STATE": "sensor.ev_charging",
        "ENTITY_STATE_OF_CHARGE": "sensor.ev_soc",
        "ENABLE_EVERYDAY_CALENDAR": True,
        "ENTITY_EVERYDAY_CALENDAR": "sensor.everyday_calendar",
    }


@pytest.fixture
def minimal_config():
    """Config with everything disabled."""
    return {
        "HASS_WEBSOCKET_URL": "ws://supervisor/core/websocket",
        "HASS_API_URL": "http://supervisor/core/api",
        "ENABLE_GARAGE": False,
        "ENABLE_DOORBELL": False,
        "ENABLE_LAUNDRY": False,
        "ENABLE_EV": False,
        "ENABLE_EVERYDAY_CALENDAR": False,
    }


@pytest.fixture
def manager(full_config, monkeypatch):
    """Create a WebSocketStateManager with a test auth token."""
    monkeypatch.setenv("SUPERVISOR_TOKEN", "test-supervisor-token")
    return WebSocketStateManager(full_config)


@pytest.fixture
def manager_no_token(full_config, monkeypatch):
    """Create a manager with NO auth token."""
    monkeypatch.delenv("SUPERVISOR_TOKEN", raising=False)
    monkeypatch.delenv("HASS_ACCESS_TOKEN", raising=False)
    return WebSocketStateManager(full_config)


@pytest.fixture
def mock_ws():
    """Create a mock WebSocket connection that simulates HA auth flow."""
    ws = AsyncMock()
    # Default: auth succeeds
    ws.recv = AsyncMock(side_effect=[
        json.dumps({"type": "auth_required"}),
        json.dumps({"type": "auth_ok"}),
    ])
    ws.send = AsyncMock()
    ws.close = AsyncMock()
    return ws


# ===========================================================================
# get_entities_from_config()
# ===========================================================================

class TestGetEntitiesFromConfig:
    def test_extracts_all_entities(self, manager):
        entities = manager.get_entities_from_config()
        expected = {
            "cover.garage_door",
            "binary_sensor.doorbell",
            "sensor.washer",
            "sensor.dryer",
            "sensor.ev_preclimate",
            "sensor.ev_charging",
            "sensor.ev_soc",
            "sensor.everyday_calendar",
        }
        assert entities == expected

    def test_returns_empty_when_all_disabled(self, minimal_config, monkeypatch):
        monkeypatch.setenv("SUPERVISOR_TOKEN", "tok")
        mgr = WebSocketStateManager(minimal_config)
        assert mgr.get_entities_from_config() == set()

    def test_skips_empty_entity_strings(self, monkeypatch):
        monkeypatch.setenv("SUPERVISOR_TOKEN", "tok")
        config = {
            "ENABLE_GARAGE": True,
            "ENTITY_GARAGE_DOOR": "",  # empty → skip
            "ENABLE_DOORBELL": True,
            "ENTITY_DOORBELL": "binary_sensor.doorbell",
        }
        mgr = WebSocketStateManager(config)
        entities = mgr.get_entities_from_config()
        assert entities == {"binary_sensor.doorbell"}

    def test_skips_invalid_laundry_entries(self, monkeypatch):
        monkeypatch.setenv("SUPERVISOR_TOKEN", "tok")
        config = {
            "ENABLE_LAUNDRY": True,
            "LAUNDRY_MACHINES": [
                "not-a-dict",
                {"name": "No entity_id key"},
                {"entity_id": "sensor.valid", "name": "OK"},
            ],
        }
        mgr = WebSocketStateManager(config)
        entities = mgr.get_entities_from_config()
        assert entities == {"sensor.valid"}

    def test_garage_only(self, monkeypatch):
        monkeypatch.setenv("SUPERVISOR_TOKEN", "tok")
        config = {
            "ENABLE_GARAGE": True,
            "ENTITY_GARAGE_DOOR": "cover.garage",
            "ENABLE_DOORBELL": False,
            "ENABLE_LAUNDRY": False,
            "ENABLE_EV": False,
            "ENABLE_EVERYDAY_CALENDAR": False,
        }
        mgr = WebSocketStateManager(config)
        assert mgr.get_entities_from_config() == {"cover.garage"}

    def test_ev_partial_entities(self, monkeypatch):
        """Only some EV entities configured → only those returned."""
        monkeypatch.setenv("SUPERVISOR_TOKEN", "tok")
        config = {
            "ENABLE_EV": True,
            "ENTITY_PRECLIMATE_STATUS": "",
            "ENTITY_CHARGING_STATE": "sensor.ev_charging",
            "ENTITY_STATE_OF_CHARGE": "",
        }
        mgr = WebSocketStateManager(config)
        entities = mgr.get_entities_from_config()
        assert entities == {"sensor.ev_charging"}


# ===========================================================================
# connect_to_ha()
# ===========================================================================

class TestConnectToHa:
    async def test_successful_auth(self, manager, mock_ws):
        with patch("websocket_manager.websockets.connect", new_callable=AsyncMock, return_value=mock_ws):
            result = await manager.connect_to_ha()

        assert result is True
        assert manager.connected is True
        assert manager.authenticated is True

        # Verify auth message was sent
        sent_data = json.loads(mock_ws.send.call_args[0][0])
        assert sent_data["type"] == "auth"
        assert sent_data["access_token"] == "test-supervisor-token"

    async def test_auth_failure(self, manager):
        ws = AsyncMock()
        ws.recv = AsyncMock(side_effect=[
            json.dumps({"type": "auth_required"}),
            json.dumps({"type": "auth_invalid", "message": "Invalid password"}),
        ])
        ws.send = AsyncMock()

        with patch("websocket_manager.websockets.connect", new_callable=AsyncMock, return_value=ws):
            result = await manager.connect_to_ha()

        assert result is False
        # connected=True because the WS connected, but authenticated=False
        assert manager.connected is True
        assert manager.authenticated is False

    async def test_unexpected_first_message(self, manager):
        ws = AsyncMock()
        ws.recv = AsyncMock(return_value=json.dumps({"type": "something_unexpected"}))
        ws.send = AsyncMock()

        with patch("websocket_manager.websockets.connect", new_callable=AsyncMock, return_value=ws):
            result = await manager.connect_to_ha()

        assert result is False

    async def test_no_token_returns_false(self, manager_no_token):
        result = await manager_no_token.connect_to_ha()
        assert result is False
        assert manager_no_token.connected is False

    async def test_connection_error(self, manager):
        with patch(
            "websocket_manager.websockets.connect",
            new_callable=AsyncMock,
            side_effect=ConnectionRefusedError("Connection refused"),
        ):
            result = await manager.connect_to_ha()

        assert result is False
        assert manager.connected is False
        assert manager.authenticated is False


# ===========================================================================
# handle_message()
# ===========================================================================

class TestHandleMessage:
    async def test_state_changed_updates_cache(self, manager):
        message = json.dumps({
            "type": "event",
            "event": {
                "event_type": "state_changed",
                "data": {
                    "entity_id": "cover.garage_door",
                    "new_state": {
                        "state": "open",
                        "attributes": {"friendly_name": "Garage Door"},
                    },
                },
            },
        })

        await manager.handle_message(message)

        cached = manager.state_cache["cover.garage_door"]
        assert cached["state"] == "open"
        assert cached["attributes"]["friendly_name"] == "Garage Door"
        assert "last_update" in cached

    async def test_state_changed_notifies_subscribers(self, manager):
        callback = AsyncMock()
        manager.client_subscriptions["cover.garage_door"].add(callback)

        message = json.dumps({
            "type": "event",
            "event": {
                "event_type": "state_changed",
                "data": {
                    "entity_id": "cover.garage_door",
                    "new_state": {
                        "state": "closed",
                        "attributes": {},
                    },
                },
            },
        })

        await manager.handle_message(message)

        callback.assert_called_once()
        update = callback.call_args[0][0]
        assert update["type"] == "state_update"
        assert update["entity_id"] == "cover.garage_door"
        assert update["state"] == "closed"

    async def test_state_changed_no_subscribers_ok(self, manager):
        """State change for entity with no subscribers should not error."""
        message = json.dumps({
            "type": "event",
            "event": {
                "event_type": "state_changed",
                "data": {
                    "entity_id": "sensor.unknown",
                    "new_state": {
                        "state": "on",
                        "attributes": {},
                    },
                },
            },
        })

        # Should not raise
        await manager.handle_message(message)
        assert manager.state_cache["sensor.unknown"]["state"] == "on"

    async def test_result_message_handled(self, manager):
        """Result messages (subscribe ack) should be handled without error."""
        message = json.dumps({
            "type": "result",
            "id": 1,
            "success": True,
            "result": None,
        })
        # Should not raise
        await manager.handle_message(message)

    async def test_result_error_logged(self, manager):
        """Error result should be logged but not crash."""
        message = json.dumps({
            "type": "result",
            "id": 1,
            "success": False,
            "error": {"code": "unauthorized", "message": "Unauthorized"},
        })
        # Should not raise
        await manager.handle_message(message)

    async def test_invalid_json_handled(self, manager):
        """Non-JSON messages should be handled gracefully."""
        await manager.handle_message("this is not json")
        # No exception should be raised

    async def test_state_changed_missing_new_state(self, manager):
        """Missing new_state should not crash."""
        message = json.dumps({
            "type": "event",
            "event": {
                "event_type": "state_changed",
                "data": {
                    "entity_id": "cover.garage_door",
                    # new_state is missing
                },
            },
        })
        await manager.handle_message(message)
        # Should not add to cache because new_state is None
        assert "cover.garage_door" not in manager.state_cache

    async def test_callback_error_does_not_crash_others(self, manager):
        """If one subscriber callback fails, others should still be called."""
        failing_callback = AsyncMock(side_effect=RuntimeError("boom"))
        good_callback = AsyncMock()

        manager.client_subscriptions["sensor.test"].add(failing_callback)
        manager.client_subscriptions["sensor.test"].add(good_callback)

        message = json.dumps({
            "type": "event",
            "event": {
                "event_type": "state_changed",
                "data": {
                    "entity_id": "sensor.test",
                    "new_state": {
                        "state": "on",
                        "attributes": {},
                    },
                },
            },
        })

        await manager.handle_message(message)

        failing_callback.assert_called_once()
        good_callback.assert_called_once()


# ===========================================================================
# subscribe_client() / unsubscribe_client()
# ===========================================================================

class TestClientSubscriptions:
    def test_subscribe_adds_callback(self, manager):
        callback = AsyncMock()
        manager.subscribe_client("cover.garage_door", callback)

        assert callback in manager.client_subscriptions["cover.garage_door"]

    async def test_subscribe_sends_cached_state(self, manager):
        """If state is already cached, callback should be scheduled immediately."""
        manager.state_cache["cover.garage_door"] = {
            "state": "closed",
            "attributes": {"friendly_name": "Garage"},
        }

        callback = AsyncMock()
        manager.subscribe_client("cover.garage_door", callback)

        # Let the scheduled task run
        await asyncio.sleep(0)

        assert callback in manager.client_subscriptions["cover.garage_door"]
        callback.assert_called_once()
        update = callback.call_args[0][0]
        assert update["type"] == "state_response"
        assert update["state"] == "closed"

    def test_unsubscribe_removes_callback(self, manager):
        callback = AsyncMock()
        manager.client_subscriptions["cover.garage_door"].add(callback)

        manager.unsubscribe_client("cover.garage_door", callback)

        assert callback not in manager.client_subscriptions.get("cover.garage_door", set())

    def test_unsubscribe_cleans_up_empty_set(self, manager):
        callback = AsyncMock()
        manager.client_subscriptions["cover.garage_door"].add(callback)

        manager.unsubscribe_client("cover.garage_door", callback)

        assert "cover.garage_door" not in manager.client_subscriptions

    def test_unsubscribe_nonexistent_entity(self, manager):
        """Unsubscribing from an entity that was never subscribed should not crash."""
        callback = AsyncMock()
        # Should not raise
        manager.unsubscribe_client("sensor.nonexistent", callback)

    def test_multiple_subscribers(self, manager):
        cb1 = AsyncMock()
        cb2 = AsyncMock()

        manager.subscribe_client("sensor.test", cb1)
        manager.subscribe_client("sensor.test", cb2)

        assert len(manager.client_subscriptions["sensor.test"]) == 2

        manager.unsubscribe_client("sensor.test", cb1)
        assert len(manager.client_subscriptions["sensor.test"]) == 1
        assert cb2 in manager.client_subscriptions["sensor.test"]


# ===========================================================================
# get_state()
# ===========================================================================

class TestGetState:
    def test_returns_cached_state(self, manager):
        manager.state_cache["sensor.test"] = {
            "state": "42",
            "attributes": {"unit": "°C"},
            "last_update": 1234.0,
        }
        result = manager.get_state("sensor.test")
        assert result["state"] == "42"
        assert result["attributes"]["unit"] == "°C"

    def test_returns_none_for_unknown(self, manager):
        assert manager.get_state("sensor.nonexistent") is None


# ===========================================================================
# stop()
# ===========================================================================

class TestStop:
    async def test_stop_cancels_tasks(self, manager, mock_ws):
        """stop() should cancel message handler and reconnect tasks."""
        manager._running = True
        manager.ha_websocket = mock_ws

        # Create mock tasks
        manager._message_handler_task = MagicMock()
        manager._reconnect_task = MagicMock()

        await manager.stop()

        assert manager._running is False
        assert manager.connected is False
        assert manager.authenticated is False
        manager._message_handler_task.cancel.assert_called_once()
        manager._reconnect_task.cancel.assert_called_once()
        mock_ws.close.assert_called_once()

    async def test_stop_handles_close_error(self, manager):
        """stop() should not crash if ws.close() raises."""
        ws = AsyncMock()
        ws.close = AsyncMock(side_effect=RuntimeError("already closed"))
        manager.ha_websocket = ws
        manager._running = True

        # Should not raise
        await manager.stop()
        assert manager.connected is False

    async def test_stop_without_tasks(self, manager):
        """stop() should work even if no tasks were ever started."""
        await manager.stop()
        assert manager._running is False


# ===========================================================================
# subscribe_to_entities()
# ===========================================================================

class TestSubscribeToEntities:
    async def test_sends_subscribe_message(self, manager, mock_ws):
        manager.ha_websocket = mock_ws
        manager.connected = True

        with patch.object(manager, "_fetch_initial_states_via_rest", new_callable=AsyncMock):
            await manager.subscribe_to_entities()

        # Verify a subscribe_events message was sent
        assert mock_ws.send.called
        sent_data = json.loads(mock_ws.send.call_args[0][0])
        assert sent_data["type"] == "subscribe_events"
        assert sent_data["event_type"] == "state_changed"
        assert "id" in sent_data

    async def test_no_entities_no_subscription(self, minimal_config, monkeypatch):
        monkeypatch.setenv("SUPERVISOR_TOKEN", "tok")
        mgr = WebSocketStateManager(minimal_config)
        mgr.ha_websocket = AsyncMock()
        mgr.connected = True

        await mgr.subscribe_to_entities()

        # send should NOT be called (no entities)
        mgr.ha_websocket.send.assert_not_called()

    async def test_not_connected_skips(self, manager):
        """Should skip if not connected."""
        manager.ha_websocket = None
        manager.connected = False

        # Should not raise
        await manager.subscribe_to_entities()


# ===========================================================================
# _fetch_initial_states_via_rest()
# ===========================================================================

class TestFetchInitialStates:
    async def test_fetches_and_caches_states(self, manager):
        """Should fetch states via REST and populate the cache."""
        mock_response = MagicMock()
        mock_response.status_code = 200
        mock_response.json.return_value = {
            "state": "closed",
            "attributes": {"friendly_name": "Garage Door"},
        }

        mock_client = AsyncMock()
        mock_client.get = AsyncMock(return_value=mock_response)
        mock_client.__aenter__ = AsyncMock(return_value=mock_client)
        mock_client.__aexit__ = AsyncMock(return_value=False)

        with patch("websocket_manager.httpx.AsyncClient", return_value=mock_client):
            await manager._fetch_initial_states_via_rest({"cover.garage_door"})

        assert "cover.garage_door" in manager.state_cache
        assert manager.state_cache["cover.garage_door"]["state"] == "closed"

    async def test_handles_failed_response(self, manager):
        """Non-200 responses should not crash, just skip that entity."""
        mock_response = MagicMock()
        mock_response.status_code = 404
        mock_response.text = "Not found"

        mock_client = AsyncMock()
        mock_client.get = AsyncMock(return_value=mock_response)
        mock_client.__aenter__ = AsyncMock(return_value=mock_client)
        mock_client.__aexit__ = AsyncMock(return_value=False)

        with patch("websocket_manager.httpx.AsyncClient", return_value=mock_client):
            await manager._fetch_initial_states_via_rest({"cover.nonexistent"})

        assert "cover.nonexistent" not in manager.state_cache

    async def test_handles_exception_per_entity(self, manager):
        """If one entity fetch throws, others should still work."""
        ok_resp = MagicMock()
        ok_resp.status_code = 200
        ok_resp.json.return_value = {"state": "on", "attributes": {}}

        err = ConnectionError("timeout")

        mock_client = AsyncMock()
        # gather returns list of responses including exceptions
        mock_client.get = AsyncMock(side_effect=[err, ok_resp])
        mock_client.__aenter__ = AsyncMock(return_value=mock_client)
        mock_client.__aexit__ = AsyncMock(return_value=False)

        entities = {"sensor.fail", "sensor.ok"}

        with patch("websocket_manager.httpx.AsyncClient", return_value=mock_client):
            # The implementation uses asyncio.gather(*tasks, return_exceptions=True)
            # so we need to patch at the gather level or let it handle naturally
            # Since gather is called on client.get results, the side_effect on get
            # will naturally produce the results
            await manager._fetch_initial_states_via_rest(entities)

        # Should not crash; at least some entities might be cached depending on order

    async def test_empty_entities_does_nothing(self, manager):
        """Empty set should return immediately."""
        await manager._fetch_initial_states_via_rest(set())
        assert manager.state_cache == {}


# ===========================================================================
# Integration-level: start() / connect → subscribe flow
# ===========================================================================

class TestStartFlow:
    async def test_start_connects_and_subscribes(self, manager, mock_ws):
        with patch("websocket_manager.websockets.connect", new_callable=AsyncMock, return_value=mock_ws), \
             patch.object(manager, "_fetch_initial_states_via_rest", new_callable=AsyncMock), \
             patch("asyncio.create_task") as mock_create_task:

            mock_task = MagicMock()
            mock_create_task.return_value = mock_task

            await manager.start()

        assert manager._running is True
        assert manager.authenticated is True
        # create_task called for message_handler_loop and reconnect_loop
        assert mock_create_task.call_count >= 2

    async def test_start_when_already_running(self, manager):
        """Starting an already-running manager should be a no-op."""
        manager._running = True
        # Should not raise or restart
        await manager.start()

    async def test_start_failed_connection_still_starts_reconnect(self, manager):
        """If initial connection fails, reconnect loop should still be started."""
        with patch("websocket_manager.websockets.connect", new_callable=AsyncMock, side_effect=ConnectionRefusedError), \
             patch("asyncio.create_task") as mock_create_task:

            mock_task = MagicMock()
            mock_create_task.return_value = mock_task

            await manager.start()

        assert manager._running is True
        # reconnect_loop should have been scheduled
        assert mock_create_task.called


# ===========================================================================
# Constructor
# ===========================================================================

class TestConstructor:
    def test_uses_supervisor_token(self, full_config, monkeypatch):
        monkeypatch.setenv("SUPERVISOR_TOKEN", "sv-token")
        monkeypatch.delenv("HASS_ACCESS_TOKEN", raising=False)
        mgr = WebSocketStateManager(full_config)
        assert mgr.auth_token == "sv-token"

    def test_falls_back_to_hass_access_token(self, full_config, monkeypatch):
        monkeypatch.delenv("SUPERVISOR_TOKEN", raising=False)
        monkeypatch.setenv("HASS_ACCESS_TOKEN", "hass-token")
        mgr = WebSocketStateManager(full_config)
        assert mgr.auth_token == "hass-token"

    def test_empty_token_when_none_set(self, full_config, monkeypatch):
        monkeypatch.delenv("SUPERVISOR_TOKEN", raising=False)
        monkeypatch.delenv("HASS_ACCESS_TOKEN", raising=False)
        mgr = WebSocketStateManager(full_config)
        assert mgr.auth_token == ""

    def test_default_ws_url(self, monkeypatch):
        monkeypatch.setenv("SUPERVISOR_TOKEN", "tok")
        mgr = WebSocketStateManager({})
        assert mgr.ha_ws_url == "ws://supervisor/core/websocket"

    def test_custom_ws_url(self, monkeypatch):
        monkeypatch.setenv("SUPERVISOR_TOKEN", "tok")
        mgr = WebSocketStateManager({"HASS_WEBSOCKET_URL": "ws://custom:8123/ws"})
        assert mgr.ha_ws_url == "ws://custom:8123/ws"
