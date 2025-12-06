"""
Frigate authentication service for managing login and cookie state.
"""
import asyncio
import logging
import httpx
from datetime import datetime, timezone
from typing import Optional, Dict, Any

logger = logging.getLogger(__name__)


class FrigateAuth:
    """Manages Frigate authentication and cookie state."""
    
    def __init__(self, host: str, user: str, password: str):
        """Initialize Frigate authentication.
        
        Args:
            host: Frigate host URL (e.g., "http://frigate.local:5000")
            user: Frigate username
            password: Frigate password
        """
        self.host = host.rstrip("/")
        self.user = user
        self.password = password
        self._cookie: Optional[str] = None
        self._cookie_name: Optional[str] = None
        self._cookie_expires: Optional[datetime] = None
        self._lock = asyncio.Lock()
        self._refresh_task: Optional[asyncio.Task] = None
    
    async def login(self) -> Dict[str, Any]:
        """Perform login to Frigate and return cookie information.
        
        Returns:
            Dictionary with cookie information:
            - name: Cookie name
            - value: Cookie value
            - domain: Cookie domain
            - path: Cookie path
            - expires: Expiration timestamp (ISO format)
            - httpOnly: Whether cookie is httpOnly
            - secure: Whether cookie is secure
        """
        async with self._lock:
            try:
                login_url = f"{self.host}/api/login"
                
                async with httpx.AsyncClient(timeout=30.0, follow_redirects=True) as client:
                    response = await client.post(
                        login_url,
                        json={"user": self.user, "password": self.password}
                    )
                    
                    if response.status_code != 200:
                        logger.error(f"Frigate login failed with status {response.status_code}: {response.text}")
                        raise Exception(f"Frigate login failed: {response.status_code}")
                    
                    # Extract cookie from Set-Cookie header
                    cookie_info = self._parse_cookie_from_response(response)
                    
                    if not cookie_info:
                        logger.error("No authentication cookie found in Frigate login response")
                        raise Exception("No authentication cookie found in login response")
                    
                    # Store cookie information
                    self._cookie = cookie_info["value"]
                    self._cookie_name = cookie_info["name"]
                    self._cookie_expires = cookie_info.get("expires_datetime")
                    
                    logger.info(f"Frigate login successful, cookie expires: {self._cookie_expires}")
                    
                    # Schedule proactive refresh if expiration is known
                    if self._cookie_expires:
                        self._schedule_refresh()
                    
                    # Convert expires_datetime to ISO format string for frontend
                    if cookie_info.get("expires_datetime"):
                        cookie_info["expires_datetime"] = cookie_info["expires_datetime"].isoformat()
                    
                    return cookie_info
                    
            except httpx.TimeoutException:
                logger.error(f"Timeout connecting to Frigate: {login_url}")
                raise Exception("Timeout connecting to Frigate")
            except Exception as e:
                logger.error(f"Error during Frigate login: {e}")
                raise
    
    async def refresh(self) -> Dict[str, Any]:
        """Refresh the authentication cookie.
        
        Returns:
            Dictionary with updated cookie information.
        """
        logger.info("Refreshing Frigate authentication cookie")
        return await self.login()
    
    async def get_cookie(self) -> Optional[str]:
        """Get the current authentication cookie.
        
        Returns:
            Cookie string (name=value) or None if not authenticated.
        """
        async with self._lock:
            # Check if cookie is expired or about to expire (within 5 minutes)
            if self._cookie_expires:
                now = datetime.now(timezone.utc)
                # Refresh if expired or expires within 5 minutes
                if self._cookie_expires <= now or (self._cookie_expires - now).total_seconds() < 300:
                    logger.info("Cookie expired or expiring soon, refreshing...")
                    try:
                        await self.refresh()
                    except Exception as e:
                        logger.error(f"Failed to refresh cookie: {e}")
                        # Return existing cookie even if refresh failed
                        if self._cookie_name and self._cookie:
                            return f"{self._cookie_name}={self._cookie}"
                        return None
            
            if self._cookie_name and self._cookie:
                return f"{self._cookie_name}={self._cookie}"
            return None
    
    def _parse_cookie_from_response(self, response: httpx.Response) -> Optional[Dict[str, Any]]:
        """Parse cookie from HTTP response headers.
        
        Args:
            response: HTTP response object
            
        Returns:
            Dictionary with cookie information or None if not found.
        """
        set_cookie_header = response.headers.get("Set-Cookie")
        if not set_cookie_header:
            return None
        
        # Parse Set-Cookie header
        # Format: name=value; Path=/; Expires=Wed, 21 Oct 2015 07:28:00 GMT; HttpOnly; Secure
        cookie_parts = set_cookie_header.split(";")
        
        # Extract name=value
        name_value = cookie_parts[0].strip()
        if "=" not in name_value:
            return None
        
        name, value = name_value.split("=", 1)
        name = name.strip()
        value = value.strip()
        
        cookie_info: Dict[str, Any] = {
            "name": name,
            "value": value,
            "domain": None,
            "path": "/",
            "expires": None,
            "expires_datetime": None,
            "httpOnly": False,
            "secure": False
        }
        
        # Parse attributes
        for part in cookie_parts[1:]:
            part = part.strip()
            if not part:
                continue
            
            if part.lower() == "httponly":
                cookie_info["httpOnly"] = True
            elif part.lower() == "secure":
                cookie_info["secure"] = True
            elif part.lower().startswith("path="):
                cookie_info["path"] = part.split("=", 1)[1].strip()
            elif part.lower().startswith("domain="):
                cookie_info["domain"] = part.split("=", 1)[1].strip()
            elif part.lower().startswith("expires="):
                expires_str = part.split("=", 1)[1].strip()
                cookie_info["expires"] = expires_str
                # Parse expires date
                try:
                    # Try parsing RFC 1123 format: Wed, 21 Oct 2015 07:28:00 GMT
                    expires_dt = datetime.strptime(expires_str, "%a, %d %b %Y %H:%M:%S %Z")
                    # Assume UTC if timezone not specified
                    if expires_dt.tzinfo is None:
                        expires_dt = expires_dt.replace(tzinfo=timezone.utc)
                    cookie_info["expires_datetime"] = expires_dt
                except ValueError:
                    # Try other formats if needed
                    try:
                        # Try ISO format
                        expires_dt = datetime.fromisoformat(expires_str.replace("Z", "+00:00"))
                        cookie_info["expires_datetime"] = expires_dt
                    except ValueError:
                        logger.warning(f"Could not parse cookie expires date: {expires_str}")
        
        return cookie_info
    
    def _schedule_refresh(self):
        """Schedule proactive cookie refresh before expiration."""
        if not self._cookie_expires:
            return
        
        # Cancel existing refresh task if any
        if self._refresh_task and not self._refresh_task.done():
            self._refresh_task.cancel()
        
        # Calculate refresh time (5 minutes before expiration)
        now = datetime.now(timezone.utc)
        refresh_time = self._cookie_expires - now
        
        # If already expired or expires very soon, refresh immediately
        if refresh_time.total_seconds() <= 300:
            asyncio.create_task(self.refresh())
            return
        
        # Schedule refresh 5 minutes before expiration
        refresh_delay = refresh_time.total_seconds() - 300
        
        async def refresh_wrapper():
            try:
                await asyncio.sleep(refresh_delay)
                await self.refresh()
            except asyncio.CancelledError:
                pass
            except Exception as e:
                logger.error(f"Error in scheduled cookie refresh: {e}")
        
        self._refresh_task = asyncio.create_task(refresh_wrapper())
        logger.info(f"Scheduled cookie refresh in {refresh_delay:.0f} seconds")


# Global instance (will be initialized when needed)
_frigate_auth: Optional[FrigateAuth] = None


def get_frigate_auth(host: str, user: str, password: str) -> FrigateAuth:
    """Get or create FrigateAuth instance.
    
    Args:
        host: Frigate host URL
        user: Frigate username
        password: Frigate password
        
    Returns:
        FrigateAuth instance
    """
    global _frigate_auth
    
    if _frigate_auth is None:
        _frigate_auth = FrigateAuth(host, user, password)
    elif (_frigate_auth.host != host or 
          _frigate_auth.user != user or 
          _frigate_auth.password != password):
        # Recreate if credentials changed
        _frigate_auth = FrigateAuth(host, user, password)
    
    return _frigate_auth

