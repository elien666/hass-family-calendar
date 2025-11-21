// Get runtime config from window.APP_CONFIG (injected by HA add-on) or fallback to build-time env vars
const getConfig = (key, defaultValue = undefined) => {
  // Check for runtime config from HA add-on first
  if (typeof window !== 'undefined' && window.APP_CONFIG && window.APP_CONFIG[key] !== undefined) {
    const value = window.APP_CONFIG[key]
    // Handle string "undefined" or "null" as invalid values
    if (value === "undefined" || value === "null") {
      return defaultValue
    }
    // Return empty string as-is, but convert undefined/null to defaultValue for consistency
    return value === null || value === undefined ? defaultValue : value
  }
  // Fallback to build-time environment variables
  const envValue = import.meta.env[`VITE_${key}`]
  return envValue !== undefined ? envValue : defaultValue
}

// Home Assistant configuration
// In HA add-on mode, HASS_HOST is empty string for relative URLs, HASS_ACCESS_TOKEN is empty (ingress handles auth)
// For local dev, these should be set via .env
export const HASS_HOST = getConfig('HASS_HOST', '')
export const HASS_ACCESS_TOKEN = getConfig('HASS_ACCESS_TOKEN', '')

// Weather API configuration (optional - feature disabled if not set)
export const WEATHER_API_KEY = getConfig('WEATHER_API_KEY')
export const WEATHER_LATITUDE = getConfig('WEATHER_LATITUDE')
export const WEATHER_LONGITUDE = getConfig('WEATHER_LONGITUDE')

// Geofox API configuration (optional - feature disabled if not set)
export const GEOFOX_SECRET = getConfig('GEOFOX_SECRET')
export const GEOFOX_USER = getConfig('GEOFOX_USER')

// Telegram configuration (optional - feature disabled if not set)
export const TELEGRAM_BOT_TOKEN = getConfig('TELEGRAM_BOT_TOKEN')
export const TELEGRAM_CHAT_ID = getConfig('TELEGRAM_CHAT_ID')

// Physical buttons WebSocket URL (optional - feature disabled if not set)
export const BUTTONS_WS_URL = getConfig('BUTTONS_WS_URL')

// Entity IDs (optional - feature disabled if not set)
export const ENTITY_GARAGE_DOOR = getConfig('ENTITY_GARAGE_DOOR')
export const ENTITY_WASHING_MACHINE_NEW = getConfig('ENTITY_WASHING_MACHINE_NEW')
export const ENTITY_WASHING_MACHINE_OLD = getConfig('ENTITY_WASHING_MACHINE_OLD')
export const ENTITY_DRYER = getConfig('ENTITY_DRYER')
export const ENTITY_DOORBELL = getConfig('ENTITY_DOORBELL')
export const ENTITY_DOORBELL_BUTTON = getConfig('ENTITY_DOORBELL_BUTTON')
export const ENTITY_EVERYDAY_CALENDAR = getConfig('ENTITY_EVERYDAY_CALENDAR')

// Helper function to build HA API URLs
// When HASS_HOST is empty (HA add-on mode), use relative URLs
export const buildHaUrl = (path) => {
  // Defensive check: treat "undefined" or "null" strings as empty
  const host = (HASS_HOST === "undefined" || HASS_HOST === "null") ? "" : HASS_HOST
  if (!host) {
    return path.startsWith('/') ? path : `/${path}`
  }
  return `${host}${path.startsWith('/') ? path : `/${path}`}`
}