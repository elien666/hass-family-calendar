import hmacSha1 from 'crypto-js/hmac-sha1'
import Base64 from 'crypto-js/enc-base64'
import { GEOFOX_SECRET } from './config'

async function createSignature(body) {
  if (!GEOFOX_SECRET) {
    throw new Error('GEOFOX_SECRET is not configured')
  }
  return Base64.stringify(hmacSha1(JSON.stringify(body), GEOFOX_SECRET))
}

export default createSignature