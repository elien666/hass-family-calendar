import {
  createLongLivedTokenAuth,
  createConnection,
} from 'home-assistant-js-websocket'
import React from 'react'
import axios from 'axios'
import { HASS_HOST } from "./config";

const ACCESS_TOKEN = ''
const ENTITY_ID_NEU = 'input_select.wasching_machine_neu_status'
const ENTITY_ID_ALT = 'input_select.washing_machine_alt_status'
const ENTITY_ID_DRYER = 'input_select.dryer_status'

axios.defaults.headers.common['Authorization'] = `Bearer ${ACCESS_TOKEN}`

const url = `${HASS_HOST}/api/states/${ENTITY_ID_NEU}`

const toPresentation = {
  done: { label: 'Fertig', animate: false },
  off: { label: 'Aus', animate: false },
  standby: { label: 'Standby', animate: false },
  running: { label: 'Läuft …', animate: true }
}

const useWashingMachine = () => {

  const [ state, setState ] = React.useState(toPresentation['off'])

  React.useEffect(() => {
    axios(url)
      .then((response) => {
        setState(toPresentation[response.data.state])
      })
  }, [])

  React.useEffect(() => {
    (async () => {
      const auth = createLongLivedTokenAuth(
        HASS_HOST,
        ACCESS_TOKEN
      );

      const connection = await createConnection({ auth });

      const trigger = (result) => {
        setState(toPresentation[result.variables.trigger.to_state.state])
      }

      const unsubscribe = await connection.subscribeMessage(trigger, {
        "type": "subscribe_trigger",
        "trigger":
          {
            "platform": "state",
            "entity_id": ENTITY_ID_NEU,
          }
      })

      return (() => unsubscribe())

    })();
  }, [])

  return state

}

export default useWashingMachine