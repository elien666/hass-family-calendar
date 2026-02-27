import React from 'react'
import axios from 'axios'
import { useConfig } from './ConfigProvider'
import { buildHaUrl } from './config'
import { mdiWashingMachineAlert, mdiWashingMachineOff, mdiWashingMachine } from '@mdi/js'
import { formatErrorForUI } from './axios-error-handler'
import useMultiEntitySubscription from './use-multi-entity-subscription'

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

  const machines = Array.isArray(LAUNDRY_MACHINES) ? LAUNDRY_MACHINES : []
  const entityIds = React.useMemo(
    () => machines.filter(m => m.entity_id).map(m => m.entity_id),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [machines.map(m => m.entity_id).join(',')]
  )

  const [machineStates, setMachineStates] = React.useState({})
  const [machineErrors, setMachineErrors] = React.useState({})

  // Single WebSocket subscription for all machines
  const handleStateUpdate = React.useCallback((entityId, newState) => {
    setMachineStates(prev => ({ ...prev, [entityId]: newState }))
  }, [])

  const { error: wsError } = useMultiEntitySubscription({
    entityIds,
    enabled: ENABLE_LAUNDRY && entityIds.length > 0,
    onStateUpdate: handleStateUpdate,
    logPrefix: 'laundry',
  })

  // Fetch initial states via REST API
  React.useEffect(() => {
    if (!ENABLE_LAUNDRY || entityIds.length === 0) {
      return
    }

    const abortControllers = new Map()

    entityIds.forEach(entityId => {
      const url = buildHaUrl(`/api/states/${entityId}`, config)
      if (!url) return

      const abortController = new AbortController()
      abortControllers.set(entityId, abortController)

      axios(url, { signal: abortController.signal })
        .then((response) => {
          setMachineStates(prev => ({ ...prev, [entityId]: response.data.state }))
          setMachineErrors(prev => ({ ...prev, [entityId]: false }))
        })
        .catch((err) => {
          if (!abortController.signal.aborted) {
            setMachineErrors(prev => ({ ...prev, [entityId]: formatErrorForUI(err) }))
          }
        })
    })

    return () => {
      abortControllers.forEach(controller => controller.abort())
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ENABLE_LAUNDRY, entityIds.join(','), config])

  // Build subscriptions array from state
  const subscriptions = machines.map(machine => ({
    state: machineStates[machine.entity_id] || 'off',
    error: machineErrors[machine.entity_id] || wsError || false,
    name: machine.name
  }))

  const [ state, setState ] = React.useState(mapToPresentation['off'])
  const [ error, setError ] = React.useState(false)

  const machineStatesArray = subscriptions.map(sub => sub.state)
  const machineErrorsArray = subscriptions.map(sub => sub.error)

  React.useEffect(() => {
    const hasError = machineErrorsArray.some(err => err !== false)
    setError(hasError ? machineErrorsArray.find(err => err !== false) || false : false)
  }, [machineErrorsArray])

  React.useEffect(() => {
    const sum = machineStatesArray.reduce((acc, machineState) => {
      return acc + (mapToValue[machineState] || 0)
    }, 0)

    if (sum === 0) {
      setState(mapToPresentation['off'])
    } else if (sum < 16) {
      setState(mapToPresentation['standby'])
    } else if (sum < 256) {
      setState(mapToPresentation['running'])
    } else if (sum % 256 === 0) {
      setState(mapToPresentation['done'])
    } else if (sum % 256 % 16 === 0) {
      setState(mapToPresentation['running'])
    } else if (sum % 256 % 2 === 0) {
      setState(mapToPresentation['done'])
    } else {
      setState(mapToPresentation['running'])
    }
  }, [machineStatesArray])

  const states = subscriptions.map(sub => ({
    label: sub.name,
    state: sub.state
  }))

  return [ state, states, error ]
}

export default useWashingMachine
