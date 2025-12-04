import {
  createLongLivedTokenAuth,
  createConnection,
} from 'home-assistant-js-websocket'
import React from 'react'
import axios from 'axios'
import { buildHaUrl, buildWebSocketHost, HASS_HOST, HASS_ACCESS_TOKEN, SUPERVISOR_TOKEN, isDevelopment } from './config'
import logger from './logger'
import { formatErrorForUI } from './axios-error-handler'

/**
 * Hook to fetch access tokens for camera entities
 * Returns a map of entity_id -> access_token
 * Subscribes to state_changed events via WebSocket to automatically refresh tokens
 */
export const useCameraAccessTokens = (cameraEntityIds) => {
  const [tokens, setTokens] = React.useState({})
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(null)

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
            const url = buildHaUrl(`/api/states/${entityId}`)
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
          setError(formatErrorForUI(err))
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
            const url = buildHaUrl(`/api/states/${entityId}`)
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

  // Subscribe to state changes via WebSocket
  React.useEffect(() => {
    // Skip if no camera entities provided
    if (!cameraEntityIds || cameraEntityIds.length === 0) {
      return
    }

    let connection = null
    let unsubscribes = []
    let isMounted = true
    let reconnectTimeout = null
    let reconnectAttempts = 0
    let isConnecting = false

    async function setupWebSocket() {
      // Prevent multiple simultaneous connection attempts
      if (isConnecting) {
        return
      }

      // Close existing connection if any
      if (connection) {
        try {
          unsubscribes.forEach(unsubscribe => {
            if (unsubscribe) {
              unsubscribe()
            }
          })
          unsubscribes = []
          connection.close()
        } catch (err) {
          logger.debug('Error closing existing WebSocket connection:', err)
        }
        connection = null
      }

      isConnecting = true
      // Use buildWebSocketHost() to get reliable host URL using INGRESS_URL from bashio API
      // The Apache proxy forwards /api/websocket to ws://supervisor/core/websocket
      // The supervisor WebSocket API uses the standard auth flow and accepts SUPERVISOR_TOKEN in the auth message
      const host = buildWebSocketHost()
      
      // In production, use SUPERVISOR_TOKEN if available, otherwise fall back to HASS_ACCESS_TOKEN
      // In development, use HASS_ACCESS_TOKEN
      const token = isDevelopment 
        ? (HASS_ACCESS_TOKEN || '')
        : (SUPERVISOR_TOKEN || HASS_ACCESS_TOKEN || '')

      // Skip WebSocket connection if no token
      if (!token) {
        logger.debug('Skipping WebSocket connection for camera tokens - no access token (using REST API only)')
        isConnecting = false
        return
      }

      let auth
      try {
        auth = createLongLivedTokenAuth(host, token)
        if (isMounted) setError(false)
      } catch (err) {
        if (isMounted) {
          logger.error('Failed to create WebSocket auth for camera tokens:', err)
          setError(err instanceof Error ? err.message : String(err))
        }
        isConnecting = false
        return
      }

      try {
        connection = await createConnection({ auth })

        // Handle connection ready event
        connection.addEventListener('ready', () => {
          if (isMounted) {
            logger.debug('WebSocket connection ready for camera tokens')
            reconnectAttempts = 0 // Reset reconnection attempts on successful connection
            setError(false) // Clear error state on successful connection
          }
        })

        // Handle disconnection events - attempt to reconnect
        connection.addEventListener('disconnected', () => {
          if (isMounted && !isConnecting) {
            logger.debug('WebSocket disconnected for camera tokens, will attempt to reconnect')
            // Clear any existing reconnect timeout
            if (reconnectTimeout) {
              clearTimeout(reconnectTimeout)
            }
            // Clear connection reference
            connection = null
            unsubscribes = []
            // Calculate exponential backoff delay
            const delay = Math.min(1000 * Math.pow(2, reconnectAttempts), 30000)
            reconnectAttempts++
            // Attempt to reconnect after delay
            reconnectTimeout = setTimeout(() => {
              if (isMounted && !isConnecting) {
                logger.debug(`Attempting to reconnect WebSocket for camera tokens (attempt ${reconnectAttempts})`)
                setupWebSocket()
              }
            }, delay)
          }
        })

        // Subscribe to state changes for each camera entity
        for (const entityId of cameraEntityIds) {
          const trigger = (result) => {
            if (isMounted) {
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
          }

          const unsubscribe = await connection.subscribeMessage(trigger, {
            "type": "subscribe_trigger",
            "trigger": {
              "platform": "state",
              "entity_id": entityId,
            }
          })
          
          unsubscribes.push(unsubscribe)
        }
        
        isConnecting = false
      } catch (err) {
        isConnecting = false
        if (isMounted) {
          logger.error('Failed to setup WebSocket connection for camera tokens:', err)
          setError(err instanceof Error ? err.message : String(err))
          // Attempt to reconnect after a delay with exponential backoff
          const delay = Math.min(1000 * Math.pow(2, reconnectAttempts), 30000)
          reconnectAttempts++
          reconnectTimeout = setTimeout(() => {
            if (isMounted) {
              logger.debug(`Attempting to reconnect WebSocket for camera tokens after error (attempt ${reconnectAttempts})`)
              setupWebSocket()
            }
          }, delay)
        }
      }
    }

    setupWebSocket()

    return () => {
      isMounted = false
      // Clear reconnect timeout
      if (reconnectTimeout) {
        clearTimeout(reconnectTimeout)
      }
      // Unsubscribe from all state change subscriptions
      unsubscribes.forEach(unsubscribe => {
        if (unsubscribe) {
          unsubscribe()
        }
      })
      if (connection) {
        connection.close()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cameraEntityIds?.length, cameraEntityIds?.join(',')]) // Re-subscribe if entity IDs change

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
export const buildCameraStreamUrl = (entityId, accessToken = null) => {
  if (!entityId) {
    return null
  }

  // In DEV directly construct the URL
  if (isDevelopment) {
    return `${HASS_HOST}/api/camera_proxy_stream/${entityId}?token=${accessToken}`
  }
  
  // Build path with access_token if provided
  let path = `/api/camera_proxy_stream/${entityId}`
  if (accessToken) {
    path = `${path}?token=${encodeURIComponent(accessToken)}`
  }
  
  // Camera streams go directly to HA host (bypass ingress proxy)
  // Use current window location's host and port to construct direct HA URL
  if (typeof window !== 'undefined' && window.location) {
    // Use same protocol, hostname, and port from current URL
    const protocol = window.location.protocol
    const host = window.location.host // includes hostname:port
    return `${protocol}//${host}${path}`
  }
  
  // Fallback: use buildHaUrl if window is not available (SSR or test)
  return path
}