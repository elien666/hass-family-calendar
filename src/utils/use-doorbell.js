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
import { useConnectionStateContext } from './ConnectionStateProvider'

const useDoorbell = () => {
  const config = useConfig()
  const { isConnected } = useConnectionStateContext()
  const ENABLE_DOORBELL = config.ENABLE_DOORBELL || false
  const ENTITY_DOORBELL = config.ENTITY_DOORBELL || ''
  const ENTITY_DOORBELL_BUTTON = config.ENTITY_DOORBELL_BUTTON || ''
  const HASS_ACCESS_TOKEN = config.HASS_ACCESS_TOKEN || ''
  const SUPERVISOR_TOKEN = config.SUPERVISOR_TOKEN || ''

  const [ state, setState ] = React.useState('off')
  const [ error, setError ] = React.useState(false)

  // Check if doorbell is configured
  const isConfigured = ENABLE_DOORBELL && ENTITY_DOORBELL
  const url = ENTITY_DOORBELL ? buildHaUrl(`/api/states/${ENTITY_DOORBELL}`, config) : null

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
  }, [isConfigured, url, ENABLE_DOORBELL, ENTITY_DOORBELL])

  React.useEffect(() => {
    let connection = null
    let unsubscribe = null
    let isMounted = true
    let reconnectTimeout = null
    let reconnectDebounceTimeout = null
    let isConnecting = false
    let readyHandler = null
    let disconnectedHandler = null

    async function connect() {
      // Skip if not configured
      if (!isConfigured || !ENTITY_DOORBELL || !isMounted) {
        return
      }

      // Check connection state before attempting to connect
      if (!isConnected) {
        logger.debug('Skipping WebSocket connection for doorbell - backend not connected')
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
            logger.debug('WebSocket connection ready for doorbell')
            setError(false) // Clear error state on successful connection
          }
        }
        connection.addEventListener('ready', readyHandler)

        // Handle disconnection events - attempt to reconnect when connection state is available
        disconnectedHandler = () => {
          if (isMounted && !isConnecting) {
            logger.debug('WebSocket disconnected for doorbell')
            // Clear connection reference
            connection = null
            unsubscribe = null
            readyHandler = null
            disconnectedHandler = null
            
            // Clear any existing reconnect timeout
            if (reconnectTimeout) {
              clearTimeout(reconnectTimeout)
              reconnectTimeout = null
            }
            
            // Attempt to reconnect only if backend is connected
            // The connection state will trigger reconnection when it becomes available
            if (isConnected) {
              // Debounce reconnection attempt
              reconnectTimeout = setTimeout(() => {
                if (isMounted && !isConnecting && isConnected) {
                  logger.debug('Attempting to reconnect WebSocket for doorbell')
                  connect()
                }
              }, 2000) // 2 second debounce
            } else {
              logger.debug('Skipping reconnection for doorbell - waiting for backend connection')
            }
          }
        }
        connection.addEventListener('disconnected', disconnectedHandler)

        const trigger = (result) => {
          if (isMounted) {
            const newState = result.variables.trigger.to_state.state
            setState(newState)
          }
        }

        unsubscribe = await connection.subscribeMessage(trigger, {
          "type": "subscribe_trigger",
          "trigger":
            {
              "platform": "state",
              "entity_id": ENTITY_DOORBELL,
            }
        })

        isConnecting = false
      } catch (err) {
        isConnecting = false
        if (isMounted) {
          logger.error('Failed to setup WebSocket connection:', err)
          logger.error('WebSocket error details:', {
            message: err instanceof Error ? err.message : String(err),
            code: err.code,
            name: err.name,
            wsUrl: auth?.wsUrl,
            host: host,
            tokenLength: token ? token.length : 0
          })
          // Error code 2 = ERR_INVALID_AUTH - authentication failed
          if (err.code === 2) {
            logger.error('Authentication failed - check if SUPERVISOR_TOKEN is valid and correctly formatted')
          }
          setError(err instanceof Error ? err.message : String(err))
          // Only attempt to reconnect if backend is connected
          if (isConnected) {
            reconnectTimeout = setTimeout(() => {
              if (isMounted && !isConnecting && isConnected) {
                logger.debug('Attempting to reconnect WebSocket for doorbell after error')
                connect()
              }
            }, 2000) // 2 second debounce
          } else {
            logger.debug('Skipping reconnection for doorbell after error - waiting for backend connection')
          }
        }
      }
    }

    // Initial connection attempt
    if (isConnected) {
      connect()
    }

    // Reconnect when connection state becomes available
    if (isConnected && !connection && !isConnecting) {
      // Clear any existing debounce timeout
      if (reconnectDebounceTimeout) {
        clearTimeout(reconnectDebounceTimeout)
        reconnectDebounceTimeout = null
      }
      // Debounce reconnection when connection state changes
      reconnectDebounceTimeout = setTimeout(() => {
        if (isMounted && isConnected && !connection && !isConnecting) {
          logger.debug('Backend connection restored - reconnecting WebSocket for doorbell')
          connect()
        }
      }, 1000) // 1 second debounce when connection state changes
    }

    return () => {
      isMounted = false
      isConnecting = false
      // Clear reconnect timeouts
      if (reconnectTimeout) {
        clearTimeout(reconnectTimeout)
        reconnectTimeout = null
      }
      if (reconnectDebounceTimeout) {
        clearTimeout(reconnectDebounceTimeout)
        reconnectDebounceTimeout = null
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
  }, [isConfigured, isConnected])

  return [ state, error ]

}

export const unlatchFrontDoor = (config = {}) => {
  const ENTITY_DOORBELL_BUTTON = config.ENTITY_DOORBELL_BUTTON || ''
  if (!ENTITY_DOORBELL_BUTTON) return
  axios.post(buildHaUrl('/api/services/button/press', config), {
    "entity_id": ENTITY_DOORBELL_BUTTON
  })
    .catch((err) => {
      // Error is already logged by interceptor
      logger.error('Failed to unlatch front door:', err)
    })
}

export default useDoorbell