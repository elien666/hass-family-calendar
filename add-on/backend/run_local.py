#!/usr/bin/env python3
"""
Local development server for FastAPI backend.
Run this script to start the backend locally for development.
"""
import os
import sys
from pathlib import Path

# Add the backend directory to Python path
backend_dir = Path(__file__).parent
sys.path.insert(0, str(backend_dir))

# Load environment variables from .env file
try:
    from dotenv import load_dotenv
    # Load .env from backend directory or project root
    env_file = backend_dir / ".env"
    if not env_file.exists():
        env_file = backend_dir.parent.parent / ".env"
    if env_file.exists():
        load_dotenv(env_file)
        print(f"Loaded environment variables from {env_file}")
    else:
        print(f"No .env file found. Create {backend_dir / '.env'} or {backend_dir.parent.parent / '.env'}")
        print(f"See {backend_dir / 'env.example'} for an example\n")
except ImportError:
    print("Warning: python-dotenv not installed. Install it with: pip install python-dotenv")
    print("Or set environment variables manually\n")

# Set up environment for local development
# HASS_HOST: Your Home Assistant URL (e.g., "http://homeassistant.local:8123" or "http://localhost:8123")
# HASS_ACCESS_TOKEN: Your Home Assistant long-lived access token
# SUPERVISOR_TOKEN: Only needed if running in Home Assistant add-on mode

hass_host = os.environ.get("HASS_HOST", "")
hass_access_token = os.environ.get("HASS_ACCESS_TOKEN", "")
supervisor_token = os.environ.get("SUPERVISOR_TOKEN", "")

if not hass_host and not supervisor_token:
    print("⚠️  Warning: HASS_HOST or SUPERVISOR_TOKEN not set")
    print("   Set HASS_HOST for local development (e.g., export HASS_HOST='http://homeassistant.local:8123')")
    print("   Set HASS_ACCESS_TOKEN for authentication (e.g., export HASS_ACCESS_TOKEN='your-token')")
    print("   Or set SUPERVISOR_TOKEN if running in HA add-on mode\n")

# Determine static files directory (use dist from project root)
project_root = backend_dir.parent.parent
dist_dir = project_root / "add-on" / "dist"

if __name__ == "__main__":
    import uvicorn
    
    if not dist_dir.exists():
        print(f"Warning: Static files directory not found: {dist_dir}")
        print("Make sure you've built the frontend with 'pnpm build'")
    
    print(f"Starting FastAPI server on http://localhost:8000")
    print(f"Serving static files from: {dist_dir}")
    print(f"HASS_HOST: {hass_host or 'Not set (using supervisor)'}")
    print(f"HASS_ACCESS_TOKEN: {'Set' if hass_access_token else 'Not set'}")
    print(f"SUPERVISOR_TOKEN: {'Set' if supervisor_token else 'Not set'}")
    print("\nPress Ctrl+C to stop the server\n")
    
    # Use import string for reload to work properly
    uvicorn.run(
        "main:app",  # Import string instead of app object
        host="0.0.0.0",
        port=8000,
        reload=True,  # Enable auto-reload for development
        reload_dirs=[str(backend_dir)],  # Watch this directory for changes
        log_level="info"
    )

