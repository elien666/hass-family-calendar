import React from 'react'
import { GO2RTC_BASE_URL } from '../utils/config'

/**
 * Extract stream name from a URL or return as-is if it's already a stream name
 * Examples:
 * - "http://192.168.188.10:8555/eingang/whep" -> "eingang"
 * - "garage" -> "garage"
 * - "/eingang/whep" -> "eingang"
 */
const extractStreamName = (urlOrName) => {
  if (!urlOrName) return ''
  
  // If it's already just a stream name (no slashes, no protocol), use as-is
  if (!urlOrName.includes('/') && !urlOrName.includes(':')) {
    return urlOrName
  }
  
  // Try to extract stream name from URL path
  // Match patterns like: /stream-name/whep, /stream-name, stream-name/whep
  const match = urlOrName.match(/\/([^\/]+?)(?:\/whep)?(?:\?|$)/)
  if (match) {
    return match[1]
  }
  
  // Fallback: try to get last segment before query params
  const pathPart = urlOrName.split('?')[0].split('/').filter(Boolean).pop()
  return pathPart || urlOrName
}

const Go2RTCStream = ({ src, show, orientation = 'landscape', ...params }) => {
  const streamName = extractStreamName(src)
  const streamUrl = `${GO2RTC_BASE_URL}/stream.html?src=${streamName}`
  
  // Don't render iframe if not visible
  if (!show) {
    return null
  }
  
  return (
    <iframe
      src={streamUrl}
      className={orientation}
      allow="autoplay; fullscreen"
      {...params}
    />
  )
}

export default Go2RTCStream

