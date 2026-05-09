// Timing constants (milliseconds)

// WebSocket heartbeat
export const WS_HEARTBEAT_INTERVAL = 30000
export const WS_HEARTBEAT_TIMEOUT = 10000

// WebSocket reconnection
export const WS_PERIODIC_RETRY_INTERVAL = 60000
export const WS_RECONNECT_DEBOUNCE = 1000

// Config
export const CONFIG_FETCH_TIMEOUT = 5000
export const CONFIG_RELOAD_DEBOUNCE = 2000

// Feature-specific
export const DOORBELL_OVERLAY_TIMEOUT = 45000
export const DOORBELL_MANUAL_CLOSE_COOLDOWN = 30000
export const CAMERA_TOKEN_REFRESH_INTERVAL = 600000 // 10 minutes
export const PRECLIMATE_ANIMATION_DURATION = 10000
export const PRECLIMATE_COMMAND_TIMEOUT = 15000
export const GARAGE_FEEDBACK_TIMEOUT = 3000
