import React from 'react'
import axios from 'axios'
import { useConfig } from './ConfigProvider'
import { buildHaUrl } from './config'
import logger from './logger'
import { formatErrorForUI } from './axios-error-handler'
import { useHomeAssistantWebSocket } from './use-home-assistant-websocket'

// Authorization header is configured centrally in config.js

const useEv = () => {
  const config = useConfig()
  const ENABLE_EV = config.ENABLE_EV || false
  const ENTITY_PRECLIMATE_STATUS = config.ENTITY_PRECLIMATE_STATUS || ''
  const ENTITY_PRECLIMATE_START = config.ENTITY_PRECLIMATE_START || ''
  const ENTITY_PRECLIMATE_STOP = config.ENTITY_PRECLIMATE_STOP || ''
  const ENTITY_CHARGING_STATE = config.ENTITY_CHARGING_STATE || ''
  const ENTITY_STATE_OF_CHARGE = config.ENTITY_STATE_OF_CHARGE || ''

  const [ state, setState ] = React.useState({
    preclimateStatus: false,
    chargingState: false,
    stateOfCharge: 0
  })
  const [ restError, setRestError ] = React.useState(false)

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
        setRestError(hasError)
      } else {
        setRestError(false)
      }
    }

    fetchStates()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConfigured, ENABLE_EV, ENTITY_PRECLIMATE_STATUS, ENTITY_CHARGING_STATE, ENTITY_STATE_OF_CHARGE])

  // WebSocket subscription for all entities
  const { error: wsError } = useHomeAssistantWebSocket({
    enabled: isConfigured,
    checkBackendConnection: false, // EV hook doesn't check backend connection
    reconnectStrategy: 'exponential',
    maxReconnectAttempts: 5,
    reconnectDelay: 1000,
    logPrefix: 'EV entities',
    onReady: async (connection) => {
      const trigger = (result) => {
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

      // Subscribe to all configured entities
      const entityIds = []
      if (ENTITY_PRECLIMATE_STATUS) entityIds.push(ENTITY_PRECLIMATE_STATUS)
      if (ENTITY_CHARGING_STATE) entityIds.push(ENTITY_CHARGING_STATE)
      if (ENTITY_STATE_OF_CHARGE) entityIds.push(ENTITY_STATE_OF_CHARGE)

      // Subscribe to each entity
      const unsubscribes = []
      for (const entityId of entityIds) {
        const unsubscribe = await connection.subscribeMessage(trigger, {
          type: 'subscribe_trigger',
          trigger: {
            platform: 'state',
            entity_id: entityId,
          },
        })
        unsubscribes.push(unsubscribe)
      }
      logger.debug(`Subscribed to EV entity state changes: ${entityIds.join(', ')}`)
      return unsubscribes
    },
    dependencies: [isConfigured, ENTITY_PRECLIMATE_STATUS, ENTITY_CHARGING_STATE, ENTITY_STATE_OF_CHARGE],
  })

  // Combine REST and WebSocket errors
  const error = restError || wsError || false

  return [state, error]
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

