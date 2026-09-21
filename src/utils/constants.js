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
// WebRTC-Kamerastreams (Türklingel-Overlay)
export const WEBRTC_SIGNALING_TIMEOUT = 8000  // Backend-Relay antwortet nicht
export const WEBRTC_CONNECT_TIMEOUT = 12000   // bis 'connected', sonst MJPEG-Fallback
export const WEBRTC_ICE_GATHER_TIMEOUT = 1500 // Obergrenze fürs Sammeln lokaler ICE-Kandidaten
export const PRECLIMATE_ANIMATION_DURATION = 10000
export const PRECLIMATE_COMMAND_TIMEOUT = 15000
export const GARAGE_FEEDBACK_TIMEOUT = 3000

// Kalender: Auto-Scroll zur aktuellen Uhrzeit
export const CALENDAR_AUTOSCROLL_RESUME = 120000 // 2 Minuten ohne Berührung
export const CALENDAR_NOW_TICK = 30000 // Jetzt-Linie nachführen
