import React from 'react'

const usePhysicalButtons = () => {

  const [ lastPin, set ] = React.useState(0)
  const [ connection, setConnection ] = React.useState(undefined)

  const handleMessage = (raw) => {
    const data = JSON.parse(raw)

    if (data.type === 'button') {
      set(data.pin)
    } else {
      console.log('Got message from buttons server', data)
    }
  }

  const connect = () => {
    const socket = new WebSocket("ws://:5678/")

    // Set event handlers.
    socket.onopen = () => console.log('Connected to buttons server')
    socket.onmessage = (e) => handleMessage(e.data)
    socket.onclose = () => {
      console.log('Connection to buttons server closed')
      setConnection(null)
    }
    socket.onerror = (e) => console.log('Buttons server error', e)

    setConnection(socket)
    return socket
  }

  React.useEffect(() => {
    const socket = connect()
    return () => { console.log('AA'); socket.close() }
    // eslint-disable-next-line
  }, [])

  React.useEffect(() => {
    if (connection === null) {
      const interval = setInterval(connect, 5000)
      return () => clearInterval(interval)
    }
    // eslint-disable-next-line
  }, [ connection ])

  return lastPin

}

export default usePhysicalButtons