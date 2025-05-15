import {
  createLongLivedTokenAuth,
  createConnection,
} from 'home-assistant-js-websocket'
import React from 'react'
import axios from 'axios'
import { HASS_HOST } from "./config";

const ACCESS_TOKEN = ''
const ENTITY_ID = 'binary_sensor.tuerklingel_besucher'

axios.defaults.headers.common['Authorization'] = `Bearer ${ACCESS_TOKEN}`

const url = `${HASS_HOST}/api/states/${ENTITY_ID}`

const useDoorbell = () => {

  const [ state, setState ] = React.useState('off')
  const [ error, setError ] = React.useState(false)

  React.useEffect(() => {
    axios(url)
      .then((response) => {
        setState(response.data.state)
      })
  }, [])

  React.useEffect(() => {
    async function connect() {
      let auth
      try {
        auth = createLongLivedTokenAuth(
          HASS_HOST,
          ACCESS_TOKEN
        );
        setError(false)
      } catch (err) {
        setError(err)
      }
    
      const connection = await createConnection({ auth });
    
      const trigger = (result) => {
        setState(result.variables.trigger.to_state.state)
      }
    
      await connection.subscribeMessage(trigger, {
        "type": "subscribe_trigger",
        "trigger":
          {
            "platform": "state",
            "entity_id": ENTITY_ID,
          }
      })
    
      return connection
    }

    connect()
  }, [])

  return [ state, error ]

}

export default useDoorbell