// Simple logger that can be disabled in production
const isDevelopment = import.meta.env.DEV
const isProduction = import.meta.env.PROD

const logger = {
  log: (...args) => {
    if (isDevelopment) {
      console.log(...args)
    }
  },
  error: (...args) => {
    // Always log errors, even in production
    console.error(...args)
  },
  warn: (...args) => {
    if (isDevelopment) {
      console.warn(...args)
    }
  },
  debug: (...args) => {
    if (isDevelopment) {
      console.log('[DEBUG]', ...args)
    }
  }
}

export default logger

