"""
Configuration management using bashio API and environment variables.
"""
import os
import json
import subprocess
import logging
from typing import Any, Dict, Optional

logger = logging.getLogger(__name__)

# Cache for configuration to avoid repeated bashio calls
_config_cache: Optional[Dict[str, Any]] = None


def _run_bashio_command(command: str) -> Optional[str]:
    """Run a bashio command and return the output."""
    try:
        # Try /usr/bin/bashio first (standard location in HA base images)
        # Fallback to bashio in PATH
        bashio_paths = ["/usr/bin/bashio", "bashio"]
        for bashio_path in bashio_paths:
            try:
                result = subprocess.run(
                    [bashio_path, command],
                    capture_output=True,
                    text=True,
                    check=False,
                    timeout=5
                )
                if result.returncode == 0:
                    return result.stdout.strip()
            except FileNotFoundError:
                continue
        return None
    except (subprocess.TimeoutExpired, Exception) as e:
        logger.debug(f"bashio command failed: {command}, error: {e}")
        return None


def _get_env_config(key: str, default: Any = None) -> Any:
    """Get a configuration value from environment variables.
    
    Supports both prefixed (VITE_*) and non-prefixed versions.
    For arrays/objects, tries to parse as JSON.
    """
    # Try non-prefixed first (new backend format)
    value = os.environ.get(key, None)
    if value is None:
        # Try VITE_ prefixed (legacy frontend format)
        value = os.environ.get(f"VITE_{key}", None)
    
    if value is None or value == "":
        return default
    
    # Try to parse as JSON first (for arrays/objects)
    try:
        return json.loads(value)
    except json.JSONDecodeError:
        # If not JSON, return as string
        return value


def _get_bashio_config(key: str, default: Any = None) -> Any:
    """Get a configuration value from bashio."""
    output = _run_bashio_command(f"config {key}")
    if output is None or output == "":
        return default
    
    # Try to parse as JSON first (for arrays/objects)
    try:
        return json.loads(output)
    except json.JSONDecodeError:
        # If not JSON, return as string
        return output


def _get_config_value(key: str, bashio_key: str = None, default: Any = None, in_ha: bool = False) -> Any:
    """Get a configuration value, trying bashio first, then environment variables.
    
    Args:
        key: Environment variable key (without VITE_ prefix)
        bashio_key: Bashio config key (defaults to key if not provided)
        default: Default value if not found
        in_ha: Whether running in Home Assistant
    """
    if bashio_key is None:
        bashio_key = key.replace("_", ".")
    
    # In HA mode, prefer bashio
    if in_ha:
        value = _get_bashio_config(bashio_key, None)
        if value is not None:
            return value
    
    # Fall back to environment variables (works in both HA and local dev)
    return _get_env_config(key, default)


def _get_bool_config(key: str, bashio_key: str = None, default: bool = False, in_ha: bool = False) -> bool:
    """Get a boolean configuration value, trying bashio first, then environment variables."""
    value = _get_config_value(key, bashio_key, default, in_ha)
    if isinstance(value, bool):
        return value
    if isinstance(value, str):
        return value.lower() in ("true", "1", "yes", "on")
    return bool(value)


