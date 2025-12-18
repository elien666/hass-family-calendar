import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react'
import axios from 'axios'
import logger, { setLoggingEnabled } from './logger'

// Use Vite's built-in DEV mode to detect development vs production
const isDevelopment = import.meta.env.DEV

// localStorage key for config persistence
const CONFIG_STORAGE_KEY = 'hass-family-calendar-config'

// Default config from build-time environment variables (for development)
const getDefaultConfig = () => {
  const getEnv = (key, defaultValue = undefined) => {
    const envValue = import.meta.env[`VITE_${key}`]
    if (envValue !== undefined) {
      return envValue
    }
    return defaultValue
  }

  return {
    HASS_HOST: getEnv('HASS_HOST', ''),
    HASS_ACCESS_TOKEN: getEnv('HASS_ACCESS_TOKEN', ''),
    SUPERVISOR_TOKEN: getEnv('SUPERVISOR_TOKEN', ''),
    INGRESS_URL: getEnv('INGRESS_URL', ''),
    ENABLE_WEATHER: getEnv('ENABLE_WEATHER', false),
    WEATHER_API_KEY: getEnv('WEATHER_API_KEY', ''),
    WEATHER_LATITUDE: getEnv('WEATHER_LATITUDE'),
    WEATHER_LONGITUDE: getEnv('WEATHER_LONGITUDE'),
    ENABLE_HVV: getEnv('ENABLE_HVV', false),
    GEOFOX_USER: getEnv('GEOFOX_USER', ''),
    GEOFOX_SECRET: getEnv('GEOFOX_SECRET', ''),
    ENABLE_GARAGE: getEnv('ENABLE_GARAGE', false),
    ENTITY_GARAGE_DOOR: getEnv('ENTITY_GARAGE_DOOR', ''),
    ENABLE_LAUNDRY: getEnv('ENABLE_LAUNDRY', false),
    LAUNDRY_MACHINES: (() => {
      const value = getEnv('LAUNDRY_MACHINES', '[]')
      try {
        return typeof value === 'string' ? JSON.parse(value) : value
      } catch {
        return []
      }
    })(),
    ENABLE_DOORBELL: getEnv('ENABLE_DOORBELL', false),
    ENTITY_DOORBELL: getEnv('ENTITY_DOORBELL', ''),
    ENTITY_DOORBELL_BUTTON: getEnv('ENTITY_DOORBELL_BUTTON', ''),
    DOORBELL_CAMERAS: (() => {
      const value = getEnv('DOORBELL_CAMERAS', '[]')
      try {
        return typeof value === 'string' ? JSON.parse(value) : value
      } catch {
        return []
      }
    })(),
    ENABLE_EVERYDAY_CALENDAR: getEnv('ENABLE_EVERYDAY_CALENDAR', false),
    ENTITY_EVERYDAY_CALENDAR: getEnv('ENTITY_EVERYDAY_CALENDAR', ''),
    ENABLE_EV: getEnv('ENABLE_EV', false),
    ENTITY_PRECLIMATE_STATUS: getEnv('ENTITY_PRECLIMATE_STATUS', ''),
    ENTITY_PRECLIMATE_START: getEnv('ENTITY_PRECLIMATE_START', ''),
    ENTITY_PRECLIMATE_STOP: getEnv('ENTITY_PRECLIMATE_STOP', ''),
    ENTITY_CHARGING_STATE: getEnv('ENTITY_CHARGING_STATE', ''),
    ENTITY_STATE_OF_CHARGE: getEnv('ENTITY_STATE_OF_CHARGE', ''),
    CALENDARS: (() => {
      const value = getEnv('CALENDARS', '[]')
      try {
        return typeof value === 'string' ? JSON.parse(value) : value
      } catch {
        return []
      }
    })(),
    ENABLE_LOGGING: getEnv('ENABLE_LOGGING', false),
  }
}

// Load cached config from localStorage
const loadCachedConfig = () => {
  try {
    if (typeof window === 'undefined' || !window.localStorage) {
      return null
    }
    const cached = localStorage.getItem(CONFIG_STORAGE_KEY)
    if (cached) {
      const parsed = JSON.parse(cached)
      logger.debug('Loaded cached config from localStorage')
      return parsed
    }
  } catch (e) {
    logger.warn('Failed to load cached config from localStorage:', e)
    // Clear corrupted data
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.removeItem(CONFIG_STORAGE_KEY)
      }
    } catch {
      // Ignore errors when clearing
    }
  }
  return null
}

// Save config to localStorage
const saveConfig = (config) => {
  try {
    if (typeof window === 'undefined' || !window.localStorage) {
      return false
    }
    localStorage.setItem(CONFIG_STORAGE_KEY, JSON.stringify(config))
    logger.debug('Saved config to localStorage')
    return true
  } catch (e) {
    logger.warn('Failed to save config to localStorage:', e)
    return false
  }
}

const ConfigContext = createContext(null)

