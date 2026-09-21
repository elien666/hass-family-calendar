"""Tests for the WebRTC signaling relay: WebSocketStateManager.send_command()
and the webrtc_* messages of the client WebSocket endpoint."""
import asyncio
import contextlib
import json
from unittest.mock import patch, AsyncMock, MagicMock

import pytest

from websocket_manager import WebSocketStateManager, HACommandError


# ---------------------------------------------------------------------------
# WebSocketStateManager.send_command / events / unsubscribe
# ---------------------------------------------------------------------------

@pytest.fixture
def connected_manager(monkeypatch):
    monkeypatch.setenv("SUPERVISOR_TOKEN", "tok")
    mgr = WebSocketStateManager({"ENABLE_DOORBELL": False})
    mgr.ha_websocket = AsyncMock()
    mgr.ha_websocket.send = AsyncMock()
    mgr.connected = True
    mgr.authenticated = True
    return mgr


class TestSendCommand:
    async def test_resolves_with_result_payload(self, connected_manager):
        mgr = connected_manager
        task = asyncio.create_task(mgr.send_command({"type": "camera/webrtc/get_client_config", "entity_id": "camera.x"}))
        await asyncio.sleep(0)
        sent = json.loads(mgr.ha_websocket.send.call_args[0][0])
        assert sent["type"] == "camera/webrtc/get_client_config"
        assert isinstance(sent["id"], int)

        await mgr.handle_message(json.dumps({
            "id": sent["id"], "type": "result", "success": True,
            "result": {"configuration": {"iceServers": []}},
        }))
        msg_id, result = await task
        assert msg_id == sent["id"]
        assert result == {"configuration": {"iceServers": []}}
        assert msg_id not in mgr._pending_results

    async def test_raises_on_ha_error(self, connected_manager):
        mgr = connected_manager
        task = asyncio.create_task(mgr.send_command({"type": "camera/webrtc/offer", "entity_id": "camera.x", "offer": "sdp"}))
        await asyncio.sleep(0)
        sent = json.loads(mgr.ha_websocket.send.call_args[0][0])
        await mgr.handle_message(json.dumps({
            "id": sent["id"], "type": "result", "success": False,
            "error": {"code": "webrtc_offer_failed", "message": "no provider"},
        }))
        with pytest.raises(HACommandError) as exc:
            await task
        assert exc.value.code == "webrtc_offer_failed"
        assert "no provider" in exc.value.message

    async def test_times_out(self, connected_manager):
        with pytest.raises(HACommandError) as exc:
            await connected_manager.send_command({"type": "ping"}, timeout=0.01)
        assert exc.value.code == "timeout"
        assert connected_manager._pending_results == {}

    async def test_rejects_when_not_connected(self, monkeypatch):
        monkeypatch.setenv("SUPERVISOR_TOKEN", "tok")
        mgr = WebSocketStateManager({})
        with pytest.raises(HACommandError) as exc:
            await mgr.send_command({"type": "ping"})
        assert exc.value.code == "not_connected"

    async def test_ids_are_strictly_increasing_and_shared_with_subscriptions(self, connected_manager):
        mgr = connected_manager
        first = mgr._next_message_id()
        second = mgr._next_message_id()
        assert second == first + 1


