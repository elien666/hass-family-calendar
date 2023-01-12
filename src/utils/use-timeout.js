import React from 'react'

const DEFAULT_TIMEOUT = 60000 // 60 seconds
const DEBUG = false

const useTimeout = (timeout = DEFAULT_TIMEOUT, name = undefined) => {
  const [ toggle, setToggle ] = React.useState(true)
  React.useEffect(() => {
    if (DEBUG && name) {
      console.log('Timer', name, 'in', timeout / 1000, 'seconds')
    }
    const interval = setInterval(() => {
      if (DEBUG && name) console.log('Triggering timer', name)
      setToggle(v => !v)
    }, timeout)
    return () => {
      if (DEBUG && name) console.log('Clearing timer', name)
      clearInterval(interval)
    }
  })
  return toggle
}

export default useTimeout