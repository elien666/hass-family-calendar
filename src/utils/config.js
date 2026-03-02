import axios from 'axios'
import { logAxiosError, logAxiosSuccess } from './axios-error-handler'
import logger from './logger'

// Re-export from ConfigProvider for convenience
export { 
  useConfig, 
  useConfigLoading, 
  useConfigError, 
  useIsUsingCachedConfig, 
  useReloadConfig 
} from './ConfigProvider'

// Global connection check trigger (set by ConnectionStateProvider)
// This allows axios interceptors (which run outside React) to trigger connection checks
let globalConnectionCheckTrigger = null

export const setGlobalConnectionCheckTrigger = (trigger) => {
  globalConnectionCheckTrigger = trigger
}

// Use Vite's built-in DEV mode to detect development vs production
// import.meta.env.DEV is true when running `pnpm start` (dev server)
// import.meta.env.DEV is false when running `pnpm run build` (production build)
// Vite will replace this at build time, so it's safe to use directly
// eslint-disable-next-line no-undef
export const isDevelopment = import.meta.env.DEV

// All configuration is now loaded via the /api/config endpoint
// Components should use useConfig() hook from ConfigProvider for reactive values
// Utility functions like buildHaUrl and buildWebSocketHost accept config as parameter

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
    // Request setup error - but skip if it's from the log endpoint to prevent infinite loops
    const isLogEndpointError = error.config?.url?.includes('/api/log') || 
                                error.config?.url?.endsWith('/api/log')
    if (!isLogEndpointError) {
      logger.error('Axios Request Setup Error:', error)
    }
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
    // CRITICAL: Skip logging errors from /api/log endpoint to prevent infinite loops
    const isLogEndpointError = error.config?.url?.includes('/api/log') || 
                                error.config?.url?.endsWith('/api/log')
    
    // Skip connection check for health check requests to avoid loops
    const isHealthCheck = error.config?.metadata?.skipConnectionCheck === true
    
    if (!isLogEndpointError) {
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

      // Trigger connection check on network errors
      if (!isHealthCheck && globalConnectionCheckTrigger) {
        const isNetworkError = !error.response && (
          error.code === 'ERR_NETWORK' || 
          error.code === 'ECONNABORTED' ||
          error.code === 'ERR_CANCELED'
        )
        
        if (isNetworkError) {
          logger.debug('Network error detected - triggering connection check')
          globalConnectionCheckTrigger()
        }
      }
    }
    
    // Reject the promise to allow individual error handlers to process the error
    return Promise.reject(error)
  }
)

// Helper function to build HA API URLs
// Accepts config object from useConfig() hook
// In production mode (add-on/ingress), uses INGRESS_URL from config API
// In development mode, uses HASS_HOST from config if provided
export const buildHaUrl = (path, config = {}) => {
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`

  // In development mode, always use the FastAPI backend proxy
  // The backend will proxy requests to Home Assistant
  if (isDevelopment) {
    return `http://localhost:8000${normalizedPath}`
  }

  // In production mode (add-on/ingress)
  if (typeof window !== 'undefined' && window.location) {
    // Check if we're accessing through ingress by looking at the current pathname
    // Ingress URLs look like: /api/hassio_ingress/.../
    const isIngress = window.location.pathname.includes('/api/hassio_ingress/')
    
    if (isIngress) {
      // When accessed through ingress, we need to include the ingress path
      // Extract the ingress base path from current location
      const ingressMatch = window.location.pathname.match(/^(\/api\/hassio_ingress\/[^\/]+\/)/)
      if (ingressMatch) {
        const ingressBase = ingressMatch[1]
        // Remove leading slash from normalizedPath to avoid double slashes
        const pathWithoutLeadingSlash = normalizedPath.startsWith('/') ? normalizedPath.slice(1) : normalizedPath
        return `${ingressBase}${pathWithoutLeadingSlash}`
      }
    }
    
    // If not through ingress, or couldn't extract ingress path, use relative URL
    // This will resolve relative to current origin
    return normalizedPath
  }

  // Fallback to relative URL if window is not available
  return normalizedPath
}

// Helper function to build WebSocket host URL
// Accepts config object from useConfig() hook
// Uses INGRESS_URL from config API for reliable URL construction
export const buildWebSocketHost = (config = {}) => {
  // In development mode, use HASS_HOST from config if provided
  if (isDevelopment) {
    const host = config.HASS_HOST || ''
    if (host && host !== "undefined" && host !== "null") {
      return host
    }
  }

  // In production mode, use INGRESS_URL from config API if available
  if (typeof window !== 'undefined' && window.location) {
    const ingressUrl = config.INGRESS_URL || ''
    if (ingressUrl && typeof ingressUrl === 'string' && ingressUrl.trim() !== '') {
      // Combine origin with ingress URL (INGRESS_URL has trailing slash)
      return `${window.location.origin}${ingressUrl.replace(/\/$/, '')}`
    }
    // Fallback to window.location.pathname if INGRESS_URL not available
    const basePath = window.location.pathname.replace(/\/$/, '')
    return `${window.location.origin}${basePath}`
  }

  return ''
}

// Helper function to build WebSocket URL (including /api/websocket endpoint)
// Accepts config object from useConfig() hook
// Uses INGRESS_URL from config API for reliable URL construction
// This is used to override the WebSocket URL in createConnection
export const buildWebSocketUrl = (config = {}) => {
  const host = buildWebSocketHost(config)
  if (!host) {
    return ''
  }
  
  // Ensure the URL ends with /api/websocket
  // Convert http:// to ws:// and https:// to wss://
  const protocol = host.startsWith('https://') ? 'wss://' : 'ws://'
  const hostWithoutProtocol = host.replace(/^https?:\/\//, '')
  return `${protocol}${hostWithoutProtocol}/api/websocket`
}
