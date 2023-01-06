import React from 'react'

const reloadEveryInMs = 60000 // 60 seconds

const useTimeout = () => {
  const [ toggle, setToggle ] = React.useState(true)
  React.useEffect(() => {
    const interval = setInterval(() => setToggle(v => !v), reloadEveryInMs)

    return () => clearInterval(interval)
  })
  return toggle
}

export default useTimeout