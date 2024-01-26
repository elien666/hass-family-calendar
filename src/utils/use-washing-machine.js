import {
  createLongLivedTokenAuth,
  createConnection,
} from 'home-assistant-js-websocket'
import React from 'react'
import axios from 'axios'
import { HASS_HOST } from "./config";
import { mdiWashingMachineAlert, mdiWashingMachineOff, mdiWashingMachine } from '@mdi/js';

const ACCESS_TOKEN = ''
const ENTITY_ID_NEU = 'input_select.wasching_machine_neu_status'
const ENTITY_ID_ALT = 'input_select.washing_machine_alt_status'
const ENTITY_ID_DRYER = 'input_select.dryer_status'

axios.defaults.headers.common['Authorization'] = `Bearer ${ACCESS_TOKEN}`

const urlPattern = ( entity ) => `${HASS_HOST}/api/states/${entity}`

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
  const machineNew = useSubscription(ENTITY_ID_NEU)
  const machineOld = useSubscription(ENTITY_ID_ALT)
  const dryer = useSubscription(ENTITY_ID_DRYER)

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

  React.useEffect(() => {
    axios(urlPattern(entity))
      .then((response) => {
        setState(response.data.state)
      })
  // eslint-disable-next-line
  }, [])

  React.useEffect(() => {
    (async () => {
      const auth = createLongLivedTokenAuth(
        HASS_HOST,
        ACCESS_TOKEN
      );

      const connection = await createConnection({ auth });

      const trigger = (result) => {
        setState(result.variables.trigger.to_state.state)
      }

      const unsubscribe = await connection.subscribeMessage(trigger, {
        "type": "subscribe_trigger",
        "trigger":
          {
            "platform": "state",
            "entity_id": entity,
          }
      })

      return (() => unsubscribe())

    })();
  // eslint-disable-next-line
  }, [])

  return state

}

export default useWashingMachine