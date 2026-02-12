"""
FastAPI backend for Home Assistant Family Calendar add-on.
Serves static files and provides authenticated proxy endpoints.
"""
import os
import json
import logging
import re
from pathlib import Path
from typing import Any, Dict, Optional, Callable
from contextlib import suppress

# Configure logging FIRST before importing other modules that use logging
# Set up root logger to prevent uvicorn from capturing all logs
root_logger = logging.getLogger()
root_logger.setLevel(logging.INFO)

# Remove default handlers to avoid duplicate logs
for handler in root_logger.handlers[:]:
    root_logger.removeHandler(handler)

# Add our own handler with consistent format
handler = logging.StreamHandler()
formatter = logging.Formatter('%(asctime)s - %(levelname)s - %(name)s - %(message)s', datefmt='%Y-%m-%d %H:%M:%S')
handler.setFormatter(formatter)
root_logger.addHandler(handler)

import asyncio
import httpx
import websockets
from fastapi import FastAPI, Request, Response, WebSocket, WebSocketDisconnect, HTTPException
from fastapi.responses import FileResponse, JSONResponse, StreamingResponse
from fastapi.staticfiles import StaticFiles
from slowapi import Limiter
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded
from starlette.middleware.cors import CORSMiddleware
from starlette.middleware.base import BaseHTTPMiddleware

from .config import get_config, clear_cache
from .proxy import create_geofox_signature
from .websocket_manager import WebSocketStateManager

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

# HA entity ID format: domain.object_id (e.g. sensor.temperature, cover.garage_door)
_ENTITY_ID_RE = re.compile(r'^[a-z_]+\.[a-z0-9_]+$')


def _is_valid_entity_id(entity_id: str) -> bool:
    return isinstance(entity_id, str) and bool(_ENTITY_ID_RE.match(entity_id))


# Headers that should not be forwarded from upstream responses
_EXCLUDED_RESPONSE_HEADERS = {
    "content-encoding", "transfer-encoding", "content-length",
    "connection", "server"
}


def filter_response_headers(headers) -> dict:
    """Filter out hop-by-hop and problematic headers from an upstream response."""
    return {
        key: value
        for key, value in headers.items()
        if key.lower() not in _EXCLUDED_RESPONSE_HEADERS
    }


def handle_proxy_error(exc: Exception, service_name: str, target_url: str):
    """Raise appropriate HTTPException for proxy errors (timeout vs generic)."""
    if isinstance(exc, httpx.TimeoutException):
        logger.error(f"Timeout connecting to {service_name}: {target_url}")
        raise HTTPException(status_code=504, detail=f"Timeout connecting to {service_name}")
    logger.error(f"Error proxying to {service_name} ({target_url}): {exc}")
    raise HTTPException(status_code=502, detail=f"Error connecting to {service_name}")


app = FastAPI(title="Family Calendar Backend")

# Rate limiter for public endpoints
limiter = Limiter(key_func=get_remote_address)
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, lambda request, exc: JSONResponse(
    status_code=429,
    content={"detail": "Rate limit exceeded. Try again later."}
))

# Global WebSocket state manager instance
websocket_manager: Optional[WebSocketStateManager] = None


@app.on_event("startup")
async def startup_event():
    """Load and log configuration at startup, initialize WebSocket state manager."""
    global websocket_manager
    
    logger.info("Application starting up, loading configuration...")
    try:
        config = get_config()
        logger.info("Configuration loaded successfully at startup")
        
        # Initialize WebSocket state manager in background task
        # This ensures the FastAPI app starts even if WebSocket connection takes time
        # If this fails, the backend should still start (WebSocket features just won't work)
        async def init_websocket_manager():
            try:
                global websocket_manager
                websocket_manager = WebSocketStateManager(config)
                await websocket_manager.start()
                logger.info("WebSocket State Manager started")
            except Exception as ws_error:
                logger.error(f"Failed to start WebSocket State Manager: {ws_error}", exc_info=True)
                logger.warning("Backend will continue without WebSocket functionality")
                websocket_manager = None
        
        # Start WebSocket manager in background - don't await to avoid blocking startup
        asyncio.create_task(init_websocket_manager())
        logger.info("WebSocket State Manager initialization started in background")
    except Exception as e:
        logger.error(f"Failed to load configuration at startup: {e}", exc_info=True)
        # Don't raise - let the backend start even if config fails
        # It will just have limited functionality


@app.on_event("shutdown")
async def shutdown_event():
    """Stop WebSocket state manager on shutdown."""
    global websocket_manager
    
    if websocket_manager:
        await websocket_manager.stop()
        logger.info("WebSocket State Manager stopped")


