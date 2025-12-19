import React from 'react'
import axios from 'axios'
import { useConfig } from './ConfigProvider'
import { buildHaUrl, isDevelopment } from './config'
import logger from './logger'
import { formatErrorForUI } from './axios-error-handler'
import { useHomeAssistantWebSocket } from './use-home-assistant-websocket'

/**
 * Hook to fetch access tokens for camera entities
 * Returns a map of entity_id -> access_token
 * Subscribes to state_changed events via WebSocket to automatically refresh tokens
 */
export const useCameraAccessTokens = (cameraEntityIds) => {
  const config = useConfig()
  const HASS_HOST = config.HASS_HOST || ''

  const [tokens, setTokens] = React.useState({})
  const [loading, setLoading] = React.useState(true)
  const [restError, setRestError] = React.useState(null)
  const isMountedRef = React.useRef(true)

  // Initial fetch via REST API
  React.useEffect(() => {
    // Skip if no camera entities provided
    if (!cameraEntityIds || cameraEntityIds.length === 0) {
      setLoading(false)
      return
    }

    isMountedRef.current = true

    async function fetchTokens() {
      setLoading(true)
      setRestError(null)

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
        
        if (isMountedRef.current) {
          // Build map of entity_id -> access_token
          const tokenMap = {}
          results.forEach(({ entityId, accessToken }) => {
            if (accessToken) {
              tokenMap[entityId] = accessToken
            }
          })
          
          setTokens(tokenMap)
          setLoading(false)
        }
      } catch (err) {
        if (isMountedRef.current) {
          logger.error('Failed to fetch camera access tokens:', err)
          setRestError(formatErrorForUI(err))
          setLoading(false)
        }
      }
    }

    fetchTokens()

    return () => {
      isMountedRef.current = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cameraEntityIds?.length, cameraEntityIds?.join(',')]) // Re-fetch if entity IDs change

  // Periodic token refresh to ensure tokens stay valid over long periods
  React.useEffect(() => {
    // Skip if no camera entities provided
    if (!cameraEntityIds || cameraEntityIds.length === 0) {
      return
    }

    let isMounted = true
    let refreshInterval = null

    async function refreshTokens() {
      if (!isMounted) return

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
            logger.debug(`Failed to refresh access token for ${entityId}:`, err)
            // Don't return null - keep existing token if refresh fails
            return null
          }
        })

        const results = await Promise.all(fetchPromises)
        
        if (isMounted) {
          // Update tokens map with refreshed tokens
          setTokens(prevTokens => {
            const updated = { ...prevTokens }
            results.forEach((result) => {
              if (result && result.accessToken) {
                updated[result.entityId] = result.accessToken
              }
              // If refresh failed for an entity, keep existing token (don't remove it)
            })
            return updated
          })
        }
      } catch (err) {
        if (isMounted) {
          logger.debug('Failed to refresh camera access tokens:', err)
          // Don't clear tokens on refresh failure - keep existing tokens
        }
      }
    }

    // Refresh tokens every 5 minutes to ensure they stay valid
    // Camera access tokens in Home Assistant can expire or be regenerated
    refreshInterval = setInterval(refreshTokens, 5 * 60 * 1000)

    return () => {
      isMounted = false
      if (refreshInterval) {
        clearInterval(refreshInterval)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cameraEntityIds?.length, cameraEntityIds?.join(',')]) // Re-setup if entity IDs change

  // WebSocket subscription for automatic token refresh
  const { error: wsError } = useHomeAssistantWebSocket({
    enabled: !!(cameraEntityIds && cameraEntityIds.length > 0),
    checkBackendConnection: false, // Camera tokens hook doesn't check backend connection
    reconnectStrategy: 'exponential',
    maxReconnectAttempts: 5,
    reconnectDelay: 1000,
    logPrefix: 'camera tokens',
    onReady: (connection, subscriptionsRef) => {
      // Create callback for state updates
      const callback = (data) => {
        const entityId = data.entity_id
        const attributes = data.attributes || {}
        const accessToken = attributes.access_token || null
              
              // Update tokens map with new token for this entity
              // Only update if a valid token is provided - don't remove existing tokens
              // if access_token is missing from state update (it may still be valid)
              setTokens(prevTokens => {
                if (accessToken) {
                  // Only update if we have a new valid token
                  return { ...prevTokens, [entityId]: accessToken }
                }
                // Don't remove token if it's missing from state update - keep existing token
                // State updates may not always include access_token, but the token may still be valid
                return prevTokens
              })
            }

      // Subscribe to all camera entities
      if (connection.readyState === WebSocket.OPEN) {
        cameraEntityIds.forEach(entityId => {
          // Register callback for this entity
          subscriptionsRef.current.set(entityId, callback)
          
          // Subscribe to entity
          connection.send(JSON.stringify({
            type: 'subscribe_entity',
            entity_id: entityId
          }))
        })
        logger.debug(`Subscribed to camera entity state changes: ${cameraEntityIds.join(', ')}`)
      }

      // Return unsubscribe function
    return () => {
        cameraEntityIds.forEach(entityId => {
          subscriptionsRef.current.delete(entityId)
          if (connection.readyState === WebSocket.OPEN) {
            connection.send(JSON.stringify({
              type: 'unsubscribe_entity',
              entity_id: entityId
            }))
        }
        })
      }
    },
    dependencies: [cameraEntityIds?.length, cameraEntityIds?.join(',')],
  })

  // Manual refresh function for tokens
  const refreshTokens = React.useCallback(async () => {
    if (!cameraEntityIds || cameraEntityIds.length === 0) {
      return
    }

    setLoading(true)
    setRestError(null)

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
          logger.error(`Failed to refresh access token for ${entityId}:`, err)
          return { entityId, accessToken: null }
        }
      })

      const results = await Promise.all(fetchPromises)
      
      if (isMountedRef.current) {
        // Build map of entity_id -> access_token
        const tokenMap = {}
        results.forEach(({ entityId, accessToken }) => {
          if (accessToken) {
            tokenMap[entityId] = accessToken
          }
        })
        
        setTokens(prevTokens => ({ ...prevTokens, ...tokenMap }))
        setLoading(false)
      }
    } catch (err) {
      if (isMountedRef.current) {
        logger.error('Failed to refresh camera access tokens:', err)
        setRestError(formatErrorForUI(err))
        setLoading(false)
      }
    }
  }, [cameraEntityIds, config])

  // Cleanup on unmount
  React.useEffect(() => {
    return () => {
      isMountedRef.current = false
    }
  }, [])

  // Combine REST and WebSocket errors
  const error = restError || wsError || null

  return [tokens, loading, error, refreshTokens]
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