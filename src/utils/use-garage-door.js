import {
  createLongLivedTokenAuth,
  createConnection,
} from 'home-assistant-js-websocket'
import React from 'react'
import axios from 'axios'
import { useConfig } from './ConfigProvider'
import { buildHaUrl, buildWebSocketHost, buildWebSocketUrl, isDevelopment } from "./config"
import logger from './logger'
import { formatErrorForUI } from './axios-error-handler'

const useGarageDoor = () => {
  const config = useConfig()
  const ENABLE_GARAGE = config.ENABLE_GARAGE || false
  const ENTITY_GARAGE_DOOR = config.ENTITY_GARAGE_DOOR || ''
  const HASS_ACCESS_TOKEN = config.HASS_ACCESS_TOKEN || ''
  const SUPERVISOR_TOKEN = config.SUPERVISOR_TOKEN || ''

  const [ state, setState ] = React.useState('closed')
  const [ error, setError ] = React.useState(false)

  // Check if garage door is configured
  const isConfigured = ENABLE_GARAGE && ENTITY_GARAGE_DOOR
  const url = ENTITY_GARAGE_DOOR ? buildHaUrl(`/api/states/${ENTITY_GARAGE_DOOR}`, config) : null

  React.useEffect(() => {
    // Skip if not configured
    if (!isConfigured || !url) {
      return
    }

    let isMounted = true
    const abortController = new AbortController()

    axios(url, {
      signal: abortController.signal
    })
      .then((response) => {
        if (isMounted) {
          setState(response.data.state)
          setError(false)
        }
      })
      .catch((err) => {
        // Don't set error if request was aborted or component unmounted
        if (isMounted && !abortController.signal.aborted) {
          // Error is already logged by interceptor, format for UI
          setError(formatErrorForUI(err))
        }
      })

    return () => {
      isMounted = false
      abortController.abort()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConfigured, url, ENABLE_GARAGE, ENTITY_GARAGE_DOOR])

  React.useEffect(() => {
    let connection = null
    let unsubscribe = null
    let isMounted = true
    let reconnectTimeout = null
    let reconnectAttempts = 0
    const MAX_RECONNECT_ATTEMPTS = 5 // Limit reconnection attempts to prevent infinite loops
    let isConnecting = false
    let readyHandler = null
    let disconnectedHandler = null

    async function connect() {
      // Skip if not configured
      if (!isConfigured || !ENTITY_GARAGE_DOOR || !isMounted) {
        return
      }

      // Prevent multiple simultaneous connection attempts
      if (isConnecting) {
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
          if (unsubscribe) {
            unsubscribe()
            unsubscribe = null
          }
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

      // Skip WebSocket connection if no token
      if (!token) {
        logger.debug('Skipping WebSocket connection - no access token (using REST API only)')
        isConnecting = false
        return
      }

      let auth
      try {
        auth = createLongLivedTokenAuth(host, token)
        if (isMounted) setError(false)
      } catch (err) {
        if (isMounted) {
          logger.error('Failed to create WebSocket auth:', err)
          setError(err instanceof Error ? err.message : String(err))
        }
        isConnecting = false
        return
      }

      // Build WebSocket URL using ingress route
      const wsUrl = buildWebSocketUrl(config)
      
      if (!wsUrl) {
        logger.error('Failed to build WebSocket URL - cannot connect')
        if (isMounted) {
          setError('WebSocket URL konnte nicht erstellt werden.')
        }
        isConnecting = false
        return
      }
      
      // Create custom socket factory that uses the ingress URL
      const createSocket = () => {
        return new Promise((resolve, reject) => {
          const socket = new WebSocket(wsUrl)
          socket.onopen = () => resolve(socket)
          socket.onerror = (err) => reject(err)
        })
      }

      try {
        connection = await createConnection({ auth, createSocket })

        // Handle connection ready event
        readyHandler = () => {
          if (isMounted) {
            logger.debug('WebSocket connection ready for garage door')
            reconnectAttempts = 0 // Reset reconnection attempts on successful connection
            setError(false) // Clear error state on successful connection
          }
        }
        connection.addEventListener('ready', readyHandler)

        // Handle disconnection events - attempt to reconnect
        disconnectedHandler = () => {
          if (isMounted && !isConnecting) {
            logger.debug('WebSocket disconnected for garage door, will attempt to reconnect')
            // Clear any existing reconnect timeout
            if (reconnectTimeout) {
              clearTimeout(reconnectTimeout)
              reconnectTimeout = null
            }
            // Stop reconnecting if we've exceeded max attempts
            if (reconnectAttempts >= MAX_RECONNECT_ATTEMPTS) {
              logger.warn(`Max reconnection attempts (${MAX_RECONNECT_ATTEMPTS}) reached for garage door, stopping reconnection`)
              if (isMounted) {
                setError('Verbindung verloren. Bitte Seite neu laden.')
              }
              return
            }
            // Clear connection reference
            connection = null
            unsubscribe = null
            readyHandler = null
            disconnectedHandler = null
            // Calculate exponential backoff delay
            const delay = Math.min(1000 * Math.pow(2, reconnectAttempts), 30000)
            reconnectAttempts++
            // Attempt to reconnect after delay
            reconnectTimeout = setTimeout(() => {
              if (isMounted && !isConnecting && reconnectAttempts <= MAX_RECONNECT_ATTEMPTS) {
                logger.debug(`Attempting to reconnect WebSocket for garage door (attempt ${reconnectAttempts}/${MAX_RECONNECT_ATTEMPTS})`)
                connect()
              }
            }, delay)
          }
        }
        connection.addEventListener('disconnected', disconnectedHandler)

        const trigger = (result) => {
          if (isMounted) {
            setState(result.variables.trigger.to_state.state)
          }
        }

        unsubscribe = await connection.subscribeMessage(trigger, {
          "type": "subscribe_trigger",
          "trigger":
            {
              "platform": "state",
              "entity_id": ENTITY_GARAGE_DOOR,
            }
        })

        isConnecting = false
      } catch (err) {
        isConnecting = false
        if (isMounted) {
          logger.error('Failed to setup WebSocket connection:', err)
          setError(err instanceof Error ? err.message : String(err))
          // Only attempt to reconnect if we haven't exceeded max attempts
          if (reconnectAttempts < MAX_RECONNECT_ATTEMPTS) {
            const delay = Math.min(1000 * Math.pow(2, reconnectAttempts), 30000)
            reconnectAttempts++
            reconnectTimeout = setTimeout(() => {
              if (isMounted && !isConnecting && reconnectAttempts <= MAX_RECONNECT_ATTEMPTS) {
                logger.debug(`Attempting to reconnect WebSocket for garage door after error (attempt ${reconnectAttempts}/${MAX_RECONNECT_ATTEMPTS})`)
                connect()
              }
            }, delay)
          } else {
            logger.warn(`Max reconnection attempts (${MAX_RECONNECT_ATTEMPTS}) reached for garage door, stopping reconnection`)
            if (isMounted) {
              setError('Verbindung fehlgeschlagen. Bitte Seite neu laden.')
            }
          }
        }
      }
    }

    connect()

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
          logger.debug('Error removing WebSocket event listeners:', err)
        }
      }
      // Unsubscribe from state changes
      if (unsubscribe) {
        try {
          unsubscribe()
        } catch (err) {
          logger.debug('Error unsubscribing from WebSocket:', err)
        }
        unsubscribe = null
      }
      // Close connection
      if (connection) {
        try {
          connection.close()
        } catch (err) {
          logger.debug('Error closing WebSocket connection:', err)
        }
        connection = null
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConfigured])

  return [ state, error ]

}

export const toggleGarageDoor = (isLoading, config = {}) => {
  const ENTITY_GARAGE_DOOR = config.ENTITY_GARAGE_DOOR || ''
  if (!ENTITY_GARAGE_DOOR) return
  isLoading(true)
  const timeoutId = setTimeout(() => isLoading(false), 3000)
  axios.post(buildHaUrl('/api/services/cover/toggle', config), {
    entity_id: ENTITY_GARAGE_DOOR
  })
    .catch((err) => {
      // Error is already logged by interceptor
      logger.error('Failed to toggle garage door:', err)
    })
    .finally(() => {
      clearTimeout(timeoutId)
      isLoading(false)
    })
}

export const openGarageDoor = (isLoading, config = {}) => {
  const ENTITY_GARAGE_DOOR = config.ENTITY_GARAGE_DOOR || ''
  if (!ENTITY_GARAGE_DOOR) return
  isLoading(true)
  const timeoutId = setTimeout(() => isLoading(false), 3000)
  axios.post(buildHaUrl('/api/services/cover/open_cover', config), {
    entity_id: ENTITY_GARAGE_DOOR
  })
    .catch((err) => {
      // Error is already logged by interceptor
      logger.error('Failed to open garage door:', err)
    })
    .finally(() => {
      clearTimeout(timeoutId)
      isLoading(false)
    })
}

export const closeGarageDoor = (isLoading, config = {}) => {
  const ENTITY_GARAGE_DOOR = config.ENTITY_GARAGE_DOOR || ''
  if (!ENTITY_GARAGE_DOOR) return
  isLoading(true)
  const timeoutId = setTimeout(() => isLoading(false), 3000)
  axios.post(buildHaUrl('/api/services/cover/close_cover', config), {
    entity_id: ENTITY_GARAGE_DOOR
  })
    .catch((err) => {
      // Error is already logged by interceptor
      logger.error('Failed to close garage door:', err)
    })
    .finally(() => {
      clearTimeout(timeoutId)
      isLoading(false)
    })
}

export default useGarageDoor