export const ConfigProvider = ({ children }) => {
  // Initialize config from cache if available, otherwise use defaults
  // In development mode, always use build-time env vars, not cached config
  // Use lazy initialization to compute cached config only once
  const [config, setConfig] = useState(() => {
    if (isDevelopment) {
      return getDefaultConfig()
    }
    const cached = loadCachedConfig()
    return cached || getDefaultConfig()
  })
  const [loading, setLoading] = useState(true)
  const [configError, setConfigError] = useState(null)
  const [isUsingCachedConfig, setIsUsingCachedConfig] = useState(() => {
    if (isDevelopment) {
      return false
    }
    return !!loadCachedConfig()
  })
  const isMountedRef = useRef(true)

  // Load config from API
  const loadConfig = useCallback(async (isReload = false) => {
    // In development, use build-time env vars (already set as default)
    if (isDevelopment) {
      if (!isReload) {
        setLoading(false)
      }
      return true
    }

    // In production, fetch from API endpoint
    // Use relative URL to work correctly with ingress paths
    try {
      // Get the base path from current location (handles ingress paths)
      const basePath = typeof window !== 'undefined' && window.location 
        ? window.location.pathname.replace(/\/$/, '') 
        : ''
      const configUrl = `${basePath}/api/config`
      const response = await axios.get(configUrl, { timeout: 5000 })
      
      if (response.data && typeof response.data === 'object') {
        // Validate config structure (basic check)
        if (typeof response.data === 'object' && !Array.isArray(response.data)) {
          // Success - update config and save to localStorage
          if (isMountedRef.current) {
            setConfig(response.data)
            setIsUsingCachedConfig(false)
            setConfigError(null)
            saveConfig(response.data)
            
            // Get enabled features for summary
            const enabledFeatures = Object.keys(response.data)
              .filter(k => k.startsWith('ENABLE_') && response.data[k])
              .map(k => k.replace('ENABLE_', ''))
            
            // Log summary to backend
            logger.info(
              `Configuration ${isReload ? 'reloaded' : 'loaded'} from API endpoint. Enabled features: ${enabledFeatures.length > 0 ? enabledFeatures.join(', ') : 'none'}`,
              {
                enabledFeatures,
                totalConfigKeys: Object.keys(response.data).length
              }
            )
          }
          return true
        } else {
          throw new Error('Invalid config structure: expected object')
        }
      } else {
        throw new Error('Invalid config response: expected object')
      }
    } catch (error) {
      // Failed to load config
      if (isMountedRef.current) {
        const errorMessage = error.response 
          ? `HTTP ${error.response.status}: ${error.response.statusText}`
          : error.message || 'Unknown error'
        
        setConfigError(errorMessage)
        
        if (isReload) {
          // On reload failure, keep using current config (cached or default)
          logger.warn('Failed to reload config from API, keeping current config:', errorMessage)
        } else {
          // On initial load failure, check if we have cached config
          const cached = loadCachedConfig()
          if (cached) {
            logger.warn('Failed to load config from API, using cached config:', errorMessage)
            setIsUsingCachedConfig(true)
          } else {
            logger.debug('Failed to load config from API, using defaults:', errorMessage)
            setIsUsingCachedConfig(false)
          }
        }
      }
      return false
    } finally {
      if (isMountedRef.current && !isReload) {
        setLoading(false)
      }
    }
  }, [])

  // Reload config function (exposed via context)
  const reloadConfigRef = useRef(null)
  const reloadConfig = useCallback(async () => {
    // Skip reload in development mode
    if (isDevelopment) {
      logger.debug('Skipping config reload in development mode')
      return true
    }
    
    // Prevent concurrent reloads
    if (reloadConfigRef.current) {
      logger.debug('Config reload already in progress, skipping')
      return reloadConfigRef.current
    }
    
    logger.debug('Reloading config...')
    const reloadPromise = loadConfig(true).finally(() => {
      reloadConfigRef.current = null
    })
    reloadConfigRef.current = reloadPromise
    return reloadPromise
  }, [loadConfig])

  // Initial load on mount
  useEffect(() => {
    loadConfig(false)
    
    return () => {
      isMountedRef.current = false
    }
  }, []) // Only run on mount

  // Update axios defaults when config changes
  // This runs on mount and whenever HASS_ACCESS_TOKEN changes
  useEffect(() => {
    const token = config.HASS_ACCESS_TOKEN || ''
    const hasValidToken = token &&
      typeof token === 'string' &&
      token.trim() !== '' &&
      token !== 'undefined' &&
      token !== 'null'

    if (hasValidToken) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      logger.debug('Axios Authorization header set from config')
    } else {
      // Explicitly remove Authorization header for add-on mode
      // Backend proxy adds SUPERVISOR_TOKEN, so frontend should not send Authorization header
      delete axios.defaults.headers.common['Authorization']
      logger.debug('Axios Authorization header removed (add-on mode or no token)')
    }
  }, [config.HASS_ACCESS_TOKEN])

  // Update logger backend flag when config changes
  useEffect(() => {
    const loggingEnabled = config.ENABLE_LOGGING === true // Default to false if not set
    setLoggingEnabled(loggingEnabled)
    if (isDevelopment) {
      console.debug(`Frontend logging to backend API: ${loggingEnabled ? 'enabled' : 'disabled'}`)
    }
  }, [config.ENABLE_LOGGING])

  return (
    <ConfigContext.Provider value={{ 
      config, 
      loading, 
      configError,
      isUsingCachedConfig,
      reloadConfig 
    }}>
      {children}
    </ConfigContext.Provider>
  )
}

export const useConfig = () => {
  const context = useContext(ConfigContext)
  if (!context) {
    throw new Error('useConfig must be used within ConfigProvider')
  }
  return context.config
}

export const useConfigLoading = () => {
  const context = useContext(ConfigContext)
  if (!context) {
    throw new Error('useConfigLoading must be used within ConfigProvider')
  }
  return context.loading
}

export const useConfigError = () => {
  const context = useContext(ConfigContext)
  if (!context) {
    throw new Error('useConfigError must be used within ConfigProvider')
  }
  return context.configError
}

export const useIsUsingCachedConfig = () => {
  const context = useContext(ConfigContext)
  if (!context) {
    throw new Error('useIsUsingCachedConfig must be used within ConfigProvider')
  }
  return context.isUsingCachedConfig
}

export const useReloadConfig = () => {
  const context = useContext(ConfigContext)
  if (!context) {
    throw new Error('useReloadConfig must be used within ConfigProvider')
  }
  return context.reloadConfig
}