def load_config() -> Dict[str, Any]:
    """Load configuration from bashio API and environment variables."""
    global _config_cache
    
    if _config_cache is not None:
        return _config_cache
    
    config = {}
    
    # Check if running in HA (has supervisor token or bashio available)
    supervisor_token = os.environ.get("SUPERVISOR_TOKEN")
    has_bashio = _run_bashio_command("version") is not None
    in_ha = bool(supervisor_token) or has_bashio
    
    # Home Assistant backend URL for local development
    # In HA, this is "http://supervisor/core/api"
    # For local dev, use HASS_HOST environment variable (e.g., "http://homeassistant.local:8123")
    hass_host = os.environ.get("HASS_HOST", "")
    hass_websocket_url = os.environ.get("HASS_WEBSOCKET_URL", "")
    
    if in_ha:
        # In Home Assistant, use supervisor endpoints
        config["HASS_API_URL"] = "http://supervisor/core/api"
        config["HASS_WEBSOCKET_URL"] = "ws://supervisor/core/websocket"
    else:
        # Local development - use environment variables or defaults
        if hass_host:
            # Remove trailing slash if present
            hass_host = hass_host.rstrip("/")
            config["HASS_API_URL"] = f"{hass_host}/api"
        else:
            # Default to supervisor (will fail locally, but that's expected)
            config["HASS_API_URL"] = "http://supervisor/core/api"
        
        if hass_websocket_url:
            config["HASS_WEBSOCKET_URL"] = hass_websocket_url
        else:
            # Try to derive from HASS_HOST
            if hass_host:
                ws_url = hass_host.replace("http://", "ws://").replace("https://", "wss://")
                config["HASS_WEBSOCKET_URL"] = f"{ws_url}/api/websocket"
            else:
                config["HASS_WEBSOCKET_URL"] = "ws://supervisor/core/websocket"
    
    # Home Assistant configuration
    config["HASS_HOST"] = hass_host if not in_ha else ""
    config["HASS_ACCESS_TOKEN"] = os.environ.get("HASS_ACCESS_TOKEN", "")
    config["SUPERVISOR_TOKEN"] = supervisor_token or ""
    
    # Ingress URL
    if in_ha and has_bashio:
        ingress_url = _run_bashio_command("addon.ingress_url")
        config["INGRESS_URL"] = ingress_url or ""
    else:
        config["INGRESS_URL"] = ""
    
    # Weather configuration
    weather_enabled = _get_bool_config("WEATHER_ENABLED", "weather.enabled", False, in_ha)
    # Auto-enable if API key is set (for local dev convenience)
    if not weather_enabled and not in_ha:
        weather_api_key = _get_env_config("WEATHER_API_KEY", "")
        weather_enabled = bool(weather_api_key)
    config["ENABLE_WEATHER"] = weather_enabled
    if weather_enabled:
        config["WEATHER_API_KEY"] = _get_config_value("WEATHER_API_KEY", "weather.weather_api_key", "", in_ha)
        config["WEATHER_LATITUDE"] = _get_config_value("WEATHER_LATITUDE", "weather.weather_latitude", None, in_ha)
        config["WEATHER_LONGITUDE"] = _get_config_value("WEATHER_LONGITUDE", "weather.weather_longitude", None, in_ha)
    else:
        config["WEATHER_API_KEY"] = ""
        config["WEATHER_LATITUDE"] = None
        config["WEATHER_LONGITUDE"] = None
    
    # HVV/Geofox configuration
    hvv_enabled = _get_bool_config("HVV_ENABLED", "hvv.enabled", False, in_ha)
    # Auto-enable if credentials are set (for local dev convenience)
    if not hvv_enabled and not in_ha:
        geofox_user = _get_env_config("GEOFOX_USER", "")
        geofox_secret = _get_env_config("GEOFOX_SECRET", "")
        hvv_enabled = bool(geofox_user and geofox_secret)
    config["ENABLE_HVV"] = hvv_enabled
    if hvv_enabled:
        config["GEOFOX_USER"] = _get_config_value("GEOFOX_USER", "hvv.geofox_user", "", in_ha)
        config["GEOFOX_SECRET"] = _get_config_value("GEOFOX_SECRET", "hvv.geofox_secret", "", in_ha)
    else:
        config["GEOFOX_USER"] = ""
        config["GEOFOX_SECRET"] = ""
    
    # Garage configuration
    garage_enabled = _get_bool_config("GARAGE_ENABLED", "garage.enabled", False, in_ha)
    # Auto-enable if entity is set (for local dev convenience)
    if not garage_enabled and not in_ha:
        entity = _get_env_config("ENTITY_GARAGE_DOOR", "")
        garage_enabled = bool(entity)
    config["ENABLE_GARAGE"] = garage_enabled
    if garage_enabled:
        config["ENTITY_GARAGE_DOOR"] = _get_config_value("ENTITY_GARAGE_DOOR", "garage.entity_garage_door", "", in_ha)
    else:
        config["ENTITY_GARAGE_DOOR"] = ""
    
    # Laundry configuration
    laundry_enabled = _get_bool_config("LAUNDRY_ENABLED", "laundry.enabled", False, in_ha)
    # Auto-enable if machines are set (for local dev convenience)
    if not laundry_enabled and not in_ha:
        machines = _get_env_config("LAUNDRY_MACHINES", "[]")
        if isinstance(machines, str):
            try:
                machines = json.loads(machines)
            except json.JSONDecodeError:
                machines = []
        laundry_enabled = bool(machines and len(machines) > 0)
    config["ENABLE_LAUNDRY"] = laundry_enabled
    if laundry_enabled:
        machines = _get_config_value("LAUNDRY_MACHINES", "laundry.machines", [], in_ha)
        config["LAUNDRY_MACHINES"] = machines if isinstance(machines, list) else []
    else:
        config["LAUNDRY_MACHINES"] = []
    
    # Doorbell configuration
    doorbell_enabled = _get_bool_config("DOORBELL_ENABLED", "doorbell.enabled", False, in_ha)
    # Auto-enable if entity is set (for local dev convenience)
    if not doorbell_enabled and not in_ha:
        entity = _get_env_config("ENTITY_DOORBELL", "")
        button = _get_env_config("ENTITY_DOORBELL_BUTTON", "")
        doorbell_enabled = bool(entity or button)
    config["ENABLE_DOORBELL"] = doorbell_enabled
    if doorbell_enabled:
        config["ENTITY_DOORBELL"] = _get_config_value("ENTITY_DOORBELL", "doorbell.entity_doorbell", "", in_ha)
        config["ENTITY_DOORBELL_BUTTON"] = _get_config_value("ENTITY_DOORBELL_BUTTON", "doorbell.entity_doorbell_button", "", in_ha)
        cameras = _get_config_value("DOORBELL_CAMERAS", "doorbell.cameras", [], in_ha)
        config["DOORBELL_CAMERAS"] = cameras if isinstance(cameras, list) else []
    else:
        config["ENTITY_DOORBELL"] = ""
        config["ENTITY_DOORBELL_BUTTON"] = ""
        config["DOORBELL_CAMERAS"] = []
    
    # Everyday calendar configuration
    everyday_calendar_enabled = _get_bool_config("EVERYDAY_CALENDAR_ENABLED", "everyday_calendar.enabled", False, in_ha)
    # Auto-enable if entity is set (for local dev convenience)
    if not everyday_calendar_enabled and not in_ha:
        entity = _get_env_config("ENTITY_EVERYDAY_CALENDAR", "")
        everyday_calendar_enabled = bool(entity)
    config["ENABLE_EVERYDAY_CALENDAR"] = everyday_calendar_enabled
    if everyday_calendar_enabled:
        config["ENTITY_EVERYDAY_CALENDAR"] = _get_config_value("ENTITY_EVERYDAY_CALENDAR", "everyday_calendar.entity_everyday_calendar", "", in_ha)
    else:
        config["ENTITY_EVERYDAY_CALENDAR"] = ""
    
    # EV configuration
    ev_enabled = _get_bool_config("EV_ENABLED", "ev.enabled", False, in_ha)
    # Auto-enable if any entity is set (for local dev convenience)
    if not ev_enabled and not in_ha:
        ev_entities = [
            _get_env_config("ENTITY_PRECLIMATE_STATUS", ""),
            _get_env_config("ENTITY_CHARGING_STATE", ""),
            _get_env_config("ENTITY_STATE_OF_CHARGE", "")
        ]
        ev_enabled = any(ev_entities)
    config["ENABLE_EV"] = ev_enabled
    if ev_enabled:
        config["ENTITY_PRECLIMATE_STATUS"] = _get_config_value("ENTITY_PRECLIMATE_STATUS", "ev.entity_preclimate_status", "", in_ha)
        config["ENTITY_PRECLIMATE_START"] = _get_config_value("ENTITY_PRECLIMATE_START", "ev.entity_preclimate_start", "", in_ha)
        config["ENTITY_PRECLIMATE_STOP"] = _get_config_value("ENTITY_PRECLIMATE_STOP", "ev.entity_preclimate_stop", "", in_ha)
        config["ENTITY_CHARGING_STATE"] = _get_config_value("ENTITY_CHARGING_STATE", "ev.entity_charging_state", "", in_ha)
        config["ENTITY_STATE_OF_CHARGE"] = _get_config_value("ENTITY_STATE_OF_CHARGE", "ev.entity_state_of_charge", "", in_ha)
    else:
        config["ENTITY_PRECLIMATE_STATUS"] = ""
        config["ENTITY_PRECLIMATE_START"] = ""
        config["ENTITY_PRECLIMATE_STOP"] = ""
        config["ENTITY_CHARGING_STATE"] = ""
        config["ENTITY_STATE_OF_CHARGE"] = ""
    
    # Calendars configuration
    calendars = _get_config_value("CALENDARS", "calendars", [], in_ha)
    config["CALENDARS"] = calendars if isinstance(calendars, list) else []
    
    # Frigate configuration
    frigate_host = _get_config_value("FRIGATE_HOST", "frigate.host", "", in_ha)
    frigate_user = _get_config_value("FRIGATE_USER", "frigate.user", "", in_ha)
    frigate_password = _get_config_value("FRIGATE_PASSWORD", "frigate.password", "", in_ha)
    config["FRIGATE_HOST"] = frigate_host.rstrip("/") if frigate_host else ""
    config["FRIGATE_USER"] = frigate_user or ""
    config["FRIGATE_PASSWORD"] = frigate_password or ""
    
    _config_cache = config
    return config


def get_config() -> Dict[str, Any]:
    """Get cached configuration or load if not cached."""
    return load_config()


def clear_cache():
    """Clear the configuration cache (useful for testing or reloading config)."""
    global _config_cache
    _config_cache = None

