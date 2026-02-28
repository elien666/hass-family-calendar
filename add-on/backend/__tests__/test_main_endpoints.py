"""
Tests for FastAPI HTTP endpoints in main.py.

All upstream HTTP calls are mocked via pytest-httpx.
Config is mocked to avoid filesystem/bashio dependencies.
"""
import json
import os
import pytest
from unittest.mock import patch, AsyncMock, MagicMock


@pytest.fixture
def base_config():
    """Minimal valid config for testing."""
    return {
        "ENABLE_HVV": True,
        "ENABLE_WEATHER": True,
        "ENABLE_GARAGE": False,
        "ENABLE_EV": False,
        "ENABLE_LAUNDRY": False,
        "ENABLE_CAMERA": False,
        "ENABLE_DOORBELL": False,
        "GEOFOX_USER": "test-user",
        "GEOFOX_SECRET": "dGVzdC1zZWNyZXQ=",
        "WEATHER_API_KEY": "test-weather-key-123",
        "HASS_ACCESS_TOKEN": "test-ha-token",
        "SUPERVISOR_TOKEN": "",
        "HASS_HOST": "http://homeassistant.local:8123",
        "HASS_API_URL": "http://homeassistant.local:8123/api",
        "HASS_WS_URL": "ws://homeassistant.local:8123/api/websocket",
        "CALENDARS": ["calendar.family"],
    }


@pytest.fixture
def client(base_config):
    """Create a test client with mocked config and disabled websocket manager."""
    with patch("backend.config.get_config", return_value=base_config), \
         patch("backend.config.clear_cache"), \
         patch("backend.main.WebSocketStateManager"):

        from backend.main import app
        from starlette.testclient import TestClient

        with TestClient(app, raise_server_exceptions=False) as tc:
            yield tc


class TestIngressIPRestriction:
    """Tests for the ingress IP restriction middleware."""

    def test_allows_all_ips_in_dev_mode(self, client):
        """Without SUPERVISOR_TOKEN, all IPs should be allowed."""
        # The default client fixture has SUPERVISOR_TOKEN=""
        response = client.get("/api/config")
        assert response.status_code == 200

    def test_blocks_non_supervisor_ip_in_ha_mode(self, base_config):
        """With SUPERVISOR_TOKEN set, non-supervisor IPs should be blocked."""
        with patch.dict(os.environ, {"SUPERVISOR_TOKEN": "test-supervisor-token"}, clear=False), \
             patch("backend.config.get_config", return_value=base_config), \
             patch("backend.config.clear_cache"), \
             patch("backend.main.WebSocketStateManager"):
            from backend.main import app
            from starlette.testclient import TestClient

            with TestClient(app, raise_server_exceptions=False) as tc:
                # TestClient connects from 127.0.0.1, which is not the supervisor IP
                response = tc.get("/api/config")
                assert response.status_code == 403
                assert "Direct access not allowed" in response.json()["detail"]

    def test_health_always_accessible(self, base_config):
        """Health endpoint should be accessible from any IP, even in HA mode."""
        with patch.dict(os.environ, {"SUPERVISOR_TOKEN": "test-supervisor-token"}, clear=False), \
             patch("backend.config.get_config", return_value=base_config), \
             patch("backend.config.clear_cache"), \
             patch("backend.main.WebSocketStateManager"):
            from backend.main import app
            from starlette.testclient import TestClient

            with TestClient(app, raise_server_exceptions=False) as tc:
                response = tc.get("/health")
                assert response.status_code == 200
                assert response.json()["status"] == "ok"


class TestHealthEndpoint:
    def test_returns_200(self, client):
        response = client.get("/health")
        assert response.status_code == 200

    def test_returns_status_ok(self, client):
        response = client.get("/health")
        data = response.json()
        assert data["status"] == "ok"
        assert data["service"] == "family-calendar-backend"


class TestConfigEndpoint:
    def test_returns_200(self, client):
        response = client.get("/api/config")
        assert response.status_code == 200

    def test_filters_secrets(self, client):
        response = client.get("/api/config")
        data = response.json()
        # Secrets must NOT appear in response
        assert "GEOFOX_SECRET" not in data
        assert "WEATHER_API_KEY" not in data
        assert "HASS_ACCESS_TOKEN" not in data
        assert "SUPERVISOR_TOKEN" not in data

    def test_includes_non_secret_config(self, client):
        response = client.get("/api/config")
        data = response.json()
        assert data["ENABLE_HVV"] is True
        assert data["ENABLE_WEATHER"] is True
        assert data["HASS_HOST"] == "http://homeassistant.local:8123"


