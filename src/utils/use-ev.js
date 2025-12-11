import {
  createLongLivedTokenAuth,
  createConnection,
} from 'home-assistant-js-websocket'
import React from 'react'
import axios from 'axios'
import { useConfig } from './ConfigProvider'
import { 
  buildHaUrl,
  buildWebSocketHost,
  buildWebSocketUrl,
  isDevelopment 
} from "./config"
import logger from './logger'
import { formatErrorForUI } from './axios-error-handler'

// Authorization header is configured centrally in config.js

const useEv = () => {
  const config = useConfig()
  const ENABLE_EV = config.ENABLE_EV || false
  const ENTITY_PRECLIMATE_STATUS = config.ENTITY_PRECLIMATE_STATUS || ''
  const ENTITY_PRECLIMATE_START = config.ENTITY_PRECLIMATE_START || ''
  const ENTITY_PRECLIMATE_STOP = config.ENTITY_PRECLIMATE_STOP || ''
  const ENTITY_CHARGING_STATE = config.ENTITY_CHARGING_STATE || ''
  const ENTITY_STATE_OF_CHARGE = config.ENTITY_STATE_OF_CHARGE || ''
  const HASS_ACCESS_TOKEN = config.HASS_ACCESS_TOKEN || ''
  const SUPERVISOR_TOKEN = config.SUPERVISOR_TOKEN || ''

  const [ state, setState ] = React.useState({
    preclimateStatus: false,
    chargingState: false,
    stateOfCharge: 0
  })
  const [ error, setError ] = React.useState(false)

  // Check if EV is configured
  const isConfigured = ENABLE_EV && (
    ENTITY_PRECLIMATE_STATUS || 
    ENTITY_CHARGING_STATE || 
    ENTITY_STATE_OF_CHARGE
  )

  // Fetch initial state for all entities
  React.useEffect(() => {
    if (!isConfigured) {
      return
    }

    const fetchStates = async () => {
      const promises = []
      
      if (ENTITY_PRECLIMATE_STATUS) {
        promises.push(
          axios(buildHaUrl(`/api/states/${ENTITY_PRECLIMATE_STATUS}`, config))
            .then(response => ({ type: 'preclimateStatus', value: response.data.state === 'on' }))
            .catch(err => ({ type: 'preclimateStatus', error: formatErrorForUI(err) }))
        )
      }
      
      if (ENTITY_CHARGING_STATE) {
        promises.push(
          axios(buildHaUrl(`/api/states/${ENTITY_CHARGING_STATE}`, config))
            .then(response => ({ type: 'chargingState', value: response.data.state === 'on' }))
            .catch(err => ({ type: 'chargingState', error: formatErrorForUI(err) }))
        )
      }
      
      if (ENTITY_STATE_OF_CHARGE) {
        promises.push(
          axios(buildHaUrl(`/api/states/${ENTITY_STATE_OF_CHARGE}`, config))
            .then(response => ({ type: 'stateOfCharge', value: parseFloat(response.data.state) || 0 }))
            .catch(err => ({ type: 'stateOfCharge', error: formatErrorForUI(err) }))
        )
      }

      const results = await Promise.all(promises)
      let hasError = false
      
      results.forEach(result => {
        if (result.error) {
          hasError = result.error
        } else {
          setState(prev => ({ ...prev, [result.type]: result.value }))
        }
      })

      if (hasError) {
        setError(hasError)
      } else {
        setError(false)
      }
    }

    fetchStates()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConfigured, ENABLE_EV, ENTITY_PRECLIMATE_STATUS, ENTITY_CHARGING_STATE, ENTITY_STATE_OF_CHARGE])

  // WebSocket subscription for all entities
  React.useEffect(() => {
    let connection = null
    let unsubscribes = []
    let isMounted = true
    let reconnectTimeout = null
    let reconnectAttempts = 0
    const MAX_RECONNECT_ATTEMPTS = 5 // Limit reconnection attempts to prevent infinite loops
    let isConnecting = false
    let readyHandler = null
    let disconnectedHandler = null

    async function connect() {
      if (!isConfigured || !isMounted) {
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
            logger.debug('WebSocket connection ready for EV entities')
            reconnectAttempts = 0 // Reset reconnection attempts on successful connection
            setError(false) // Clear error state on successful connection
          }
        }
        connection.addEventListener('ready', readyHandler)

        // Handle disconnection events - attempt to reconnect
        disconnectedHandler = () => {
          if (isMounted && !isConnecting) {
            logger.debug('WebSocket disconnected for EV entities, will attempt to reconnect')
            // Clear any existing reconnect timeout
            if (reconnectTimeout) {
              clearTimeout(reconnectTimeout)
              reconnectTimeout = null
            }
            // Stop reconnecting if we've exceeded max attempts
            if (reconnectAttempts >= MAX_RECONNECT_ATTEMPTS) {
              logger.warn(`Max reconnection attempts (${MAX_RECONNECT_ATTEMPTS}) reached for EV entities, stopping reconnection`)
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
                logger.debug(`Attempting to reconnect WebSocket for EV entities (attempt ${reconnectAttempts}/${MAX_RECONNECT_ATTEMPTS})`)
                connect()
              }
            }, delay)
          }
        }
        connection.addEventListener('disconnected', disconnectedHandler)

        const trigger = (result) => {
          if (isMounted) {
            const entityId = result.variables.trigger.to_state.entity_id
            const newState = result.variables.trigger.to_state.state

            setState(prev => {
              const updated = { ...prev }
              
              if (entityId === ENTITY_PRECLIMATE_STATUS) {
                updated.preclimateStatus = newState === 'on'
              } else if (entityId === ENTITY_CHARGING_STATE) {
                updated.chargingState = newState === 'on'
              } else if (entityId === ENTITY_STATE_OF_CHARGE) {
                updated.stateOfCharge = parseFloat(newState) || 0
              }
              
              return updated
            })
          }
        }

        // Subscribe to all configured entities
        const entityIds = []
        if (ENTITY_PRECLIMATE_STATUS) entityIds.push(ENTITY_PRECLIMATE_STATUS)
        if (ENTITY_CHARGING_STATE) entityIds.push(ENTITY_CHARGING_STATE)
        if (ENTITY_STATE_OF_CHARGE) entityIds.push(ENTITY_STATE_OF_CHARGE)

        // Subscribe to each entity
        for (const entityId of entityIds) {
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
          logger.error('Failed to setup WebSocket connection:', err)
          setError(err instanceof Error ? err.message : String(err))
          // Only attempt to reconnect if we haven't exceeded max attempts
          if (reconnectAttempts < MAX_RECONNECT_ATTEMPTS) {
            const delay = Math.min(1000 * Math.pow(2, reconnectAttempts), 30000)
            reconnectAttempts++
            reconnectTimeout = setTimeout(() => {
              if (isMounted && !isConnecting && reconnectAttempts <= MAX_RECONNECT_ATTEMPTS) {
                logger.debug(`Attempting to reconnect WebSocket for EV entities after error (attempt ${reconnectAttempts}/${MAX_RECONNECT_ATTEMPTS})`)
                connect()
              }
            }, delay)
          } else {
            logger.warn(`Max reconnection attempts (${MAX_RECONNECT_ATTEMPTS}) reached for EV entities, stopping reconnection`)
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
      // Unsubscribe from all state changes
      unsubscribes.forEach(unsubscribe => {
        if (unsubscribe) {
          try {
            unsubscribe()
          } catch (err) {
            logger.debug('Error unsubscribing from WebSocket:', err)
          }
        }
      })
      unsubscribes = []
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
  }, [isConfigured, ENABLE_EV, ENTITY_PRECLIMATE_STATUS, ENTITY_CHARGING_STATE, ENTITY_STATE_OF_CHARGE, HASS_ACCESS_TOKEN, SUPERVISOR_TOKEN])

  return [ state, error ]
}

export const startPreclimate = (config) => {
  const ENTITY_PRECLIMATE_START = config?.ENTITY_PRECLIMATE_START || ''
  if (!ENTITY_PRECLIMATE_START) return
  axios.post(buildHaUrl('/api/services/button/press', config), {
    entity_id: ENTITY_PRECLIMATE_START
  })
    .catch((err) => {
      // Error is already logged by interceptor
      logger.error('Failed to start preclimate:', err)
    })
}

export const stopPreclimate = (config) => {
  const ENTITY_PRECLIMATE_STOP = config?.ENTITY_PRECLIMATE_STOP || ''
  if (!ENTITY_PRECLIMATE_STOP) return
  axios.post(buildHaUrl('/api/services/button/press', config), {
    entity_id: ENTITY_PRECLIMATE_STOP
  })
    .catch((err) => {
      // Error is already logged by interceptor
      logger.error('Failed to stop preclimate:', err)
    })
}

export default useEv

