import axios from 'axios'
import { useConfig } from './ConfigProvider'
import { buildHaUrl } from './config'
import logger from './logger'
import useFetchEntityState from './use-fetch-entity-state'
import useEntitySubscription from './use-entity-subscription'

const useDoorbell = () => {
  const config = useConfig()
  const ENABLE_DOORBELL = config.ENABLE_DOORBELL || false
  const ENTITY_DOORBELL = config.ENTITY_DOORBELL || ''

  const isConfigured = ENABLE_DOORBELL && ENTITY_DOORBELL

  const [state, restError, setState] = useFetchEntityState({
    entityId: ENTITY_DOORBELL,
    enabled: isConfigured,
    config,
    initialState: 'off',
  })

  const { error: wsError } = useEntitySubscription({
    entityId: ENTITY_DOORBELL,
    enabled: isConfigured,
    onStateUpdate: setState,
    logPrefix: 'doorbell',
  })

  const error = restError || wsError || false

  return [state, error]
}

export const unlatchFrontDoor = (config = {}) => {
  const ENTITY_DOORBELL_BUTTON = config.ENTITY_DOORBELL_BUTTON || ''
  if (!ENTITY_DOORBELL_BUTTON) return
  axios.post(buildHaUrl('/api/services/button/press', config), {
    "entity_id": ENTITY_DOORBELL_BUTTON
  })
    .catch((err) => {
      logger.error('Failed to unlatch front door:', err)
    })
}

export default useDoorbell
