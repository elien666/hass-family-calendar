import {
  createLongLivedTokenAuth,
  createConnection,
} from 'home-assistant-js-websocket'
import React from 'react'
import axios from 'axios'
import { HASS_HOST, HASS_ACCESS_TOKEN, ENTITY_WASHING_MACHINE_NEW, ENTITY_WASHING_MACHINE_OLD, ENTITY_DRYER, ENABLE_LAUNDRY, buildHaUrl } from "./config";
import { mdiWashingMachineAlert, mdiWashingMachineOff, mdiWashingMachine } from '@mdi/js';
import logger from './logger'

// Set authorization header if token is available
if (HASS_ACCESS_TOKEN) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${HASS_ACCESS_TOKEN}`
}

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
  const machineNew = useSubscription(ENTITY_WASHING_MACHINE_NEW)
  const machineOld = useSubscription(ENTITY_WASHING_MACHINE_OLD)
  const dryer = useSubscription(ENTITY_DRYER)

  const [ state, setState ] = React.useState(mapToPresentation['off'])

  React.useEffect(() => {
    const sum = mapToValue[machineNew] + mapToValue[machineOld] + mapToValue[dryer]

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
  }, [ machineOld, machineNew, dryer ])

  return [ state, [
    { label: 'Neue Waschmaschine', state: machineNew },
    { label: 'Alte Waschmaschine', state: machineOld },
    { label: 'Trockner', state: dryer },
  ]]
}

const useSubscription = ( entity ) => {

  const [ state, setState ] = React.useState('off')

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
      })
      .catch((err) => {
        logger.error(`Failed to fetch state for ${entity}:`, err)
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entity, isConfigured, url])

  React.useEffect(() => {
    let connection = null
    let unsubscribe = null
    let isMounted = true

    async function setupConnection() {
      // Skip if not configured
      if (!isConfigured || !entity) {
        return
      }

      const host = HASS_HOST || (typeof window !== 'undefined' ? window.location.origin : '')
      const token = HASS_ACCESS_TOKEN || ''
      
      // Skip WebSocket connection if no token
      if (!token) {
        logger.debug('Skipping WebSocket connection - no access token (using REST API only)')
        return
      }
      
      try {
        const auth = createLongLivedTokenAuth(host, token)

        connection = await createConnection({ auth });

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
      } catch (err) {
        logger.error(`Failed to setup connection for ${entity}:`, err)
      }
    }

    setupConnection()

    return () => {
      isMounted = false
      if (unsubscribe) {
        unsubscribe()
      }
      if (connection) {
        connection.close()
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entity, isConfigured])

  return state

}

export default useWashingMachine