import { useState, useEffect, useRef, useCallback } from 'react'
import axios from 'axios'
import logger from './logger'

// Debounce delay after network errors before rechecking
const DEBOUNCE_DELAY = 3000 // 3 seconds
// Polling interval when disconnected
const POLLING_INTERVAL = 30000 // 30 seconds
// Health check timeout
const HEALTH_CHECK_TIMEOUT = 5000 // 5 seconds

/**
 * Hook to manage central connection state
 * Monitors backend availability with debounced rechecks and periodic polling
 * 
 * @returns {Object} { isConnected, triggerCheck }
 */
export const useConnectionState = () => {
  const [isConnected, setIsConnected] = useState(true) // Start optimistic
  const debounceTimerRef = useRef(null)
  const pollingTimerRef = useRef(null)
  const isCheckingRef = useRef(false)
  const lastCheckRef = useRef(Date.now())
  const isConnectedRef = useRef(true) // Keep ref in sync with state for logging

  // Keep ref in sync with state
  useEffect(() => {
    isConnectedRef.current = isConnected
  }, [isConnected])

  /**
   * Performs a health check to determine if backend is reachable
   */
  const performHealthCheck = useCallback(async () => {
    // Prevent concurrent checks
    if (isCheckingRef.current) {
      return
    }

    isCheckingRef.current = true
    lastCheckRef.current = Date.now()

    try {
      // Use a lightweight endpoint - /api/config is good as it's already used
      // In production, it uses relative URL which works with ingress
      const basePath = typeof window !== 'undefined' && window.location 
        ? window.location.pathname.replace(/\/$/, '') 
        : ''
      const healthCheckUrl = `${basePath}/api/config`

      await axios.get(healthCheckUrl, {
        timeout: HEALTH_CHECK_TIMEOUT,
        // Don't trigger connection check on this request to avoid loops
        metadata: { skipConnectionCheck: true }
      })

      // Success - backend is reachable
      if (!isConnectedRef.current) {
        logger.info('Connection restored - backend is reachable')
      }
      setIsConnected(true)
      isCheckingRef.current = false

      // Clear polling timer if we're connected
      if (pollingTimerRef.current) {
        clearInterval(pollingTimerRef.current)
        pollingTimerRef.current = null
      }
    } catch (error) {
      // Network error or timeout - backend is not reachable
      const isNetworkError = !error.response && (error.code === 'ERR_NETWORK' || error.code === 'ECONNABORTED')
      
      if (isNetworkError) {
        if (isConnectedRef.current) {
          logger.warn('Connection lost - backend is not reachable')
        }
        setIsConnected(false)
        isCheckingRef.current = false

        // Start polling if not already polling
        if (!pollingTimerRef.current) {
          pollingTimerRef.current = setInterval(() => {
            performHealthCheck()
          }, POLLING_INTERVAL)
        }
      } else {
        // Other errors (e.g., 401, 500) - backend is reachable but returned error
        // Consider this as "connected" since we got a response
        if (!isConnectedRef.current) {
          logger.info('Connection restored - backend responded (with error)')
        }
        setIsConnected(true)
        isCheckingRef.current = false

        // Clear polling timer
        if (pollingTimerRef.current) {
          clearInterval(pollingTimerRef.current)
          pollingTimerRef.current = null
        }
      }
    }
  }, []) // No dependencies - uses refs for state access

  /**
   * Triggers a debounced connection check
   * Used by axios interceptors and other components
   */
  const triggerCheck = useCallback(() => {
    // Clear existing debounce timer
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current)
    }

    // Debounce the check
    debounceTimerRef.current = setTimeout(() => {
      performHealthCheck()
    }, DEBOUNCE_DELAY)
  }, [performHealthCheck])

  // Handle page visibility changes (wake from sleep)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        // Page became visible - check connection
        logger.debug('Page became visible - checking connection')
        triggerCheck()
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [triggerCheck])

  // Initial health check on mount
  useEffect(() => {
    // Small delay to let app initialize
    const initialCheck = setTimeout(() => {
      performHealthCheck()
    }, 1000)

    return () => {
      clearTimeout(initialCheck)
    }
  }, []) // Only run on mount

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current)
      }
      if (pollingTimerRef.current) {
        clearInterval(pollingTimerRef.current)
      }
    }
  }, [])

  return {
    isConnected,
    triggerCheck
  }
}

