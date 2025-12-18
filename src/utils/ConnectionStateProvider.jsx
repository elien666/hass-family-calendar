import React, { createContext, useContext, useEffect, useRef } from 'react'
import { useConnectionState } from './use-connection-state'
import { setGlobalConnectionCheckTrigger, isDevelopment } from './config'
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
  const reloadTimeoutRef = useRef(null)
  const isReloadingRef = useRef(false)

  // Register the trigger function globally so axios interceptors can use it
  useEffect(() => {
    setGlobalConnectionCheckTrigger(connectionState.triggerCheck)
    return () => {
      setGlobalConnectionCheckTrigger(null)
    }
  }, [connectionState.triggerCheck])

  // Trigger config reload when connection is restored
  useEffect(() => {
    // Skip config reload in development mode
    if (isDevelopment) {
      return
    }
    
    const isCurrentlyConnected = connectionState.isConnected
    
    // Track if we were disconnected
    if (!isCurrentlyConnected) {
      wasDisconnectedRef.current = true
      // Clear any pending reload when disconnected
      if (reloadTimeoutRef.current) {
        clearTimeout(reloadTimeoutRef.current)
        reloadTimeoutRef.current = null
      }
      return
    }

    // If we were disconnected and are now connected, reload config
    // Add debounce to prevent rapid-fire reloads
    if (wasDisconnectedRef.current && isCurrentlyConnected && !isReloadingRef.current) {
      // Clear any existing timeout
      if (reloadTimeoutRef.current) {
        clearTimeout(reloadTimeoutRef.current)
      }
      
      // Debounce the reload to prevent rapid-fire calls
      reloadTimeoutRef.current = setTimeout(() => {
        if (isReloadingRef.current) {
          return // Already reloading
        }
        
        isReloadingRef.current = true
        logger.debug('Connection restored - triggering config reload')
        reloadConfig()
          .then(() => {
            wasDisconnectedRef.current = false
          })
          .catch((error) => {
            logger.warn('Failed to reload config after connection restore:', error)
          })
          .finally(() => {
            isReloadingRef.current = false
            reloadTimeoutRef.current = null
          })
      }, 2000) // 2 second debounce
    }
    
    return () => {
      if (reloadTimeoutRef.current) {
        clearTimeout(reloadTimeoutRef.current)
        reloadTimeoutRef.current = null
      }
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