class TestEventDispatch:
    async def test_events_go_to_registered_handler(self, connected_manager):
        mgr = connected_manager
        received = []

        async def handler(event):
            received.append(event)

        task = asyncio.create_task(mgr.send_command(
            {"type": "camera/webrtc/offer", "entity_id": "camera.x", "offer": "sdp"},
            event_handler=handler,
        ))
        await asyncio.sleep(0)
        msg_id = json.loads(mgr.ha_websocket.send.call_args[0][0])["id"]
        await mgr.handle_message(json.dumps({"id": msg_id, "type": "result", "success": True, "result": None}))
        await task

        await mgr.handle_message(json.dumps({"id": msg_id, "type": "event", "event": {"type": "session", "session_id": "abc"}}))
        await mgr.handle_message(json.dumps({"id": msg_id, "type": "event", "event": {"type": "answer", "answer": "v=0"}}))
        # Unrelated id → ignored
        await mgr.handle_message(json.dumps({"id": 9999, "type": "event", "event": {"type": "answer", "answer": "nope"}}))

        assert received == [
            {"type": "session", "session_id": "abc"},
            {"type": "answer", "answer": "v=0"},
        ]

    async def test_state_changed_events_still_update_cache(self, connected_manager):
        mgr = connected_manager
        await mgr.handle_message(json.dumps({
            "id": 1, "type": "event",
            "event": {"event_type": "state_changed", "data": {
                "entity_id": "binary_sensor.doorbell",
                "new_state": {"state": "on", "attributes": {}},
            }},
        }))
        assert mgr.get_state("binary_sensor.doorbell")["state"] == "on"

    async def test_handler_removed_when_command_fails(self, connected_manager):
        mgr = connected_manager

        async def handler(event):
            pass

        task = asyncio.create_task(mgr.send_command({"type": "camera/webrtc/offer"}, event_handler=handler))
        await asyncio.sleep(0)
        msg_id = json.loads(mgr.ha_websocket.send.call_args[0][0])["id"]
        await mgr.handle_message(json.dumps({"id": msg_id, "type": "result", "success": False, "error": {"code": "x", "message": "y"}}))
        with pytest.raises(HACommandError):
            await task
        assert msg_id not in mgr._event_handlers


class TestUnsubscribeAndConnectionLoss:
    async def test_unsubscribe_sends_unsubscribe_events(self, connected_manager):
        mgr = connected_manager

        async def handler(event):
            pass

        mgr._event_handlers[42] = handler
        task = asyncio.create_task(mgr.unsubscribe(42))
        await asyncio.sleep(0)
        sent = json.loads(mgr.ha_websocket.send.call_args[0][0])
        assert sent["type"] == "unsubscribe_events"
        assert sent["subscription"] == 42
        await mgr.handle_message(json.dumps({"id": sent["id"], "type": "result", "success": True, "result": None}))
        await task
        assert 42 not in mgr._event_handlers

    async def test_connection_loss_fails_pending_and_notifies_handlers(self, connected_manager):
        mgr = connected_manager
        received = []

        async def handler(event):
            received.append(event)

        mgr._event_handlers[7] = handler
        task = asyncio.create_task(mgr.send_command({"type": "ping"}))
        await asyncio.sleep(0)

        await mgr._fail_pending("connection_lost", "gone")

        with pytest.raises(HACommandError) as exc:
            await task
        assert exc.value.code == "connection_lost"
        assert received == [{"type": "error", "code": "connection_lost", "message": "gone"}]
        assert mgr._event_handlers == {}


# ---------------------------------------------------------------------------
# Client WebSocket relay (/api/websocket)
# ---------------------------------------------------------------------------

@pytest.fixture
def doorbell_config():
    return {
        "ENABLE_DOORBELL": True,
        "ENTITY_DOORBELL": "binary_sensor.doorbell",
        "DOORBELL_CAMERAS": [
            {"entity_id": "camera.front", "orientation": "portrait"},
            {"entity_id": "camera.yard"},
        ],
        "DOORBELL_STREAM_MODE": "webrtc",
        "HASS_HOST": "http://homeassistant.local:8123",
        "HASS_API_URL": "http://homeassistant.local:8123/api",
        "SUPERVISOR_TOKEN": "",
        "HASS_ACCESS_TOKEN": "tok",
    }


