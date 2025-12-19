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
  
  const machines = Array.isArray(LAUNDRY_MACHINES) ? LAUNDRY_MACHINES : []
  
  // Use a single WebSocket connection for all machines
  // This avoids calling hooks conditionally or in loops
  const [machineStates, setMachineStates] = React.useState({})
  const [machineErrors, setMachineErrors] = React.useState({})
  
  // Single WebSocket subscription for all laundry machines
  const { error: wsError } = useHomeAssistantWebSocket({
    enabled: ENABLE_LAUNDRY && machines.length > 0,
    logPrefix: 'laundry',
    onReady: (connection, subscriptionsRef) => {
      // Subscribe to all machine entities
      machines.forEach(machine => {
        if (machine.entity_id) {
          const callback = (data) => {
            if (data.state !== undefined) {
              setMachineStates(prev => ({
                ...prev,
                [machine.entity_id]: data.state
              }))
            }
          }
          
          subscriptionsRef.current.set(machine.entity_id, callback)
          
          if (connection.readyState === WebSocket.OPEN) {
            connection.send(JSON.stringify({
              type: 'subscribe_entity',
              entity_id: machine.entity_id
            }))
            logger.debug(`Subscribed to ${machine.entity_id} state changes`)
          }
        }
      })
      
      return () => {
        machines.forEach(machine => {
          if (machine.entity_id) {
            subscriptionsRef.current.delete(machine.entity_id)
            if (connection.readyState === WebSocket.OPEN) {
              connection.send(JSON.stringify({
                type: 'unsubscribe_entity',
                entity_id: machine.entity_id
              }))
            }
          }
        })
      }
    },
    dependencies: [machines.map(m => m.entity_id).join(',')],
  })
  
  // Fetch initial states via REST API
  React.useEffect(() => {
    if (!ENABLE_LAUNDRY || machines.length === 0) {
      return
    }
    
    const abortControllers = new Map()
    
    machines.forEach(machine => {
      if (!machine.entity_id) return
      
      const url = urlPattern(machine.entity_id, config)
      if (!url) return
      
      const abortController = new AbortController()
      abortControllers.set(machine.entity_id, abortController)
      
      axios(url, { signal: abortController.signal })
        .then((response) => {
          setMachineStates(prev => ({
            ...prev,
            [machine.entity_id]: response.data.state
          }))
          setMachineErrors(prev => ({
            ...prev,
            [machine.entity_id]: false
          }))
        })
        .catch((err) => {
          if (!abortController.signal.aborted) {
            setMachineErrors(prev => ({
              ...prev,
              [machine.entity_id]: formatErrorForUI(err)
            }))
          }
        })
    })
    
    return () => {
      abortControllers.forEach(controller => controller.abort())
    }
  }, [ENABLE_LAUNDRY, machines.map(m => m.entity_id).join(','), config])
  
  // Build subscriptions array from state
  const subscriptions = machines.map(machine => ({
    state: machineStates[machine.entity_id] || 'off',
    error: machineErrors[machine.entity_id] || wsError || false,
    name: machine.name
  }))

  const [ state, setState ] = React.useState(mapToPresentation['off'])
  const [ error, setError ] = React.useState(false)

  // Extract states and errors from subscriptions
  const machineStatesArray = subscriptions.map(sub => sub.state)
  const machineErrorsArray = subscriptions.map(sub => sub.error)

  React.useEffect(() => {
    // Aggregate errors from all subscriptions
    const hasError = machineErrorsArray.some(err => err !== false)
    setError(hasError ? machineErrorsArray.find(err => err !== false) || false : false)
  }, [machineErrorsArray])

  React.useEffect(() => {
    // Calculate sum of all machine values
    const sum = machineStatesArray.reduce((acc, machineState) => {
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
  }, [machineStatesArray])

  // Return states array with machine names from config
  const states = subscriptions.map(sub => ({
    label: sub.name,
    state: sub.state
  }))

  return [ state, states, error ]
}

export default useWashingMachine