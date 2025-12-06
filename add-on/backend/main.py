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

import asyncio
import httpx
import websockets
from fastapi import FastAPI, Request, Response, WebSocket, WebSocketDisconnect, HTTPException
from fastapi.responses import FileResponse, JSONResponse, StreamingResponse
from fastapi.staticfiles import StaticFiles
from starlette.middleware.cors import CORSMiddleware
from starlette.responses import StreamingResponse as StarletteStreamingResponse

from config import get_config, clear_cache
from proxy import create_geofox_signature
from frigate_auth import get_frigate_auth

# Configure logging with consistent format across all loggers
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(name)s - %(message)s',
    datefmt='%Y-%m-%d %H:%M:%S'
)

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

# Our application logger
logger = logging.getLogger(__name__)

app = FastAPI(title="Family Calendar Backend")

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


@app.post("/api/frigate/login")
async def frigate_login():
    """Perform login to Frigate and return cookie information.
    
    The backend handles CSRF token properly. The cookie must be set by Frigate itself
    when the browser makes direct requests to Frigate (with CORS configured).
    """
    config = get_config()
    
    frigate_host = config.get("FRIGATE_HOST", "")
    frigate_user = config.get("FRIGATE_USER", "")
    frigate_password = config.get("FRIGATE_PASSWORD", "")
    
    if not frigate_host or not frigate_user or not frigate_password:
        raise HTTPException(
            status_code=500,
            detail="Frigate configuration not complete (host, user, password required)"
        )
    
    try:
        auth = get_frigate_auth(frigate_host, frigate_user, frigate_password)
        cookie_info = await auth.login()
        
        return JSONResponse(content={
            "cookie": cookie_info,
            "frigate_host": frigate_host
        })
    except Exception as e:
        logger.error(f"Frigate login error: {e}")
        raise HTTPException(
            status_code=500,
            detail=f"Frigate login failed: {str(e)}"
        )