# CORS middleware - only needed for local development (Vite dev server on different port)
# In HA mode, frontend is served from the same origin, so CORS is not needed
if not os.environ.get("SUPERVISOR_TOKEN"):
    app.add_middleware(
        CORSMiddleware,
        allow_origins=[
            "http://localhost:5173",
            "http://localhost:3000",
            "http://127.0.0.1:5173",
            "http://127.0.0.1:3000",
        ],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

# Middleware to add cache headers for static assets
# This prevents HA cloud/ingress from caching old versions
class CacheControlMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        response = await call_next(request)
        
        # Add cache headers based on path
        path = request.url.path
        
        if path.startswith("/assets/"):
            # Hashed assets (JS/CSS with content hashes) can be cached long-term
            # They change when content changes, so caching is safe
            if any(path.endswith(ext) for ext in [".js", ".css", ".woff", ".woff2", ".ttf", ".otf", ".png", ".jpg", ".jpeg", ".svg", ".ico"]):
                response.headers["Cache-Control"] = "public, max-age=31536000, immutable"
            else:
                # Other assets, cache for shorter time
                response.headers["Cache-Control"] = "public, max-age=3600"
        elif path == "/" or path.endswith(".html"):
            # HTML files should never be cached - they reference the hashed assets
            response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
            response.headers["Pragma"] = "no-cache"
            response.headers["Expires"] = "0"
        
        return response

app.add_middleware(CacheControlMiddleware)

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


@app.get("/health")
async def health_check():
    """Health check endpoint for ingress and monitoring."""
    return JSONResponse(content={"status": "ok", "service": "family-calendar-backend"})

@app.get("/api/config")
async def get_config_endpoint():
    """Provide configuration to frontend (excluding secrets)."""
    config = get_config()
    
    # Create a safe copy of config without secrets
    safe_config = config.copy()
    
    # Remove secrets that should stay in backend only
    secrets_to_remove = [
        "GEOFOX_SECRET",
        "WEATHER_API_KEY",
        "HASS_ACCESS_TOKEN",
        "SUPERVISOR_TOKEN",
    ]
    
    for secret in secrets_to_remove:
        safe_config.pop(secret, None)
    
    return JSONResponse(content=safe_config)


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
@limiter.limit("30/minute")
async def proxy_gti(endpoint: str, request: Request):
    """
    Proxy Geofox API requests with server-side signature generation.
    This is a public endpoint that doesn't require HA authentication,
    but accepts Authorization headers to satisfy supervisor middleware.
    """
    # Check for Authorization header to satisfy supervisor middleware
    # This endpoint doesn't require HA auth, but including a token prevents warnings
    auth_header = request.headers.get("Authorization", "")
    if auth_header.startswith("Bearer "):
        # Token provided - that's fine, but we don't validate it for this public endpoint
        logger.debug("Geofox request received with Authorization header (not required but accepted)")
    
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
            return Response(
                content=response.content,
                status_code=response.status_code,
                headers=filter_response_headers(response.headers)
            )
    except Exception as e:
        handle_proxy_error(e, "Geofox API", target_url)


@app.get("/forecast/{coordinates}")
async def proxy_forecast(coordinates: str, request: Request):
    """
    Proxy weather forecast API requests using backend-configured API key.
    """
    config = get_config()
    
    if not config.get("ENABLE_WEATHER"):
        raise HTTPException(status_code=403, detail="Weather feature is not enabled")
    
    configured_api_key = config.get("WEATHER_API_KEY", "")
    
    if not configured_api_key:
        raise HTTPException(status_code=500, detail="Weather API key not configured")
    
    # Forward request to weather API using backend-configured key
    query_params = dict(request.query_params)
    target_url = f"https://api.pirateweather.net/forecast/{configured_api_key}/{coordinates}"
    
    try:
        async with httpx.AsyncClient(timeout=30.0) as client:
            response = await client.get(
                target_url,
                params=query_params
            )
            return Response(
                content=response.content,
                status_code=response.status_code,
                headers=filter_response_headers(response.headers)
            )
    except Exception as e:
        handle_proxy_error(e, "weather API", target_url)


@app.api_route("/api/{path:path}", methods=["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"])
async def proxy_api(path: str, request: Request):
    """
    Proxy Home Assistant REST API requests with SUPERVISOR_TOKEN or HASS_ACCESS_TOKEN injection.
    """
    config = get_config()
    
    # Check if this is a camera stream request (MJPEG streaming)
    # NOTE: Camera streams are no longer proxied - frontend goes directly to Home Assistant
    # This check is kept for backwards compatibility but camera_proxy_stream requests
    # should not reach this endpoint anymore
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
    
    logger.debug(f"Proxying {request.method} request to: {target_url}")

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
    
    # Prepare headers - forward only ASCII-safe headers per RFC 7230
    # Skip hop-by-hop headers and auth (we inject our own)
    skip_headers = {"host", "authorization", "content-length"}
    headers = {}
    for key, value in request.headers.items():
        if key.lower() in skip_headers:
            continue
        try:
            str(value).encode('ascii', errors='strict')
            headers[key] = value
        except (UnicodeEncodeError, UnicodeDecodeError):
            logger.debug(f"Skipping non-ASCII header '{key}'")

    # Add auth token (camera streams use query parameter instead)
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
        # Use longer timeout for calendar requests (they can be slow with many events)
        is_calendar_request = "calendars" in path
        timeout_value = None if is_camera_stream else (60.0 if is_calendar_request else 30.0)
        
        async with httpx.AsyncClient(timeout=timeout_value) as client:
            if is_camera_stream:
                # For MJPEG streams, use streaming response
                # Camera streams use token as query parameter (already in request.query_params)
                query_params = dict(request.query_params)
                logger.debug(f"Proxying camera stream request to {target_url} with query params: {list(query_params.keys())}")
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
                    
                    logger.debug(f"Camera stream response status: {stream_response.status_code}")
                    logger.debug(f"Camera stream response headers: {dict(stream_response.headers)}")
                    
                    response_headers = filter_response_headers(stream_response.headers)
                    # Preserve Content-Type for MJPEG streams
                    if "content-type" in stream_response.headers:
                        response_headers["Content-Type"] = stream_response.headers["content-type"]
                    
                    # Stream the response chunks
                    async def generate():
                        chunk_count = 0
                        try:
                            logger.debug("Starting to read camera stream chunks...")
                            # Read response in chunks
                            async for chunk in stream_response.aiter_bytes(chunk_size=8192):
                                if not chunk:
                                    logger.warning("Received empty chunk, continuing...")
                                    continue
                                chunk_count += 1
                                if chunk_count == 1:
                                    logger.debug(f"First camera stream chunk received, size: {len(chunk)} bytes")
                                elif chunk_count % 100 == 0:
                                    logger.debug(f"Camera stream: {chunk_count} chunks received so far")
                                yield chunk
                            
                            if chunk_count == 0:
                                logger.warning("Camera stream ended with no chunks received")
                            else:
                                logger.debug(f"Camera stream ended normally after {chunk_count} chunks")
                        except (httpx.ReadError, httpx.StreamClosed, ConnectionError) as e:
                            # Network errors during streaming are common and expected
                            # (client disconnects, network interruptions, etc.)
                            logger.debug(f"Camera stream interrupted: {type(e).__name__}: {e}")
                            # Generator will exit naturally, no need to re-raise
                        except Exception as e:
                            # Log unexpected errors but don't crash the server
                            logger.warning(f"Unexpected error in camera stream: {type(e).__name__}: {e}")
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
                    params=dict(request.query_params),
                    follow_redirects=True
                )

                logger.debug(f"Response status: {response.status_code} from {target_url}")

                return Response(
                    content=response.content,
                    status_code=response.status_code,
                    headers=filter_response_headers(response.headers)
                )
    except Exception as e:
        handle_proxy_error(e, "Home Assistant API", target_url)


