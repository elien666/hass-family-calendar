import {
  createLongLivedTokenAuth,
  createConnection,
} from 'home-assistant-js-websocket'
import React from 'react'
import axios from 'axios'
import { 
  HASS_HOST, 
  HASS_ACCESS_TOKEN, 
  SUPERVISOR_TOKEN, 
  ENTITY_PRECLIMATE_STATUS,
  ENTITY_PRECLIMATE_START,
  ENTITY_PRECLIMATE_STOP,
  ENTITY_CHARGING_STATE,
  ENTITY_STATE_OF_CHARGE,
  ENABLE_EV, 
  buildHaUrl, 
  isDevelopment 
} from "./config"
import logger from './logger'
import { formatErrorForUI } from './axios-error-handler'

// Authorization header is configured centrally in config.js

const useEv = () => {
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
          axios(buildHaUrl(`/api/states/${ENTITY_PRECLIMATE_STATUS}`))
            .then(response => ({ type: 'preclimateStatus', value: response.data.state === 'on' }))
            .catch(err => ({ type: 'preclimateStatus', error: formatErrorForUI(err) }))
        )
      }
      
      if (ENTITY_CHARGING_STATE) {
        promises.push(
          axios(buildHaUrl(`/api/states/${ENTITY_CHARGING_STATE}`))
            .then(response => ({ type: 'chargingState', value: response.data.state === 'on' }))
            .catch(err => ({ type: 'chargingState', error: formatErrorForUI(err) }))
        )
      }
      
      if (ENTITY_STATE_OF_CHARGE) {
        promises.push(
          axios(buildHaUrl(`/api/states/${ENTITY_STATE_OF_CHARGE}`))
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
  }, [isConfigured])

  // WebSocket subscription for all entities
  React.useEffect(() => {
    let connection = null
    let isMounted = true

    async function connect() {
      if (!isConfigured) {
        return
      }

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
        logger.debug('Skipping WebSocket connection - no access token (using REST API only)')
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
        return
      }

      try {
        connection = await createConnection({ auth })

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
          await connection.subscribeMessage(trigger, {
            "type": "subscribe_trigger",
            "trigger": {
              "platform": "state",
              "entity_id": entityId,
            }
          })
        }
      } catch (err) {
        if (isMounted) {
          logger.error('Failed to setup WebSocket connection:', err)
          setError(err instanceof Error ? err.message : String(err))
        }
      }
    }

    connect()

    return () => {
      isMounted = false
      if (connection) {
        connection.close()
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConfigured])

  return [ state, error ]
}

export const startPreclimate = () => {
  if (!ENTITY_PRECLIMATE_START) return
  axios.post(buildHaUrl('/api/services/button/press'), {
    entity_id: ENTITY_PRECLIMATE_START
  })
    .catch((err) => {
      // Error is already logged by interceptor
      logger.error('Failed to start preclimate:', err)
    })
}

export const stopPreclimate = () => {
  if (!ENTITY_PRECLIMATE_STOP) return
  axios.post(buildHaUrl('/api/services/button/press'), {
    entity_id: ENTITY_PRECLIMATE_STOP
  })
    .catch((err) => {
      // Error is already logged by interceptor
      logger.error('Failed to stop preclimate:', err)
    })
}

export default useEv

