import crypto from 'crypto-browserify'

const secret = ''

function createSignature(requestBody) {
  const hmac = crypto.createHmac('sha1', secret)
  hmac.update(JSON.stringify(requestBody))
  return hmac.digest('base64')
}

export default createSignature