import axios from 'axios'

// Simple logger that can be disabled in production
const isDevelopment = import.meta.env.DEV
const isProduction = import.meta.env.PROD

// Global flag to enable/disable logging to backend API
// This can be set via config, defaults to true
let enableLoggingToBackend = true

// Function to update the logging flag from config
const setLoggingEnabled = (enabled) => {
  enableLoggingToBackend = Boolean(enabled)
}

// Guard to prevent recursive logging
let isLogging = false
let logQueue = []
let lastLogTime = 0
const MIN_LOG_INTERVAL = 100 // Minimum 100ms between log requests to prevent spam
const MAX_QUEUE_SIZE = 50 // Maximum queue size to prevent memory issues

// Helper function to process the next queued log
const processNextQueuedLog = () => {
  if (logQueue.length === 0 || isLogging) {
    return
  }
  
  const nextLog = logQueue.shift()
  const now = Date.now()
  
  // If enough time has passed, process it
  if (now - lastLogTime >= MIN_LOG_INTERVAL) {
    sendToBackend(nextLog.level, nextLog.message, nextLog.metadata)
  } else {
    // Not enough time has passed, put it back and schedule processing
    logQueue.unshift(nextLog)
    setTimeout(processNextQueuedLog, MIN_LOG_INTERVAL - (now - lastLogTime))
  }
}

// Helper function to send logs to backend
// This runs asynchronously and doesn't block
const sendToBackend = (level, message, metadata = null) => {
  // Skip backend logging in development mode (backend endpoint doesn't exist)
  if (isDevelopment) {
    return
  }
  
  // Check if logging to backend is enabled
  if (!enableLoggingToBackend) {
    return
  }
  
  // Prevent recursive logging
  if (isLogging) {
    // If we're already logging, queue this message
    if (logQueue.length < MAX_QUEUE_SIZE) {
      logQueue.push({ level, message, metadata, timestamp: Date.now() })
    } else if (isDevelopment) {
      console.warn('Log queue full, dropping log message')
    }
    return
  }
  
  // Rate limiting: don't send logs too frequently
  const now = Date.now()
  if (now - lastLogTime < MIN_LOG_INTERVAL) {
    // Queue the log for later
    if (logQueue.length < MAX_QUEUE_SIZE) {
      logQueue.push({ level, message, metadata, timestamp: now })
      // Schedule processing if not already scheduled
      if (logQueue.length === 1) {
        setTimeout(processNextQueuedLog, MIN_LOG_INTERVAL - (now - lastLogTime))
      }
    }
    return
  }
  
  // Use setTimeout to make this non-blocking
  setTimeout(async () => {
    // Set guard flag
    isLogging = true
    lastLogTime = Date.now()
    
    try {
      // Get the base path from current location (handles ingress paths)
      const basePath = typeof window !== 'undefined' && window.location 
        ? window.location.pathname.replace(/\/$/, '') 
        : ''
      const logUrl = `${basePath}/api/log`
      
      const payload = {
        level,
        message,
        ...(metadata && { metadata })
      }
      
      // Create a separate axios instance without interceptors to prevent infinite loops
      // This ensures log requests don't trigger the error interceptor
      const logAxios = axios.create({
        timeout: 2000,
        // Don't use the default axios instance which has interceptors
      })
      
      // Send to backend with a short timeout to avoid blocking
      await logAxios.post(logUrl, payload)
    } catch (error) {
      // Silently fail - don't log backend errors to avoid infinite loops
      // Only log in development for debugging
      if (isDevelopment) {
        console.debug('Failed to send log to backend:', error.message)
      }
      
      // Clear queue if we're getting too many errors
      if (logQueue.length > 10) {
        logQueue = []
      }
    } finally {
      // Reset guard flag
      isLogging = false
      
      // Process next queued log if any
      if (logQueue.length > 0) {
        setTimeout(processNextQueuedLog, MIN_LOG_INTERVAL)
      }
    }
  }, 0)
}

// Helper to format log arguments into a message string
const formatMessage = (args) => {
  if (args.length === 0) return ''
  if (args.length === 1) {
    const arg = args[0]
    if (typeof arg === 'string') return arg
    if (typeof arg === 'object') return JSON.stringify(arg, null, 2)
    return String(arg)
  }
  // Multiple arguments - format them
  return args.map(arg => {
    if (typeof arg === 'object') return JSON.stringify(arg, null, 2)
    return String(arg)
  }).join(' ')
}

// Helper to extract metadata from arguments (objects that aren't the first string message)
const extractMetadata = (args) => {
  if (args.length <= 1) return null
  
  // If first arg is a string and there are objects after, use them as metadata
  if (typeof args[0] === 'string' && args.length > 1) {
    const metadata = {}
    args.slice(1).forEach((arg, idx) => {
      if (typeof arg === 'object' && arg !== null) {
        Object.assign(metadata, arg)
      } else {
        metadata[`arg${idx}`] = arg
      }
    })
    return Object.keys(metadata).length > 0 ? metadata : null
  }
  
  // If all args are objects, combine them
  if (args.every(arg => typeof arg === 'object' && arg !== null)) {
    const metadata = {}
    args.forEach(arg => Object.assign(metadata, arg))
    return metadata
  }
  
  return null
}

const logger = {
  log: (...args) => {
    if (isDevelopment) {
      console.log(...args)
    }
    // Send INFO level logs to backend
    const message = formatMessage(args)
    const metadata = extractMetadata(args)
    if (message) {
      sendToBackend('INFO', message, metadata)
    }
  },
  error: (...args) => {
    // Always log errors, even in production
    console.error(...args)
    // Send ERROR level logs to backend
    const message = formatMessage(args)
    const metadata = extractMetadata(args)
    if (message) {
      sendToBackend('ERROR', message, metadata)
    }
  },
  warn: (...args) => {
    if (isDevelopment) {
      console.warn(...args)
    }
    // Send WARNING level logs to backend
    const message = formatMessage(args)
    const metadata = extractMetadata(args)
    if (message) {
      sendToBackend('WARNING', message, metadata)
    }
  },
  debug: (...args) => {
    // Send DEBUG level logs to backend (only in development).
    // Browser console intentionally stays quiet — read the backend log for debug output.
    if (isDevelopment) {
      const message = formatMessage(args)
      const metadata = extractMetadata(args)
      if (message) {
        sendToBackend('DEBUG', message, metadata)
      }
    }
  },
  info: (...args) => {
    // Alias for log, but explicitly INFO level
    if (isDevelopment) {
      console.log(...args)
    }
    const message = formatMessage(args)
    const metadata = extractMetadata(args)
    if (message) {
      sendToBackend('INFO', message, metadata)
    }
  }
}

export default logger
export { setLoggingEnabled }