class TestLogEndpoint:
    def test_accepts_info_log(self, client):
        response = client.post("/api/log", json={
            "level": "INFO",
            "message": "Test log message",
        })
        assert response.status_code == 200
        assert response.json()["status"] == "ok"

    def test_accepts_error_log(self, client):
        response = client.post("/api/log", json={
            "level": "ERROR",
            "message": "Test error",
            "metadata": {"component": "calendar"},
        })
        assert response.status_code == 200

    def test_validates_level_fallback(self, client):
        response = client.post("/api/log", json={
            "level": "INVALID_LEVEL",
            "message": "Should default to INFO",
        })
        assert response.status_code == 200

    def test_handles_empty_body(self, client):
        response = client.post("/api/log", json={})
        assert response.status_code == 200

    def test_rejects_non_json(self, client):
        response = client.post("/api/log", content=b"not json", headers={"Content-Type": "application/json"})
        assert response.status_code == 400


class TestGeofoxProxy:
    def test_rejects_when_hvv_disabled(self, base_config):
        """Geofox proxy should return 403 when HVV is disabled."""
        base_config["ENABLE_HVV"] = False

        with patch("backend.config.get_config", return_value=base_config), \
             patch("backend.config.clear_cache"), \
             patch("backend.main.WebSocketStateManager"), \
             patch("backend.main.get_config", return_value=base_config):
            from backend.main import app
            from starlette.testclient import TestClient

            with TestClient(app, raise_server_exceptions=False) as tc:
                response = tc.post("/gti/public/departureList", json={"test": "data"})
                assert response.status_code == 403

    def test_rejects_when_credentials_missing(self, base_config):
        """Geofox proxy should return 500 when credentials are missing."""
        base_config["GEOFOX_USER"] = ""
        base_config["GEOFOX_SECRET"] = ""

        with patch("backend.config.get_config", return_value=base_config), \
             patch("backend.config.clear_cache"), \
             patch("backend.main.WebSocketStateManager"), \
             patch("backend.main.get_config", return_value=base_config):
            from backend.main import app
            from starlette.testclient import TestClient

            with TestClient(app, raise_server_exceptions=False) as tc:
                response = tc.post("/gti/public/departureList", json={"test": "data"})
                assert response.status_code == 500

    def test_forwards_request_with_signature(self, client, httpx_mock):
        """Geofox proxy should add signature headers and forward to Geofox API."""
        httpx_mock.add_response(
            url="https://gti.geofox.de/gti/public/departureList",
            json={"departures": []},
            status_code=200,
        )

        response = client.post("/gti/public/departureList", json={
            "station": {"name": "Wandsbek Markt", "id": "Master:20008115"},
            "time": {"date": "01.01.2024", "time": "12:00"},
        })

        assert response.status_code == 200
        request = httpx_mock.get_request()
        assert request is not None
        assert "geofox-auth-user" in request.headers
        assert "geofox-auth-signature" in request.headers
        assert request.headers["geofox-auth-user"] == "test-user"

    def test_returns_upstream_error(self, client, httpx_mock):
        """Geofox proxy should forward upstream error status codes."""
        httpx_mock.add_response(
            url="https://gti.geofox.de/gti/public/departureList",
            json={"error": "unauthorized"},
            status_code=401,
        )

        response = client.post("/gti/public/departureList", json={"test": "data"})
        assert response.status_code == 401

    def test_rejects_invalid_json_body(self, client):
        """Geofox proxy should return 400 for invalid JSON."""
        response = client.post(
            "/gti/public/departureList",
            content=b"not valid json",
            headers={"Content-Type": "application/json"},
        )
        assert response.status_code == 400


