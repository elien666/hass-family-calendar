import axios from 'axios'
import { buildHaUrl } from './config'
import logger from './logger'
import { formatErrorForUI } from './axios-error-handler'

/**
 * Fetch access token for a single camera entity with timeout and retry
 * @param {string} entityId - Camera entity ID
 * @param {object} config - Configuration object
 * @param {AbortSignal} signal - AbortSignal for cancellation
 * @returns {Promise<{entityId: string, accessToken: string|null, error: string|null}>}
 */
const fetchSingleToken = async (entityId, config, signal) => {
  const url = buildHaUrl(`/api/states/${entityId}`, config)
  const response = await axios(url, {
    timeout: 10000, // 10 second timeout (camera entities can be slow, backend proxy has 30s timeout)
    signal
  })

  // Extract access_token from entity attributes
  const accessToken = response.data?.attributes?.access_token || null

  if (!accessToken) {
    const entityState = response.data?.state || 'unknown'
    const attrKeys = Object.keys(response.data?.attributes || {})
    logger.warn(`Camera entity ${entityId} has no access_token attribute. State: ${entityState}, attributes: [${attrKeys.join(', ')}]`)
  }

  return { entityId, accessToken, error: accessToken ? null : `Kein access_token für ${entityId}` }
}

/** Simple delay helper for retry backoff */
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

/**
 * Fetch access tokens for camera entities on demand with timeout and retry
 * Returns a map of entity_id -> access_token
 * No caching - always fetches fresh tokens
 *
 * @param {string[]} cameraEntityIds - Camera entity IDs to fetch tokens for
 * @param {object} config - Configuration object
 * @param {AbortSignal} [signal] - Optional external AbortSignal for cancellation
 */
export const fetchCameraAccessTokens = async (cameraEntityIds, config, signal) => {
  if (!cameraEntityIds || cameraEntityIds.length === 0) {
    return { tokens: {}, error: null }
  }

  // Use external signal if provided, otherwise create internal one
  const internalController = signal ? null : new AbortController()
  const effectiveSignal = signal || internalController.signal
  const MAX_ATTEMPTS = 3

  try {
    // Fetch all camera entity states in parallel with retry logic
    const fetchPromises = cameraEntityIds.map(async (entityId) => {
      let lastError = null
      let lastErrorDetail = null

      for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt++) {
        try {
          const result = await fetchSingleToken(entityId, config, effectiveSignal)
          return result
        } catch (err) {
          lastError = err

          // Don't retry if aborted
          if (effectiveSignal.aborted) {
            return { entityId, accessToken: null, error: 'Abgebrochen' }
          }

          // Retry on network errors, timeouts, AND server errors (502/504 from backend proxy)
          const httpStatus = err.response?.status
          const isNetworkError = err.code === 'ECONNABORTED' || err.code === 'ERR_NETWORK' || err.message?.includes('timeout')
          const isServerError = httpStatus >= 500
          const isRetryable = isNetworkError || isServerError

          lastErrorDetail = httpStatus
            ? `HTTP ${httpStatus}: ${err.response?.data?.detail || err.message}`
            : `${err.code || 'Error'}: ${err.message}`

          if (isRetryable && attempt < MAX_ATTEMPTS - 1) {
            const backoff = 1000 * Math.pow(2, attempt) // 1s, 2s
            logger.debug(`Token fetch failed for ${entityId} (attempt ${attempt + 1}): ${lastErrorDetail}, retrying in ${backoff}ms...`)
            await delay(backoff)
            continue
          }

          logger.error(`Failed to fetch access token for ${entityId} (attempt ${attempt + 1}/${MAX_ATTEMPTS}): ${lastErrorDetail}`)
          return { entityId, accessToken: null, error: lastErrorDetail }
        }
      }

      const detail = lastError ? (lastErrorDetail || lastError.message) : 'Unknown error'
      logger.error(`Failed to fetch access token for ${entityId} after ${MAX_ATTEMPTS} attempts: ${detail}`)
      return { entityId, accessToken: null, error: detail }
    })

    const results = await Promise.all(fetchPromises)

    // Build map of entity_id -> access_token and collect per-camera errors
    const tokenMap = {}
    const errors = []
    results.forEach(({ entityId, accessToken, error: tokenError }) => {
      if (accessToken) {
        tokenMap[entityId] = accessToken
      } else {
        errors.push(`${entityId}: ${tokenError || 'Kein Token'}`)
      }
    })

    // If we have some tokens but not all, that's still a partial success
    // If we have no tokens at all, return a detailed error
    if (Object.keys(tokenMap).length === 0 && errors.length > 0) {
      const errorSummary = errors.join(' | ')
      logger.error(`Camera token fetch failed for all cameras: ${errorSummary}`)
      return {
        tokens: {},
        error: `Kamera-Token Fehler: ${errorSummary}`
      }
    }

    return { tokens: tokenMap, error: null }
  } catch (err) {
    // Cleanup on abort
    if (effectiveSignal.aborted) {
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