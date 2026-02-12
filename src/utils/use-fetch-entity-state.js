import React from 'react'
import axios from 'axios'
import { buildHaUrl } from './config'
import { formatErrorForUI } from './axios-error-handler'

/**
 * Fetch a single HA entity state via REST API with proper cleanup.
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

  const isConfigured = enabled && !!entityId
  const url = entityId ? buildHaUrl(`/api/states/${entityId}`, config) : null

  React.useEffect(() => {
    if (!isConfigured || !url) return

    let isMounted = true
    const abortController = new AbortController()

    axios(url, { signal: abortController.signal })
      .then((response) => {
        if (isMounted) {
          setState(extractState(response))
          setError(false)
        }
      })
      .catch((err) => {
        if (isMounted && !abortController.signal.aborted) {
          setError(formatErrorForUI(err))
        }
      })

    return () => {
      isMounted = false
      abortController.abort()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConfigured, url, entityId])

  return [state, error, setState]
}

export default useFetchEntityState
