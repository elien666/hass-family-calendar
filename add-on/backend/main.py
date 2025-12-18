"""
FastAPI backend for Home Assistant Family Calendar add-on.
Serves static files and provides authenticated proxy endpoints.
"""
import os
import json
import logging
from pathlib import Path
from typing import Any, Dict
from contextlib import suppress

# Configure logging FIRST before importing other modules that use logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(name)s - %(message)s',
    datefmt='%Y-%m-%d %H:%M:%S'
)

import asyncio
import httpx
import websockets
from fastapi import FastAPI, Request, Response, WebSocket, WebSocketDisconnect, HTTPException
from fastapi.responses import FileResponse, JSONResponse, StreamingResponse
from fastapi.staticfiles import StaticFiles
from starlette.middleware.cors import CORSMiddleware

from .config import get_config, clear_cache
from .proxy import create_geofox_signature

# Configure all loggers to use the same format
formatter = logging.Formatter('%(asctime)s - %(levelname)s - %(name)s - %(message)s', datefmt='%Y-%m-%d %H:%M:%S')

# Configure uvicorn loggers to use consistent format
uvicorn_logger = logging.getLogger("uvicorn")
for handler in uvicorn_logger.handlers[:]:
    uvicorn_logger.removeHandler(handler)
uvicorn_handler = logging.StreamHandler()
uvicorn_handler.setFormatter(formatter)
uvicorn_logger.addHandler(uvicorn_handler)

# Reduce uvicorn access log noise for WebSocket connections
uvicorn_access = logging.getLogger("uvicorn.access")
for handler in uvicorn_access.handlers[:]:
    uvicorn_access.removeHandler(handler)
uvicorn_access_handler = logging.StreamHandler()
uvicorn_access_handler.setFormatter(formatter)
uvicorn_access.addHandler(uvicorn_access_handler)
uvicorn_access.setLevel(logging.WARNING)

# Configure httpx logger to use consistent format
httpx_logger = logging.getLogger("httpx")
for handler in httpx_logger.handlers[:]:
    httpx_logger.removeHandler(handler)
httpx_handler = logging.StreamHandler()
httpx_handler.setFormatter(formatter)
httpx_logger.addHandler(httpx_handler)

# Configure backend.config logger to use consistent format
# Only configure if it doesn't already have handlers to avoid duplicates
config_logger = logging.getLogger("backend.config")
if not config_logger.handlers:
    config_handler = logging.StreamHandler()
    config_handler.setFormatter(formatter)
    config_logger.addHandler(config_handler)

# Our application logger
logger = logging.getLogger(__name__)

app = FastAPI(title="Family Calendar Backend")


@app.on_event("startup")
async def startup_event():
    """Load and log configuration at startup."""
    logger.info("Application starting up, loading configuration...")
    try:
        config = get_config()
        logger.info("Configuration loaded successfully at startup")
    except Exception as e:
        logger.error(f"Failed to load configuration at startup: {e}", exc_info=True)


# CORS middleware (if needed for development)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Determine static files directory
STATIC_DIR = Path("/usr/local/apache2/htdocs")
if not STATIC_DIR.exists():
    # Fallback for local development - try multiple possible locations
    possible_paths = [
        Path(__file__).parent.parent / "dist",  # add-on/dist
        Path(__file__).parent.parent.parent / "add-on" / "dist",  # project root -> add-on/dist
    ]
    for path in possible_paths:
        if path.exists():
            STATIC_DIR = path
            break
    else:
        # If none found, use the first as default (will show warning)
        STATIC_DIR = possible_paths[0]

# Mount static files
if STATIC_DIR.exists():
    app.mount("/assets", StaticFiles(directory=str(STATIC_DIR / "assets")), name="assets")
    logger.info(f"Serving static files from {STATIC_DIR}")
else:
    logger.warning(f"Static directory not found: {STATIC_DIR}")


@app.get("/api/config")
async def get_config_endpoint():
    """Provide configuration to frontend."""
    config = get_config()
    return JSONResponse(content=config)


@app.post("/api/log")
async def log_endpoint(request: Request):
    """Accept log events from frontend and log them using Python logging."""
    try:
        body = await request.json()
        level = body.get("level", "INFO").upper()
        message = body.get("message", "")
        metadata = body.get("metadata", {})
        
        # Validate level
        if level not in ["INFO", "WARNING", "ERROR", "DEBUG"]:
            level = "INFO"
        
        # Build log message with metadata if present
        if metadata:
            log_message = f"[Frontend] {message} | Metadata: {metadata}"
        else:
            log_message = f"[Frontend] {message}"
        
        # Log at appropriate level
        if level == "ERROR":
            logger.error(log_message)
        elif level == "WARNING":
            logger.warning(log_message)
        elif level == "DEBUG":
            logger.debug(log_message)
        else:  # INFO or default
            logger.info(log_message)
        
        return JSONResponse(content={"status": "ok"})
    except Exception as e:
        # Log the error but don't fail the request
        logger.error(f"Error processing frontend log: {e}", exc_info=True)
        return JSONResponse(content={"status": "error", "message": str(e)}, status_code=400)


