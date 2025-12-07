"""
Configuration management using bashio API and environment variables.
"""
import os
import json
import subprocess
import logging
from pathlib import Path
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
                    logger.debug(f"bashio command succeeded: {command}")
                    return result.stdout.strip()
                else:
                    logger.debug(f"bashio command failed: {command}, returncode={result.returncode}, stderr={result.stderr[:100]}")
            except FileNotFoundError:
                logger.debug(f"bashio not found at {bashio_path}")
                continue
        logger.debug(f"bashio command not available: {command}")
        return None
    except (subprocess.TimeoutExpired, Exception) as e:
        logger.warning(f"bashio command error: {command}, error: {e}")
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


def _load_options_json() -> Optional[Dict[str, Any]]:
    """Load configuration from /data/options.json file (fallback when bashio is not available)."""
    options_file = Path("/data/options.json")
    if options_file.exists():
        try:
            with open(options_file, 'r') as f:
                options = json.load(f)
                logger.info(f"Loaded configuration from {options_file}")
                return options
        except (json.JSONDecodeError, IOError) as e:
            logger.warning(f"Failed to load {options_file}: {e}")
    return None


def _get_bashio_config(key: str, default: Any = None) -> Any:
    """Get a configuration value from bashio."""
    output = _run_bashio_command(f"config {key}")
    if output is None or output == "":
        logger.debug(f"bashio config {key}: not set (using default: {default})")
        return default
    
    # Try to parse as JSON first (for arrays/objects)
    try:
        value = json.loads(output)
        logger.info(f"bashio config {key}: {value}")
        return value
    except json.JSONDecodeError:
        # If not JSON, return as string
        logger.info(f"bashio config {key}: {output}")
        return output


def _get_options_json_config(key: str, options: Dict[str, Any], default: Any = None) -> Any:
    """Get a configuration value from options.json using dot notation (e.g., 'weather.enabled')."""
    keys = key.split('.')
    value = options
    for k in keys:
        if isinstance(value, dict) and k in value:
            value = value[k]
        else:
            return default
    logger.info(f"options.json config {key}: {value}")
    return value


def _get_config_value(key: str, bashio_key: str = None, default: Any = None, in_ha: bool = False, has_bashio: bool = False, options_json: Optional[Dict[str, Any]] = None) -> Any:
    """Get a configuration value, trying bashio first, then options.json, then environment variables.
    
    Args:
        key: Environment variable key (without VITE_ prefix)
        bashio_key: Bashio config key (defaults to key if not provided)
        default: Default value if not found
        in_ha: Whether running in Home Assistant
        has_bashio: Whether bashio is actually available (not just in_ha)
        options_json: Parsed options.json content (if available)
    """
    if bashio_key is None:
        bashio_key = key.replace("_", ".")
    
    # In HA mode, prefer bashio (but only if it's actually available)
    if in_ha and has_bashio:
        value = _get_bashio_config(bashio_key, None)
        if value is not None:
            logger.debug(f"Config {key}: loaded from bashio ({bashio_key})")
            return value
        else:
            logger.debug(f"Config {key}: not found in bashio, trying options.json")
    
    # Try options.json if available (fallback when bashio is not available)
    if in_ha and options_json is not None:
        value = _get_options_json_config(bashio_key, options_json, None)
        if value is not None:
            logger.debug(f"Config {key}: loaded from options.json ({bashio_key})")
            return value
        else:
            logger.debug(f"Config {key}: not found in options.json, trying environment variables")
    elif in_ha and not has_bashio:
        logger.debug(f"Config {key}: bashio not available, trying environment variables")
    
    # Fall back to environment variables (works in both HA and local dev)
    env_value = _get_env_config(key, default)
    if env_value != default:
        logger.debug(f"Config {key}: loaded from environment variable")
    return env_value


