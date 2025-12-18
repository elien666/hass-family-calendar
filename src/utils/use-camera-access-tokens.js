import React from 'react'
import axios from 'axios'
import { useConfig } from './ConfigProvider'
import { buildHaUrl } from './config'
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

  // Initial fetch via REST API
  React.useEffect(() => {
    // Skip if no camera entities provided
    if (!cameraEntityIds || cameraEntityIds.length === 0) {
      setLoading(false)
      return
    }

    let isMounted = true

    async function fetchTokens() {
      setLoading(true)
      setError(null)

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
        
        if (isMounted) {
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
        if (isMounted) {
          logger.error('Failed to fetch camera access tokens:', err)
          setRestError(formatErrorForUI(err))
          setLoading(false)
        }
      }
    }

    fetchTokens()

    return () => {
      isMounted = false
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
    onReady: async (connection) => {
      // Subscribe to state changes for each camera entity
      const unsubscribes = []
      for (const entityId of cameraEntityIds) {
        const trigger = (result) => {
          const newState = result.variables.trigger.to_state
          const accessToken = newState?.attributes?.access_token || null
          
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

        const unsubscribe = await connection.subscribeMessage(trigger, {
          type: 'subscribe_trigger',
          trigger: {
            platform: 'state',
            entity_id: entityId,
          },
        })
        
        unsubscribes.push(unsubscribe)
      }
      logger.debug(`Subscribed to camera entity state changes: ${cameraEntityIds.join(', ')}`)
      return unsubscribes
    },
    dependencies: [cameraEntityIds?.length, cameraEntityIds?.join(',')],
  })

  // Combine REST and WebSocket errors
  const error = restError || wsError || null

  return [tokens, loading, error]
}

// Helper function to build HA camera stream URL
// Uses the HA camera proxy stream API endpoint with access_token as query parameter
// Format: <protocol>//<host>/api/camera_proxy_stream/<camera entity_id>?token=<access_token>
// Camera streams must go directly to HA host (bypassing ingress proxy) for better performance
// Uses the current window location's protocol, hostname, and port
// Based on advanced-camera-card implementation pattern
// entityId should be the full entity ID (e.g., "camera.front_door")
// accessToken is the access_token from camera entity attributes (optional - will work without but may have auth issues)
// Video elements can't send Authorization headers, so token is passed as query parameter
export const buildCameraStreamUrl = (entityId, accessToken = null, hassHost = null) => {
  if (!entityId) {
    return null
  }

  let host = hassHost || ''
  
  // In production (HA add-on), HASS_HOST might be empty
  // Try to construct from window.location if available
  if (!host && !isDevelopment && typeof window !== 'undefined' && window.location) {
    // In production, try to use window.location to construct HA host
    // This assumes the app is served from the same origin as HA
    // For ingress, this might not work - camera streams may need to go through proxy
    const protocol = window.location.protocol
    const hostname = window.location.hostname
    const port = window.location.port ? `:${window.location.port}` : ''
    host = `${protocol}//${hostname}${port}`
  }
  
  if (!host) {
    logger.warn('HASS_HOST not configured and cannot derive from window.location, cannot build camera stream URL')
    return null
  }
  
  // Build direct URL to HA camera stream endpoint
  const url = `${host}/api/camera_proxy_stream/${entityId}`
  if (accessToken) {
    return `${url}?token=${encodeURIComponent(accessToken)}`
  }
  return url
}