def _make_fake_manager():
    """Fake WebSocketStateManager: the app's startup hook awaits start(), so the
    patched class must return an object with async start/stop."""
    fake_manager = MagicMock()
    fake_manager.start = AsyncMock()
    fake_manager.stop = AsyncMock()
    fake_manager.send_command = AsyncMock()
    fake_manager.unsubscribe = AsyncMock()
    fake_manager.get_state = MagicMock(return_value=None)
    return fake_manager


def _wait_until(predicate, timeout=2.0):
    import time
    deadline = time.time() + timeout
    while time.time() < deadline:
        if predicate():
            return True
        time.sleep(0.01)
    return predicate()


@contextlib.contextmanager
def _relay_client(config):
    fake_manager = _make_fake_manager()
    with patch("backend.config.get_config", return_value=config), \
         patch("backend.config.clear_cache"), \
         patch("backend.main.WebSocketStateManager", return_value=fake_manager):
        import backend.main as main_module
        from starlette.testclient import TestClient

        with patch.object(main_module, "get_config", return_value=config):
            with TestClient(main_module.app, raise_server_exceptions=False) as tc:
                # startup installs the manager from a background task
                assert _wait_until(lambda: main_module.websocket_manager is fake_manager)
                yield tc, fake_manager


@pytest.fixture
def relay(doorbell_config):
    """TestClient + a fake websocket_manager whose send_command we control."""
    with _relay_client(doorbell_config) as pair:
        yield pair


