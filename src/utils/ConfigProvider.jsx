import React, { createContext, useContext, useState, useEffect, useCallback, useRef, useMemo } from 'react'
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
    // HASS_ACCESS_TOKEN: Only available in local dev, not exposed in production
    HASS_ACCESS_TOKEN: getEnv('HASS_ACCESS_TOKEN', ''),
    INGRESS_URL: getEnv('INGRESS_URL', ''),
    ENABLE_WEATHER: getEnv('ENABLE_WEATHER', false),
    // WEATHER_API_KEY: Removed - handled by backend only
    WEATHER_LATITUDE: getEnv('WEATHER_LATITUDE'),
    WEATHER_LONGITUDE: getEnv('WEATHER_LONGITUDE'),
    ENABLE_HVV: getEnv('ENABLE_HVV', false),
    GEOFOX_USER: getEnv('GEOFOX_USER', ''),
    // GEOFOX_SECRET: Removed - handled by backend only
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
  const configRef = useRef(config)
  const isLoadingRef = useRef(false) // Prevent concurrent loads
  const hasInitializedRef = useRef(false) // Track if we've done initial load
  
  // Keep ref in sync with config state
  useEffect(() => {
    configRef.current = config
  }, [config])

  // Load config from API
  const loadConfig = useCallback(async (isReload = false) => {
    // Prevent concurrent loads
    if (isLoadingRef.current && !isReload) {
      logger.debug('Config load already in progress, skipping')
      return false
    }
    
    // For initial load, check if we've already initialized
    if (!isReload && hasInitializedRef.current) {
      logger.debug('Config already initialized, skipping load')
      return false
    }
    
    isLoadingRef.current = true
    if (!isReload) {
      hasInitializedRef.current = true
    }
    logger.debug('Starting config load', { isReload, hasInitialized: hasInitializedRef.current })
    // In development, fetch from backend API (http://localhost:8000/api/config)
    // This ensures we get the same config structure as production
    const configUrl = isDevelopment 
      ? 'http://localhost:8000/api/config'
      : (typeof window !== 'undefined' && window.location 
          ? `${window.location.pathname.replace(/\/$/, '')}/api/config`
          : '/api/config')
    
    try {
      const response = await axios.get(configUrl, { timeout: 5000 })
      
      if (response.data && typeof response.data === 'object') {
        // Validate config structure (basic check)
        if (typeof response.data === 'object' && !Array.isArray(response.data)) {
          // Log the received config to debug CALENDARS issue
          logger.debug('Config loaded from API:', {
            hasCALENDARS: 'CALENDARS' in response.data,
            CALENDARS: response.data.CALENDARS,
            CALENDARSCount: Array.isArray(response.data.CALENDARS) ? response.data.CALENDARS.length : 'not array',
            allKeys: Object.keys(response.data)
          })
          
          // Success - update config and save to localStorage
          // Check if config actually changed to avoid infinite loops
          const currentConfig = configRef.current
          const configChanged = JSON.stringify(response.data) !== JSON.stringify(currentConfig)
          
          logger.debug('Updating config with new data from API:', {
            configChanged,
            CALENDARSCount: Array.isArray(response.data.CALENDARS) ? response.data.CALENDARS.length : 'not array',
            currentCALENDARSCount: Array.isArray(currentConfig?.CALENDARS) ? currentConfig.CALENDARS.length : 'not array',
            responseKeys: Object.keys(response.data).length,
            currentConfigKeys: Object.keys(currentConfig || {}).length
          })
          
          // Only update if config actually changed to prevent infinite loops
          if (configChanged) {
            setConfig(response.data)
            setIsUsingCachedConfig(false)
            setConfigError(null)
            if (!isDevelopment) {
              saveConfig(response.data)
            }
          } else {
            // Config hasn't changed, just clear error state
            setIsUsingCachedConfig(false)
            setConfigError(null)
          }
          
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
          
          if (!isReload) {
            setLoading(false)
          }
          isLoadingRef.current = false
          return true
        } else {
          throw new Error('Invalid config structure: expected object, got array')
        }
      } else {
        throw new Error('Invalid config response: missing or invalid data')
      }
    } catch (error) {
      const errorMessage = error.response?.data?.detail || error.message || 'Unknown error'
      
      if (isReload) {
        // For reloads, just log warning and keep current config
        logger.warn('Failed to reload config from API, keeping current config:', errorMessage)
        return false
      } else {
        // For initial load, try to use cached config or defaults
        const cached = loadCachedConfig()
        if (cached) {
          logger.warn('Failed to load config from API, using cached config:', errorMessage)
          if (isMountedRef.current) {
            setConfig(cached)
            setIsUsingCachedConfig(true)
            setConfigError(errorMessage)
            setLoading(false)
          }
          return false
        } else {
          logger.debug('Failed to load config from API, using defaults:', errorMessage)
          if (isMountedRef.current) {
            setConfigError(errorMessage)
            setLoading(false)
          }
          return false
        }
      }
    } finally {
      isLoadingRef.current = false
    }
  }, []) // Empty deps - only run on mount

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

  // Initial load on mount - only run once
  const hasLoadedRef = useRef(false)
  useEffect(() => {
    // Only load once, even with StrictMode double-invocation
    if (hasLoadedRef.current) {
      logger.debug('Config already loaded, skipping initial load')
      return
    }
    
    // Set flag immediately to prevent double-invocation
    hasLoadedRef.current = true
    logger.debug('Initial config load starting')
    
    // Call loadConfig directly - the guards inside will prevent duplicate calls
    loadConfig(false)
    
    return () => {
      isMountedRef.current = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) // Only run on mount - loadConfig is stable (only depends on isMountedRef which is a ref)

  // Update axios defaults when config changes
  // This runs on mount and whenever HASS_ACCESS_TOKEN changes
  // Note: HASS_ACCESS_TOKEN is only available in local dev mode, not in production
  useEffect(() => {
    const token = config.HASS_ACCESS_TOKEN || ''
    const hasValidToken = token &&
      typeof token === 'string' &&
      token.trim() !== '' &&
      token !== 'undefined' &&
      token !== 'null'

    if (hasValidToken) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      logger.debug('Axios Authorization header set from config (local dev mode)')
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

  // Memoize context value to prevent unnecessary re-renders
  // Only recreate when config values actually change
  const contextValue = useMemo(() => ({
    config,
    loading,
    configError,
    isUsingCachedConfig,
    reloadConfig
  }), [config, loading, configError, isUsingCachedConfig, reloadConfig])

  return (
    <ConfigContext.Provider value={contextValue}>
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

