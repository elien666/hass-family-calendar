import React from 'react'
import axios from 'axios'
import { useConfig } from './ConfigProvider'
import { buildHaUrl } from './config'
import logger from './logger'

/**
 * Hook to manage Frigate authentication
 * Returns Frigate host and cookie information for making direct requests
 */
export const useFrigateAuth = () => {
  const config = useConfig()
  const FRIGATE_HOST = config.FRIGATE_HOST || ''

  const [cookieInfo, setCookieInfo] = React.useState(null)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(null)
  const refreshTimeoutRef = React.useRef(null)

  // Initial login - login directly to Frigate so it can set the cookie
  React.useEffect(() => {
    if (!FRIGATE_HOST) {
      setLoading(false)
      return
    }

    let isMounted = true

    async function performLogin() {
      setLoading(true)
      setError(null)

      try {
        // Login via our backend - it handles CSRF token properly
        // The backend performs the login server-side and returns cookie info
        const loginUrl = buildHaUrl('/api/frigate/login')
        const response = await axios.post(loginUrl)

        if (isMounted) {
          const cookie = response.data?.cookie
          const frigateHost = response.data?.frigate_host || FRIGATE_HOST

          if (!cookie || !frigateHost) {
            throw new Error('Invalid response from Frigate login endpoint')
          }

          setCookieInfo({ cookie, frigateHost })
          setLoading(false)

          // After backend login, make a request to Frigate so it can set the cookie in browser
          // This is needed for direct browser requests to Frigate
          try {
            // Make a request to Frigate to trigger cookie setting
            // Use a simple GET request that Frigate will accept
            await axios.get(
              `${frigateHost}/`,
              {
                withCredentials: true,
                headers: {
                  // Don't send Origin to avoid CSRF check
                }
              }
            )
            logger.debug('Made request to Frigate to trigger cookie setting')
          } catch (err) {
            // Ignore errors - cookie might already be set or will be set on first MJPEG request
            logger.debug('Request to Frigate for cookie setting failed (may be normal):', err)
          }
          
          // Try to set cookie in browser if not httpOnly (for cross-origin support)
          // Note: This only works for same-origin or if domain is properly configured
          if (cookie.name && cookie.value && !cookie.httpOnly) {
            setCookieInBrowser(cookie)
          }

          // Schedule proactive refresh
          scheduleRefresh(cookie)
        }
      } catch (err) {
        if (isMounted) {
          logger.error('Failed to login to Frigate:', err)
          setError(err instanceof Error ? err.message : String(err))
          setLoading(false)
        }
      }
    }

    performLogin()

    return () => {
      isMounted = false
      if (refreshTimeoutRef.current) {
        clearTimeout(refreshTimeoutRef.current)
      }
    }
  }, [FRIGATE_HOST])

  // Function to schedule proactive refresh
  const scheduleRefresh = React.useCallback((cookie) => {
    if (!cookie.expires_datetime) {
      return
    }

    // Clear existing timeout
    if (refreshTimeoutRef.current) {
      clearTimeout(refreshTimeoutRef.current)
    }

    try {
      const expiresDate = new Date(cookie.expires_datetime)
      const now = new Date()
      const timeUntilExpiry = expiresDate.getTime() - now.getTime()

      // Refresh 5 minutes before expiration
      const refreshDelay = Math.max(0, timeUntilExpiry - 5 * 60 * 1000)

      if (refreshDelay > 0) {
        refreshTimeoutRef.current = setTimeout(async () => {
          try {
            const url = buildHaUrl('/api/frigate/refresh')
            const response = await axios.post(url)
            const newCookie = response.data?.cookie
            const frigateHost = response.data?.frigate_host

            if (newCookie && frigateHost) {
              setCookieInfo({ cookie: newCookie, frigateHost })
              setCookieInBrowser(newCookie)
              scheduleRefresh(newCookie)
            }
          } catch (err) {
            logger.error('Failed to refresh Frigate cookie:', err)
            // Try to login again
            try {
              const url = buildHaUrl('/api/frigate/login')
              const response = await axios.post(url)
              const cookie = response.data?.cookie
              const frigateHost = response.data?.frigate_host

              if (cookie && frigateHost) {
                setCookieInfo({ cookie, frigateHost })
                setCookieInBrowser(cookie)
                scheduleRefresh(cookie)
              }
            } catch (loginErr) {
              logger.error('Failed to re-login to Frigate:', loginErr)
            }
          }
        }, refreshDelay)

        logger.debug(`Scheduled Frigate cookie refresh in ${refreshDelay / 1000} seconds`)
      }
    } catch (err) {
      logger.warn('Failed to parse cookie expiration date:', err)
    }
  }, [])

  // Function to set cookie in browser
  const setCookieInBrowser = React.useCallback((cookie) => {
    if (!cookie.name || !cookie.value) {
      return
    }

    // httpOnly cookies cannot be set via document.cookie
    if (cookie.httpOnly) {
      logger.debug('Cookie is httpOnly, cannot set via document.cookie - browser will handle it automatically if set via Set-Cookie header')
      return
    }

    try {
      // Build cookie string
      let cookieString = `${cookie.name}=${cookie.value}`

      if (cookie.path) {
        cookieString += `; path=${cookie.path}`
      }

      // For cross-origin cookies, we need to set the domain correctly
      // Extract domain from FRIGATE_HOST if available
      if (FRIGATE_HOST) {
        try {
          const frigateUrl = new URL(FRIGATE_HOST)
          const domain = frigateUrl.hostname
          // Only set domain if it's not localhost (localhost cookies don't need domain)
          if (domain && !domain.includes('localhost') && !domain.includes('127.0.0.1')) {
            cookieString += `; domain=${domain}`
          }
        } catch (e) {
          // If FRIGATE_HOST is not a valid URL, use cookie.domain if available
          if (cookie.domain) {
            cookieString += `; domain=${cookie.domain}`
          }
        }
      } else if (cookie.domain) {
        cookieString += `; domain=${cookie.domain}`
      }

      if (cookie.expires) {
        cookieString += `; expires=${cookie.expires}`
      }

      // For cross-origin requests, SameSite=None requires Secure
      // Always set Secure if the cookie was marked secure, or if using HTTPS
      const isSecure = cookie.secure || (typeof window !== 'undefined' && window.location.protocol === 'https:')
      if (isSecure) {
        cookieString += '; secure'
      }

      // Set SameSite=None for cross-origin cookies
      // This is required for cookies to be sent in cross-origin requests
      cookieString += '; SameSite=None'

      // Set cookie
      document.cookie = cookieString
      logger.debug('Set Frigate cookie in browser:', cookie.name, 'domain:', cookie.domain || 'auto')
    } catch (err) {
      logger.warn('Failed to set cookie in browser:', err)
    }
  }, [FRIGATE_HOST])

  // Manual refresh function
  const refresh = React.useCallback(async () => {
    if (!FRIGATE_HOST) {
      return
    }

    try {
      setError(null)
      const url = buildHaUrl('/api/frigate/refresh')
      const response = await axios.post(url)
      const cookie = response.data?.cookie
      const frigateHost = response.data?.frigate_host

      if (cookie && frigateHost) {
        setCookieInfo({ cookie, frigateHost })
        setCookieInBrowser(cookie)
        scheduleRefresh(cookie)
      }
    } catch (err) {
      logger.error('Failed to refresh Frigate cookie:', err)
      setError(err instanceof Error ? err.message : String(err))
    }
  }, [FRIGATE_HOST, setCookieInBrowser, scheduleRefresh])

  return {
    cookieInfo,
    frigateHost: cookieInfo?.frigateHost || FRIGATE_HOST,
    cookie: cookieInfo?.cookie,
    loading,
    error,
    refresh
  }
}