class TestWebRtcRelay:
    def test_client_config_is_forwarded(self, relay):
        client, manager = relay
        manager.send_command.return_value = (5, {"configuration": {"iceServers": [{"urls": "stun:x"}]}, "getCandidatesUpfront": True})
        with client.websocket_connect("/api/websocket") as ws:
            ws.send_json({"type": "webrtc_client_config", "entity_id": "camera.front", "request_id": "r1"})
            reply = ws.receive_json()
        assert reply == {
            "type": "webrtc_client_config", "request_id": "r1", "entity_id": "camera.front",
            "configuration": {"iceServers": [{"urls": "stun:x"}]}, "get_candidates_upfront": True,
        }
        manager.send_command.assert_awaited_once_with({"type": "camera/webrtc/get_client_config", "entity_id": "camera.front"})

    def test_rejects_unconfigured_camera(self, relay):
        client, manager = relay
        with client.websocket_connect("/api/websocket") as ws:
            ws.send_json({"type": "webrtc_offer", "entity_id": "camera.neighbour", "request_id": "r1", "offer": "v=0"})
            reply = ws.receive_json()
        assert reply["type"] == "webrtc_error"
        assert reply["code"] == "not_allowed"
        manager.send_command.assert_not_awaited()

    def test_rejects_invalid_entity_and_missing_request_id(self, relay):
        client, _ = relay
        with client.websocket_connect("/api/websocket") as ws:
            ws.send_json({"type": "webrtc_offer", "entity_id": "camera.front", "offer": "v=0"})
            assert ws.receive_json()["type"] == "error"
            ws.send_json({"type": "webrtc_offer", "entity_id": "not-an-entity", "request_id": "r2", "offer": "v=0"})
            reply = ws.receive_json()
        assert reply == {"type": "webrtc_error", "request_id": "r2", "code": "invalid_entity", "message": "Missing or invalid entity_id"}

    def test_rejects_empty_offer(self, relay):
        client, _ = relay
        with client.websocket_connect("/api/websocket") as ws:
            ws.send_json({"type": "webrtc_offer", "entity_id": "camera.front", "request_id": "r1", "offer": "  "})
            reply = ws.receive_json()
        assert reply["code"] == "invalid_offer"

    def test_offer_events_are_relayed_and_session_closed(self, relay):
        client, manager = relay
        captured = {}

        async def fake_send_command(message, event_handler=None, timeout=15.0):
            captured["message"] = message
            captured["handler"] = event_handler
            return (11, None)

        manager.send_command.side_effect = fake_send_command

        with client.websocket_connect("/api/websocket") as ws:
            ws.send_json({"type": "webrtc_offer", "entity_id": "camera.front", "request_id": "r1", "offer": "v=0 offer"})
            assert _wait_until(lambda: "handler" in captured)
            assert captured["message"] == {"type": "camera/webrtc/offer", "entity_id": "camera.front", "offer": "v=0 offer"}

            # Simulate HA pushing events for the offer (handler must run on the app loop)
            client.portal.call(captured["handler"], {"type": "session", "session_id": "s1"})
            client.portal.call(captured["handler"], {"type": "answer", "answer": "v=0 answer"})

            ev1 = ws.receive_json()
            ev2 = ws.receive_json()
            assert ev1 == {"type": "webrtc_event", "request_id": "r1", "entity_id": "camera.front", "event": {"type": "session", "session_id": "s1"}}
            assert ev2["event"] == {"type": "answer", "answer": "v=0 answer"}

            # Candidate is forwarded with session id
            manager.send_command.side_effect = None
            manager.send_command.return_value = (12, None)
            ws.send_json({"type": "webrtc_candidate", "entity_id": "camera.front", "request_id": "r1",
                          "session_id": "s1", "candidate": {"candidate": "candidate:1 1 udp ...", "sdpMLineIndex": 0}})
            assert _wait_until(lambda: manager.send_command.await_count >= 2)
            manager.send_command.assert_awaited_with({
                "type": "camera/webrtc/candidate", "entity_id": "camera.front",
                "session_id": "s1", "candidate": {"candidate": "candidate:1 1 udp ...", "sdpMLineIndex": 0},
            })

            ws.send_json({"type": "webrtc_close", "request_id": "r1"})
            assert _wait_until(lambda: manager.unsubscribe.await_count >= 1)
        manager.unsubscribe.assert_awaited_with(11)

    def test_invalid_candidate_is_rejected(self, relay):
        client, manager = relay
        with client.websocket_connect("/api/websocket") as ws:
            ws.send_json({"type": "webrtc_candidate", "entity_id": "camera.front", "request_id": "r1",
                          "session_id": "s1", "candidate": "candidate:1 1 udp ..."})
            reply = ws.receive_json()
        assert reply["code"] == "invalid_candidate"
        manager.send_command.assert_not_awaited()

    def test_sessions_closed_on_disconnect(self, relay):
        client, manager = relay
        manager.send_command.return_value = (21, None)
        with client.websocket_connect("/api/websocket") as ws:
            ws.send_json({"type": "webrtc_offer", "entity_id": "camera.yard", "request_id": "r9", "offer": "v=0"})
            assert _wait_until(lambda: manager.send_command.await_count >= 1)
        assert _wait_until(lambda: manager.unsubscribe.await_count >= 1)
        manager.unsubscribe.assert_awaited_with(21)

    def test_ha_error_is_reported_to_client(self, relay):
        client, manager = relay
        from backend.websocket_manager import HACommandError as RelayHACommandError
        manager.send_command.side_effect = RelayHACommandError("webrtc_offer_failed", "Camera does not support WebRTC")
        with client.websocket_connect("/api/websocket") as ws:
            ws.send_json({"type": "webrtc_offer", "entity_id": "camera.front", "request_id": "r1", "offer": "v=0"})
            reply = ws.receive_json()
        assert reply == {"type": "webrtc_error", "request_id": "r1", "code": "webrtc_offer_failed", "message": "Camera does not support WebRTC"}

    def test_relay_disabled_when_doorbell_off(self, doorbell_config):
        doorbell_config["ENABLE_DOORBELL"] = False
        with _relay_client(doorbell_config) as (client, manager):
            with client.websocket_connect("/api/websocket") as ws:
                ws.send_json({"type": "webrtc_client_config", "entity_id": "camera.front", "request_id": "r1"})
                reply = ws.receive_json()
        assert reply["code"] == "not_allowed"
        manager.send_command.assert_not_awaited()
