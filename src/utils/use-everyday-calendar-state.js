import {
  createLongLivedTokenAuth,
  createConnection,
} from 'home-assistant-js-websocket'
import React from 'react'
import axios from 'axios'
import { HASS_HOST } from "./config";

const ACCESS_TOKEN = ''
const ENTITTY_ID = 'sensor.everyday_calendar'

axios.defaults.headers.common['Authorization'] = `Bearer ${ACCESS_TOKEN}`

const url = `${HASS_HOST}/api/states/${ENTITTY_ID}`

const useEverydayCalendar = () => {

  const [ store, setStore ] = React.useState(null)

  React.useEffect(() => {
    axios(url)
      .then((response) => {
        setStore(response.data.attributes.store)
      })
  }, [])

  return store

}

export const storeData = (data) => {
  axios.post(url, {
    state: new Date(),
    attributes: { store: data }
  })
}

export default useEverydayCalendar