@app.get("/api/frigate/login-redirect")
async def frigate_login_redirect():
    """Redirect to Frigate login page so Frigate can set the cookie directly in browser.
    
    This is a workaround for cross-origin cookie issues. The browser will be redirected
    to Frigate's login endpoint, which will set the cookie with proper domain.
    """
    config = get_config()
    
    frigate_host = config.get("FRIGATE_HOST", "")
    frigate_user = config.get("FRIGATE_USER", "")
    frigate_password = config.get("FRIGATE_PASSWORD", "")
    
    if not frigate_host or not frigate_user or not frigate_password:
        raise HTTPException(
            status_code=500,
            detail="Frigate configuration not complete"
        )
    
    # Redirect to Frigate login - but we can't POST via redirect
    # Instead, return a page that auto-submits a form to Frigate
    from fastapi.responses import HTMLResponse
    
    html = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <title>Frigate Login</title>
    </head>
    <body>
        <form id="loginForm" method="POST" action="{frigate_host}/api/login">
            <input type="hidden" name="user" value="{frigate_user}">
            <input type="hidden" name="password" value="{frigate_password}">
        </form>
        <script>
            // Auto-submit form to Frigate
            document.getElementById('loginForm').submit();
        </script>
    </body>
    </html>
    """
    
    return HTMLResponse(content=html)


@app.get("/api/frigate/{camera_name}")
async def frigate_mjpeg_feed(camera_name: str, request: Request):
    # Log client info to track if browser disconnects
    client_host = request.client.host if request.client else "unknown"
    logger.info(f"Frigate MJPEG request from {client_host} for camera {camera_name}")
    """Proxy Frigate MJPEG feed with authentication.
    
    Uses server-side cookie from FrigateAuth to authenticate with Frigate.
    This avoids cross-origin cookie issues.
    """
    config = get_config()
    
    frigate_host = config.get("FRIGATE_HOST", "")
    frigate_user = config.get("FRIGATE_USER", "")
    frigate_password = config.get("FRIGATE_PASSWORD", "")
    
    if not frigate_host or not frigate_user or not frigate_password:
        raise HTTPException(
            status_code=500,
            detail="Frigate configuration not complete (host, user, password required)"
        )
    
    try:
        auth = get_frigate_auth(frigate_host, frigate_user, frigate_password)
        cookie = await auth.get_cookie()
        
        if not cookie:
            # Try to login if no cookie available
            await auth.login()
            cookie = await auth.get_cookie()
        
        if not cookie:
            raise HTTPException(
                status_code=500,
                detail="Failed to obtain Frigate authentication cookie"
            )
        
        # Build Frigate URL
        target_url = f"{frigate_host}/api/{camera_name}"
        
        # Prepare headers with cookie
        headers = {
            "Cookie": cookie,
            "User-Agent": request.headers.get("User-Agent", "Family-Calendar/1.0")
        }
        
        # Forward query parameters
        query_params = dict(request.query_params)
        
        try:
            # Use longer timeout for MJPEG streams (they're continuous)
            # Set a very long timeout and disable connection pooling to keep stream alive
            timeout = httpx.Timeout(None, connect=30.0, read=None, write=None, pool=None)
            async with httpx.AsyncClient(timeout=timeout, follow_redirects=True) as client:
                # Use stream() context manager but keep it open
                stream_context = client.stream(
                    "GET",
                    target_url,
                    headers=headers,
                    params=query_params
                )
                stream_response = await stream_context.__aenter__()
                
                logger.info(f"Frigate stream response status: {stream_response.status_code}")
                logger.info(f"Frigate stream response headers: {dict(stream_response.headers)}")
                
                # Check for 401/403 errors and retry with refreshed cookie
                if stream_response.status_code in (401, 403):
                    logger.info(f"Received {stream_response.status_code} from Frigate, refreshing cookie and retrying")
                    await stream_context.__aexit__(None, None, None)  # Close first stream
                    await auth.refresh()
                    cookie = await auth.get_cookie()
                    if cookie:
                        headers["Cookie"] = cookie
                        # Retry the request
                        retry_context = client.stream(
                            "GET",
                            target_url,
                            headers=headers,
                            params=query_params
                        )
                        stream_response = await retry_context.__aenter__()
                        stream_context = retry_context
                        
                        if stream_response.status_code != 200:
                            await stream_context.__aexit__(None, None, None)
                            raise HTTPException(
                                status_code=stream_response.status_code,
                                detail=f"Frigate returned {stream_response.status_code} after cookie refresh"
                            )
                    else:
                        await stream_context.__aexit__(None, None, None)
                        raise HTTPException(
                            status_code=500,
                            detail="Failed to refresh Frigate authentication cookie"
                        )
                
                if stream_response.status_code != 200:
                    await stream_context.__aexit__(None, None, None)
                    raise HTTPException(
                        status_code=stream_response.status_code,
                        detail=f"Frigate returned {stream_response.status_code}"
                    )
                
                # Get response headers - only include what we need for MJPEG streaming
                # Exclude headers that shouldn't be forwarded or might cause issues
                response_headers = {}
                excluded_headers = {
                    "content-encoding", "transfer-encoding", "content-length",
                    "connection", "server", "set-cookie", "date",
                    "strict-transport-security", "x-cache-status",
                    "access-control-allow-methods", "access-control-allow-headers",
                    "access-control-allow-credentials", "cache-control"
                }
                
                # Only copy Content-Type from Frigate - this is critical for MJPEG
                if "content-type" in stream_response.headers:
                    response_headers["Content-Type"] = stream_response.headers["content-type"]
                else:
                    # Fallback if Content-Type is missing
                    response_headers["Content-Type"] = "multipart/x-mixed-replace;boundary=frame"
                
                # Set headers to prevent buffering - critical for MJPEG streams
                response_headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
                response_headers["Pragma"] = "no-cache"
                response_headers["Expires"] = "0"
                # For Nginx (if used as reverse proxy)
                response_headers["X-Accel-Buffering"] = "no"
                # CRITICAL: Disable compression for MJPEG streams
                # Compression would corrupt the multipart stream
                response_headers["Content-Encoding"] = "identity"
                # Keep connection alive - important for continuous streams
                response_headers["Connection"] = "keep-alive"
                
                # Stream the response chunks - keep connection alive
                # The stream should run continuously until client disconnects
                async def generate():
                    chunk_count = 0
                    total_bytes = 0
                    first_chunk_data = None
                    try:
                        logger.info("Starting Frigate stream generator...")
                        # Read stream continuously - don't stop until client disconnects
                        # Use aiter_bytes with smaller chunks to avoid blocking
                        async for chunk in stream_response.aiter_bytes(chunk_size=4096):
                            if chunk:  # Only yield non-empty chunks
                                chunk_count += 1
                                total_bytes += len(chunk)
                                
                                # Validate first chunk - check if it starts with boundary marker
                                if chunk_count == 1:
                                    first_chunk_data = chunk[:100] if len(chunk) >= 100 else chunk
                                    logger.info(f"First chunk: {len(chunk)} bytes")
                                    # Check if it starts with --frame (boundary marker)
                                    if chunk.startswith(b'--frame'):
                                        logger.info("✓ First chunk starts with boundary marker (good)")
                                    elif chunk.startswith(b'\xff\xd8'):
                                        logger.info("✓ First chunk starts with JPEG header (might be missing boundary)")
                                    else:
                                        logger.warning(f"⚠ First chunk doesn't start with boundary or JPEG: {chunk[:50].hex()}")
                                
                                # Validate chunk integrity periodically
                                if chunk_count % 50 == 0:
                                    logger.info(f"Streaming: {chunk_count} chunks, {total_bytes} bytes")
                                    # Check if chunk contains boundary marker
                                    if b'--frame' in chunk:
                                        logger.debug("Boundary marker found in chunk")
                                
                                # Yield chunk immediately - don't buffer
                                # This is critical - if we don't yield immediately, the browser might think the stream is done
                                yield chunk
                        
                        logger.warning(f"Stream ended unexpectedly after {chunk_count} chunks, {total_bytes} bytes")
                    except (httpx.StreamClosed, httpx.ReadError) as e:
                        # Stream closed - this might be because browser closed connection
                        # ReadError often means the underlying connection was closed
                        error_msg = str(e) if hasattr(e, '__str__') else type(e).__name__
                        logger.warning(f"Frigate stream closed after {chunk_count} chunks, {total_bytes} bytes: {type(e).__name__} - {error_msg}")
                        logger.warning("This usually means the browser closed the connection. The MJPEG data might be corrupt or the browser doesn't support the stream format.")
                        # Log first chunk data for debugging
                        if first_chunk_data:
                            logger.info(f"First chunk preview (hex): {first_chunk_data[:50].hex()}")
                        # Don't re-raise - just stop generating
                    except Exception as e:
                        # Log unexpected errors but don't crash
                        logger.error(f"Unexpected error in Frigate stream generator after {chunk_count} chunks: {e}", exc_info=True)
                    finally:
                        # Only close stream context when generator truly exits
                        logger.info(f"Closing stream context after {chunk_count} chunks, {total_bytes} bytes")
                        try:
                            await stream_context.__aexit__(None, None, None)
                        except Exception as e:
                            logger.debug(f"Error closing stream context: {e}")
                
                # Use Starlette's StreamingResponse directly - bypass FastAPI's processing
                # FastAPI's StreamingResponse might be processing the multipart data incorrectly
                return StarletteStreamingResponse(
                    generate(),
                    status_code=200,
                    headers=response_headers,
                    media_type=None  # Don't let Starlette process multipart
                )
        except httpx.TimeoutException:
            logger.error(f"Timeout connecting to Frigate: {target_url}")
            raise HTTPException(status_code=504, detail="Timeout connecting to Frigate")
        except Exception as e:
            logger.error(f"Error proxying Frigate feed: {e}")
            raise HTTPException(status_code=502, detail=f"Error connecting to Frigate: {str(e)}")
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Frigate proxy error: {e}")
        raise HTTPException(
            status_code=500,
            detail=f"Frigate proxy failed: {str(e)}"
        )


@app.post("/api/frigate/refresh")
async def frigate_refresh():
    """Refresh Frigate authentication cookie."""
    config = get_config()
    
    frigate_host = config.get("FRIGATE_HOST", "")
    frigate_user = config.get("FRIGATE_USER", "")
    frigate_password = config.get("FRIGATE_PASSWORD", "")
    
    if not frigate_host or not frigate_user or not frigate_password:
        raise HTTPException(
            status_code=500,
            detail="Frigate configuration not complete (host, user, password required)"
        )
    
    try:
        auth = get_frigate_auth(frigate_host, frigate_user, frigate_password)
        cookie_info = await auth.refresh()
        
        return JSONResponse(content={
            "cookie": cookie_info,
            "frigate_host": frigate_host
        })
    except Exception as e:
        logger.error(f"Frigate refresh error: {e}")
        raise HTTPException(
            status_code=500,
            detail=f"Frigate refresh failed: {str(e)}"
        )


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
    headers = {}
    for key, value in request.headers.items():
        if key.lower() not in ("host", "authorization", "content-length"):
            headers[key] = value
    
    # Camera streams use token as query parameter, not Authorization header
    # Other API requests use Authorization header
    if not is_camera_stream:
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
                            response_headers[key] = value
                    
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
                response = await client.request(
                    method=request.method,
                    url=target_url,
                    headers=headers,
                    content=body,
                    params=dict(request.query_params)
                )
                
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
                        response_headers[key] = value
                
                return Response(
                    content=response.content,
                    status_code=response.status_code,
                    headers=response_headers
                )
    except httpx.TimeoutException:
        logger.error(f"Timeout connecting to Home Assistant API: {target_url}")
        raise HTTPException(status_code=504, detail="Timeout connecting to Home Assistant API")
    except Exception as e:
        logger.error(f"Error proxying to Home Assistant API: {e}")
        raise HTTPException(status_code=502, detail=f"Error connecting to Home Assistant API: {str(e)}")


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
            
            # Forward messages from HA to client
            async def forward_to_client():
                nonlocal authenticated
                try:
                    async for message in ha_websocket:
                        # Handle text messages (JSON)
                        if isinstance(message, str):
                            try:
                                data = json.loads(message)
                                
                                # Ensure data is a dict (not a list)
                                if not isinstance(data, dict):
                                    # If it's a list or other type, forward as-is
                                    await websocket.send_text(message)
                                    continue
                                
                                # Handle auth_required message
                                if data.get("type") == "auth_required":
                                    # Send auth message with auth token
                                    auth_message = {
                                        "type": "auth",
                                        "access_token": auth_token
                                    }
                                    await ha_websocket.send(json.dumps(auth_message))
                                    continue
                                
                                # Handle auth_ok message
                                if data.get("type") == "auth_ok":
                                    authenticated = True
                            except json.JSONDecodeError:
                                pass  # Not JSON, forward as-is
                            
                            # Forward text message to client
                            await websocket.send_text(message)
                        elif isinstance(message, bytes):
                            # Forward binary message to client
                            await websocket.send_bytes(message)
                        else:
                            # Handle other types (convert to string if possible)
                            await websocket.send_text(str(message))
                except websockets.ConnectionClosed:
                    logger.debug("Home Assistant WebSocket closed normally")
                    try:
                        if websocket.client_state.name == "CONNECTED":
                            await websocket.close(code=1006, reason="HA connection closed")
                    except Exception:
                        pass
                    return
                except Exception as e:
                    logger.error(f"Error forwarding from HA to client: {e}")
                    try:
                        if websocket.client_state.name == "CONNECTED":
                            await websocket.close(code=1011, reason="Connection error")
                    except Exception:
                        pass
                    return
            
            # Forward messages from client to HA
            async def forward_to_ha():
                try:
                    while True:
                        try:
                            # Receive message (text or binary)
                            message = await websocket.receive()
                            
                            # Handle different message types from FastAPI WebSocket
                            if isinstance(message, dict):
                                if "text" in message:
                                    await ha_websocket.send(message["text"])
                                elif "bytes" in message:
                                    await ha_websocket.send(message["bytes"])
                            else:
                                # If it's a WebSocketMessage object, access its attributes
                                if hasattr(message, "text") and message.text:
                                    await ha_websocket.send(message.text)
                                elif hasattr(message, "bytes") and message.bytes:
                                    await ha_websocket.send(message.bytes)
                        except WebSocketDisconnect:
                            logger.debug("Client disconnected normally")
                            break
                        except RuntimeError as e:
                            # Handle "Cannot call receive once a disconnect message has been received"
                            if "disconnect" in str(e).lower():
                                logger.debug("WebSocket disconnect detected, stopping forward_to_ha")
                                break
                            else:
                                logger.error(f"Error forwarding from client to HA: {e}")
                                break
                        except Exception as e:
                            logger.error(f"Error forwarding from client to HA: {e}")
                            break
                except Exception as e:
                    logger.error(f"Error in forward_to_ha: {e}")
            
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
        logger.error(f"Error connecting to Home Assistant WebSocket: {e}")
        try:
            await websocket.close(code=1011, reason=f"Connection error: {str(e)}")
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

