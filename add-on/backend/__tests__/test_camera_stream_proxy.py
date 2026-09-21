"""Tests for the MJPEG camera stream proxy (/api/camera_proxy_stream)."""
import pytest
from unittest.mock import patch, AsyncMock, MagicMock

from websocket_manager import WebSocketStateManager


@pytest.fixture
def doorbell_config():
    return {
        "ENABLE_DOORBELL": True,
        "ENTITY_DOORBELL": "binary_sensor.doorbell",
        "DOORBELL_CAMERAS": [{"entity_id": "camera.front"}],
        "HASS_HOST": "http://homeassistant.local:8123",
        "HASS_API_URL": "http://homeassistant.local:8123/api",
        "SUPERVISOR_TOKEN": "",
        "HASS_ACCESS_TOKEN": "tok",
    }


@pytest.fixture
def client(doorbell_config, monkeypatch):
    monkeypatch.setenv("HASS_ACCESS_TOKEN", "backend-secret")
    monkeypatch.delenv("SUPERVISOR_TOKEN", raising=False)
    with patch("backend.config.get_config", return_value=doorbell_config), \
         patch("backend.config.clear_cache"), \
         patch("backend.main.WebSocketStateManager"):
        import backend.main as main_module
        from starlette.testclient import TestClient
        with patch.object(main_module, "get_config", return_value=doorbell_config):
            with TestClient(main_module.app, raise_server_exceptions=False) as tc:
                yield tc


class TestCameraStreamProxy:
    def test_rejects_unconfigured_camera(self, client, httpx_mock):
        response = client.get("/api/camera_proxy_stream/camera.neighbour")
        assert response.status_code == 403
        assert httpx_mock.get_request() is None

    def test_streams_configured_camera_with_backend_auth(self, client, httpx_mock):
        httpx_mock.add_response(
            url="http://homeassistant.local:8123/api/camera_proxy_stream/camera.front",
            content=b"--frame\r\nContent-Type: image/jpeg\r\n\r\nJPEGDATA",
            headers={"Content-Type": "multipart/x-mixed-replace; boundary=frame"},
        )
        response = client.get("/api/camera_proxy_stream/camera.front")
        assert response.status_code == 200
        assert response.content.startswith(b"--frame")
        assert response.headers["content-type"].startswith("multipart/x-mixed-replace")
        upstream = httpx_mock.get_request()
        assert upstream.headers["Authorization"] == "Bearer backend-secret"


class TestCameraEntitiesSubscribed:
    def test_doorbell_cameras_are_part_of_the_entity_subscription(self, monkeypatch):
        monkeypatch.setenv("SUPERVISOR_TOKEN", "tok")
        mgr = WebSocketStateManager({
            "ENABLE_DOORBELL": True,
            "ENTITY_DOORBELL": "binary_sensor.doorbell",
            "DOORBELL_CAMERAS": [{"entity_id": "camera.front"}, {"entity_id": ""}, "junk", {"name": "no id"}],
        })
        assert mgr.get_entities_from_config() == {"binary_sensor.doorbell", "camera.front"}

    def test_cameras_ignored_when_doorbell_disabled(self, monkeypatch):
        monkeypatch.setenv("SUPERVISOR_TOKEN", "tok")
        mgr = WebSocketStateManager({
            "ENABLE_DOORBELL": False,
            "DOORBELL_CAMERAS": [{"entity_id": "camera.front"}],
        })
        assert mgr.get_entities_from_config() == set()
