import {
  createLongLivedTokenAuth,
  createConnection,
} from 'home-assistant-js-websocket'
import React from 'react'
import axios from 'axios'
import { useConfig } from './ConfigProvider'
import { buildHaUrl, buildWebSocketHost, isDevelopment } from './config'
import logger from './logger'
import { formatErrorForUI } from './axios-error-handler'

/**
 * Hook to fetch access tokens for camera entities
 * Returns a map of entity_id -> access_token
 * Subscribes to state_changed events via WebSocket to automatically refresh tokens
 */
export const useCameraAccessTokens = (cameraEntityIds) => {
  const config = useConfig()
  const HASS_HOST = config.HASS_HOST || ''
  const HASS_ACCESS_TOKEN = config.HASS_ACCESS_TOKEN || ''
  const SUPERVISOR_TOKEN = config.SUPERVISOR_TOKEN || ''

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
    const MAX_RECONNECT_ATTEMPTS = 5 // Limit reconnection attempts to prevent infinite loops
    let isConnecting = false
    let readyHandler = null
    let disconnectedHandler = null

    async function setupWebSocket() {
      // Prevent multiple simultaneous connection attempts
      if (isConnecting || !isMounted) {
        return
      }

      // Close existing connection if any
      if (connection) {
        try {
          // Remove event listeners before closing
          if (readyHandler) {
            connection.removeEventListener('ready', readyHandler)
            readyHandler = null
          }
          if (disconnectedHandler) {
            connection.removeEventListener('disconnected', disconnectedHandler)
            disconnectedHandler = null
          }
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
      // Use buildWebSocketHost() to get reliable host URL using INGRESS_URL from config API
      // The Apache proxy forwards /api/websocket to ws://supervisor/core/websocket
      // The supervisor WebSocket API uses the standard auth flow and accepts SUPERVISOR_TOKEN in the auth message
      const host = buildWebSocketHost(config)
      
      // In production, use SUPERVISOR_TOKEN if available, otherwise fall back to HASS_ACCESS_TOKEN
      // In development, use HASS_ACCESS_TOKEN
      const token = isDevelopment 
        ? (HASS_ACCESS_TOKEN || '')
        : (SUPERVISOR_TOKEN || HASS_ACCESS_TOKEN || '')
      
      logger.debug('Camera tokens WebSocket auth:', { isDevelopment, hasSupervisorToken: !!SUPERVISOR_TOKEN, hasAccessToken: !!HASS_ACCESS_TOKEN })

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
        readyHandler = () => {
          if (isMounted) {
            logger.debug('WebSocket connection ready for camera tokens')
            reconnectAttempts = 0 // Reset reconnection attempts on successful connection
            setError(false) // Clear error state on successful connection
          }
        }
        connection.addEventListener('ready', readyHandler)

        // Handle disconnection events - attempt to reconnect
        disconnectedHandler = () => {
          if (isMounted && !isConnecting) {
            logger.debug('WebSocket disconnected for camera tokens, will attempt to reconnect')
            // Clear any existing reconnect timeout
            if (reconnectTimeout) {
              clearTimeout(reconnectTimeout)
              reconnectTimeout = null
            }
            // Stop reconnecting if we've exceeded max attempts
            if (reconnectAttempts >= MAX_RECONNECT_ATTEMPTS) {
              logger.warn(`Max reconnection attempts (${MAX_RECONNECT_ATTEMPTS}) reached for camera tokens, stopping reconnection`)
              if (isMounted) {
                setError('Verbindung verloren. Bitte Seite neu laden.')
              }
              return
            }
            // Clear connection reference
            connection = null
            unsubscribes = []
            readyHandler = null
            disconnectedHandler = null
            // Calculate exponential backoff delay
            const delay = Math.min(1000 * Math.pow(2, reconnectAttempts), 30000)
            reconnectAttempts++
            // Attempt to reconnect after delay
            reconnectTimeout = setTimeout(() => {
              if (isMounted && !isConnecting && reconnectAttempts <= MAX_RECONNECT_ATTEMPTS) {
                logger.debug(`Attempting to reconnect WebSocket for camera tokens (attempt ${reconnectAttempts}/${MAX_RECONNECT_ATTEMPTS})`)
                setupWebSocket()
              }
            }, delay)
          }
        }
        connection.addEventListener('disconnected', disconnectedHandler)

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
          // Only attempt to reconnect if we haven't exceeded max attempts
          if (reconnectAttempts < MAX_RECONNECT_ATTEMPTS) {
            const delay = Math.min(1000 * Math.pow(2, reconnectAttempts), 30000)
            reconnectAttempts++
            reconnectTimeout = setTimeout(() => {
              if (isMounted && !isConnecting && reconnectAttempts <= MAX_RECONNECT_ATTEMPTS) {
                logger.debug(`Attempting to reconnect WebSocket for camera tokens after error (attempt ${reconnectAttempts}/${MAX_RECONNECT_ATTEMPTS})`)
                setupWebSocket()
              }
            }, delay)
          } else {
            logger.warn(`Max reconnection attempts (${MAX_RECONNECT_ATTEMPTS}) reached for camera tokens, stopping reconnection`)
            if (isMounted) {
              setError('Verbindung fehlgeschlagen. Bitte Seite neu laden.')
            }
          }
        }
      }
    }

    setupWebSocket()

    return () => {
      isMounted = false
      isConnecting = false
      // Clear reconnect timeout
      if (reconnectTimeout) {
        clearTimeout(reconnectTimeout)
        reconnectTimeout = null
      }
      // Remove event listeners
      if (connection) {
        try {
          if (readyHandler) {
            connection.removeEventListener('ready', readyHandler)
          }
          if (disconnectedHandler) {
            connection.removeEventListener('disconnected', disconnectedHandler)
          }
        } catch (err) {
          logger.debug('Error removing WebSocket event listeners for camera tokens:', err)
        }
      }
      // Unsubscribe from all state change subscriptions
      unsubscribes.forEach(unsubscribe => {
        if (unsubscribe) {
          try {
            unsubscribe()
          } catch (err) {
            logger.debug('Error unsubscribing from WebSocket for camera tokens:', err)
          }
        }
      })
      unsubscribes = []
      // Close connection
      if (connection) {
        try {
          connection.close()
        } catch (err) {
          logger.debug('Error closing WebSocket connection for camera tokens:', err)
        }
        connection = null
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