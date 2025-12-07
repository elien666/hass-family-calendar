import axios from 'axios'
import { logAxiosError, logAxiosSuccess } from './axios-error-handler'
import logger from './logger'

// Re-export from ConfigProvider for convenience
export { useConfig, useConfigLoading } from './ConfigProvider'

// Use Vite's built-in DEV mode to detect development vs production
// import.meta.env.DEV is true when running `pnpm start` (dev server)
// import.meta.env.DEV is false when running `pnpm run build` (production build)
export const isDevelopment = import.meta.env.DEV

// Legacy exports for backward compatibility
// These are evaluated at module load time and may be empty
// Components should use useConfig() hook from ConfigProvider for reactive values
// These are kept for non-React code or initial setup

// Helper to get config value from context or fallback
// Note: This should only be used outside React components
// Inside components, use useConfig() hook
const getConfigValue = (key, defaultValue = undefined) => {
  // Try to get from window.APP_CONFIG if available (for non-React code)
  if (typeof window !== 'undefined' && window.APP_CONFIG && window.APP_CONFIG[key] !== undefined) {
    const value = window.APP_CONFIG[key]
    if (value === "undefined" || value === "null") {
      return defaultValue
    }
    return value === null || value === undefined ? defaultValue : value
  }
  
  // Fallback to build-time env vars (development only)
  const envValue = import.meta.env[`VITE_${key}`]
  if (isDevelopment && envValue !== undefined) {
    return envValue
  }
  
  return defaultValue
}

// Home Assistant configuration
// In HA add-on mode, HASS_HOST is empty string for relative URLs, HASS_ACCESS_TOKEN is empty (ingress handles auth)
// For local dev, these should be set via .env
// DEPRECATED: Use useConfig() hook in components
export const HASS_HOST = getConfigValue('HASS_HOST', '')
export const HASS_ACCESS_TOKEN = getConfigValue('HASS_ACCESS_TOKEN', '')

// Axios Authorization header is now configured reactively in ConfigProvider
// This ensures the header is set/removed when config loads from the API
// Static configuration here is removed to avoid conflicts with reactive config

// Add Axios request interceptor for logging outgoing requests
axios.interceptors.request.use(
  (config) => {
    // Log request details for debugging
    const requestId = Date.now()
    config.metadata = { requestId, startTime: Date.now() }
    
    // Log axios defaults state periodically (every 50th request) or on first error
    if (typeof window !== 'undefined' && (requestId % 50 === 0 || !window._axiosDefaultsLogged)) {
      window._axiosDefaultsLogged = true
      logger.debug('Axios Defaults State:', {
        baseURL: axios.defaults.baseURL,
        timeout: axios.defaults.timeout,
        hasAuthHeader: !!axios.defaults.headers?.common?.Authorization,
        authHeaderLength: axios.defaults.headers?.common?.Authorization?.length || 0,
        headers: Object.keys(axios.defaults.headers?.common || {}),
      })
    }
    
    return config
  },
  (error) => {
    // Request setup error
    logger.error('Axios Request Setup Error:', error)
    return Promise.reject(error)
  }
)

// Add Axios response interceptor for centralized error logging
axios.interceptors.response.use(
  (response) => {
    // Log successful responses
    if (response.config) {
      logAxiosSuccess(response.config)
    }
    return response
  },
  (error) => {
    // Log all Axios errors with comprehensive detail
    // Extract context from error config if available
    const context = error.config?.url 
      ? `API Call: ${error.config.method?.toUpperCase()} ${error.config.url}` 
      : 'Axios Request'
    
    logAxiosError(error, context)
    
    // Log additional diagnostic info when errors occur
    if (error.config?.metadata) {
      const duration = Date.now() - error.config.metadata.startTime
      logger.error('Request Duration:', `${duration}ms`, 'Request ID:', error.config.metadata.requestId)
    }
    
    // Log window.location state if in production (for ingress debugging)
    if (!isDevelopment && typeof window !== 'undefined' && window.location) {
      logger.error('Window Location State:', {
        origin: window.location.origin,
        pathname: window.location.pathname,
        href: window.location.href,
      })
    }
    
    // Reject the promise to allow individual error handlers to process the error
    return Promise.reject(error)
  }
)

// Weather API configuration (optional - feature disabled if not set)
// DEPRECATED: Use useConfig() hook in components
export const WEATHER_API_KEY = getConfigValue('WEATHER_API_KEY')
export const WEATHER_LATITUDE = getConfigValue('WEATHER_LATITUDE')
export const WEATHER_LONGITUDE = getConfigValue('WEATHER_LONGITUDE')

