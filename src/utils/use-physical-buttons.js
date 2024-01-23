import React from 'react'

const usePhysicalButtons = () => {

  const [ lastPin, set ] = React.useState(0)
  const [ connection, setConnection ] = React.useState(undefined)

  const handleMessage = (raw) => {
    const data = JSON.parse(raw)

    if (data.type === 'button') {
      set(data.pin)
      // Reset PIN to 0 in 250 ms, if PIN has not changed in the meantime
      setInterval(() => set((pin) => (
        pin === data.pin ? 0 : pin
      )), 250)
    } else {
      console.log('Got message from buttons server', data)
    }
  }
  const connect = () => {
    try {
      const socket = new WebSocket("ws://:5678/")

      // Set event handlers.
      socket.onopen = () => console.log('Connected to buttons server')
      socket.onmessage = (e) => handleMessage(e.data)
      socket.onclose = () => {
        console.log('Connection to buttons server closed')
        setConnection(false)
      }
      socket.onerror = (e) => console.log('Buttons server error', e)

      setConnection(socket)
      return socket
    } catch (error) {
      console.error('Could not establish connection to button server', error)
      setConnection(false)
      return null
    }
  }

  React.useEffect(() => {
    const socket = connect()
    return () => socket.close()
    // eslint-disable-next-line
  }, [])

  // Try reconnecting every 5 seconds, fail permanently after 10 tries
  const [counter, setCounter] = React.useState(0)
  React.useEffect(() => {
    if (connection === false && counter < 10) {
      setCounter(i => i++)
      const interval = setInterval(connect, 5000)
      return () => clearInterval(interval)
    } else if (counter >= 10) {
      console.error('Giving up on trying to connect to button server')
    }
    // eslint-disable-next-line
  }, [ connection ])

  return lastPin

}

export default usePhysicalButtons