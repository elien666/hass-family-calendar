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
    timeout: 5000, // 5 second timeout (camera entities can be slow)
    signal: abortController.signal
  })

  // Extract access_token from entity attributes
  const accessToken = response.data?.attributes?.access_token || null
  return { entityId, accessToken }
}

/** Simple delay helper for retry backoff */
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

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
  const MAX_ATTEMPTS = 3

  try {
    // Fetch all camera entity states in parallel with retry logic
    const fetchPromises = cameraEntityIds.map(async (entityId) => {
      let lastError = null

      for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt++) {
        try {
          const result = await fetchSingleToken(entityId, config, abortController)
          return result
        } catch (err) {
          lastError = err
          const isRetryable = err.code === 'ECONNABORTED' || err.code === 'ERR_NETWORK' || err.message?.includes('timeout')

          if (isRetryable && attempt < MAX_ATTEMPTS - 1) {
            const backoff = 1000 * Math.pow(2, attempt) // 1s, 2s
            logger.debug(`Token fetch failed for ${entityId} (attempt ${attempt + 1}), retrying in ${backoff}ms...`)
            await delay(backoff)
            continue
          }

          logger.error(`Failed to fetch access token for ${entityId} (attempt ${attempt + 1}/${MAX_ATTEMPTS}):`, err)
          return { entityId, accessToken: null }
        }
      }

      logger.error(`Failed to fetch access token for ${entityId} after ${MAX_ATTEMPTS} attempts:`, lastError)
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