@app.post("/gti/public/{endpoint:path}")
async def proxy_gti(endpoint: str, request: Request):
    """
    Proxy Geofox API requests with server-side signature generation.
    """
    config = get_config()
    
    if not config.get("ENABLE_HVV"):
        logger.warning(f"Geofox request rejected: HVV feature not enabled")
        raise HTTPException(status_code=403, detail="HVV feature is not enabled")
    
    geofox_user = config.get("GEOFOX_USER", "")
    geofox_secret = config.get("GEOFOX_SECRET", "")
    
    if not geofox_user or not geofox_secret:
        logger.error(f"Geofox request rejected: credentials not configured (user: {bool(geofox_user)}, secret: {bool(geofox_secret)})")
        raise HTTPException(status_code=500, detail="Geofox credentials not configured")
    
    # Read request body
    try:
        body = await request.json()
    except Exception as e:
        logger.error(f"Failed to parse Geofox request body: {e}")
        raise HTTPException(status_code=400, detail="Invalid JSON body")
    
    # Generate signature
    try:
        signature = create_geofox_signature(body, geofox_secret)
    except Exception as e:
        logger.error(f"Failed to generate Geofox signature: {e}")
        raise HTTPException(status_code=500, detail="Failed to generate signature")
    
    # Forward request to Geofox API (use HTTPS)
    target_url = f"https://gti.geofox.de/gti/public/{endpoint}"
    
    headers = {
        "Accept": "application/json",
        "Content-Type": "application/json;charset=UTF-8",
        "geofox-auth-user": geofox_user,
        "geofox-auth-signature": signature,
    }
    
    try:
        # Serialize body to JSON string to match exact format that signature was generated from
        # Use the same JSON serialization as signature generation
        body_json_str = json.dumps(body, separators=(',', ':'), ensure_ascii=False, sort_keys=False)
        body_json_bytes = body_json_str.encode('utf-8')
        
        async with httpx.AsyncClient(timeout=30.0, follow_redirects=True) as client:
            response = await client.post(
                target_url,
                content=body_json_bytes,  # Send raw JSON bytes to ensure exact match with signature
                headers=headers
            )
            
            # Log response details for debugging
            if response.status_code == 401:
                logger.error(f"Geofox API returned 401 Unauthorized. Response: {response.text[:200]}")
                logger.error(f"Request headers sent: geofox-auth-user={geofox_user}, signature length={len(signature)}")
            # Filter headers to avoid Content-Length mismatches
            response_headers = {}
            excluded_headers = {
                "content-encoding", "transfer-encoding", "content-length",
                "connection", "server"
            }
            for key, value in response.headers.items():
                if key.lower() not in excluded_headers:
                    response_headers[key] = value
            
            return Response(
                content=response.content,
                status_code=response.status_code,
                headers=response_headers
            )
    except httpx.TimeoutException:
        logger.error(f"Timeout connecting to Geofox API: {target_url}")
        raise HTTPException(status_code=504, detail="Timeout connecting to Geofox API")
    except Exception as e:
        logger.error(f"Error proxying to Geofox API: {e}")
        raise HTTPException(status_code=502, detail=f"Error connecting to Geofox API: {str(e)}")


@app.get("/forecast/{api_key}/{coordinates}")
async def proxy_forecast(api_key: str, coordinates: str, request: Request):
    """
    Proxy weather forecast API requests with API key validation.
    """
    config = get_config()
    
    if not config.get("ENABLE_WEATHER"):
        raise HTTPException(status_code=403, detail="Weather feature is not enabled")
    
    configured_api_key = config.get("WEATHER_API_KEY", "")
    
    # Validate API key matches configured value
    if not configured_api_key or api_key != configured_api_key:
        raise HTTPException(status_code=403, detail="Invalid API key")
    
    # Forward request to weather API
    query_params = dict(request.query_params)
    target_url = f"https://api.pirateweather.net/forecast/{api_key}/{coordinates}"
    
    try:
        async with httpx.AsyncClient(timeout=30.0) as client:
            response = await client.get(
                target_url,
                params=query_params
            )
            # Filter headers to avoid Content-Length mismatches
            response_headers = {}
            excluded_headers = {
                "content-encoding", "transfer-encoding", "content-length",
                "connection", "server"
            }
            for key, value in response.headers.items():
                if key.lower() not in excluded_headers:
                    response_headers[key] = value
            
            return Response(
                content=response.content,
                status_code=response.status_code,
                headers=response_headers
            )
    except httpx.TimeoutException:
        logger.error(f"Timeout connecting to weather API: {target_url}")
        raise HTTPException(status_code=504, detail="Timeout connecting to weather API")
    except Exception as e:
        logger.error(f"Error proxying to weather API: {e}")
        raise HTTPException(status_code=502, detail=f"Error connecting to weather API: {str(e)}")


