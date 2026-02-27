import axios from 'axios'
import { useConfig } from './ConfigProvider'
import { buildHaUrl } from './config'
import logger from './logger'
import useFetchEntityState from './use-fetch-entity-state'
import useEntitySubscription from './use-entity-subscription'
import { GARAGE_FEEDBACK_TIMEOUT } from './constants'

const useGarageDoor = () => {
  const config = useConfig()
  const ENABLE_GARAGE = config.ENABLE_GARAGE || false
  const ENTITY_GARAGE_DOOR = config.ENTITY_GARAGE_DOOR || ''

  const isConfigured = ENABLE_GARAGE && ENTITY_GARAGE_DOOR

  const [state, restError, setState] = useFetchEntityState({
    entityId: ENTITY_GARAGE_DOOR,
    enabled: isConfigured,
    config,
    initialState: 'closed',
  })

  const { error: wsError } = useEntitySubscription({
    entityId: ENTITY_GARAGE_DOOR,
    enabled: isConfigured,
    onStateUpdate: setState,
    logPrefix: 'garage door',
  })

  const error = restError || wsError || false

  return [state, error]
}

export const toggleGarageDoor = (isLoading, config = {}) => {
  const ENTITY_GARAGE_DOOR = config.ENTITY_GARAGE_DOOR || ''
  if (!ENTITY_GARAGE_DOOR) return
  isLoading(true)
  const timeoutId = setTimeout(() => isLoading(false), GARAGE_FEEDBACK_TIMEOUT)
  axios.post(buildHaUrl('/api/services/cover/toggle', config), {
    entity_id: ENTITY_GARAGE_DOOR
  })
    .catch((err) => {
      logger.error('Failed to toggle garage door:', err)
    })
    .finally(() => {
      clearTimeout(timeoutId)
      isLoading(false)
    })
}

export const openGarageDoor = (isLoading, config = {}) => {
  const ENTITY_GARAGE_DOOR = config.ENTITY_GARAGE_DOOR || ''
  if (!ENTITY_GARAGE_DOOR) return
  isLoading(true)
  const timeoutId = setTimeout(() => isLoading(false), GARAGE_FEEDBACK_TIMEOUT)
  axios.post(buildHaUrl('/api/services/cover/open_cover', config), {
    entity_id: ENTITY_GARAGE_DOOR
  })
    .catch((err) => {
      logger.error('Failed to open garage door:', err)
    })
    .finally(() => {
      clearTimeout(timeoutId)
      isLoading(false)
    })
}

export const closeGarageDoor = (isLoading, config = {}) => {
  const ENTITY_GARAGE_DOOR = config.ENTITY_GARAGE_DOOR || ''
  if (!ENTITY_GARAGE_DOOR) return
  isLoading(true)
  const timeoutId = setTimeout(() => isLoading(false), GARAGE_FEEDBACK_TIMEOUT)
  axios.post(buildHaUrl('/api/services/cover/close_cover', config), {
    entity_id: ENTITY_GARAGE_DOOR
  })
    .catch((err) => {
      logger.error('Failed to close garage door:', err)
    })
    .finally(() => {
      clearTimeout(timeoutId)
      isLoading(false)
    })
}

export default useGarageDoor
