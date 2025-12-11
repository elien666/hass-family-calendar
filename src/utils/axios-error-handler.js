import logger from './logger'

// Track request statistics for debugging
let requestCounter = 0
let successCount = 0
let errorCount = 0
const recentErrors = []

/**
 * Extracts error details from an Axios error object
 * @param {Error} error - The Axios error object
 * @returns {Object} Structured error information with message, status, responseData, url
 */
export const extractErrorDetails = (error) => {
  // Default error structure
  const errorDetails = {
    message: error.message || 'Unknown error occurred',
    status: null,
    responseData: null,
    url: null,
    isNetworkError: false,
    isTimeoutError: false,
    code: error.code || null,
    config: null,
  }

  // Check if it's an Axios error
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    errorDetails.status = error.response.status
    errorDetails.responseData = error.response.data
    errorDetails.url = error.config?.url || error.request?.responseURL || 'Unknown URL'
    errorDetails.message = error.response.data?.message || 
                          error.response.statusText || 
                          `HTTP ${error.response.status} error`
  } else if (error.request) {
    // The request was made but no response was received
    errorDetails.isNetworkError = true
    errorDetails.url = error.config?.url || 'Unknown URL'
    errorDetails.message = 'Network error: No response received from server'
    
    // Additional network error details
    if (error.request.readyState !== undefined) {
      errorDetails.readyState = error.request.readyState
    }
    if (error.request.status !== undefined) {
      errorDetails.requestStatus = error.request.status
    }
  } else {
    // Something happened in setting up the request that triggered an Error
    errorDetails.message = error.message || 'Request setup error'
    errorDetails.url = error.config?.url || 'Unknown URL'
  }

  // Check for timeout errors
  if (error.code === 'ECONNABORTED' || error.message?.includes('timeout')) {
    errorDetails.isTimeoutError = true
    errorDetails.message = 'Request timeout: The request took too long to complete'
  }

  // Capture request config (sanitized)
  if (error.config) {
    errorDetails.config = {
      method: error.config.method,
      url: error.config.url,
      baseURL: error.config.baseURL,
      timeout: error.config.timeout,
      headers: {
        ...error.config.headers,
        // Sanitize sensitive headers
        Authorization: error.config.headers?.Authorization ? '[REDACTED]' : undefined,
      },
      hasAuthHeader: !!error.config.headers?.Authorization,
    }
  }

  return errorDetails
}

/**
 * Logs an Axios error with comprehensive detail for debugging
 * @param {Error} error - The Axios error object
 * @param {string} context - Additional context about where the error occurred
 */
export const logAxiosError = (error, context = '') => {
  const details = extractErrorDetails(error)
  
  // CRITICAL: Prevent infinite loop - don't log errors from the log endpoint itself
  // Check if this error is from a request to /api/log
  const isLogEndpointError = details.url && (
    details.url.includes('/api/log') || 
    details.url.endsWith('/api/log') ||
    error.config?.url?.includes('/api/log') ||
    error.config?.url?.endsWith('/api/log')
  )
  
  if (isLogEndpointError) {
    // Silently skip logging errors from the log endpoint to prevent infinite loops
    // Only log to console in development mode
    if (import.meta.env.DEV) {
      console.warn('Skipping log endpoint error to prevent infinite loop:', details.message)
    }
    return details
  }
  
  // Update statistics
  errorCount++
  requestCounter++
  
  // Keep last 10 errors for pattern analysis
  recentErrors.push({
    timestamp: new Date().toISOString(),
    url: details.url,
    status: details.status,
    code: details.code,
    message: details.message,
    isNetworkError: details.isNetworkError,
    isTimeoutError: details.isTimeoutError,
  })
  if (recentErrors.length > 10) {
    recentErrors.shift()
  }
  
  const logParts = []
  
  if (context) {
    logParts.push(`[${context}]`)
  }
  
  logParts.push('🔴 Axios API Error:')
  logParts.push(`Message: ${details.message}`)
  
  if (details.url) {
    logParts.push(`URL: ${details.url}`)
  }
  
  if (details.status) {
    logParts.push(`HTTP Status: ${details.status}`)
  }
  
  if (details.code) {
    logParts.push(`Error Code: ${details.code}`)
  }
  
  if (details.isNetworkError) {
    logParts.push('Type: Network Error (no response received)')
    if (details.readyState !== undefined) {
      logParts.push(`ReadyState: ${details.readyState}`)
    }
  }
  
  if (details.isTimeoutError) {
    logParts.push('Type: Timeout Error')
  }
  
  if (details.config) {
    logParts.push(`Method: ${details.config.method?.toUpperCase() || 'UNKNOWN'}`)
    logParts.push(`Has Auth Header: ${details.config.hasAuthHeader}`)
    if (details.config.timeout) {
      logParts.push(`Timeout: ${details.config.timeout}ms`)
    }
  }
  
  if (details.responseData) {
    logParts.push(`Response Data:`, details.responseData)
  }
  
  // Log statistics
  logParts.push(`Request Stats: ${successCount} success, ${errorCount} errors (${requestCounter} total)`)
  
  // If we're seeing a pattern of failures, log recent errors
  if (errorCount > 3 && recentErrors.length > 0) {
    logParts.push('Recent errors pattern:', recentErrors.slice(-5))
  }
  
  logger.error(...logParts)
  
  return details
}

/**
 * Logs a successful axios request for debugging
 * @param {Object} config - The axios request config
 */
export const logAxiosSuccess = (config) => {
  successCount++
  requestCounter++
  
  // Only log every 10th successful request to avoid spam, but always log if we had recent errors
  const shouldLog = requestCounter % 10 === 0 || errorCount > 0
  
  if (shouldLog) {
    logger.debug('✅ Axios Request Success:', {
      method: config.method?.toUpperCase(),
      url: config.url,
      hasAuthHeader: !!config.headers?.Authorization,
      requestNumber: requestCounter,
      stats: `${successCount} success, ${errorCount} errors`,
    })
  }
  
  // Reset error count after 10 successful requests in a row
  if (errorCount > 0 && requestCounter % 10 === 0 && successCount > errorCount) {
    logger.debug('Request pattern: Errors cleared, connection appears healthy')
    errorCount = 0
    recentErrors.length = 0
  }
}

/**
 * Formats error for display in UI components
 * @param {Error} error - The Axios error object
 * @returns {string|Error} User-friendly error message or the original error
 */
export const formatErrorForUI = (error) => {
  const details = extractErrorDetails(error)
  
  // Return user-friendly messages based on error type
  if (details.isNetworkError) {
    return ''
  }
  
  if (details.isTimeoutError) {
    return 'Zeitüberschreitung: Die Anfrage dauerte zu lange'
  }
  
  if (details.status === 401) {
    return 'Authentifizierungsfehler: Bitte erneut anmelden'
  }
  
  if (details.status === 403) {
    return 'Berechtigungsfehler: Keine Berechtigung für diese Aktion'
  }
  
  if (details.status === 404) {
    return 'Nicht gefunden: Die angeforderte Ressource existiert nicht'
  }
  
  if (details.status >= 500) {
    return 'Serverfehler: Bitte später erneut versuchen'
  }
  
  // Return the error message or a generic one
  return details.message || 'Ein Fehler ist aufgetreten'
}