@app.websocket("/api/websocket")
async def client_websocket(websocket: WebSocket):
    """
    WebSocket endpoint for clients to subscribe to entity state updates.
    
    Custom protocol:
    - subscribe_entity: Subscribe to entity updates
    - get_state: Get current state of an entity
    - get_states: Get current state of multiple entities
    - unsubscribe_entity: Unsubscribe from entity updates
    """
    global websocket_manager
    
    if not websocket_manager:
        await websocket.close(code=1011, reason="WebSocket state manager not initialized")
        return
    
    await websocket.accept()
    
    # Track client subscriptions
    client_subscriptions: Dict[str, Callable] = {}
    
    async def send_to_client(message: Dict[str, Any]):
        """Helper to send message to client."""
        try:
            await websocket.send_text(json.dumps(message))
        except Exception as e:
            logger.debug(f"Error sending message to client: {e}")
    
    def create_state_callback():
        """Create a callback function for state updates."""
        async def callback(update: Dict[str, Any]):
            await send_to_client(update)
        return callback
    
    try:
        while True:
            try:
                # Receive message from client
                message = await websocket.receive()
                
                # Extract message text
                message_text = None
                if isinstance(message, dict):
                    message_text = message.get("text")
                elif hasattr(message, "text") and message.text:
                    message_text = message.text
                
                if not message_text:
                    continue
                
                # Parse JSON
                try:
                    data = json.loads(message_text)
                except json.JSONDecodeError:
                    await send_to_client({"type": "error", "message": "Invalid JSON"})
                    continue
                
                if not isinstance(data, dict) or "type" not in data:
                    await send_to_client({"type": "error", "message": "Invalid message format"})
                    continue
                
                msg_type = data.get("type")
                
                # Handle subscribe_entity
                if msg_type == "subscribe_entity":
                    entity_id = data.get("entity_id")
                    if not entity_id or not _is_valid_entity_id(entity_id):
                        await send_to_client({"type": "error", "message": "Missing or invalid entity_id (expected format: domain.object_id)"})
                        continue
                    
                    # Create callback for this client
                    callback = create_state_callback()
                    websocket_manager.subscribe_client(entity_id, callback)
                    client_subscriptions[entity_id] = callback
                    
                    # Send current state if available
                    state = websocket_manager.get_state(entity_id)
                    if state:
                        await send_to_client({
                            "type": "state_response",
                            "entity_id": entity_id,
                            "state": state.get("state"),
                            "attributes": state.get("attributes", {})
                        })
                    else:
                        await send_to_client({
                            "type": "subscribed",
                            "entity_id": entity_id,
                            "message": "Subscribed, waiting for state update"
                        })
                
                # Handle get_state
                elif msg_type == "get_state":
                    entity_id = data.get("entity_id")
                    if not entity_id or not _is_valid_entity_id(entity_id):
                        await send_to_client({"type": "error", "message": "Missing or invalid entity_id (expected format: domain.object_id)"})
                        continue
                    
                    state = websocket_manager.get_state(entity_id)
                    if state:
                        await send_to_client({
                            "type": "state_response",
                            "entity_id": entity_id,
                            "state": state.get("state"),
                            "attributes": state.get("attributes", {})
                        })
                    else:
                        await send_to_client({
                            "type": "error",
                            "message": f"State not available for {entity_id}"
                        })
                
                # Handle get_states
                elif msg_type == "get_states":
                    entity_ids = data.get("entity_ids", [])
                    if not isinstance(entity_ids, list):
                        await send_to_client({"type": "error", "message": "entity_ids must be a list"})
                        continue
                    
                    states = {}
                    for entity_id in entity_ids:
                        if not _is_valid_entity_id(entity_id):
                            continue
                        state = websocket_manager.get_state(entity_id)
                        if state:
                            states[entity_id] = {
                                "state": state.get("state"),
                                "attributes": state.get("attributes", {})
                            }
                    
                    await send_to_client({
                        "type": "states_response",
                        "states": states
                    })
                
                # Handle unsubscribe_entity
                elif msg_type == "unsubscribe_entity":
                    entity_id = data.get("entity_id")
                    if not entity_id or not _is_valid_entity_id(entity_id):
                        await send_to_client({"type": "error", "message": "Missing or invalid entity_id (expected format: domain.object_id)"})
                        continue
                    
                    if entity_id in client_subscriptions:
                        callback = client_subscriptions[entity_id]
                        websocket_manager.unsubscribe_client(entity_id, callback)
                        del client_subscriptions[entity_id]
                        await send_to_client({
                            "type": "unsubscribed",
                            "entity_id": entity_id
                        })
                    else:
                        await send_to_client({
                            "type": "error",
                            "message": f"Not subscribed to {entity_id}"
                        })
                
                else:
                    await send_to_client({"type": "error", "message": f"Unknown message type: {msg_type}"})
            
            except WebSocketDisconnect:
                logger.debug("Client disconnected normally")
                break
            except RuntimeError as e:
                if "disconnect" in str(e).lower():
                    logger.debug("WebSocket disconnect detected")
                    break
                else:
                    logger.error(f"Error handling client message: {e}")
                    break
            except Exception as e:
                logger.error(f"Error in client WebSocket handler: {e}", exc_info=True)
                break
    
    finally:
        # Unsubscribe from all entities
        for entity_id, callback in client_subscriptions.items():
            websocket_manager.unsubscribe_client(entity_id, callback)
        logger.debug("Client WebSocket connection closed, unsubscribed from all entities")


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
    # IMPORTANT: Set no-cache headers to prevent HA cloud/ingress from caching old versions
    index_file = STATIC_DIR / "index.html"
    if index_file.exists():
        response = FileResponse(str(index_file))
        # Prevent caching of index.html - it references the hashed JS files
        # If index.html is cached, users might get old HTML that references old JS files
        response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
        response.headers["Pragma"] = "no-cache"
        response.headers["Expires"] = "0"
        return response
    else:
        raise HTTPException(status_code=404, detail="index.html not found")


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=80)

