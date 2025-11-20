import React from 'react'
import { BUTTONS_WS_URL } from './config'
import logger from './logger'

const usePhysicalButtons = () => {

  const [ lastPin, set ] = React.useState(0)
  const [ connection, setConnection ] = React.useState(undefined)
  const resetTimeoutRef = React.useRef(null)

  const handleMessage = (raw) => {
    const data = JSON.parse(raw)

    if (data.type === 'button') {
      set(data.pin)
      // Clear any existing timeout
      if (resetTimeoutRef.current) {
        clearTimeout(resetTimeoutRef.current)
      }
      // Reset PIN to 0 in 250 ms, if PIN has not changed in the meantime
      resetTimeoutRef.current = setTimeout(() => set((pin) => (
        pin === data.pin ? 0 : pin
      )), 250)
    } else {
      logger.debug('Got message from buttons server', data)
    }
  }
  const connect = () => {
    try {
      const socket = new WebSocket(BUTTONS_WS_URL)

      // Set event handlers.
      socket.onopen = () => logger.debug('Connected to buttons server')
      socket.onmessage = (e) => handleMessage(e.data)
      socket.onclose = () => {
        logger.debug('Connection to buttons server closed')
        setConnection(false)
      }
      socket.onerror = (e) => logger.warn('Buttons server error', e)

      setConnection(socket)
      return socket
    } catch (error) {
      logger.error('Could not establish connection to button server', error)
      setConnection(false)
      return null
    }
  }

  React.useEffect(() => {
    const socket = connect()
    return () => {
      if (socket) socket.close()
      if (resetTimeoutRef.current) {
        clearTimeout(resetTimeoutRef.current)
      }
    }
    // eslint-disable-next-line
  }, [])

  // Try reconnecting every 5 seconds, fail permanently after 10 tries
  const [counter, setCounter] = React.useState(0)
  React.useEffect(() => {
    if (connection === false && counter < 10) {
      setCounter(i => i + 1)
      const interval = setInterval(connect, 5000)
      return () => clearInterval(interval)
    } else if (counter >= 10) {
      logger.error('Giving up on trying to connect to button server')
    }
    // eslint-disable-next-line
  }, [ connection, counter ])

  return lastPin

}

export default usePhysicalButtons