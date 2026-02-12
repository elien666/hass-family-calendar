import axios from 'axios'
import { useConfig } from './ConfigProvider'
import { buildHaUrl } from "./config"
import logger from './logger'
import useFetchEntityState from './use-fetch-entity-state'

const useEverydayCalendar = () => {
  const config = useConfig()
  const ENABLE_EVERYDAY_CALENDAR = config.ENABLE_EVERYDAY_CALENDAR || false
  const ENTITY_EVERYDAY_CALENDAR = config.ENTITY_EVERYDAY_CALENDAR || ''

  const isConfigured = ENABLE_EVERYDAY_CALENDAR && ENTITY_EVERYDAY_CALENDAR

  const [store, error] = useFetchEntityState({
    entityId: ENTITY_EVERYDAY_CALENDAR,
    enabled: isConfigured,
    config,
    initialState: null,
    extractState: (response) => {
      const storeAttr = response.data.attributes.store
      return storeAttr !== undefined ? storeAttr : []
    },
  })

  return [ store, error ]
}

export const storeData = (data, config) => {
  const entityId = config?.ENTITY_EVERYDAY_CALENDAR
  if (!entityId) return
  const url = buildHaUrl(`/api/states/${entityId}`, config)
  axios.post(url, {
    state: new Date(),
    attributes: { store: data }
  })
    .catch((err) => {
      logger.error('Failed to store everyday calendar data:', err)
    })
}

export default useEverydayCalendar
