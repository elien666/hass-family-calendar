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

const useDoorbell = () => {
  const config = useConfig()
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
  }, [isConfigured, url, ENABLE_DOORBELL, ENTITY_DOORBELL])

  React.useEffect(() => {
    let connection = null
    let unsubscribe = null
    let isMounted = true
    let reconnectTimeout = null
    let reconnectAttempts = 0
    let isConnecting = false

    async function connect() {
      // Skip if not configured
      if (!isConfigured || !ENTITY_DOORBELL) {
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
            logger.debug('WebSocket connection ready for doorbell')
            reconnectAttempts = 0 // Reset reconnection attempts on successful connection
            setError(false) // Clear error state on successful connection
          }
        })

        // Handle disconnection events - attempt to reconnect
        connection.addEventListener('disconnected', () => {
          if (isMounted && !isConnecting) {
            logger.debug('WebSocket disconnected for doorbell, will attempt to reconnect')
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
                logger.debug(`Attempting to reconnect WebSocket for doorbell (attempt ${reconnectAttempts})`)
                connect()
              }
            }, delay)
          }
        })

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
          // Attempt to reconnect after a delay
          const delay = Math.min(1000 * Math.pow(2, reconnectAttempts), 30000)
          reconnectAttempts++
          reconnectTimeout = setTimeout(() => {
            if (isMounted) {
              logger.debug(`Attempting to reconnect WebSocket for doorbell after error (attempt ${reconnectAttempts})`)
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