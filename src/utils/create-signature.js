const secret = ''

async function createSignature(body) {
  const enc = new TextEncoder('utf-8');
  const algorithm = { name: "HMAC", hash: "SHA-1" };

  const key = await crypto.subtle.importKey(
      "raw",
      enc.encode(secret),
      algorithm,
      false,
      ["sign", "verify"]
  );

  const signature = await crypto.subtle.sign(
      algorithm.name,
      key,
      enc.encode(JSON.stringify(body))
  );

  return btoa(String.fromCharCode(...new Uint8Array(signature)));
}

export default createSignature