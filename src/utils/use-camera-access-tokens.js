import {
  createLongLivedTokenAuth,
  createConnection,
} from 'home-assistant-js-websocket'
import React from 'react'
import axios from 'axios'
import { buildHaUrl, HASS_HOST, HASS_ACCESS_TOKEN, SUPERVISOR_TOKEN, isDevelopment } from './config'
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

  // Subscribe to state changes via WebSocket
  React.useEffect(() => {
    // Skip if no camera entities provided
    if (!cameraEntityIds || cameraEntityIds.length === 0) {
      return
    }

    let connection = null
    const unsubscribes = []
    let isMounted = true

    async function setupWebSocket() {
      // In production mode (add-on/ingress), construct host URL including ingress path
      // The Apache proxy forwards /api/websocket to ws://supervisor/core/websocket
      // The supervisor WebSocket API uses the standard auth flow and accepts SUPERVISOR_TOKEN in the auth message
      // In development mode, use HASS_HOST and HASS_ACCESS_TOKEN for WebSocket
      let host
      if (isDevelopment && HASS_HOST) {
        host = HASS_HOST
      } else if (typeof window !== 'undefined' && window.location) {
        // Include the ingress path in the host URL so the library constructs the correct WebSocket URL
        const basePath = window.location.pathname.replace(/\/$/, '')
        host = `${window.location.origin}${basePath}`
      } else {
        host = ''
      }
      
      // In production, use SUPERVISOR_TOKEN if available, otherwise fall back to HASS_ACCESS_TOKEN
      // In development, use HASS_ACCESS_TOKEN
      const token = isDevelopment 
        ? (HASS_ACCESS_TOKEN || '')
        : (SUPERVISOR_TOKEN || HASS_ACCESS_TOKEN || '')

      // Skip WebSocket connection if no token
      if (!token) {
        logger.debug('Skipping WebSocket connection for camera tokens - no access token (using REST API only)')
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
        return
      }

      try {
        connection = await createConnection({ auth })

        // Subscribe to state changes for each camera entity
        for (const entityId of cameraEntityIds) {
          const trigger = (result) => {
            if (isMounted) {
              const newState = result.variables.trigger.to_state
              const accessToken = newState?.attributes?.access_token || null
              
              // Update tokens map with new token for this entity
              setTokens(prevTokens => {
                if (accessToken) {
                  return { ...prevTokens, [entityId]: accessToken }
                } else {
                  // Remove token if it's null/undefined
                  const updated = { ...prevTokens }
                  delete updated[entityId]
                  return updated
                }
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
      } catch (err) {
        if (isMounted) {
          logger.error('Failed to setup WebSocket connection for camera tokens:', err)
          setError(err instanceof Error ? err.message : String(err))
        }
      }
    }

    setupWebSocket()

    return () => {
      isMounted = false
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

