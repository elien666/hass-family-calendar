import React, { createContext, useContext, useEffect } from 'react'
import { useConnectionState } from './use-connection-state'
import { setGlobalConnectionCheckTrigger } from './config'

const ConnectionStateContext = createContext(null)

/**
 * Provider component that wraps the app to provide connection state globally
 */
export const ConnectionStateProvider = ({ children }) => {
  const connectionState = useConnectionState()

  // Register the trigger function globally so axios interceptors can use it
  useEffect(() => {
    setGlobalConnectionCheckTrigger(connectionState.triggerCheck)
    return () => {
      setGlobalConnectionCheckTrigger(null)
    }
  }, [connectionState.triggerCheck])

  return (
    <ConnectionStateContext.Provider value={connectionState}>
      {children}
    </ConnectionStateContext.Provider>
  )
}

/**
 * Hook to access connection state
 * @returns {Object} { isConnected, triggerCheck }
 */
export const useConnectionStateContext = () => {
  const context = useContext(ConnectionStateContext)
  if (!context) {
    throw new Error('useConnectionStateContext must be used within ConnectionStateProvider')
  }
  return context
}

