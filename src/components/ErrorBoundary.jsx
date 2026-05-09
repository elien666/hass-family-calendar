import React from 'react'
import { toast } from 'sonner'
import logger from '../utils/logger'

const AUTO_RELOAD_DELAY_MS = 5000

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
    this.reloadTimerId = null
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    const errorMessage = error?.toString() || 'Unknown error'
    const label = this.props.label
    logger.error(
      `ErrorBoundary caught an error${label ? ` (${label})` : ''}: ${errorMessage}`,
      {
        boundaryLabel: label,
        errorName: error?.name,
        errorMessage,
        errorStack: error?.stack || '',
        componentStack: errorInfo?.componentStack || ''
      }
    )

    const autoReload = this.props.autoReload === true
    const toastMessage = autoReload
      ? `${label ? `${label}: ` : ''}Ein Fehler ist aufgetreten — die App lädt sich gleich neu …`
      : `${label ? `${label}: ` : ''}Bereich konnte nicht geladen werden`

    toast.error(toastMessage, { duration: AUTO_RELOAD_DELAY_MS })

    if (autoReload) {
      this.reloadTimerId = window.setTimeout(() => {
        window.location.reload()
      }, AUTO_RELOAD_DELAY_MS)
    }
  }

  componentWillUnmount() {
    if (this.reloadTimerId) {
      window.clearTimeout(this.reloadTimerId)
      this.reloadTimerId = null
    }
  }

  render() {
    if (this.state.hasError) {
      return null
    }
    return this.props.children
  }
}

export default ErrorBoundary
