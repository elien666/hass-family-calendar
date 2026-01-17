import axios from 'axios'
import { buildHaUrl, isDevelopment } from './config'
import logger from './logger'
import { formatErrorForUI } from './axios-error-handler'

/**
 * Fetch access token for a single camera entity with timeout and retry
 * @param {string} entityId - Camera entity ID
 * @param {object} config - Configuration object
 * @param {AbortController} abortController - AbortController for cancellation
 * @returns {Promise<{entityId: string, accessToken: string|null}>}
 */
const fetchSingleToken = async (entityId, config, abortController) => {
  const url = buildHaUrl(`/api/states/${entityId}`, config)
  const response = await axios(url, {
    timeout: 2000, // 2 second timeout
    signal: abortController.signal
  })
  
  // Extract access_token from entity attributes
  const accessToken = response.data?.attributes?.access_token || null
  return { entityId, accessToken }
}

/**
 * Fetch access tokens for camera entities on demand with timeout and retry
 * Returns a map of entity_id -> access_token
 * No caching - always fetches fresh tokens
 * 
 * If a request times out, it will automatically retry once.
 * If both attempts fail, an error is returned.
 */
export const fetchCameraAccessTokens = async (cameraEntityIds, config) => {
  if (!cameraEntityIds || cameraEntityIds.length === 0) {
    return { tokens: {}, error: null }
  }

  const abortController = new AbortController()
  const TIMEOUT_MS = 2000 // 2 seconds

  try {
    // Fetch all camera entity states in parallel with retry logic
    const fetchPromises = cameraEntityIds.map(async (entityId) => {
      let lastError = null
      
      // Try up to 2 times (initial attempt + 1 retry)
      for (let attempt = 0; attempt < 2; attempt++) {
        try {
          const result = await fetchSingleToken(entityId, config, abortController)
          return result
        } catch (err) {
          lastError = err
          
          // Check if it's a timeout error
          const isTimeout = err.code === 'ECONNABORTED' || err.message?.includes('timeout')
          
          if (isTimeout && attempt === 0) {
            // First attempt timed out, log and retry
            logger.debug(`Token fetch timeout for ${entityId}, retrying...`)
            continue
          } else {
            // Second attempt failed or non-timeout error, log and return null
            logger.error(`Failed to fetch access token for ${entityId} (attempt ${attempt + 1}):`, err)
            return { entityId, accessToken: null }
          }
        }
      }
      
      // If we get here, both attempts failed
      logger.error(`Failed to fetch access token for ${entityId} after 2 attempts:`, lastError)
      return { entityId, accessToken: null }
    })

    const results = await Promise.all(fetchPromises)
    
    // Build map of entity_id -> access_token
    const tokenMap = {}
    let hasErrors = false
    results.forEach(({ entityId, accessToken }) => {
      if (accessToken) {
        tokenMap[entityId] = accessToken
      } else {
        hasErrors = true
      }
    })
    
    // If we have some tokens but not all, that's still a partial success
    // If we have no tokens at all, return an error
    if (Object.keys(tokenMap).length === 0 && hasErrors) {
      return { 
        tokens: {}, 
        error: 'Timeout: Kamera-Token konnten nicht geladen werden. Bitte erneut versuchen.' 
      }
    }
    
    return { tokens: tokenMap, error: null }
  } catch (err) {
    // Cleanup on abort
    if (abortController.signal.aborted) {
      return { tokens: {}, error: null }
    }
    
    logger.error('Failed to fetch camera access tokens:', err)
    return { tokens: {}, error: formatErrorForUI(err) }
  }
}

// Helper function to build camera stream URL
// Goes directly to Home Assistant (not through backend proxy)
// In development: uses HASS_HOST from config (e.g., https://home.gaworski.de)
// In production: uses HASS_HOST from config or current origin
// Format: <hass_host>/api/camera_proxy_stream/<camera entity_id>?token=<access_token>
// Video elements can't send Authorization headers, so token is passed as query parameter
export const buildCameraStreamUrl = (entityId, accessToken = null, config = {}) => {
  if (!entityId) {
    return null
  }

  // Get Home Assistant host from config
  let baseUrl
  const hassHost = config.HASS_HOST || ''
  
  if (hassHost && hassHost !== 'undefined' && hassHost !== 'null') {
    // Use HASS_HOST from config (remove trailing slash if present)
    baseUrl = hassHost.replace(/\/$/, '')
  } else if (typeof window !== 'undefined' && window.location) {
    // Fallback to current origin if HASS_HOST not available
    baseUrl = window.location.origin
  } else {
    // Last resort fallback
    return null
  }
  
  // Build direct Home Assistant camera stream URL
  const url = `${baseUrl}/api/camera_proxy_stream/${entityId}`
  
  // Add access token as query parameter if provided
  if (accessToken) {
    const separator = url.includes('?') ? '&' : '?'
    return `${url}${separator}token=${encodeURIComponent(accessToken)}`
  }
  
  return url
}