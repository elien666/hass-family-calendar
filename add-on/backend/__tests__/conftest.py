"""Shared fixtures for backend tests."""
import json
import sys
import os
from pathlib import Path
from unittest.mock import patch, MagicMock, AsyncMock

import pytest

# Add backend to path so we can import modules
sys.path.insert(0, str(Path(__file__).parent.parent))

from config import clear_cache


@pytest.fixture(autouse=True)
def reset_config_cache():
    """Clear config cache before and after each test."""
    clear_cache()
    yield
    clear_cache()


@pytest.fixture
def mock_no_bashio(monkeypatch):
    """Simulate environment without bashio (local development)."""
    monkeypatch.delenv("SUPERVISOR_TOKEN", raising=False)
    # Patch _run_bashio_command to always return None
    monkeypatch.setattr("config._run_bashio_command", lambda cmd: None)


@pytest.fixture
def mock_env_config(monkeypatch):
    """Set up minimal env-based configuration for testing."""
    env_vars = {
        "HASS_HOST": "http://homeassistant.local:8123",
        "HASS_ACCESS_TOKEN": "test-token-abc123",
        "GEOFOX_USER": "test-geofox-user",
        "GEOFOX_SECRET": "test-geofox-secret",
        "WEATHER_API_KEY": "test-weather-key",
        "WEATHER_LATITUDE": "53.5511",
        "WEATHER_LONGITUDE": "9.9937",
        "ENTITY_GARAGE_DOOR": "cover.garage_door",
        "ENTITY_DOORBELL": "binary_sensor.doorbell",
        "ENTITY_EVERYDAY_CALENDAR": "sensor.everyday_calendar",
        "ENTITY_PRECLIMATE_STATUS": "sensor.ev_preclimate",
        "ENTITY_CHARGING_STATE": "sensor.ev_charging",
        "ENTITY_STATE_OF_CHARGE": "sensor.ev_soc",
    }
    for key, value in env_vars.items():
        monkeypatch.setenv(key, value)
    return env_vars


@pytest.fixture
def sample_geofox_body():
    """Sample Geofox API request body."""
    return {
        "version": 55,
        "language": "de",
        "station": {
            "name": "Wandsbek Markt",
            "id": "Master:20008115",
            "type": "STATION"
        },
        "time": {"date": "01.01.2024", "time": "12:00"},
        "maxList": 20,
        "maxTimeOffset": 200,
        "allStationsInChangingNode": True,
        "returnFilters": True
    }
