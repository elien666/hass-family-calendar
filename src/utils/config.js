import axios from 'axios'

// Get runtime config from window.APP_CONFIG (injected by HA add-on) or fallback to build-time env vars
const getConfig = (key, defaultValue = undefined) => {
  // Check for runtime config from HA add-on first
  if (typeof window !== 'undefined' && window.APP_CONFIG) {
    // If window.APP_CONFIG exists, we're running in the add-on
    // Check if the key is explicitly set in APP_CONFIG
    if (window.APP_CONFIG[key] !== undefined) {
      const value = window.APP_CONFIG[key]
      // Handle string "undefined" or "null" as invalid values
      if (value === "undefined" || value === "null") {
        return defaultValue
      }
      // Return empty string as-is, but convert undefined/null to defaultValue for consistency
      // Empty string is a valid, intentional value (e.g., for ingress mode)
      return value === null || value === undefined ? defaultValue : value
    }
    // If key is not in APP_CONFIG, return defaultValue (don't fall back to build-time env vars)
    // This is critical for ingress mode where HASS_ACCESS_TOKEN is intentionally not set
    // and we don't want to use the build-time token
    return defaultValue
  }
  
  // Fallback to build-time environment variables (only when not running in add-on)
  const envValue = import.meta.env[`VITE_${key}`]
  
  // Special handling for HASS_ACCESS_TOKEN when window.APP_CONFIG is undefined
  // If window.APP_CONFIG is undefined, config.js likely failed to load or we're in add-on mode
  // Be conservative: only use build-time token if we're clearly in local dev (localhost/127.0.0.1)
  // Otherwise assume add-on/ingress mode and don't use build-time token to avoid 401 errors
  if (key === 'HASS_ACCESS_TOKEN' && envValue !== undefined) {
    const isLocalDev = typeof window !== 'undefined' && 
      window.location && 
      (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
    
    if (!isLocalDev) {
      // Not localhost - assume add-on/ingress mode, don't use build-time token
      return defaultValue
    }
  }
  
  return envValue !== undefined ? envValue : defaultValue
}

// Helper to convert config value to boolean
const getConfigBoolean = (key, defaultValue = false) => {
  const value = getConfig(key, defaultValue)
  if (typeof value === 'boolean') return value
  if (typeof value === 'string') {
    return value === 'true' || value === '1' || value === 'yes'
  }
  return Boolean(value)
}

// Home Assistant configuration
// In HA add-on mode, HASS_HOST is empty string for relative URLs, HASS_ACCESS_TOKEN is empty (ingress handles auth)
// For local dev, these should be set via .env
export const HASS_HOST = getConfig('HASS_HOST', '')
export const HASS_ACCESS_TOKEN = getConfig('HASS_ACCESS_TOKEN', '')

// Configure axios Authorization header
// When running in ingress mode (empty token), explicitly remove Authorization header
// Ingress proxy handles authentication automatically and will reject requests with Authorization header
const hasValidToken = HASS_ACCESS_TOKEN && 
  typeof HASS_ACCESS_TOKEN === 'string' && 
  HASS_ACCESS_TOKEN.trim() !== '' &&
  HASS_ACCESS_TOKEN !== 'undefined' &&
  HASS_ACCESS_TOKEN !== 'null'

if (hasValidToken) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${HASS_ACCESS_TOKEN}`
} else {
  // Explicitly remove Authorization header for ingress mode
  // This is critical - ingress proxy handles auth and will reject if we send our own header
  delete axios.defaults.headers.common['Authorization']
}

// Feature enable/disable toggles
export const ENABLE_WEATHER = getConfigBoolean('ENABLE_WEATHER', false)
export const ENABLE_HVV = getConfigBoolean('ENABLE_HVV', false)
export const ENABLE_TELEGRAM = getConfigBoolean('ENABLE_TELEGRAM', false)
export const ENABLE_GARAGE = getConfigBoolean('ENABLE_GARAGE', false)
export const ENABLE_LAUNDRY = getConfigBoolean('ENABLE_LAUNDRY', false)
export const ENABLE_DOORBELL = getConfigBoolean('ENABLE_DOORBELL', false)
export const ENABLE_EVERYDAY_CALENDAR = getConfigBoolean('ENABLE_EVERYDAY_CALENDAR', false)
export const ENABLE_PHYSICAL_BUTTONS = getConfigBoolean('ENABLE_PHYSICAL_BUTTONS', false)

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