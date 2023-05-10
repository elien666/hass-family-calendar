import {
  createLongLivedTokenAuth,
  createConnection,
} from 'home-assistant-js-websocket'
import React from 'react'
import axios from 'axios'
import { HASS_HOST } from "./config";

const ACCESS_TOKEN = ''
const ENTITTY_ID = 'input_select.wasching_machine_neu_status'

axios.defaults.headers.common['Authorization'] = `Bearer ${ACCESS_TOKEN}`

const url = `${HASS_HOST}/api/states/${ENTITTY_ID}`

const useWashingMachine = () => {

  const [ state, setState ] = React.useState('off')

  React.useEffect(() => {
    axios(url)
      .then((response) => {
        setState(response.data.state)
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
        setState(result.variables.trigger.to_state.state)
      }

      const unsubscribe = await connection.subscribeMessage(trigger, {
        "type": "subscribe_trigger",
        "trigger":
          {
            "platform": "state",
            "entity_id": ENTITTY_ID,
          }
      })

      return (() => unsubscribe())

    })();
  }, [])

  return state

}

export default useWashingMachine