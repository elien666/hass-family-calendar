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
from .websocket_manager import WebSocketStateManager, HACommandError

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


def _configured_camera_entities() -> set:
    """Camera entity IDs the frontend may open WebRTC streams for.

    The client WebSocket is only protected by ingress, so WebRTC signaling is
    restricted to the cameras configured for the doorbell overlay.
    """
    config = get_config()
    if not config.get("ENABLE_DOORBELL"):
        return set()
    cameras = config.get("DOORBELL_CAMERAS") or []
    return {
        cam.get("entity_id")
        for cam in cameras
        if isinstance(cam, dict) and isinstance(cam.get("entity_id"), str) and cam["entity_id"].startswith("camera.")
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

# Ingress IP restriction - only allow requests from HA Supervisor proxy in production
# The Supervisor proxy always connects from 172.30.32.2
SUPERVISOR_PROXY_IP = "172.30.32.2"


@app.middleware("http")
async def restrict_ingress_ip(request: Request, call_next):
    # Only enforce in HA mode (when SUPERVISOR_TOKEN is set)
    if os.environ.get("SUPERVISOR_TOKEN"):
        client_ip = request.client.host if request.client else None
        # Allow health checks from any IP (Supervisor watchdog may use different IP)
        if request.url.path != "/health" and client_ip != SUPERVISOR_PROXY_IP:
            logger.warning(f"Rejected request from {client_ip} to {request.url.path} (only {SUPERVISOR_PROXY_IP} allowed)")
            return JSONResponse(status_code=403, content={"detail": "Direct access not allowed. Use Home Assistant ingress."})
    return await call_next(request)


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


def _get_auth_token():
    """Get authentication token, preferring SUPERVISOR_TOKEN over HASS_ACCESS_TOKEN."""
    auth_token = os.environ.get("SUPERVISOR_TOKEN") or os.environ.get("HASS_ACCESS_TOKEN")
    if not auth_token:
        raise HTTPException(
            status_code=500,
            detail="SUPERVISOR_TOKEN or HASS_ACCESS_TOKEN must be configured"
        )
    return auth_token


def _build_proxy_headers(request: Request, *, include_auth: bool = True, set_supervisor_host: bool = True):
    """Build proxy headers from incoming request, optionally injecting auth."""
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

    if include_auth:
        headers["Authorization"] = f"Bearer {_get_auth_token()}"

    if set_supervisor_host:
        config = get_config()
        hass_api_url = config.get("HASS_API_URL", "http://supervisor/core/api")
        if "supervisor" in hass_api_url:
            headers["Host"] = "supervisor"

    return headers


@app.api_route("/api/camera_proxy_stream/{path:path}", methods=["GET"])
async def proxy_camera_stream(path: str, request: Request):
    """Proxy MJPEG camera stream requests to Home Assistant.

    Authenticates with the backend token, so the frontend needs no camera
    access_token (which HA rotates every 5 minutes). Like the WebRTC relay it
    is restricted to the configured doorbell cameras.
    """
    entity_id = path.split("/", 1)[0]
    if entity_id not in _configured_camera_entities():
        raise HTTPException(status_code=403, detail=f"{entity_id} is not a configured doorbell camera")

    config = get_config()

    hass_host = config.get("HASS_HOST", "")
    if not hass_host:
        hass_api_url = config.get("HASS_API_URL", "http://supervisor/core/api")
        if hass_api_url.endswith("/api"):
            hass_host = hass_api_url[:-4]
        else:
            hass_host = hass_api_url.replace("/core/api", "").rstrip("/")

    target_url = f"{hass_host.rstrip('/')}/api/camera_proxy_stream/{path}"
    headers = _build_proxy_headers(request, include_auth=True, set_supervisor_host=True)
    query_params = dict(request.query_params)

    logger.debug(f"Proxying camera stream to {target_url} with query params: {list(query_params.keys())}")

    try:
        async with httpx.AsyncClient(timeout=None) as client:
            stream_context = client.stream(
                method="GET",
                url=target_url,
                headers=headers,
                params=query_params
            )
            stream_response = await stream_context.__aenter__()

            logger.debug(f"Camera stream response status: {stream_response.status_code}")

            response_headers = filter_response_headers(stream_response.headers)
            if "content-type" in stream_response.headers:
                response_headers["Content-Type"] = stream_response.headers["content-type"]

            async def generate():
                chunk_count = 0
                try:
                    async for chunk in stream_response.aiter_bytes(chunk_size=8192):
                        if not chunk:
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
                    logger.debug(f"Camera stream interrupted: {type(e).__name__}: {e}")
                except Exception as e:
                    logger.warning(f"Unexpected error in camera stream: {type(e).__name__}: {e}")
                finally:
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
        logger.debug("Camera stream closed before reading")
        raise HTTPException(status_code=499, detail="Client closed connection")
    except Exception as e:
        handle_proxy_error(e, "camera stream", target_url)


@app.api_route("/api/{path:path}", methods=["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"])
async def proxy_api(path: str, request: Request):
    """Proxy Home Assistant REST API requests with auth token injection."""
    config = get_config()
    hass_api_url = config.get("HASS_API_URL", "http://supervisor/core/api")
    target_url = f"{hass_api_url.rstrip('/')}/{path}"

    logger.debug(f"Proxying {request.method} request to: {target_url}")

    _get_auth_token()  # Validate early

    body = None
    if request.method in ("POST", "PUT", "PATCH"):
        try:
            body = await request.body()
        except Exception:
            pass

    headers = _build_proxy_headers(request)

    try:
        is_calendar_request = "calendars" in path
        timeout_value = 60.0 if is_calendar_request else 30.0

        async with httpx.AsyncClient(timeout=timeout_value) as client:
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

    WebRTC signaling relay (camera/webrtc/* HA commands, restricted to the
    configured doorbell cameras; every message carries a client-chosen request_id):
    - webrtc_client_config {entity_id, request_id}
        -> webrtc_client_config {request_id, entity_id, configuration, get_candidates_upfront}
    - webrtc_offer {entity_id, request_id, offer}
        -> webrtc_event {request_id, entity_id, event: {type: session|answer|candidate|error, ...}}
    - webrtc_candidate {entity_id, request_id, session_id, candidate}
    - webrtc_close {request_id}
    - errors: webrtc_error {request_id, code, message}
    """
    global websocket_manager
    
    if not websocket_manager:
        await websocket.close(code=1011, reason="WebSocket state manager not initialized")
        return
    
    await websocket.accept()
    
    # Track client subscriptions
    client_subscriptions: Dict[str, Callable] = {}

    # WebRTC relay state: {request_id: HA message id of the camera/webrtc/offer subscription}
    webrtc_sessions: Dict[str, int] = {}
    # Signaling commands run as tasks so a slow offer doesn't stall the receive loop
    webrtc_tasks: set = set()
    send_lock = asyncio.Lock()

    async def send_to_client(message: Dict[str, Any]):
        """Helper to send message to client (serialized — tasks may send concurrently)."""
        try:
            async with send_lock:
                await websocket.send_text(json.dumps(message))
        except Exception as e:
            logger.debug(f"Error sending message to client: {e}")

    async def send_webrtc_error(request_id, code: str, message: str):
        await send_to_client({"type": "webrtc_error", "request_id": request_id, "code": code, "message": message})

    def spawn_webrtc_task(coro):
        task = asyncio.create_task(coro)
        webrtc_tasks.add(task)
        task.add_done_callback(webrtc_tasks.discard)

    async def handle_webrtc_client_config(entity_id: str, request_id):
        try:
            _, result = await websocket_manager.send_command(
                {"type": "camera/webrtc/get_client_config", "entity_id": entity_id}
            )
        except HACommandError as e:
            await send_webrtc_error(request_id, e.code, e.message)
            return
        result = result if isinstance(result, dict) else {}
        await send_to_client({
            "type": "webrtc_client_config",
            "request_id": request_id,
            "entity_id": entity_id,
            "configuration": result.get("configuration") or {},
            "get_candidates_upfront": bool(result.get("getCandidatesUpfront", False)),
        })

    async def handle_webrtc_offer(entity_id: str, request_id, offer: str):
        async def on_event(event: Dict[str, Any]):
            await send_to_client({
                "type": "webrtc_event",
                "request_id": request_id,
                "entity_id": entity_id,
                "event": event,
            })

        try:
            msg_id, _ = await websocket_manager.send_command(
                {"type": "camera/webrtc/offer", "entity_id": entity_id, "offer": offer},
                event_handler=on_event,
            )
        except HACommandError as e:
            logger.warning(f"WebRTC offer for {entity_id} rejected by HA: {e.code}: {e.message}")
            await send_webrtc_error(request_id, e.code, e.message)
            return

        previous = webrtc_sessions.get(request_id)
        webrtc_sessions[request_id] = msg_id
        logger.debug(f"WebRTC offer accepted for {entity_id} (request_id={request_id}, ha_id={msg_id})")
        if previous is not None and previous != msg_id:
            await websocket_manager.unsubscribe(previous)

    async def handle_webrtc_candidate(entity_id: str, request_id, session_id: str, candidate: Dict[str, Any]):
        try:
            await websocket_manager.send_command({
                "type": "camera/webrtc/candidate",
                "entity_id": entity_id,
                "session_id": session_id,
                "candidate": candidate,
            })
        except HACommandError as e:
            # Some providers (e.g. Frigate's own WebRTC class) ignore candidates —
            # a rejected candidate is not fatal for the stream, so only inform the client.
            logger.debug(f"WebRTC candidate for {entity_id} rejected: {e.code}: {e.message}")
            await send_webrtc_error(request_id, e.code, e.message)

    async def close_webrtc_session(request_id):
        msg_id = webrtc_sessions.pop(request_id, None)
        if msg_id is not None:
            await websocket_manager.unsubscribe(msg_id)
    
    def create_state_callback():
        """Create a callback function for state updates."""
        async def callback(update: Dict[str, Any]):
            await send_to_client(update)
        return callback
    
    try:
        while True:
            try:
                # Receive message from client with timeout.
                # If no message arrives within 90s, send a server-initiated ping
                # to detect dead connections (half-open TCP).
                try:
                    message = await asyncio.wait_for(websocket.receive(), timeout=90.0)
                except asyncio.TimeoutError:
                    # Client hasn't sent anything for 90s — probe with a ping
                    try:
                        await websocket.send_text(json.dumps({"type": "ping"}))
                        probe = await asyncio.wait_for(websocket.receive(), timeout=10.0)
                        # Client responded, extract and process the response
                        probe_text = probe.get("text") if isinstance(probe, dict) else None
                        if probe_text:
                            try:
                                probe_data = json.loads(probe_text)
                                if probe_data.get("type") == "pong":
                                    continue  # Client is alive, resume loop
                            except json.JSONDecodeError:
                                pass
                        # Got a response but not a pong — treat as a regular message
                        message = probe
                    except (asyncio.TimeoutError, WebSocketDisconnect, RuntimeError):
                        logger.debug("Client unresponsive after server ping, closing connection")
                        break

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

                # ---- WebRTC signaling relay ----
                elif msg_type in ("webrtc_client_config", "webrtc_offer", "webrtc_candidate"):
                    request_id = data.get("request_id")
                    entity_id = data.get("entity_id")
                    if request_id is None or not isinstance(request_id, (str, int)):
                        await send_to_client({"type": "error", "message": "Missing or invalid request_id"})
                        continue
                    if not entity_id or not _is_valid_entity_id(entity_id):
                        await send_webrtc_error(request_id, "invalid_entity", "Missing or invalid entity_id")
                        continue
                    if entity_id not in _configured_camera_entities():
                        await send_webrtc_error(request_id, "not_allowed", f"{entity_id} is not a configured doorbell camera")
                        continue

                    if msg_type == "webrtc_client_config":
                        spawn_webrtc_task(handle_webrtc_client_config(entity_id, request_id))

                    elif msg_type == "webrtc_offer":
                        offer = data.get("offer")
                        if not isinstance(offer, str) or not offer.strip():
                            await send_webrtc_error(request_id, "invalid_offer", "offer must be a non-empty SDP string")
                            continue
                        spawn_webrtc_task(handle_webrtc_offer(entity_id, request_id, offer))

                    else:  # webrtc_candidate
                        session_id = data.get("session_id")
                        candidate = data.get("candidate")
                        if not isinstance(session_id, str) or not session_id:
                            await send_webrtc_error(request_id, "invalid_session", "session_id must be a non-empty string")
                            continue
                        if not isinstance(candidate, dict) or not isinstance(candidate.get("candidate"), str):
                            await send_webrtc_error(request_id, "invalid_candidate", "candidate must be an RTCIceCandidateInit object")
                            continue
                        spawn_webrtc_task(handle_webrtc_candidate(entity_id, request_id, session_id, candidate))

                elif msg_type == "webrtc_close":
                    request_id = data.get("request_id")
                    if request_id is None:
                        await send_to_client({"type": "error", "message": "Missing request_id"})
                        continue
                    spawn_webrtc_task(close_webrtc_session(request_id))

                # Handle application-level ping (frontend heartbeat)
                elif msg_type == "ping":
                    await send_to_client({"type": "pong"})

                # Handle pong (response to server-initiated ping)
                elif msg_type == "pong":
                    pass  # Client is alive, nothing to do

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

        # Tear down WebRTC sessions so HA/go2rtc stop streaming for this client
        for task in list(webrtc_tasks):
            task.cancel()
        for request_id in list(webrtc_sessions.keys()):
            try:
                await close_webrtc_session(request_id)
            except Exception as e:
                logger.debug(f"Error closing WebRTC session {request_id}: {e}")
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

