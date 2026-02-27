import React from 'react'
import axios from 'axios'
import { useConfig } from './ConfigProvider'
import { buildHaUrl } from './config'
import logger from './logger'
import useFetchEntityState from './use-fetch-entity-state'
import useEntitySubscription from './use-entity-subscription'

const useEv = () => {
  const config = useConfig()
  const ENABLE_EV = config.ENABLE_EV || false
  const ENTITY_PRECLIMATE_STATUS = config.ENTITY_PRECLIMATE_STATUS || ''
  const ENTITY_CHARGING_STATE = config.ENTITY_CHARGING_STATE || ''
  const ENTITY_STATE_OF_CHARGE = config.ENTITY_STATE_OF_CHARGE || ''

  const isConfigured = ENABLE_EV && (
    ENTITY_PRECLIMATE_STATUS ||
    ENTITY_CHARGING_STATE ||
    ENTITY_STATE_OF_CHARGE
  )

  // Preclimate status entity
  const [preclimateRaw, precRestErr, setPrecState] = useFetchEntityState({
    entityId: ENTITY_PRECLIMATE_STATUS,
    enabled: isConfigured && !!ENTITY_PRECLIMATE_STATUS,
    config,
    initialState: 'off',
  })
  const { error: precWsErr } = useEntitySubscription({
    entityId: ENTITY_PRECLIMATE_STATUS,
    enabled: isConfigured && !!ENTITY_PRECLIMATE_STATUS,
    onStateUpdate: setPrecState,
    logPrefix: 'EV preclimate',
    wsOptions: { checkBackendConnection: false, reconnectStrategy: 'exponential', maxReconnectAttempts: 5, reconnectDelay: 1000 },
  })

  // Charging state entity
  const [chargingRaw, chgRestErr, setChgState] = useFetchEntityState({
    entityId: ENTITY_CHARGING_STATE,
    enabled: isConfigured && !!ENTITY_CHARGING_STATE,
    config,
    initialState: 'off',
  })
  const { error: chgWsErr } = useEntitySubscription({
    entityId: ENTITY_CHARGING_STATE,
    enabled: isConfigured && !!ENTITY_CHARGING_STATE,
    onStateUpdate: setChgState,
    logPrefix: 'EV charging',
    wsOptions: { checkBackendConnection: false, reconnectStrategy: 'exponential', maxReconnectAttempts: 5, reconnectDelay: 1000 },
  })

  // State of charge entity
  const [socRaw, socRestErr, setSocState] = useFetchEntityState({
    entityId: ENTITY_STATE_OF_CHARGE,
    enabled: isConfigured && !!ENTITY_STATE_OF_CHARGE,
    config,
    initialState: '0',
  })
  const { error: socWsErr } = useEntitySubscription({
    entityId: ENTITY_STATE_OF_CHARGE,
    enabled: isConfigured && !!ENTITY_STATE_OF_CHARGE,
    onStateUpdate: setSocState,
    logPrefix: 'EV SoC',
    wsOptions: { checkBackendConnection: false, reconnectStrategy: 'exponential', maxReconnectAttempts: 5, reconnectDelay: 1000 },
  })

  // Derive composed state
  const state = React.useMemo(() => ({
    preclimateStatus: preclimateRaw === 'on',
    chargingState: chargingRaw === 'on',
    stateOfCharge: parseFloat(socRaw) || 0,
  }), [preclimateRaw, chargingRaw, socRaw])

  const error = precRestErr || precWsErr || chgRestErr || chgWsErr || socRestErr || socWsErr || false

  return [state, error]
}

export const startPreclimate = (config) => {
  const ENTITY_PRECLIMATE_START = config?.ENTITY_PRECLIMATE_START || ''
  if (!ENTITY_PRECLIMATE_START) return
  axios.post(buildHaUrl('/api/services/button/press', config), {
    entity_id: ENTITY_PRECLIMATE_START
  })
    .catch((err) => {
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
      logger.error('Failed to stop preclimate:', err)
    })
}

export default useEv
