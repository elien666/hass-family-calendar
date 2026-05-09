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
    logger.error(
      `ErrorBoundary caught an error: ${errorMessage}`,
      {
        errorName: error?.name,
        errorMessage,
        errorStack: error?.stack || '',
        componentStack: errorInfo?.componentStack || ''
      }
    )

    // On a kiosk-style wall display nobody is standing in front of the screen to tap a button.
    // Show a toast and auto-reload so the failure is invisible most of the time.
    toast.error('Ein Fehler ist aufgetreten — die App lädt sich gleich neu …', {
      duration: AUTO_RELOAD_DELAY_MS,
    })
    this.reloadTimerId = window.setTimeout(() => {
      window.location.reload()
    }, AUTO_RELOAD_DELAY_MS)
  }

  componentWillUnmount() {
    if (this.reloadTimerId) {
      window.clearTimeout(this.reloadTimerId)
      this.reloadTimerId = null
    }
  }

  render() {
    if (this.state.hasError) {
      // Render nothing — the toast carries the user-facing message and the auto-reload
      // will recover the tree. Returning null avoids the disruptive full-screen overlay.
      return null
    }
    return this.props.children
  }
}

export default ErrorBoundary
