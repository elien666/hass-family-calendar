import React, { createContext, useContext, useEffect, useRef } from 'react'
import { useConnectionState } from './use-connection-state'
import { setGlobalConnectionCheckTrigger } from './config'
import { useReloadConfig } from './ConfigProvider'
import logger from './logger'

const ConnectionStateContext = createContext(null)

/**
 * Provider component that wraps the app to provide connection state globally
 */
export const ConnectionStateProvider = ({ children }) => {
  const connectionState = useConnectionState()
  const reloadConfig = useReloadConfig()
  const wasDisconnectedRef = useRef(false)

  // Register the trigger function globally so axios interceptors can use it
  useEffect(() => {
    setGlobalConnectionCheckTrigger(connectionState.triggerCheck)
    return () => {
      setGlobalConnectionCheckTrigger(null)
    }
  }, [connectionState.triggerCheck])

  // Trigger config reload when connection is restored
  useEffect(() => {
    const isCurrentlyConnected = connectionState.isConnected
    
    // Track if we were disconnected
    if (!isCurrentlyConnected) {
      wasDisconnectedRef.current = true
      return
    }

    // If we were disconnected and are now connected, reload config
    if (wasDisconnectedRef.current && isCurrentlyConnected) {
      logger.debug('Connection restored - triggering config reload')
      reloadConfig().catch((error) => {
        logger.warn('Failed to reload config after connection restore:', error)
      })
      wasDisconnectedRef.current = false
    }
  }, [connectionState.isConnected, reloadConfig])

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

