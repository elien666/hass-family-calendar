import React from 'react'

const reloadEveryInMs = 60000 // 60 seconds

const timeout = (setToggle) => {
  setTimeout(() => {
    setToggle(v => !v)
    timeout(setToggle)
  }, reloadEveryInMs)
}

const useTimeout = () => {
  const [ toggle, setToggle ] = React.useState(true)
  React.useEffect(() => timeout(setToggle), [])
  return toggle
}

export default useTimeout