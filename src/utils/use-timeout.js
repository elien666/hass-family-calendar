import React from 'react'
import logger from './logger'

const DEFAULT_TIMEOUT = 60000 // 60 seconds
const DEBUG = false

const useTimeout = (timeout = DEFAULT_TIMEOUT, name = undefined) => {
  const [ toggle, setToggle ] = React.useState(true)
  React.useEffect(() => {
    if (DEBUG && name) {
      logger.debug('Timer', name, 'in', timeout / 1000, 'seconds')
    }
    const interval = setInterval(() => {
      if (DEBUG && name) logger.debug('Triggering timer', name)
      setToggle(v => !v)
    }, timeout)
    return () => {
      if (DEBUG && name) logger.debug('Clearing timer', name)
      clearInterval(interval)
    }
  }, [timeout, name])
  return toggle
}

export default useTimeout