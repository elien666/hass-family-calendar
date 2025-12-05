import {
  createLongLivedTokenAuth,
  createConnection,
} from 'home-assistant-js-websocket'
import React from 'react'
import axios from 'axios'
import { useConfig } from './ConfigProvider'
import { buildHaUrl, buildWebSocketHost, isDevelopment } from "./config";
import { mdiWashingMachineAlert, mdiWashingMachineOff, mdiWashingMachine } from '@mdi/js';
import logger from './logger'
import { formatErrorForUI } from './axios-error-handler'

// Authorization header is configured centrally in config.js

const urlPattern = ( entity ) => entity ? buildHaUrl(`/api/states/${entity}`) : null

export const mapToPresentation = {
  done: { label: 'Fertig', animate: false, icon: mdiWashingMachineAlert },
  off: { label: 'Aus', animate: false, icon: mdiWashingMachineOff},
  standby: { label: 'Standby', animate: false, icon: mdiWashingMachine },
  running: { label: 'Läuft …', animate: true, icon: mdiWashingMachine }
}

const mapToValue = {
  off: 0,
  standby: 2,
  running: 16,
  done: 256
}

const useWashingMachine = () => {
  const config = useConfig()
  const ENABLE_LAUNDRY = config.ENABLE_LAUNDRY || false
  const LAUNDRY_MACHINES = config.LAUNDRY_MACHINES || []
  const HASS_ACCESS_TOKEN = config.HASS_ACCESS_TOKEN || ''
  const SUPERVISOR_TOKEN = config.SUPERVISOR_TOKEN || ''
  
  // LAUNDRY_MACHINES is stable (from config, doesn't change during component lifecycle)
  // so it's safe to call hooks in a map - the number of hooks will be consistent
  const machines = Array.isArray(LAUNDRY_MACHINES) ? LAUNDRY_MACHINES : []
  
  // Call useSubscription for each machine
  // Note: This violates the rules-of-hooks lint rule, but it's safe because:
  // 1. LAUNDRY_MACHINES is stable (from config, doesn't change during render)
  // 2. The array length is consistent across renders
  // 3. We need dynamic number of subscriptions based on config
  const subscriptions = machines.map((machine, index) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, error] = useSubscription(machine.entity_id)
    return { state, error, name: machine.name }
  })

  const [ state, setState ] = React.useState(mapToPresentation['off'])
  const [ error, setError ] = React.useState(false)

  // Extract states and errors from subscriptions
  const machineStates = subscriptions.map(sub => sub.state)
  const machineErrors = subscriptions.map(sub => sub.error)

  React.useEffect(() => {
    // Aggregate errors from all subscriptions
    const hasError = machineErrors.some(err => err !== false)
    setError(hasError ? machineErrors.find(err => err !== false) || false : false)
  }, [machineErrors])

  React.useEffect(() => {
    // Calculate sum of all machine values
    const sum = machineStates.reduce((acc, machineState) => {
      return acc + (mapToValue[machineState] || 0)
    }, 0)

    // Sum === 0 -> All off
    if (sum === 0) {
      setState(mapToPresentation['off'])
    }

    // Sum > 0 < 16 -> at least one machine is in standby
    else if (sum < 16) {
      setState(mapToPresentation['standby'])
    }

    // Sum > 16 < 256 -> at least one machine is running
    else if (sum < 256) {
      setState(mapToPresentation['running'])
    }

    // Else if sum is divisible by 256 -> all machines are done or off
    else if (sum % 256 === 0) {
      setState(mapToPresentation['done'])
    }

    // Else if rest of sum mod 256 is divisible by 16 -> running
    else if (sum % 256 % 16 === 0) {
      setState(mapToPresentation['running'])
    }

    // Else if rest of mod of 256 is divisble by 2 -> machines are either done or standy -> done
    else if (sum % 256 % 2 === 0) {
      setState(mapToPresentation['done'])
    }

    // Else a machine is done, one is standby and one is running -> running
    else {
      setState(mapToPresentation['running'])
    }
  }, [machineStates])

  // Return states array with machine names from config
  const states = subscriptions.map(sub => ({
    label: sub.name,
    state: sub.state
  }))

  return [ state, states, error ]
}

const useSubscription = ( entity ) => {

  const [ state, setState ] = React.useState('off')
  const [ error, setError ] = React.useState(false)

  // Check if entity is configured
  const isConfigured = ENABLE_LAUNDRY && entity
  const url = urlPattern(entity)

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
  }, [entity, isConfigured, url])

  React.useEffect(() => {
    let connection = null
    let unsubscribe = null
    let isMounted = true
    let reconnectTimeout = null
    let reconnectAttempts = 0
    let isConnecting = false

    async function setupConnection() {
      // Skip if not configured
      if (!isConfigured || !entity) {
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
          logger.debug(`Error closing existing WebSocket connection for ${entity}:`, err)
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
        logger.debug('Skipping WebSocket connection - no access token (using REST API only)')
        isConnecting = false
        return
      }

      try {
        const auth = createLongLivedTokenAuth(host, token)
        connection = await createConnection({ auth })

        // Handle connection ready event
        connection.addEventListener('ready', () => {
          if (isMounted) {
            logger.debug(`WebSocket connection ready for ${entity}`)
            reconnectAttempts = 0 // Reset reconnection attempts on successful connection
            setError(false) // Clear error state on successful connection
          }
        })

        // Handle disconnection events - attempt to reconnect
        connection.addEventListener('disconnected', () => {
          if (isMounted && !isConnecting) {
            logger.debug(`WebSocket disconnected for ${entity}, will attempt to reconnect`)
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
                logger.debug(`Attempting to reconnect WebSocket for ${entity} (attempt ${reconnectAttempts})`)
                setupConnection()
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
              "entity_id": entity,
            }
        })

        isConnecting = false
      } catch (err) {
        isConnecting = false
        if (isMounted) {
          logger.error(`Failed to setup WebSocket connection for ${entity}:`, err)
          setError(err instanceof Error ? err.message : String(err))
          // Attempt to reconnect after a delay
          const delay = Math.min(1000 * Math.pow(2, reconnectAttempts), 30000)
          reconnectAttempts++
          reconnectTimeout = setTimeout(() => {
            if (isMounted) {
              logger.debug(`Attempting to reconnect WebSocket for ${entity} after error (attempt ${reconnectAttempts})`)
              setupConnection()
            }
          }, delay)
        }
      }
    }

    setupConnection()

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
  }, [entity, isConfigured])

  return [ state, error ]

}

export default useWashingMachine