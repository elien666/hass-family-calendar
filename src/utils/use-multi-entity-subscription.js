import logger from './logger'
import { useHomeAssistantWebSocket } from './use-home-assistant-websocket'

/**
 * Subscribe to multiple HA entities via a single WebSocket connection.
 *
 * @param {Object} options
 * @param {string[]} options.entityIds - Array of HA entity IDs to subscribe to
 * @param {boolean} options.enabled - Whether subscription is active
 * @param {Function} options.onStateUpdate - Callback receiving (entityId, newState) on changes
 * @param {string} options.logPrefix - Label for debug logging
 * @param {Object} [options.wsOptions] - Extra options forwarded to useHomeAssistantWebSocket
 * @returns {{ error: string|false }}
 */
const useMultiEntitySubscription = ({
  entityIds,
  enabled,
  onStateUpdate,
  logPrefix,
  wsOptions = {},
}) => {
  const { error } = useHomeAssistantWebSocket({
    enabled: enabled && entityIds.length > 0,
    logPrefix,
    ...wsOptions,
    onReady: (connection, subscriptionsRef) => {
      entityIds.forEach(entityId => {
        const callback = (data) => {
          if (data.state !== undefined) {
            onStateUpdate(entityId, data.state)
          }
        }

        subscriptionsRef.current.set(entityId, callback)

        if (connection.readyState === WebSocket.OPEN) {
          connection.send(JSON.stringify({
            type: 'subscribe_entity',
            entity_id: entityId,
          }))
        }
      })

      if (entityIds.length > 0) {
        logger.debug(`Subscribed to ${logPrefix} state changes: ${entityIds.join(', ')}`)
      }

      return () => {
        entityIds.forEach(entityId => {
          subscriptionsRef.current.delete(entityId)
          if (connection.readyState === WebSocket.OPEN) {
            connection.send(JSON.stringify({
              type: 'unsubscribe_entity',
              entity_id: entityId,
            }))
          }
        })
      }
    },
    dependencies: [enabled, entityIds.join(',')],
  })

  return { error }
}

export default useMultiEntitySubscription
