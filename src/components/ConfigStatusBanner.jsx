import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useConfigError, useIsUsingCachedConfig, useReloadConfig, useConfigLoading } from '../utils/ConfigProvider'

export const DISMISSED_STORAGE_KEY = 'hass-family-calendar-config-banner-dismissed'

const Banner = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${props => props.severity === 'error' ? '#d32f2f' : '#ff9800'};
  color: white;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  font-size: 14px;
  
  .message {
    flex: 1;
    margin-right: 16px;
  }
  
  .actions {
    display: flex;
    gap: 8px;
    align-items: center;
  }
  
  button {
    background-color: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: white;
    padding: 6px 12px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 13px;
    transition: background-color 0.2s;
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
    }
    
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
  
  .dismiss {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    padding: 4px 8px;
    font-size: 18px;
    line-height: 1;
    opacity: 0.8;
    
    &:hover {
      opacity: 1;
    }
  }
`

const ConfigStatusBanner = () => {
  const configError = useConfigError()
  const isUsingCachedConfig = useIsUsingCachedConfig()
  const reloadConfig = useReloadConfig()
  const loading = useConfigLoading()
  const [dismissed, setDismissed] = useState(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        return localStorage.getItem(DISMISSED_STORAGE_KEY) === 'true'
      }
    } catch (e) {
      // Ignore errors
    }
    return false
  })
  const [isReloading, setIsReloading] = useState(false)

  // Reset dismissed state when config error changes (new error = show banner again)
  useEffect(() => {
    if (configError && dismissed) {
      // New error - reset dismissed state
      setDismissed(false)
      try {
        if (typeof window !== 'undefined' && window.localStorage) {
          localStorage.removeItem(DISMISSED_STORAGE_KEY)
        }
      } catch (e) {
        // Ignore errors
      }
    }
  }, [configError, dismissed])

  // Don't show banner if loading initially, dismissed, or no issues
  if (loading || dismissed || (!configError && !isUsingCachedConfig)) {
    return null
  }

  const handleRetry = async () => {
    setIsReloading(true)
    try {
      await reloadConfig()
      // If reload succeeds, error will be cleared and banner will hide
    } catch (error) {
      // Error already handled by reloadConfig
    } finally {
      setIsReloading(false)
    }
  }

  const handleDismiss = () => {
    setDismissed(true)
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem(DISMISSED_STORAGE_KEY, 'true')
      }
    } catch (e) {
      // Ignore errors
    }
  }

  // Determine severity and message
  let severity = 'warning'
  let message = ''

  if (configError && isUsingCachedConfig) {
    severity = 'warning'
    message = `Using cached configuration. Failed to load from server: ${configError}`
  } else if (configError && !isUsingCachedConfig) {
    severity = 'error'
    message = `Failed to load configuration: ${configError}`
  } else if (isUsingCachedConfig) {
    severity = 'warning'
    message = 'Using cached configuration. Some features may be outdated.'
  }

  return (
    <Banner severity={severity}>
      <div className="message">
        {message}
      </div>
      <div className="actions">
        {configError && (
          <button onClick={handleRetry} disabled={isReloading}>
            {isReloading ? 'Retrying...' : 'Retry'}
          </button>
        )}
        <button className="dismiss" onClick={handleDismiss} title="Dismiss">
          ×
        </button>
      </div>
    </Banner>
  )
}

export default ConfigStatusBanner

