import React from 'react'

const DEFAULT_TIMEOUT = 60000 // 60 seconds

const useTimeout = (timout = DEFAULT_TIMEOUT) => {
  const [ toggle, setToggle ] = React.useState(true)
  React.useEffect(() => {
    const interval = setInterval(() => setToggle(v => !v), timout)

    return () => clearInterval(interval)
  })
  return toggle
}

export default useTimeout