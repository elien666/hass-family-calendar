"""Tests for config.py - Configuration loading with fallback chain."""
import json
import os
from pathlib import Path
from unittest.mock import patch, MagicMock

import pytest

from config import (
    load_config,
    get_config,
    clear_cache,
    _get_env_config,
    _get_bool_config,
    _get_config_value,
    _load_options_json,
    _get_options_json_config,
)


class TestGetEnvConfig:
    """Tests for _get_env_config()."""

    def test_reads_env_var(self, monkeypatch):
        monkeypatch.setenv("TEST_KEY", "test_value")
        assert _get_env_config("TEST_KEY") == "test_value"

    def test_reads_vite_prefixed_fallback(self, monkeypatch):
        monkeypatch.setenv("VITE_MY_KEY", "vite_value")
        assert _get_env_config("MY_KEY") == "vite_value"

    def test_prefers_non_prefixed(self, monkeypatch):
        monkeypatch.setenv("MY_KEY", "direct")
        monkeypatch.setenv("VITE_MY_KEY", "vite")
        assert _get_env_config("MY_KEY") == "direct"

    def test_returns_default_when_missing(self):
        assert _get_env_config("NONEXISTENT_KEY_XYZ", "fallback") == "fallback"

    def test_returns_default_for_empty_string(self, monkeypatch):
        monkeypatch.setenv("EMPTY_KEY", "")
        assert _get_env_config("EMPTY_KEY", "default") == "default"

    def test_parses_json_array(self, monkeypatch):
        monkeypatch.setenv("JSON_KEY", '[{"name": "cal1"}, {"name": "cal2"}]')
        result = _get_env_config("JSON_KEY")
        assert isinstance(result, list)
        assert len(result) == 2
        assert result[0]["name"] == "cal1"

    def test_returns_string_for_non_json(self, monkeypatch):
        monkeypatch.setenv("STR_KEY", "just-a-string")
        assert _get_env_config("STR_KEY") == "just-a-string"


class TestGetBoolConfig:
    """Tests for _get_bool_config()."""

    def test_true_values(self, monkeypatch):
        for val in ("true", "True", "TRUE", "1", "yes", "on"):
            monkeypatch.setenv("BOOL_TEST", val)
            clear_cache()
            assert _get_bool_config("BOOL_TEST") is True, f"Expected True for '{val}'"

    def test_false_values(self, monkeypatch):
        for val in ("false", "False", "0", "no", "off"):
            monkeypatch.setenv("BOOL_TEST", val)
            clear_cache()
            assert _get_bool_config("BOOL_TEST") is False, f"Expected False for '{val}'"

    def test_bool_passthrough(self):
        # When value is already a bool (e.g., from bashio JSON parsing)
        assert _get_bool_config("NONEXISTENT", default=True) is True
        assert _get_bool_config("NONEXISTENT", default=False) is False

    def test_default_is_false(self):
        assert _get_bool_config("NONEXISTENT") is False


class TestGetOptionsJsonConfig:
    """Tests for _get_options_json_config()."""

    def test_dot_notation_lookup(self):
        options = {"weather": {"enabled": True, "api_key": "key123"}}
        assert _get_options_json_config("weather.enabled", options) is True
        assert _get_options_json_config("weather.api_key", options) == "key123"

    def test_missing_key_returns_default(self):
        options = {"weather": {"enabled": True}}
        assert _get_options_json_config("weather.missing", options, "fallback") == "fallback"

    def test_missing_parent_returns_default(self):
        options = {"weather": {"enabled": True}}
        assert _get_options_json_config("garage.enabled", options, False) is False

    def test_top_level_key(self):
        options = {"enabled": True}
        assert _get_options_json_config("enabled", options) is True


class TestGetConfigValue:
    """Tests for _get_config_value() fallback chain."""

    def test_env_fallback_when_not_in_ha(self, monkeypatch):
        monkeypatch.setenv("MY_VALUE", "from-env")
        result = _get_config_value("MY_VALUE", in_ha=False, has_bashio=False)
        assert result == "from-env"

    def test_options_json_fallback(self, monkeypatch):
        options = {"my": {"value": "from-json"}}
        result = _get_config_value(
            "MY_VALUE", "my.value",
            in_ha=True, has_bashio=False, options_json=options
        )
        assert result == "from-json"

    def test_default_when_nothing_found(self):
        result = _get_config_value(
            "NONEXISTENT_XYZ", default="fallback",
            in_ha=False, has_bashio=False
        )
        assert result == "fallback"


