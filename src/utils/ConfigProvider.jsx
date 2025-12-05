import React, { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios'
import logger from './logger'

// Use Vite's built-in DEV mode to detect development vs production
const isDevelopment = import.meta.env.DEV

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
  }
}

const ConfigContext = createContext(null)

export const ConfigProvider = ({ children }) => {
  const [config, setConfig] = useState(getDefaultConfig)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadConfig = async () => {
      // In development, use build-time env vars (already set as default)
      if (isDevelopment) {
        setLoading(false)
        return
      }

      // In production, fetch from API endpoint
      try {
        const response = await axios.get('/api/config', { timeout: 5000 })
        if (response.data && typeof response.data === 'object') {
          setConfig(response.data)
          logger.info('Configuration loaded from API endpoint', {
            enabledFeatures: Object.keys(response.data)
              .filter(k => k.startsWith('ENABLE_') && response.data[k])
              .map(k => k.replace('ENABLE_', ''))
          })
        }
      } catch (error) {
        logger.debug('Failed to load config from API, using defaults:', error.message)
        // Keep default config (from build-time env vars)
      } finally {
        setLoading(false)
      }
    }

    loadConfig()
  }, [])

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

  return (
    <ConfigContext.Provider value={{ config, loading }}>
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