@app.api_route("/api/{path:path}", methods=["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"])
async def proxy_api(path: str, request: Request):
    """
    Proxy Home Assistant REST API requests with SUPERVISOR_TOKEN or HASS_ACCESS_TOKEN injection.
    """
    config = get_config()
    
    # Check if this is a camera stream request (MJPEG streaming)
    is_camera_stream = "camera_proxy_stream" in path
    
    # For camera streams, use HASS_HOST directly (not supervisor API)
    # For other API requests, use HASS_API_URL
    if is_camera_stream:
        hass_host = config.get("HASS_HOST", "")
        if not hass_host:
            # Fallback: try to derive from HASS_API_URL
            hass_api_url = config.get("HASS_API_URL", "http://supervisor/core/api")
            # Remove /api suffix if present
            if hass_api_url.endswith("/api"):
                hass_host = hass_api_url[:-4]
            else:
                hass_host = hass_api_url.replace("/core/api", "").rstrip("/")
        
        # Build camera stream URL directly to HA host
        target_url = f"{hass_host.rstrip('/')}/api/{path}"
    else:
        # Get API URL from config (handles both HA and local dev)
        hass_api_url = config.get("HASS_API_URL", "http://supervisor/core/api")
        # Build target URL
        target_url = f"{hass_api_url.rstrip('/')}/{path}"
    
    # Log proxy request details for debugging
    logger.info(f"Proxying {request.method} request to: {target_url}")
    logger.debug(f"Request path: {path}, Query params: {dict(request.query_params)}")
    
    # Log ALL incoming request headers to find where "Björn" might be coming from
    try:
        logger.debug("=== INCOMING REQUEST HEADERS ===")
        for key, value in request.headers.items():
            try:
                # Show raw value and its representation
                value_str = str(value)
                value_repr = repr(value)
                value_bytes = value.encode('utf-8', errors='replace') if isinstance(value, str) else bytes(value)
                logger.debug(f"Header '{key}': str='{value_str[:100]}', repr={value_repr[:200]}, bytes={value_bytes[:100]}")
                # Check if "Björn" or similar characters are present
                if 'Bj' in value_str or 'örn' in value_str or 'ö' in value_str or '\xc3' in value_repr:
                    logger.warning(f"FOUND POTENTIAL ISSUE in header '{key}': {value_repr}")
            except Exception as header_log_err:
                logger.debug(f"Error logging header {key}: {header_log_err}")
        logger.debug("=== END INCOMING REQUEST HEADERS ===")
    except Exception as header_log_err:
        logger.debug(f"Error logging incoming headers: {header_log_err}")
    
    # Get authentication token
    # In HA: use SUPERVISOR_TOKEN
    # In local dev: use HASS_ACCESS_TOKEN from environment
    supervisor_token = os.environ.get("SUPERVISOR_TOKEN")
    hass_access_token = os.environ.get("HASS_ACCESS_TOKEN")
    
    # Prefer SUPERVISOR_TOKEN, fallback to HASS_ACCESS_TOKEN
    auth_token = supervisor_token or hass_access_token
    
    if not auth_token:
        raise HTTPException(
            status_code=500, 
            detail="SUPERVISOR_TOKEN or HASS_ACCESS_TOKEN must be configured"
        )
    
    # Get request body if present
    body = None
    if request.method in ("POST", "PUT", "PATCH"):
        try:
            body = await request.body()
        except Exception:
            pass
    
    # Prepare headers (exclude Authorization, add auth token)
    # CRITICAL: HTTP headers should be ASCII-safe according to RFC 7230
    # Non-ASCII characters must be encoded (RFC 2047) or we must skip/clean them
    # httpx may try to encode headers internally, and if the system default is ASCII, it will fail
    headers = {}
    for key, value in request.headers.items():
        if key.lower() not in ("host", "authorization", "content-length"):
            # Ensure header values are strings and handle encoding properly
            try:
                # Convert to string if needed, handling any encoding issues
                if isinstance(value, bytes):
                    # Try UTF-8 first, then fallback to latin-1 (which can decode any byte)
                    try:
                        decoded_value = value.decode('utf-8', errors='strict')
                    except UnicodeDecodeError:
                        # If UTF-8 fails, it might be incorrectly encoded
                        # Try to fix by treating as latin-1 and re-encoding as UTF-8
                        decoded_value = value.decode('latin-1', errors='replace')
                        # Re-encode as UTF-8 to normalize
                        decoded_value = decoded_value.encode('utf-8', errors='replace').decode('utf-8')
                else:
                    decoded_value = str(value)
                
                # Fix mojibake: "BjÃ¶rn" -> "Björn"
                # This happens when UTF-8 bytes are decoded as latin-1
                if 'Ã¶' in decoded_value:
                    try:
                        # Try to fix mojibake by re-encoding as latin-1 and decoding as UTF-8
                        fixed = decoded_value.encode('latin-1', errors='replace').decode('utf-8', errors='replace')
                        decoded_value = fixed
                    except Exception:
                        pass
                
                # Normalize the string to ensure it's valid UTF-8
                try:
                    # Try to encode/decode to ensure it's valid UTF-8
                    normalized = decoded_value.encode('utf-8', errors='strict').decode('utf-8')
                    
                    # Check if the normalized string contains non-ASCII characters
                    # If it does, we need to make it ASCII-safe
                    try:
                        # Try to encode as ASCII to see if it's safe
                        normalized.encode('ascii', errors='strict')
                        # If this succeeds, the string is ASCII-safe
                        headers[key] = normalized
                    except UnicodeEncodeError:
                        # Contains non-ASCII characters - make ASCII-safe by replacing non-ASCII
                        # This is safer than failing, but we log it
                        ascii_safe = normalized.encode('ascii', errors='replace').decode('ascii')
                        logger.warning(f"Header '{key}' contains non-ASCII characters, making ASCII-safe: '{normalized}' -> '{ascii_safe}'")
                        headers[key] = ascii_safe
                except (UnicodeDecodeError, UnicodeEncodeError):
                    # If normalization fails, use replace mode to ensure ASCII-safe fallback
                    try:
                        ascii_safe = decoded_value.encode('ascii', errors='replace').decode('ascii')
                        headers[key] = ascii_safe
                    except Exception:
                        # Ultimate fallback: skip the header
                        logger.warning(f"Skipping header '{key}' due to encoding issues")
                        continue
            except (UnicodeDecodeError, UnicodeEncodeError) as header_err:
                # Skip headers that can't be properly encoded
                logger.debug(f"Skipping header {key} due to encoding issue: {header_err}")
                continue
            except Exception as header_err:
                logger.debug(f"Skipping header {key} due to unexpected error: {header_err}")
                continue
    
    # Camera streams use token as query parameter, not Authorization header
    # Other API requests use Authorization header
    # Ensure Authorization header is UTF-8 safe
    if not is_camera_stream:
        try:
            auth_header_value = f"Bearer {auth_token}"
            # Ensure UTF-8 encoding
            headers["Authorization"] = auth_header_value.encode('utf-8', errors='replace').decode('utf-8')
        except Exception as auth_err:
            logger.error(f"Error encoding Authorization header: {auth_err}")
            # Fallback: use token directly (should be ASCII anyway)
            headers["Authorization"] = f"Bearer {auth_token}"
    
    # Only set Host header if using supervisor (HA mode) and NOT a camera stream
    # Camera streams go directly to HA host, not through supervisor
    if not is_camera_stream:
        hass_api_url_for_header = config.get("HASS_API_URL", "http://supervisor/core/api")
        if "supervisor" in hass_api_url_for_header:
            headers["Host"] = "supervisor"
    
    try:
        # Use longer timeout for camera streams (they're continuous)
        timeout_value = None if is_camera_stream else 30.0
        
        async with httpx.AsyncClient(timeout=timeout_value) as client:
            if is_camera_stream:
                # For MJPEG streams, use streaming response
                # Camera streams use token as query parameter (already in request.query_params)
                query_params = dict(request.query_params)
                logger.info(f"Proxying camera stream request to {target_url} with query params: {list(query_params.keys())}")
                try:
                    # Use stream() context manager but keep it open
                    stream_context = client.stream(
                        method=request.method,
                        url=target_url,
                        headers=headers,
                        content=body,
                        params=query_params
                    )
                    stream_response = await stream_context.__aenter__()
                    
                    logger.info(f"Camera stream response status: {stream_response.status_code}")
                    logger.info(f"Camera stream response headers: {dict(stream_response.headers)}")
                    
                    # Get response headers (exclude problematic ones)
                    response_headers = {}
                    excluded_headers = {
                        "content-encoding", "transfer-encoding", "content-length",
                        "connection", "server"
                    }
                    for key, value in stream_response.headers.items():
                        if key.lower() not in excluded_headers:
                            # Ensure header values are strings and handle encoding properly
                            try:
                                # Convert to string if needed, handling any encoding issues
                                if isinstance(value, bytes):
                                    response_headers[key] = value.decode('utf-8', errors='replace')
                                else:
                                    response_headers[key] = str(value)
                            except (UnicodeDecodeError, UnicodeEncodeError):
                                # Skip headers that can't be properly encoded
                                logger.debug(f"Skipping stream response header {key} due to encoding issue")
                                continue
                    
                    # Preserve Content-Type for MJPEG streams
                    if "content-type" in stream_response.headers:
                        response_headers["Content-Type"] = stream_response.headers["content-type"]
                    
                    # Stream the response chunks
                    async def generate():
                        chunk_count = 0
                        try:
                            logger.info("Starting to read camera stream chunks...")
                            # Read response in chunks
                            async for chunk in stream_response.aiter_bytes(chunk_size=8192):
                                if not chunk:
                                    logger.warning("Received empty chunk, continuing...")
                                    continue
                                chunk_count += 1
                                if chunk_count == 1:
                                    logger.info(f"First camera stream chunk received, size: {len(chunk)} bytes")
                                elif chunk_count % 100 == 0:
                                    logger.debug(f"Camera stream: {chunk_count} chunks received so far")
                                yield chunk
                            
                            if chunk_count == 0:
                                logger.warning("Camera stream ended with no chunks received")
                            else:
                                logger.info(f"Camera stream ended normally after {chunk_count} chunks")
                        finally:
                            # Close the stream context when generator exits
                            try:
                                await stream_context.__aexit__(None, None, None)
                            except Exception as e:
                                logger.debug(f"Error closing stream context: {e}")
                    
                    return StreamingResponse(
                        generate(),
                        status_code=stream_response.status_code,
                        headers=response_headers
                    )
                except httpx.StreamClosed:
                    # Stream was closed before we could start reading
                    logger.debug("Camera stream closed before reading")
                    raise HTTPException(status_code=499, detail="Client closed connection")
                except Exception as e:
                    logger.error(f"Error setting up camera stream: {e}")
                    raise HTTPException(status_code=502, detail=f"Error connecting to camera stream: {str(e)}")
            else:
                # For regular API requests, use buffered response
                logger.debug(f"Making {request.method} request to {target_url}")
                
                # Safely log request headers
                try:
                    safe_req_headers = {}
                    for k, v in headers.items():
                        try:
                            if isinstance(v, bytes):
                                safe_req_headers[k] = v.decode('utf-8', errors='replace')
                            else:
                                str_v = str(v)
                                safe_req_headers[k] = str_v[:100] + ('...' if len(str_v) > 100 else '')
                        except Exception:
                            safe_req_headers[k] = f"<encoding_error>"
                    logger.debug(f"Request headers: {safe_req_headers}")
                except Exception as req_header_err:
                    logger.debug(f"Error logging request headers: {req_header_err}")
                
                # Log query params safely
                try:
                    safe_params = {}
                    for k, v in request.query_params.items():
                        try:
                            safe_params[k] = str(v).encode('utf-8', errors='replace').decode('utf-8')
                        except Exception:
                            safe_params[k] = "<encoding_error>"
                    logger.debug(f"Query params: {safe_params}")
                except Exception as param_err:
                    logger.debug(f"Error logging query params: {param_err}")
                
                # Ensure query params are UTF-8 safe
                safe_query_params = {}
                try:
                    for k, v in request.query_params.items():
                        try:
                            # Ensure both key and value are UTF-8 safe
                            safe_key = str(k).encode('utf-8', errors='replace').decode('utf-8')
                            safe_value = str(v).encode('utf-8', errors='replace').decode('utf-8')
                            safe_query_params[safe_key] = safe_value
                        except Exception as param_encode_err:
                            logger.debug(f"Skipping query param {k} due to encoding error: {param_encode_err}")
                            continue
                except Exception as param_err:
                    logger.debug(f"Error encoding query params: {param_err}")
                    # Fallback to original params
                    safe_query_params = dict(request.query_params)
                
                # Log headers before request to debug encoding issues
                try:
                    logger.debug("=== HEADERS BEING SENT TO HTTPX ===")
                    for k, v in headers.items():
                        try:
                            str_v = str(v)
                            repr_v = repr(v)
                            # Check for problematic characters
                            if 'Bj' in str_v or 'örn' in str_v or 'ö' in str_v or '\xc3' in repr_v:
                                logger.warning(f"PROBLEMATIC HEADER '{k}': str='{str_v}', repr={repr_v}")
                            else:
                                logger.debug(f"Header '{k}': '{str_v[:100]}'")
                        except Exception as header_err:
                            logger.warning(f"Error processing header {k}: {header_err}")
                    logger.debug("=== END HEADERS BEING SENT ===")
                except Exception as header_log_err:
                    logger.debug(f"Error logging final headers: {header_log_err}")
                
                # Log URL and query params
                try:
                    logger.debug(f"URL being sent: {target_url}")
                    logger.debug(f"Query params being sent: {safe_query_params}")
                    if body:
                        body_preview = body[:200] if isinstance(body, bytes) else str(body)[:200]
                        logger.debug(f"Body preview: {body_preview}")
                except Exception as url_log_err:
                    logger.debug(f"Error logging URL/params: {url_log_err}")
                
                try:
                    # Create httpx client with explicit encoding settings
                    # httpx should handle UTF-8 by default, but we ensure headers are clean
                    # Use follow_redirects=True to handle redirects properly
                    response = await client.request(
                        method=request.method,
                        url=target_url,
                        headers=headers,
                        content=body,
                        params=safe_query_params,
                        follow_redirects=True
                    )
                except UnicodeEncodeError as encode_err:
                    # Special handling for encoding errors to get more details
                    logger.error(f"UnicodeEncodeError details: {encode_err}")
                    logger.error(f"Encoding error object: {encode_err.object}")
                    logger.error(f"Encoding error start: {encode_err.start}, end: {encode_err.end}")
                    logger.error(f"Encoding error reason: {encode_err.reason}")
                    # Try to identify which header/value caused the issue
                    for k, v in headers.items():
                        try:
                            if encode_err.object in str(v) or encode_err.object in repr(v):
                                logger.error(f"PROBLEMATIC HEADER FOUND: '{k}' = '{v}' (repr: {repr(v)})")
                        except Exception:
                            pass
                    raise
                except Exception as request_err:
                    logger.error(f"Error making HTTP request to {target_url}: {type(request_err).__name__}: {request_err}")
                    raise
                
                logger.info(f"Response status: {response.status_code} from {target_url}")
                
                # Safely log response headers
                try:
                    safe_headers = {}
                    for k, v in response.headers.items():
                        try:
                            if isinstance(v, bytes):
                                safe_headers[k] = v.decode('utf-8', errors='replace')
                            else:
                                safe_headers[k] = str(v).encode('utf-8', errors='replace').decode('utf-8')
                        except Exception:
                            safe_headers[k] = f"<encoding_error: {type(v).__name__}>"
                    logger.debug(f"Response headers: {safe_headers}")
                except Exception as header_log_err:
                    logger.debug(f"Error logging response headers: {header_log_err}")
                
                # Log response content preview (first 500 chars) for debugging encoding issues
                try:
                    if response.content:
                        content_preview = response.content[:500]
                        # Try to decode as text to see if there are encoding issues
                        try:
                            text_preview = content_preview.decode('utf-8', errors='replace')
                            logger.debug(f"Response content preview (first 500 chars): {text_preview}")
                        except Exception as decode_err:
                            logger.debug(f"Could not decode response content as UTF-8: {decode_err}, raw bytes length: {len(response.content)}")
                except Exception as preview_err:
                    logger.debug(f"Error previewing response content: {preview_err}")
                
                # Return response with appropriate headers
                # Remove headers that shouldn't be forwarded or might cause issues
                response_headers = {}
                excluded_headers = {
                    "content-encoding",  # Remove encoding headers
                    "transfer-encoding",  # Remove transfer encoding
                    "content-length",  # Let FastAPI calculate this automatically
                    "connection",  # Connection is managed by FastAPI
                    "server",  # Don't forward server header
                }
                
                for key, value in response.headers.items():
                    if key.lower() not in excluded_headers:
                        # Ensure header values are strings and handle encoding properly
                        try:
                            # Convert to string if needed, handling any encoding issues
                            if isinstance(value, bytes):
                                response_headers[key] = value.decode('utf-8', errors='replace')
                            else:
                                # Ensure string is UTF-8 safe
                                str_value = str(value)
                                response_headers[key] = str_value.encode('utf-8', errors='replace').decode('utf-8')
                        except (UnicodeDecodeError, UnicodeEncodeError) as header_err:
                            # Skip headers that can't be properly encoded
                            logger.debug(f"Skipping response header {key} due to encoding issue: {header_err}")
                            continue
                        except Exception as header_err:
                            logger.debug(f"Skipping response header {key} due to unexpected error: {header_err}")
                            continue
                
                # Safely create response
                try:
                    return Response(
                        content=response.content,
                        status_code=response.status_code,
                        headers=response_headers
                    )
                except Exception as response_err:
                    logger.error(f"Error creating Response object: {response_err}")
                    logger.error(f"Response status_code: {response.status_code}, headers count: {len(response_headers)}")
                    raise
    except httpx.TimeoutException:
        logger.error(f"Timeout connecting to Home Assistant API: {target_url}")
        raise HTTPException(status_code=504, detail="Timeout connecting to Home Assistant API")
    except Exception as e:
        # Log detailed error information for debugging
        logger.error(f"Exception type: {type(e).__name__}")
        logger.error(f"Exception args: {e.args}")
        
        # Safely encode error message to avoid encoding issues
        try:
            error_msg = str(e)
            logger.debug(f"Error message (str): {error_msg}")
        except (UnicodeEncodeError, UnicodeDecodeError) as str_err:
            logger.error(f"Error converting exception to string: {str_err}")
            try:
                error_msg = repr(e)
                logger.debug(f"Error message (repr): {error_msg}")
            except Exception as repr_err:
                logger.error(f"Error converting exception to repr: {repr_err}")
                error_msg = "Unknown error"
        
        # Log error - ensure message is UTF-8 safe
        try:
            # Encode/decode to ensure UTF-8 compatibility
            safe_msg = error_msg.encode('utf-8', errors='replace').decode('utf-8')
            logger.error(f"Error proxying to Home Assistant API (target_url={target_url}): {safe_msg}")
        except Exception as log_err:
            # Ultimate fallback if encoding still fails
            logger.error(f"Error proxying to Home Assistant API (target_url={target_url}): encoding error in logging: {log_err}")
            safe_msg = "Unknown error"
        
        # Use a safe error detail that won't cause encoding issues
        try:
            detail_msg = f"Error connecting to Home Assistant API: {safe_msg}"
        except (UnicodeEncodeError, UnicodeDecodeError):
            detail_msg = "Error connecting to Home Assistant API"
        raise HTTPException(status_code=502, detail=detail_msg)