// Geofox API configuration (optional - feature disabled if not set)
// DEPRECATED: Use useConfig() hook in components
export const GEOFOX_SECRET = getConfigValue('GEOFOX_SECRET')
export const GEOFOX_USER = getConfigValue('GEOFOX_USER')

// Entity IDs (optional - feature disabled if not set)
// DEPRECATED: Use useConfig() hook in components
export const ENTITY_GARAGE_DOOR = getConfigValue('ENTITY_GARAGE_DOOR')
export const ENTITY_DOORBELL = getConfigValue('ENTITY_DOORBELL')
export const ENTITY_DOORBELL_BUTTON = getConfigValue('ENTITY_DOORBELL_BUTTON')
export const ENTITY_EVERYDAY_CALENDAR = getConfigValue('ENTITY_EVERYDAY_CALENDAR')
export const ENTITY_PRECLIMATE_STATUS = getConfigValue('ENTITY_PRECLIMATE_STATUS')
export const ENTITY_PRECLIMATE_START = getConfigValue('ENTITY_PRECLIMATE_START')
export const ENTITY_PRECLIMATE_STOP = getConfigValue('ENTITY_PRECLIMATE_STOP')
export const ENTITY_CHARGING_STATE = getConfigValue('ENTITY_CHARGING_STATE')
export const ENTITY_STATE_OF_CHARGE = getConfigValue('ENTITY_STATE_OF_CHARGE')

// Supervisor token for WebSocket authentication in production mode (HA add-on)
// DEPRECATED: Use useConfig() hook in components
export const SUPERVISOR_TOKEN = getConfigValue('SUPERVISOR_TOKEN')

// Ingress URL for reliable URL construction (from bashio API, only in HA mode)
// DEPRECATED: Use useConfig() hook in components
export const INGRESS_URL = getConfigValue('INGRESS_URL')

// Calendars configuration (array of calendar objects with name and optional icon)
// DEPRECATED: Use useConfig() hook in components
export const CALENDARS = (() => {
  const calendarsValue = getConfigValue('CALENDARS', '[]')
  if (typeof calendarsValue === 'string') {
    try {
      return JSON.parse(calendarsValue)
    } catch (e) {
      // If parsing fails, return empty array
      return []
    }
  }
  // If it's already an array (from window.APP_CONFIG), return it
  if (Array.isArray(calendarsValue)) {
    return calendarsValue
  }
  // Fallback to empty array
  return []
})()

// Laundry machines configuration (array of machine objects with name and entity_id)
// DEPRECATED: Use useConfig() hook in components
export const LAUNDRY_MACHINES = (() => {
  const machinesValue = getConfigValue('LAUNDRY_MACHINES', '[]')
  if (typeof machinesValue === 'string') {
    try {
      return JSON.parse(machinesValue)
    } catch (e) {
      // If parsing fails, return empty array
      return []
    }
  }
  // If it's already an array (from window.APP_CONFIG), return it
  if (Array.isArray(machinesValue)) {
    return machinesValue
  }
  // Fallback to empty array
  return []
})()

// Doorbell cameras configuration (array of camera objects with entity_id and optional orientation)
// DEPRECATED: Use useConfig() hook in components
export const DOORBELL_CAMERAS = (() => {
  const camerasValue = getConfigValue('DOORBELL_CAMERAS', '[]')
  if (typeof camerasValue === 'string') {
    try {
      return JSON.parse(camerasValue)
    } catch (e) {
      // If parsing fails, return empty array
      return []
    }
  }
  // If it's already an array (from window.APP_CONFIG), return it
  if (Array.isArray(camerasValue)) {
    return camerasValue
  }
  // Fallback to empty array
  return []
})()

// Feature enable/disable toggles
// In production (add-on), these are set by run.sh based on dedicated enabled flags in config.yaml
// In development mode, auto-enable features if their entities/config are present (for local dev convenience)
const getFeatureFlag = (key, autoEnableCondition) => {
  // First check if explicitly set in config (from run.sh in production, or build-time env vars)
  const rawValue = getConfigValue(key, undefined)
  // If value is explicitly set (not undefined), use it
  if (rawValue !== undefined) {
    // Value exists, convert to boolean
    const value = rawValue
    if (typeof value === 'boolean') return value
    if (typeof value === 'string') {
      return value === 'true' || value === '1' || value === 'yes'
    }
    return Boolean(value)
  }
  // Value not explicitly set - in development mode, auto-enable if condition is met
  // This is useful for local development when run.sh hasn't run
  if (isDevelopment) {
    // Check if auto-enable condition is truthy (entity/config exists)
    if (autoEnableCondition) {
      return true
    }
  }
  // Default to false
  return false
}

