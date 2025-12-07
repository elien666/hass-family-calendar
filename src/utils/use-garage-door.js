import {
  createLongLivedTokenAuth,
  createConnection,
} from 'home-assistant-js-websocket'
import React from 'react'
import axios from 'axios'
import { useConfig } from './ConfigProvider'
import { buildHaUrl, buildWebSocketHost, isDevelopment } from "./config"
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

    axios(url)
      .then((response) => {
        setState(response.data.state)
        setError(false)
      })
      .catch((err) => {
        // Error is already logged by interceptor, format for UI
        setError(formatErrorForUI(err))
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConfigured, url, ENABLE_GARAGE, ENTITY_GARAGE_DOOR])

  React.useEffect(() => {
    let connection = null
    let unsubscribe = null
    let isMounted = true
    let reconnectTimeout = null
    let reconnectAttempts = 0
    let isConnecting = false

    async function connect() {
      // Skip if not configured
      if (!isConfigured || !ENTITY_GARAGE_DOOR) {
        return
      }

      // Prevent multiple simultaneous connection attempts
      if (isConnecting) {
        return
      }

      // Close existing connection if any
      if (connection) {
        try {
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

      try {
        connection = await createConnection({ auth })

        // Handle connection ready event
        connection.addEventListener('ready', () => {
          if (isMounted) {
            logger.debug('WebSocket connection ready for garage door')
            reconnectAttempts = 0 // Reset reconnection attempts on successful connection
            setError(false) // Clear error state on successful connection
          }
        })

        // Handle disconnection events - attempt to reconnect
        connection.addEventListener('disconnected', () => {
          if (isMounted && !isConnecting) {
            logger.debug('WebSocket disconnected for garage door, will attempt to reconnect')
            // Clear any existing reconnect timeout
            if (reconnectTimeout) {
              clearTimeout(reconnectTimeout)
            }
            // Clear connection reference
            connection = null
            unsubscribe = null
            // Calculate exponential backoff delay
            const delay = Math.min(1000 * Math.pow(2, reconnectAttempts), 30000)
            reconnectAttempts++
            // Attempt to reconnect after delay
            reconnectTimeout = setTimeout(() => {
              if (isMounted && !isConnecting) {
                logger.debug(`Attempting to reconnect WebSocket for garage door (attempt ${reconnectAttempts})`)
                connect()
              }
            }, delay)
          }
        })

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
          // Attempt to reconnect after a delay
          const delay = Math.min(1000 * Math.pow(2, reconnectAttempts), 30000)
          reconnectAttempts++
          reconnectTimeout = setTimeout(() => {
            if (isMounted) {
              logger.debug(`Attempting to reconnect WebSocket for garage door after error (attempt ${reconnectAttempts})`)
              connect()
            }
          }, delay)
        }
      }
    }

    connect()

    return () => {
      isMounted = false
      // Clear reconnect timeout
      if (reconnectTimeout) {
        clearTimeout(reconnectTimeout)
      }
      // Unsubscribe from state changes
      if (unsubscribe) {
        unsubscribe()
      }
      // Close connection
      if (connection) {
        connection.close()
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