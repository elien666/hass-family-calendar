import hmacSha1 from 'crypto-js/hmac-sha1'
import Base64 from 'crypto-js/enc-base64'

const secret = ''

async function createSignature(body) {
  return Base64.stringify(hmacSha1(JSON.stringify(body), secret))
}

export default createSignature