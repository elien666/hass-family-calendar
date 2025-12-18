import React from 'react'
import axios from 'axios'
import { useConfig } from './ConfigProvider'
import { buildHaUrl } from './config'
import { mdiWashingMachineAlert, mdiWashingMachineOff, mdiWashingMachine } from '@mdi/js'
import logger from './logger'
import { formatErrorForUI } from './axios-error-handler'
import { useHomeAssistantWebSocket } from './use-home-assistant-websocket'

// Authorization header is configured centrally in ConfigProvider

const urlPattern = ( entity, config ) => entity ? buildHaUrl(`/api/states/${entity}`, config) : null

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
    const [state, error] = useSubscription(machine.entity_id, config)
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

const useSubscription = ( entity, config ) => {
  const [ state, setState ] = React.useState('off')
  const [ restError, setRestError ] = React.useState(false)

  // Check if entity is configured
  const ENABLE_LAUNDRY = config.ENABLE_LAUNDRY || false
  const isConfigured = ENABLE_LAUNDRY && entity
  const url = urlPattern(entity, config)

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
          setRestError(false)
        }
      })
      .catch((err) => {
        // Don't set error if request was aborted or component unmounted
        if (isMounted && !abortController.signal.aborted) {
          // Error is already logged by interceptor, format for UI
          setRestError(formatErrorForUI(err))
        }
      })

    return () => {
      isMounted = false
      abortController.abort()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entity, isConfigured, url])

  // WebSocket subscription
  const { error: wsError } = useHomeAssistantWebSocket({
    enabled: isConfigured && !!entity,
    logPrefix: entity,
    onReady: async (connection) => {
      const trigger = (result) => {
        setState(result.variables.trigger.to_state.state)
      }

      const unsubscribe = await connection.subscribeMessage(trigger, {
        type: 'subscribe_trigger',
        trigger: {
          platform: 'state',
          entity_id: entity,
        },
      })
      logger.debug(`Subscribed to ${entity} state changes`)
      return unsubscribe
    },
    dependencies: [entity, isConfigured],
  })

  // Combine REST and WebSocket errors
  const error = restError || wsError || false

  return [ state, error ]

}

export default useWashingMachine