"""
Proxy utilities for HTTP and WebSocket proxying.
"""
import hmac
import hashlib
import base64
import json
from typing import Dict, Any


def create_geofox_signature(body: Dict[str, Any], secret: str) -> str:
    """
    Create HMAC-SHA1 signature for Geofox API.
    
    Equivalent to the JavaScript implementation in create-signature.js:
    Base64.stringify(hmacSha1(JSON.stringify(body), GEOFOX_SECRET))
    
    Note: JavaScript JSON.stringify preserves object key insertion order (ES2015+),
    and Python's json.dumps also preserves insertion order (Python 3.7+).
    We do NOT sort keys to match JavaScript behavior.
    """
    # Convert body to JSON string (must match JavaScript JSON.stringify behavior exactly)
    # Do NOT sort keys - JavaScript preserves insertion order
    body_json = json.dumps(body, separators=(',', ':'), ensure_ascii=False, sort_keys=False)
    
    # Create HMAC-SHA1 hash
    hmac_hash = hmac.new(
        secret.encode('utf-8'),
        body_json.encode('utf-8'),
        hashlib.sha1
    )
    
    # Encode to base64
    signature = base64.b64encode(hmac_hash.digest()).decode('utf-8')
    
    return signature

