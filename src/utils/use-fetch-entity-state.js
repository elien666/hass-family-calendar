import React from 'react'
import axios from 'axios'
import { buildHaUrl } from './config'
import { formatErrorForUI } from './axios-error-handler'
import { useConnectionStateContext } from './ConnectionStateProvider'
import logger from './logger'

const MAX_FETCH_ATTEMPTS = 3
const isRetryableError = (err) =>
  err.code === 'ECONNABORTED' || err.code === 'ERR_NETWORK' || err.message?.includes('timeout')

/**
 * Fetch a single HA entity state via REST API with retry and proper cleanup.
 * Automatically refetches when the backend connection is restored after a disconnect.
 * Retries up to 3 times with exponential backoff for transient network errors.
 *
 * @param {Object} options
 * @param {string} options.entityId - HA entity ID (e.g. "cover.garage_door")
 * @param {boolean} options.enabled - Whether the feature is enabled
 * @param {Object} options.config - Config object from useConfig()
 * @param {*} options.initialState - Initial state value (default: null)
 * @param {Function} options.extractState - Extract state from response (default: response.data.state)
 * @returns {[*, string|false]} [state, error]
 */
const useFetchEntityState = ({
  entityId,
  enabled = true,
  config,
  initialState = null,
  extractState = (response) => response.data.state,
}) => {
  const [state, setState] = React.useState(initialState)
  const [error, setError] = React.useState(false)
  const { isConnected } = useConnectionStateContext()

  // Track disconnect→reconnect transitions to trigger a refetch
  const wasDisconnectedRef = React.useRef(false)
  const [refetchKey, setRefetchKey] = React.useState(0)

  React.useEffect(() => {
    if (!isConnected) {
      wasDisconnectedRef.current = true
    } else if (wasDisconnectedRef.current) {
      wasDisconnectedRef.current = false
      setRefetchKey((k) => k + 1)
    }
  }, [isConnected])

  const isConfigured = enabled && !!entityId
  const url = entityId ? buildHaUrl(`/api/states/${entityId}`, config) : null

  React.useEffect(() => {
    if (!isConfigured || !url) return

    let isMounted = true
    const abortController = new AbortController()

    const fetchWithRetry = async () => {
      for (let attempt = 0; attempt < MAX_FETCH_ATTEMPTS; attempt++) {
        try {
          const response = await axios(url, { signal: abortController.signal })
          if (isMounted) {
            setState(extractState(response))
            setError(false)
          }
          return
        } catch (err) {
          if (abortController.signal.aborted) return
          if (isRetryableError(err) && attempt < MAX_FETCH_ATTEMPTS - 1) {
            const backoff = 1000 * Math.pow(2, attempt)
            logger.debug(`Entity fetch failed for ${entityId} (attempt ${attempt + 1}), retrying in ${backoff}ms`)
            await new Promise(r => setTimeout(r, backoff))
            continue
          }
          if (isMounted) {
            setError(formatErrorForUI(err))
          }
          return
        }
      }
    }

    fetchWithRetry()

    return () => {
      isMounted = false
      abortController.abort()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConfigured, url, entityId, refetchKey])

  return [state, error, setState]
}

export default useFetchEntityState
