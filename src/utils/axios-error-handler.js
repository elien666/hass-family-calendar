import logger from './logger'

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

  return errorDetails
}

/**
 * Logs an Axios error with moderate detail
 * @param {Error} error - The Axios error object
 * @param {string} context - Additional context about where the error occurred
 */
export const logAxiosError = (error, context = '') => {
  const details = extractErrorDetails(error)
  
  const logParts = []
  
  if (context) {
    logParts.push(`[${context}]`)
  }
  
  logParts.push('Axios API Error:')
  logParts.push(details.message)
  
  if (details.url) {
    logParts.push(`URL: ${details.url}`)
  }
  
  if (details.status) {
    logParts.push(`Status: ${details.status}`)
  }
  
  if (details.responseData) {
    logParts.push(`Response:`, details.responseData)
  }
  
  logger.error(...logParts)
  
  return details
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

