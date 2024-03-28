import {
  createLongLivedTokenAuth,
  createConnection,
} from 'home-assistant-js-websocket'
import React from 'react'
import axios from 'axios'
import { HASS_HOST } from "./config";

const ACCESS_TOKEN = ''
const ENTITTY_ID = 'cover.00241d89947150'

axios.defaults.headers.common['Authorization'] = `Bearer ${ACCESS_TOKEN}`

const url = `${HASS_HOST}/api/states/${ENTITTY_ID}`

const useGarageDoor = () => {

  const [ state, setState ] = React.useState('closed')
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
            "entity_id": ENTITTY_ID,
          }
      })
    
      return connection
    }

    connect()
  }, [])

  return [ state, error ]

}

export const toggleGarageDoor = (isLoading) => {
  isLoading(true)
  setInterval(() => isLoading(false), 3000)
  axios.post(`${HASS_HOST}/api/services/cover/toggle`, {
    entity_id: 'cover.00241d89947150'
  })
}

export const openGarageDoor = (isLoading) => {
  isLoading(true)
  setInterval(() => isLoading(false), 3000)
  axios.post(`${HASS_HOST}/api/services/cover/open_cover`, {
    entity_id: 'cover.00241d89947150'
  })
}

export const closeGarageDoor = (isLoading) => {
  isLoading(true)
  setInterval(() => isLoading(false), 3000)
  axios.post(`${HASS_HOST}/api/services/cover/close_cover`, {
    entity_id: 'cover.00241d89947150'
  })
}

export default useGarageDoor