@app.websocket("/api/websocket")
async def proxy_websocket(websocket: WebSocket):
    """
    Proxy WebSocket connections to Home Assistant with transparent authentication.
    """
    config = get_config()
    
    # Get WebSocket URL from config (handles both HA and local dev)
    ha_ws_url = config.get("HASS_WEBSOCKET_URL", "ws://supervisor/core/websocket")
    
    # Get authentication token
    # In HA: use SUPERVISOR_TOKEN
    # In local dev: use HASS_ACCESS_TOKEN from environment
    supervisor_token = os.environ.get("SUPERVISOR_TOKEN")
    hass_access_token = os.environ.get("HASS_ACCESS_TOKEN")
    
    # Prefer SUPERVISOR_TOKEN, fallback to HASS_ACCESS_TOKEN
    auth_token = supervisor_token or hass_access_token
    
    if not auth_token:
        await websocket.close(code=1008, reason="SUPERVISOR_TOKEN or HASS_ACCESS_TOKEN not configured")
        return
    
    # Accept client connection
    await websocket.accept()
    
    try:
        async with websockets.connect(ha_ws_url) as ha_websocket:
            # Authentication state
            authenticated = False
            client_connected = True
            
            # Send fake auth_required to client immediately so client library knows it needs to authenticate
            # The backend will handle actual authentication with HA transparently
            try:
                fake_auth_required = json.dumps({"type": "auth_required", "ha_version": "2024.1.0"})
                await websocket.send_text(fake_auth_required)
                logger.debug("Sent fake auth_required to client to initiate authentication flow")
            except Exception as e:
                logger.debug(f"Error sending fake auth_required to client: {e}")
            
            # Helper function to check if client is still connected
            def is_client_connected():
                try:
                    return websocket.client_state.name == "CONNECTED"
                except Exception:
                    return False
            
            # Helper function to safely send message to client
            async def safe_send_to_client(message, is_text=True):
                if not is_client_connected():
                    return False
                try:
                    if is_text:
                        await websocket.send_text(message)
                    else:
                        await websocket.send_bytes(message)
                    return True
                except (RuntimeError, WebSocketDisconnect) as e:
                    # Client disconnected or connection closed
                    logger.debug(f"Client disconnected while sending message: {e}")
                    return False
                except Exception as e:
                    logger.debug(f"Error sending message to client: {e}")
                    return False
            
            # Forward messages from HA to client
            async def forward_to_client():
                nonlocal authenticated, client_connected
                try:
                    async for message in ha_websocket:
                        # Check if client is still connected before processing
                        if not is_client_connected():
                            logger.debug("Client disconnected, stopping forward_to_client")
                            break
                        
                        # Handle text messages (JSON)
                        if isinstance(message, str):
                            try:
                                data = json.loads(message)
                                
                                # Ensure data is a dict (not a list)
                                if not isinstance(data, dict):
                                    # If it's a list or other type, forward as-is
                                    if not await safe_send_to_client(message, is_text=True):
                                        break
                                    continue
                                
                                # Handle auth_required message
                                if data.get("type") == "auth_required":
                                    # Send auth message with auth token
                                    auth_message = {
                                        "type": "auth",
                                        "access_token": auth_token
                                    }
                                    await ha_websocket.send(json.dumps(auth_message))
                                    logger.debug("Backend proxy authenticated with Home Assistant")
                                    # Don't forward auth_required to client - backend handles authentication transparently
                                    continue
                                
                                # Handle auth_ok message
                                if data.get("type") == "auth_ok":
                                    authenticated = True
                                    logger.debug("Backend proxy received auth_ok from Home Assistant, forwarding to client")
                                    # Forward auth_ok to client so client library knows authentication succeeded
                            except json.JSONDecodeError:
                                pass  # Not JSON, forward as-is
                            
                            # Forward text message to client
                            if not await safe_send_to_client(message, is_text=True):
                                break
                        elif isinstance(message, bytes):
                            # Forward binary message to client
                            if not await safe_send_to_client(message, is_text=False):
                                break
                        else:
                            # Handle other types (convert to string if possible)
                            if not await safe_send_to_client(str(message), is_text=True):
                                break
                except websockets.ConnectionClosed:
                    logger.debug("Home Assistant WebSocket closed normally")
                    client_connected = False
                    try:
                        if is_client_connected():
                            await websocket.close(code=1006, reason="HA connection closed")
                    except Exception:
                        pass
                    return
                except Exception as e:
                    logger.error(f"Error forwarding from HA to client: {e}")
                    client_connected = False
                    try:
                        if is_client_connected():
                            await websocket.close(code=1011, reason="Connection error")
                    except Exception:
                        pass
                    return
            
            # Forward messages from client to HA
            async def forward_to_ha():
                nonlocal client_connected
                try:
                    while True:
                        try:
                            # Check if client is still connected before receiving
                            if not is_client_connected():
                                logger.debug("Client disconnected, stopping forward_to_ha")
                                break
                            
                            # Receive message (text or binary)
                            message = await websocket.receive()
                            
                            # Extract message text/bytes
                            message_text = None
                            message_bytes = None
                            
                            if isinstance(message, dict):
                                message_text = message.get("text")
                                message_bytes = message.get("bytes")
                            else:
                                if hasattr(message, "text") and message.text:
                                    message_text = message.text
                                elif hasattr(message, "bytes") and message.bytes:
                                    message_bytes = message.bytes
                            
                            # Intercept and drop auth messages from client (backend handles authentication)
                            if message_text:
                                try:
                                    data = json.loads(message_text)
                                    if isinstance(data, dict) and data.get("type") == "auth":
                                        # Drop auth messages from client - backend handles authentication transparently
                                        logger.debug("Dropping auth message from client (backend handles authentication transparently)")
                                        # Always send fake auth_ok to client so client library knows authentication succeeded
                                        # The backend handles actual authentication with HA in the background
                                        fake_auth_ok = json.dumps({"type": "auth_ok"})
                                        try:
                                            await websocket.send_text(fake_auth_ok)
                                            logger.debug("Sent fake auth_ok to client after dropping auth message")
                                        except Exception as e:
                                            logger.debug(f"Error sending fake auth_ok to client: {e}")
                                        continue
                                except json.JSONDecodeError:
                                    pass  # Not JSON, forward as-is
                            
                            # Forward message to HA
                            if message_text:
                                await ha_websocket.send(message_text)
                            elif message_bytes:
                                await ha_websocket.send(message_bytes)
                        except WebSocketDisconnect:
                            logger.debug("Client disconnected normally")
                            client_connected = False
                            break
                        except RuntimeError as e:
                            # Handle "Cannot call receive once a disconnect message has been received"
                            if "disconnect" in str(e).lower():
                                logger.debug("WebSocket disconnect detected, stopping forward_to_ha")
                                client_connected = False
                                break
                            else:
                                logger.error(f"Error forwarding from client to HA: {e}")
                                client_connected = False
                                break
                        except Exception as e:
                            logger.error(f"Error forwarding from client to HA: {e}")
                            client_connected = False
                            break
                except Exception as e:
                    logger.error(f"Error in forward_to_ha: {e}")
                    client_connected = False
            
            # Run both forwarding tasks concurrently
            try:
                await asyncio.gather(
                    forward_to_client(),
                    forward_to_ha(),
                    return_exceptions=True
                )
            except Exception as e:
                logger.error(f"WebSocket proxy error: {e}")
    
    except Exception as e:
        # Safely encode error message to avoid encoding issues
        try:
            error_msg = str(e).encode('utf-8', errors='replace').decode('utf-8')
            logger.error(f"Error connecting to Home Assistant WebSocket: {error_msg}")
        except Exception:
            logger.error("Error connecting to Home Assistant WebSocket: encoding error")
            error_msg = "Connection error"
        
        try:
            reason = f"Connection error: {error_msg}".encode('utf-8', errors='replace').decode('utf-8')
            await websocket.close(code=1011, reason=reason)
        except Exception:
            try:
                await websocket.close(code=1011, reason="Connection error")
            except Exception:
                pass


@app.get("/{full_path:path}")
async def serve_spa(full_path: str):
    """
    Serve SPA - return index.html for all non-API routes.
    This catch-all route should be last to allow more specific routes to match first.
    """
    # Don't serve index.html for API routes or asset requests
    if full_path.startswith("api/") or full_path.startswith("assets/") or full_path.startswith("gti/") or full_path.startswith("forecast/"):
        raise HTTPException(status_code=404, detail="Not found")
    
    # Serve index.html for SPA routing
    index_file = STATIC_DIR / "index.html"
    if index_file.exists():
        return FileResponse(str(index_file))
    else:
        raise HTTPException(status_code=404, detail="index.html not found")


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=80)

