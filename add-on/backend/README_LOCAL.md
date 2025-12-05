# Running the Backend Locally

## Prerequisites

1. Python 3.10+ installed
2. Frontend built (run `pnpm build` from project root)
3. Environment variables configured (see [Configuration](#configuration) below)

## Quick Start

### Option 1: Using Virtual Environment (Recommended)

1. **Set up virtual environment and install dependencies:**
   ```bash
   cd add-on/backend
   ./setup_venv.sh
   ```

2. **Run the development server:**
   ```bash
   ./run_local.sh
   ```

   Or manually activate venv and run:
   ```bash
   source venv/bin/activate
   python3 run_local.py
   ```

### Option 2: Manual Setup

1. **Create virtual environment:**
   ```bash
   cd add-on/backend
   python3 -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. **Install dependencies:**
   ```bash
   pip install --upgrade pip
   pip install -r requirements.txt
   ```
   
   This will install `python-dotenv` which automatically loads `.env` files.

3. **Configure environment variables:**
   
   Create a `.env` file in `add-on/backend/` directory:
   ```bash
   cp add-on/backend/env.example add-on/backend/.env
   # Edit add-on/backend/.env with your settings
   ```
   
   Or set environment variables manually:
   ```bash
   export HASS_HOST="http://homeassistant.local:8123"
   export HASS_ACCESS_TOKEN="your-long-lived-access-token"
   ```
   
   **Getting a Long-Lived Access Token:**
   - Go to Home Assistant → Profile (bottom left)
   - Scroll down to "Long-Lived Access Tokens"
   - Click "Create Token"
   - Copy the token and use it as `HASS_ACCESS_TOKEN`

4. **Run the development server:**
   ```bash
   python3 run_local.py
   ```

   Or use uvicorn directly:
   ```bash
   uvicorn main:app --host 0.0.0.0 --port 8000 --reload
   ```

## Configuration

The backend automatically loads environment variables from:
1. `.env` file in `add-on/backend/` directory (recommended)
2. `.env` file in project root
3. System environment variables (takes precedence)

Required variables:
- `HASS_HOST` - Your Home Assistant URL (e.g., `http://homeassistant.local:8123`)
- `HASS_ACCESS_TOKEN` - Long-lived access token from Home Assistant

Optional variables:
- `HASS_WEBSOCKET_URL` - WebSocket URL (auto-derived from HASS_HOST if not set)
- `SUPERVISOR_TOKEN` - Only needed if running in HA add-on mode

See `env.example` for a template.

4. Access the application:
   - Frontend: http://localhost:8000
   - API Config: http://localhost:8000/api/config
   - API Docs: http://localhost:8000/docs

## Local Development Notes

- The backend will try to use `bashio` for configuration, but will gracefully fall back to defaults if not available
- Static files are served from `add-on/dist/` (make sure you've built the frontend)
- For local development, set `HASS_HOST` and `HASS_ACCESS_TOKEN` to connect to your Home Assistant instance
- In Home Assistant add-on mode, use `SUPERVISOR_TOKEN` instead
- The WebSocket proxy will automatically use the correct URL based on your environment

## Testing Proxy Endpoints

### Geofox (/gti)
```bash
curl -X POST http://localhost:8000/gti/public/departureList \
  -H "Content-Type: application/json" \
  -d '{"version": 51, "station": {...}}'
```

### Weather (/forecast)
```bash
curl "http://localhost:8000/forecast/YOUR_API_KEY/53.570,10.091?units=si"
```

### Home Assistant API (/api)
```bash
# The backend automatically adds the Authorization header
curl http://localhost:8000/api/states
```