// Helper to check if a value is truthy (not empty/null/undefined)
const isTruthy = (value) => {
  return value !== undefined && value !== null && value !== '' && value !== 'undefined' && value !== 'null'
}

// Feature flags - run.sh sets these based on dedicated enabled flags in config.yaml
// In development mode, fallback to auto-enable if config values are present
export const ENABLE_WEATHER = getFeatureFlag('ENABLE_WEATHER', 
  isTruthy(WEATHER_API_KEY) || (isTruthy(WEATHER_LATITUDE) && isTruthy(WEATHER_LONGITUDE)))
export const ENABLE_HVV = getFeatureFlag('ENABLE_HVV', 
  isTruthy(GEOFOX_USER) && isTruthy(GEOFOX_SECRET))
export const ENABLE_GARAGE = getFeatureFlag('ENABLE_GARAGE', 
  isTruthy(ENTITY_GARAGE_DOOR))
export const ENABLE_LAUNDRY = getFeatureFlag('ENABLE_LAUNDRY', 
  Array.isArray(LAUNDRY_MACHINES) && LAUNDRY_MACHINES.length > 0)
export const ENABLE_DOORBELL = getFeatureFlag('ENABLE_DOORBELL', 
  isTruthy(ENTITY_DOORBELL) || isTruthy(ENTITY_DOORBELL_BUTTON))
export const ENABLE_EVERYDAY_CALENDAR = getFeatureFlag('ENABLE_EVERYDAY_CALENDAR', 
  isTruthy(ENTITY_EVERYDAY_CALENDAR))
export const ENABLE_EV = getFeatureFlag('ENABLE_EV', 
  isTruthy(ENTITY_PRECLIMATE_STATUS) || isTruthy(ENTITY_CHARGING_STATE) || isTruthy(ENTITY_STATE_OF_CHARGE))

// Helper function to build HA API URLs
// In production mode (add-on/ingress), use INGRESS_URL from bashio API when available
// This ensures requests go through the ingress proxy to the add-on's Apache, which then
// proxies to http://supervisor/core/api/ with SUPERVISOR_TOKEN authentication
// In development mode, use HASS_HOST if provided
export const buildHaUrl = (path) => {
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`

  // In production mode (add-on/ingress), use INGRESS_URL from bashio API when available
  // This is more reliable than reading from window.location, especially for cloud access
  if (!isDevelopment) {
    if (typeof window !== 'undefined' && window.location) {
      // Use INGRESS_URL from config if available (injected by run.sh from bashio API)
      if (INGRESS_URL && typeof INGRESS_URL === 'string' && INGRESS_URL.trim() !== '') {
        // INGRESS_URL has trailing slash, normalizedPath starts with /
        // Remove leading slash from normalizedPath to avoid double slashes
        const pathWithoutLeadingSlash = normalizedPath.startsWith('/') ? normalizedPath.slice(1) : normalizedPath
        return `${window.location.origin}${INGRESS_URL}${pathWithoutLeadingSlash}`
      }
      // Fallback to window.location.pathname if INGRESS_URL not available
      const basePath = window.location.pathname.replace(/\/$/, '')
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

// Helper function to build WebSocket host URL
// Uses INGRESS_URL from bashio API when available for reliable URL construction
// This is especially important for cloud access (e.g., Nabu Casa)
export const buildWebSocketHost = () => {
  // In development mode, use HASS_HOST if provided
  if (isDevelopment && HASS_HOST) {
    return HASS_HOST
  }

  // In production mode, use INGRESS_URL from config if available
  if (typeof window !== 'undefined' && window.location) {
    // Use INGRESS_URL from config if available (injected by run.sh from bashio API)
    if (INGRESS_URL && typeof INGRESS_URL === 'string' && INGRESS_URL.trim() !== '') {
      // Combine origin with ingress URL (INGRESS_URL has trailing slash)
      return `${window.location.origin}${INGRESS_URL.replace(/\/$/, '')}`
    }
    // Fallback to window.location.pathname if INGRESS_URL not available
    const basePath = window.location.pathname.replace(/\/$/, '')
    return `${window.location.origin}${basePath}`
  }

  return ''
}