class TestLoadConfig:
    """Tests for load_config() full configuration loading."""

    def test_loads_minimal_config(self, mock_no_bashio, monkeypatch):
        """Config should load without any env vars (all features disabled)."""
        config = load_config()
        assert isinstance(config, dict)
        assert config["ENABLE_WEATHER"] is False
        assert config["ENABLE_HVV"] is False
        assert config["ENABLE_GARAGE"] is False
        assert config["ENABLE_DOORBELL"] is False
        assert config["ENABLE_EV"] is False
        assert config["ENABLE_LAUNDRY"] is False
        assert config["ENABLE_EVERYDAY_CALENDAR"] is False

    def test_auto_enables_weather_from_env(self, mock_no_bashio, monkeypatch):
        monkeypatch.setenv("WEATHER_API_KEY", "test-key")
        config = load_config()
        assert config["ENABLE_WEATHER"] is True
        assert config["WEATHER_API_KEY"] == "test-key"

    def test_auto_enables_hvv_from_env(self, mock_no_bashio, monkeypatch):
        monkeypatch.setenv("GEOFOX_USER", "user")
        monkeypatch.setenv("GEOFOX_SECRET", "secret")
        config = load_config()
        assert config["ENABLE_HVV"] is True

    def test_auto_enables_garage_from_entity(self, mock_no_bashio, monkeypatch):
        monkeypatch.setenv("ENTITY_GARAGE_DOOR", "cover.garage")
        config = load_config()
        assert config["ENABLE_GARAGE"] is True
        assert config["ENTITY_GARAGE_DOOR"] == "cover.garage"

    def test_auto_enables_ev_from_entity(self, mock_no_bashio, monkeypatch):
        monkeypatch.setenv("ENTITY_STATE_OF_CHARGE", "sensor.ev_soc")
        config = load_config()
        assert config["ENABLE_EV"] is True

    def test_auto_enables_laundry_from_machines(self, mock_no_bashio, monkeypatch):
        monkeypatch.setenv("LAUNDRY_MACHINES", '[{"entity_id": "sensor.washer", "name": "Waschmaschine"}]')
        config = load_config()
        assert config["ENABLE_LAUNDRY"] is True
        assert len(config["LAUNDRY_MACHINES"]) == 1

    def test_hass_api_url_from_env(self, mock_no_bashio, monkeypatch):
        monkeypatch.setenv("HASS_HOST", "http://myha.local:8123")
        config = load_config()
        assert config["HASS_API_URL"] == "http://myha.local:8123/api"
        assert config["HASS_HOST"] == "http://myha.local:8123"

    def test_hass_host_trailing_slash_stripped(self, mock_no_bashio, monkeypatch):
        monkeypatch.setenv("HASS_HOST", "http://myha.local:8123/")
        config = load_config()
        assert config["HASS_API_URL"] == "http://myha.local:8123/api"

    def test_websocket_url_derived_from_host(self, mock_no_bashio, monkeypatch):
        monkeypatch.setenv("HASS_HOST", "http://myha.local:8123")
        config = load_config()
        assert config["HASS_WEBSOCKET_URL"] == "ws://myha.local:8123/api/websocket"

    def test_websocket_url_https_to_wss(self, mock_no_bashio, monkeypatch):
        monkeypatch.setenv("HASS_HOST", "https://myha.local:8123")
        config = load_config()
        assert config["HASS_WEBSOCKET_URL"] == "wss://myha.local:8123/api/websocket"

    def test_in_ha_uses_supervisor_urls(self, monkeypatch):
        monkeypatch.setenv("SUPERVISOR_TOKEN", "test-supervisor-token")
        monkeypatch.setattr("config._run_bashio_command", lambda cmd: None)
        config = load_config()
        assert config["HASS_API_URL"] == "http://supervisor/core/api"
        assert config["HASS_WEBSOCKET_URL"] == "ws://supervisor/core/websocket"

    def test_calendars_loaded_as_list(self, mock_no_bashio, monkeypatch):
        monkeypatch.setenv("CALENDARS", '[{"entity": "calendar.family", "name": "Family"}]')
        config = load_config()
        assert isinstance(config["CALENDARS"], list)
        assert len(config["CALENDARS"]) == 1

    def test_disabled_features_have_empty_values(self, mock_no_bashio):
        config = load_config()
        assert config["WEATHER_API_KEY"] == ""
        assert config["WEATHER_LATITUDE"] is None
        assert config["GEOFOX_USER"] == ""
        assert config["GEOFOX_SECRET"] == ""
        assert config["ENTITY_GARAGE_DOOR"] == ""
        assert config["LAUNDRY_MACHINES"] == []
        assert config["DOORBELL_CAMERAS"] == []


class TestConfigCache:
    """Tests for configuration caching."""

    def test_caches_result(self, mock_no_bashio, monkeypatch):
        monkeypatch.setenv("HASS_HOST", "http://first.local:8123")
        config1 = load_config()

        monkeypatch.setenv("HASS_HOST", "http://second.local:8123")
        config2 = load_config()

        # Should return cached value, not re-read env
        assert config1 is config2
        assert config2["HASS_HOST"] == "http://first.local:8123"

    def test_clear_cache_forces_reload(self, mock_no_bashio, monkeypatch):
        monkeypatch.setenv("HASS_HOST", "http://first.local:8123")
        config1 = load_config()

        clear_cache()
        monkeypatch.setenv("HASS_HOST", "http://second.local:8123")
        config2 = load_config()

        assert config2["HASS_HOST"] == "http://second.local:8123"

    def test_get_config_uses_cache(self, mock_no_bashio):
        config1 = get_config()
        config2 = get_config()
        assert config1 is config2
