import axios from 'axios'

// Simple logger that can be disabled in production
const isDevelopment = import.meta.env.DEV
const isProduction = import.meta.env.PROD

// Helper function to send logs to backend
// This runs asynchronously and doesn't block
const sendToBackend = (level, message, metadata = null) => {
  // Use setTimeout to make this non-blocking
  setTimeout(async () => {
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
      
      // Send to backend with a short timeout to avoid blocking
      await axios.post(logUrl, payload, { timeout: 2000 })
    } catch (error) {
      // Silently fail - don't log backend errors to avoid infinite loops
      // Only log in development for debugging
      if (isDevelopment) {
        console.debug('Failed to send log to backend:', error.message)
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
    if (isDevelopment) {
      console.log('[DEBUG]', ...args)
    }
    // Send DEBUG level logs to backend (only in development)
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

