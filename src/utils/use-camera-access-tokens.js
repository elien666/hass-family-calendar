import axios from 'axios'
import { buildHaUrl, isDevelopment } from './config'
import logger from './logger'
import { formatErrorForUI } from './axios-error-handler'

/**
 * Fetch access tokens for camera entities on demand
 * Returns a map of entity_id -> access_token
 * No caching - always fetches fresh tokens
 */
export const fetchCameraAccessTokens = async (cameraEntityIds, config) => {
  if (!cameraEntityIds || cameraEntityIds.length === 0) {
    return { tokens: {}, error: null }
  }

  try {
    // Fetch all camera entity states in parallel
    const fetchPromises = cameraEntityIds.map(async (entityId) => {
      try {
        const url = buildHaUrl(`/api/states/${entityId}`, config)
        const response = await axios(url)
        
        // Extract access_token from entity attributes
        const accessToken = response.data?.attributes?.access_token || null
        
        return { entityId, accessToken }
      } catch (err) {
        logger.error(`Failed to fetch access token for ${entityId}:`, err)
        return { entityId, accessToken: null }
      }
    })

    const results = await Promise.all(fetchPromises)
    
    // Build map of entity_id -> access_token
    const tokenMap = {}
    results.forEach(({ entityId, accessToken }) => {
      if (accessToken) {
        tokenMap[entityId] = accessToken
      }
    })
    
    return { tokens: tokenMap, error: null }
  } catch (err) {
    logger.error('Failed to fetch camera access tokens:', err)
    return { tokens: {}, error: formatErrorForUI(err) }
  }
}

// Helper function to build camera stream URL
// Always goes through FastAPI backend proxy (not directly to HA)
// In development: http://localhost:8000/api/camera_proxy_stream/...
// In production: /api/camera_proxy_stream/... (relative URL, backend is already behind ingress)
// The backend will proxy the request to Home Assistant with proper authentication
// Format: <backend>/api/camera_proxy_stream/<camera entity_id>?token=<access_token>
// Video elements can't send Authorization headers, so token is passed as query parameter
export const buildCameraStreamUrl = (entityId, accessToken = null, config = {}) => {
  if (!entityId) {
    return null
  }

  // Camera streams should ALWAYS go through the backend proxy, not directly to HA
  // Even when using ingress, the backend is already behind ingress, so use relative URL
  let url
  if (isDevelopment) {
    // Development: use backend directly
    url = `http://localhost:8000/api/camera_proxy_stream/${entityId}`
  } else {
    // Production: use relative URL (backend is already behind ingress)
    // This ensures the request goes through the backend proxy, not directly to HA
    url = `/api/camera_proxy_stream/${entityId}`
  }
  
  // Add access token as query parameter if provided
  if (accessToken) {
    const separator = url.includes('?') ? '&' : '?'
    url = `${url}${separator}token=${encodeURIComponent(accessToken)}`
  }
  
  return url
}