def _get_bool_config(key: str, bashio_key: str = None, default: bool = False, in_ha: bool = False, has_bashio: bool = False, options_json: Optional[Dict[str, Any]] = None) -> bool:
    """Get a boolean configuration value, trying bashio first, then options.json, then environment variables."""
    value = _get_config_value(key, bashio_key, default, in_ha, has_bashio, options_json)
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
    
    # Try to load options.json as fallback when bashio is not available
    options_json = None
    if in_ha and not has_bashio:
        options_json = _load_options_json()
    
    # Log configuration loading status
    logger.info(f"Loading configuration (in_ha={in_ha}, has_bashio={has_bashio}, supervisor_token={'set' if supervisor_token else 'not set'}, options_json={'loaded' if options_json else 'not available'})")
    
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
    weather_enabled = _get_bool_config("WEATHER_ENABLED", "weather.enabled", False, in_ha, has_bashio, options_json)
    # Auto-enable if API key is set (for local dev convenience)
    if not weather_enabled and not in_ha:
        weather_api_key = _get_env_config("WEATHER_API_KEY", "")
        weather_enabled = bool(weather_api_key)
    config["ENABLE_WEATHER"] = weather_enabled
    if weather_enabled:
        config["WEATHER_API_KEY"] = _get_config_value("WEATHER_API_KEY", "weather.weather_api_key", "", in_ha, has_bashio, options_json)
        config["WEATHER_LATITUDE"] = _get_config_value("WEATHER_LATITUDE", "weather.weather_latitude", None, in_ha, has_bashio, options_json)
        config["WEATHER_LONGITUDE"] = _get_config_value("WEATHER_LONGITUDE", "weather.weather_longitude", None, in_ha, has_bashio, options_json)
    else:
        config["WEATHER_API_KEY"] = ""
        config["WEATHER_LATITUDE"] = None
        config["WEATHER_LONGITUDE"] = None
    
    # HVV/Geofox configuration
    hvv_enabled = _get_bool_config("HVV_ENABLED", "hvv.enabled", False, in_ha, has_bashio, options_json)
    # Auto-enable if credentials are set (for local dev convenience)
    if not hvv_enabled and not in_ha:
        geofox_user = _get_env_config("GEOFOX_USER", "")
        geofox_secret = _get_env_config("GEOFOX_SECRET", "")
        hvv_enabled = bool(geofox_user and geofox_secret)
    config["ENABLE_HVV"] = hvv_enabled
    if hvv_enabled:
        config["GEOFOX_USER"] = _get_config_value("GEOFOX_USER", "hvv.geofox_user", "", in_ha, has_bashio, options_json)
        config["GEOFOX_SECRET"] = _get_config_value("GEOFOX_SECRET", "hvv.geofox_secret", "", in_ha, has_bashio, options_json)
    else:
        config["GEOFOX_USER"] = ""
        config["GEOFOX_SECRET"] = ""
    
    # Garage configuration
    garage_enabled = _get_bool_config("GARAGE_ENABLED", "garage.enabled", False, in_ha, has_bashio, options_json)
    # Auto-enable if entity is set (for local dev convenience)
    if not garage_enabled and not in_ha:
        entity = _get_env_config("ENTITY_GARAGE_DOOR", "")
        garage_enabled = bool(entity)
    config["ENABLE_GARAGE"] = garage_enabled
    if garage_enabled:
        config["ENTITY_GARAGE_DOOR"] = _get_config_value("ENTITY_GARAGE_DOOR", "garage.entity_garage_door", "", in_ha, has_bashio, options_json)
    else:
        config["ENTITY_GARAGE_DOOR"] = ""
    
    # Laundry configuration
    laundry_enabled = _get_bool_config("LAUNDRY_ENABLED", "laundry.enabled", False, in_ha, has_bashio, options_json)
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
        machines = _get_config_value("LAUNDRY_MACHINES", "laundry.machines", [], in_ha, has_bashio, options_json)
        config["LAUNDRY_MACHINES"] = machines if isinstance(machines, list) else []
    else:
        config["LAUNDRY_MACHINES"] = []
    
    # Doorbell configuration
    doorbell_enabled = _get_bool_config("DOORBELL_ENABLED", "doorbell.enabled", False, in_ha, has_bashio, options_json)
    # Auto-enable if entity is set (for local dev convenience)
    if not doorbell_enabled and not in_ha:
        entity = _get_env_config("ENTITY_DOORBELL", "")
        button = _get_env_config("ENTITY_DOORBELL_BUTTON", "")
        doorbell_enabled = bool(entity or button)
    config["ENABLE_DOORBELL"] = doorbell_enabled
    if doorbell_enabled:
        config["ENTITY_DOORBELL"] = _get_config_value("ENTITY_DOORBELL", "doorbell.entity_doorbell", "", in_ha, has_bashio, options_json)
        config["ENTITY_DOORBELL_BUTTON"] = _get_config_value("ENTITY_DOORBELL_BUTTON", "doorbell.entity_doorbell_button", "", in_ha, has_bashio, options_json)
        cameras = _get_config_value("DOORBELL_CAMERAS", "doorbell.cameras", [], in_ha, has_bashio, options_json)
        config["DOORBELL_CAMERAS"] = cameras if isinstance(cameras, list) else []
    else:
        config["ENTITY_DOORBELL"] = ""
        config["ENTITY_DOORBELL_BUTTON"] = ""
        config["DOORBELL_CAMERAS"] = []
    
    # Everyday calendar configuration
    everyday_calendar_enabled = _get_bool_config("EVERYDAY_CALENDAR_ENABLED", "everyday_calendar.enabled", False, in_ha, has_bashio, options_json)
    # Auto-enable if entity is set (for local dev convenience)
    if not everyday_calendar_enabled and not in_ha:
        entity = _get_env_config("ENTITY_EVERYDAY_CALENDAR", "")
        everyday_calendar_enabled = bool(entity)
    config["ENABLE_EVERYDAY_CALENDAR"] = everyday_calendar_enabled
    if everyday_calendar_enabled:
        config["ENTITY_EVERYDAY_CALENDAR"] = _get_config_value("ENTITY_EVERYDAY_CALENDAR", "everyday_calendar.entity_everyday_calendar", "", in_ha, has_bashio, options_json)
    else:
        config["ENTITY_EVERYDAY_CALENDAR"] = ""
    
    # EV configuration
    ev_enabled = _get_bool_config("EV_ENABLED", "ev.enabled", False, in_ha, has_bashio, options_json)
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
        config["ENTITY_PRECLIMATE_STATUS"] = _get_config_value("ENTITY_PRECLIMATE_STATUS", "ev.entity_preclimate_status", "", in_ha, has_bashio, options_json)
        config["ENTITY_PRECLIMATE_START"] = _get_config_value("ENTITY_PRECLIMATE_START", "ev.entity_preclimate_start", "", in_ha, has_bashio, options_json)
        config["ENTITY_PRECLIMATE_STOP"] = _get_config_value("ENTITY_PRECLIMATE_STOP", "ev.entity_preclimate_stop", "", in_ha, has_bashio, options_json)
        config["ENTITY_CHARGING_STATE"] = _get_config_value("ENTITY_CHARGING_STATE", "ev.entity_charging_state", "", in_ha, has_bashio, options_json)
        config["ENTITY_STATE_OF_CHARGE"] = _get_config_value("ENTITY_STATE_OF_CHARGE", "ev.entity_state_of_charge", "", in_ha, has_bashio, options_json)
    else:
        config["ENTITY_PRECLIMATE_STATUS"] = ""
        config["ENTITY_PRECLIMATE_START"] = ""
        config["ENTITY_PRECLIMATE_STOP"] = ""
        config["ENTITY_CHARGING_STATE"] = ""
        config["ENTITY_STATE_OF_CHARGE"] = ""
    
    # Calendars configuration
    calendars = _get_config_value("CALENDARS", "calendars", [], in_ha, has_bashio, options_json)
    config["CALENDARS"] = calendars if isinstance(calendars, list) else []
    
    _config_cache = config
    
    # Log summary of loaded configuration
    logger.info(f"Configuration loaded successfully (in_ha={in_ha})")
    logger.info(f"Features enabled: weather={config.get('ENABLE_WEATHER')}, hvv={config.get('ENABLE_HVV')}, garage={config.get('ENABLE_GARAGE')}, laundry={config.get('ENABLE_LAUNDRY')}, doorbell={config.get('ENABLE_DOORBELL')}, everyday_calendar={config.get('ENABLE_EVERYDAY_CALENDAR')}, ev={config.get('ENABLE_EV')}")
    
    # Log key configuration values (without sensitive data)
    if config.get('ENABLE_WEATHER'):
        logger.info(f"Weather config: latitude={config.get('WEATHER_LATITUDE')}, longitude={config.get('WEATHER_LONGITUDE')}, api_key={'set' if config.get('WEATHER_API_KEY') else 'not set'}")
    if config.get('ENABLE_HVV'):
        logger.info(f"HVV config: geofox_user={'set' if config.get('GEOFOX_USER') else 'not set'}, geofox_secret={'set' if config.get('GEOFOX_SECRET') else 'not set'}")
    if config.get('ENABLE_GARAGE'):
        logger.info(f"Garage config: entity={config.get('ENTITY_GARAGE_DOOR')}")
    if config.get('ENABLE_LAUNDRY'):
        logger.info(f"Laundry config: machines={len(config.get('LAUNDRY_MACHINES', []))} machine(s)")
    if config.get('ENABLE_DOORBELL'):
        logger.info(f"Doorbell config: entity={config.get('ENTITY_DOORBELL')}, button={config.get('ENTITY_DOORBELL_BUTTON')}, cameras={len(config.get('DOORBELL_CAMERAS', []))}")
    if config.get('ENABLE_EVERYDAY_CALENDAR'):
        logger.info(f"Everyday calendar config: entity={config.get('ENTITY_EVERYDAY_CALENDAR')}")
    if config.get('ENABLE_EV'):
        logger.info(f"EV config: preclimate_status={config.get('ENTITY_PRECLIMATE_STATUS')}, charging_state={config.get('ENTITY_CHARGING_STATE')}, state_of_charge={config.get('ENTITY_STATE_OF_CHARGE')}")
    logger.info(f"Calendars: {len(config.get('CALENDARS', []))} calendar(s) configured")
    
    return config


def get_config() -> Dict[str, Any]:
    """Get cached configuration or load if not cached."""
    return load_config()


def clear_cache():
    """Clear the configuration cache (useful for testing or reloading config)."""
    global _config_cache
    _config_cache = None

