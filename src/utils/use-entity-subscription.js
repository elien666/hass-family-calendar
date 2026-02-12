import logger from './logger'
import { useHomeAssistantWebSocket } from './use-home-assistant-websocket'

/**
 * Subscribe to a single HA entity via WebSocket and call onStateUpdate on changes.
 *
 * @param {Object} options
 * @param {string} options.entityId - HA entity ID to subscribe to
 * @param {boolean} options.enabled - Whether subscription is active
 * @param {Function} options.onStateUpdate - Callback receiving the new state value
 * @param {string} options.logPrefix - Label for debug logging
 * @param {Object} [options.wsOptions] - Extra options forwarded to useHomeAssistantWebSocket
 * @returns {{ error: string|false }}
 */
const useEntitySubscription = ({
  entityId,
  enabled,
  onStateUpdate,
  logPrefix,
  wsOptions = {},
}) => {
  const { error } = useHomeAssistantWebSocket({
    enabled: enabled && !!entityId,
    logPrefix,
    ...wsOptions,
    onReady: (connection, subscriptionsRef) => {
      const callback = (data) => {
        if (data.state !== undefined) {
          onStateUpdate(data.state)
        }
      }

      subscriptionsRef.current.set(entityId, callback)

      if (connection.readyState === WebSocket.OPEN) {
        connection.send(JSON.stringify({
          type: 'subscribe_entity',
          entity_id: entityId
        }))
        logger.debug(`Subscribed to ${logPrefix} state changes`)
      }

      return () => {
        subscriptionsRef.current.delete(entityId)
        if (connection.readyState === WebSocket.OPEN) {
          connection.send(JSON.stringify({
            type: 'unsubscribe_entity',
            entity_id: entityId
          }))
        }
      }
    },
    dependencies: [enabled, entityId],
  })

  return { error }
}

export default useEntitySubscription
