import axios from 'axios'

// Use Vite's built-in DEV mode to detect development vs production
// import.meta.env.DEV is true when running `pnpm start` (dev server)
// import.meta.env.DEV is false when running `pnpm run build` (production build)
export const isDevelopment = import.meta.env.DEV

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

  // Fallback to build-time environment variables
  const envValue = import.meta.env[`VITE_${key}`]

  // In production mode (import.meta.env.DEV === false), never use build-time tokens
  // This prevents baking in tokens during build that would cause 401 errors in add-on mode
  // Only allow build-time env vars when in development mode (pnpm start)
  if (!isDevelopment && key === 'HASS_ACCESS_TOKEN' && envValue !== undefined) {
    // Production build - don't use build-time token, rely on ingress authentication
    return defaultValue
  }

  // In development mode, allow build-time env vars
  // In production mode, only use env vars if explicitly set in window.APP_CONFIG
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
// When running in add-on mode (empty token), explicitly remove Authorization header
// Apache proxy forwards /api/* to http://supervisor/core/api/* with SUPERVISOR_TOKEN
// The proxy adds the Authorization header, so the frontend should not send one
const hasValidToken = HASS_ACCESS_TOKEN &&
  typeof HASS_ACCESS_TOKEN === 'string' &&
  HASS_ACCESS_TOKEN.trim() !== '' &&
  HASS_ACCESS_TOKEN !== 'undefined' &&
  HASS_ACCESS_TOKEN !== 'null'

if (hasValidToken) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${HASS_ACCESS_TOKEN}`
} else {
  // Explicitly remove Authorization header for add-on mode
  // Apache proxy adds SUPERVISOR_TOKEN, so frontend should not send Authorization header
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
// In production mode (add-on/ingress), use simple relative URLs
// Remove leading slash to make it relative to current directory, not origin root
// This ensures requests go through the ingress proxy to the add-on's Apache, which then
// proxies to http://supervisor/core/api/ with SUPERVISOR_TOKEN authentication
// In development mode, use HASS_HOST if provided
export const buildHaUrl = (path) => {
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`

  // In production mode (add-on/ingress), construct absolute URL from window.location
  // This ensures requests go through the ingress proxy to the add-on's Apache
  // which then proxies to http://supervisor/core/api/ with SUPERVISOR_TOKEN
  if (!isDevelopment) {
    if (typeof window !== 'undefined' && window.location) {
      // Get the current pathname and remove trailing slash
      const basePath = window.location.pathname.replace(/\/$/, '')
      // Construct full URL: origin + pathname + API path
      return `${window.location.origin}${basePath}${normalizedPath}`
    }
    // Fallback to relative URL if window is not available
    return normalizedPath
  }

  // In development mode, use HASS_HOST if provided
  // Defensive check: treat "undefined" or "null" strings as empty
  const host = (HASS_HOST === "undefined" || HASS_HOST === "null") ? "" : HASS_HOST
  if (!host) {
    return normalizedPath
  }
  return `${host}${normalizedPath}`
}