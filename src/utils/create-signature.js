import hmacSha1 from 'crypto-js/hmac-sha1'
import Base64 from 'crypto-js/enc-base64'

async function createSignature(body, geofoxSecret) {
  if (!geofoxSecret) {
    throw new Error('GEOFOX_SECRET is not configured')
  }
  return Base64.stringify(hmacSha1(JSON.stringify(body), geofoxSecret))
}

export default createSignature