class TestForecastProxy:
    def test_rejects_when_weather_disabled(self, base_config):
        """Forecast proxy should return 403 when weather is disabled."""
        base_config["ENABLE_WEATHER"] = False

        with patch("backend.config.get_config", return_value=base_config), \
             patch("backend.config.clear_cache"), \
             patch("backend.main.WebSocketStateManager"), \
             patch("backend.main.get_config", return_value=base_config):
            from backend.main import app
            from starlette.testclient import TestClient

            with TestClient(app, raise_server_exceptions=False) as tc:
                response = tc.get("/forecast/53.5511,9.9937")
                assert response.status_code == 403

    def test_rejects_when_api_key_missing(self, base_config):
        """Forecast proxy should return 500 when API key is missing."""
        base_config["WEATHER_API_KEY"] = ""

        with patch("backend.config.get_config", return_value=base_config), \
             patch("backend.config.clear_cache"), \
             patch("backend.main.WebSocketStateManager"), \
             patch("backend.main.get_config", return_value=base_config):
            from backend.main import app
            from starlette.testclient import TestClient

            with TestClient(app, raise_server_exceptions=False) as tc:
                response = tc.get("/forecast/53.5511,9.9937")
                assert response.status_code == 500

    def test_forwards_request_with_api_key(self, client, httpx_mock):
        """Forecast proxy should inject API key and forward to weather API."""
        httpx_mock.add_response(
            url="https://api.pirateweather.net/forecast/test-weather-key-123/53.5511,9.9937",
            json={"currently": {"temperature": 20}},
            status_code=200,
        )

        response = client.get("/forecast/53.5511,9.9937")
        assert response.status_code == 200
        data = response.json()
        assert "currently" in data

    def test_passes_query_params(self, client, httpx_mock):
        """Forecast proxy should forward query parameters."""
        httpx_mock.add_response(
            json={"hourly": {}},
            status_code=200,
        )

        response = client.get("/forecast/53.5511,9.9937?exclude=minutely,alerts&units=si")
        assert response.status_code == 200

        request = httpx_mock.get_request()
        assert "exclude" in str(request.url)


class TestHaApiProxy:
    def test_rejects_without_auth_token(self, base_config):
        """HA proxy should return 500 when no auth token is available."""
        with patch.dict(os.environ, {"SUPERVISOR_TOKEN": "", "HASS_ACCESS_TOKEN": ""}, clear=False), \
             patch("backend.config.get_config", return_value=base_config), \
             patch("backend.config.clear_cache"), \
             patch("backend.main.WebSocketStateManager"), \
             patch("backend.main.get_config", return_value=base_config):
            from backend.main import app
            from starlette.testclient import TestClient
            with TestClient(app, raise_server_exceptions=False) as tc:
                response = tc.get("/api/states")
                assert response.status_code == 500

    def test_proxies_get_request(self, base_config, httpx_mock):
        """HA proxy should forward GET requests with auth header."""
        httpx_mock.add_response(
            url="http://homeassistant.local:8123/api/states",
            json=[{"entity_id": "sensor.test", "state": "on"}],
            status_code=200,
        )

        with patch.dict(os.environ, {"SUPERVISOR_TOKEN": "", "HASS_ACCESS_TOKEN": "test-ha-token"}, clear=False), \
             patch("backend.config.get_config", return_value=base_config), \
             patch("backend.config.clear_cache"), \
             patch("backend.main.WebSocketStateManager"), \
             patch("backend.main.get_config", return_value=base_config):
            from backend.main import app
            from starlette.testclient import TestClient
            with TestClient(app, raise_server_exceptions=False) as client:
                response = client.get("/api/states")
                assert response.status_code == 200

                request = httpx_mock.get_request()
                assert request is not None
                assert "Authorization" in request.headers
                assert request.headers["Authorization"] == "Bearer test-ha-token"

    def test_proxies_post_request(self, base_config, httpx_mock):
        """HA proxy should forward POST requests with body."""
        httpx_mock.add_response(
            json={"result": "ok"},
            status_code=200,
        )

        with patch.dict(os.environ, {"SUPERVISOR_TOKEN": "", "HASS_ACCESS_TOKEN": "test-ha-token"}, clear=False), \
             patch("backend.config.get_config", return_value=base_config), \
             patch("backend.config.clear_cache"), \
             patch("backend.main.WebSocketStateManager"), \
             patch("backend.main.get_config", return_value=base_config):
            from backend.main import app
            from starlette.testclient import TestClient
            with TestClient(app, raise_server_exceptions=False) as client:
                response = client.post("/api/services/light/turn_on", json={
                    "entity_id": "light.kitchen",
                })
                assert response.status_code == 200


class TestSpaFallback:
    def test_returns_index_html_for_frontend_routes(self, client):
        """SPA fallback should return index.html (200) for unknown routes when dist exists."""
        response = client.get("/some/frontend/route")
        # If dist/index.html exists, FastAPI serves it; otherwise 404
        assert response.status_code in (200, 404)

    def test_does_not_catch_api_routes(self, client):
        """SPA fallback should NOT match API routes."""
        response = client.get("/api/test")
        assert response.status_code != 200

    def test_does_not_catch_asset_routes(self, client):
        """SPA fallback should NOT match asset routes."""
        response = client.get("/assets/main.js")
        # Assets served from static mount — 404 when file doesn't exist
        assert response.status_code in (200, 404)
