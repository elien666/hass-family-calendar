# HASS Family Calendar Add-on

A full-screen dashboard for Home Assistant displaying calendar events, weather forecasts, public transport departures, and smart home device status.

## Features

- **Calendar Integration** - View events from multiple Home Assistant calendars
- **Weather Forecast** - Current conditions and hourly/daily forecasts via Pirate Weather API
- **HVV Departures** - Real-time public transport departures for Hamburg (Geofox API)
- **Garage Door Control** - Monitor and control garage door status
- **Laundry Status** - Track washing machine and dryer states
- **Doorbell Notifications** - Real-time doorbell alerts with CCTV integration
- **Everyday Calendar** - Visual tracking calendar for daily habits
- **Ingress Support** - Accessible through Home Assistant's ingress proxy

## Installation

### Production Release

1. Add this repository to your Home Assistant add-on store:
   ```
   https://github.com/elien666/hass-family-calendar
   ```
2. Install the "Familienkalender" add-on
3. Configure options through the Home Assistant UI (see Configuration below)
4. Start the add-on
5. Access via the sidebar panel icon or through the add-on's ingress URL

### Staging Releases

To test the latest development version with incrementing build numbers (e.g., `next-123`):

**Setting up Staging Repository in Home Assistant:**

Home Assistant add-on repositories typically read from the default branch (main). To use staging releases from the `develop` branch, you have several options:

**Option 1: GitHub Raw URL (Recommended)**
1. In Home Assistant, go to **Settings** → **Add-ons** → **Add-on Store** → **Repositories**
2. Add the repository URL pointing to the `develop` branch's `repository.yaml`:
   ```
   https://raw.githubusercontent.com/elien666/hass-family-calendar/develop/repository.yaml
   ```
   Or use the directory URL (HA will automatically look for `repository.yaml`):
   ```
   https://raw.githubusercontent.com/elien666/hass-family-calendar/develop
   ```
3. Click "Add" and wait for the repository to load
4. The staging add-on will appear with version numbers like `next-<build>` where `<build>` is the incrementing build number

**Option 2: Direct GitHub Branch URL**
Some Home Assistant versions support branch-specific URLs:
```
https://github.com/elien666/hass-family-calendar/tree/develop
```

**Option 3: Local Development Server**
If the above options don't work, you can serve the repository locally:
1. Clone the repository and checkout the `develop` branch
2. Serve the repository using a local web server
3. Add your local server URL to Home Assistant

**Using Staging Releases:**
- Staging releases are automatically built on every push to the `develop` branch
- Version format: `next-{build_number}` (e.g., `next-123`)
- The build number increments automatically with each workflow run
- Install and configure the staging version as you would the production version

**Important**: Staging releases are for testing purposes only. They may contain unstable features and breaking changes. Always test thoroughly before deploying to production.

## Configuration

Configure this add-on through the Home Assistant UI using toggle switches to enable individual features. Each feature has a toggle switch that controls its visibility and activation.

### Home Assistant Connection

**HASS_HOST and HASS_ACCESS_TOKEN are NOT required** when running as a Home Assistant add-on. The add-on automatically:
- Uses relative URLs to connect to the same Home Assistant instance
- Leverages ingress authentication (no token needed)
- Only configure these if you need to connect to a **different** Home Assistant instance

### Feature Toggles

Each feature can be individually enabled or disabled using toggle switches in the configuration UI. When a feature toggle is enabled, its configuration options become visible. When disabled, the feature is completely inactive and its configuration is ignored.

#### External API Integrations

**Weather Forecast** (`enable_weather`)
- Enable weather forecast display with current conditions and hourly/daily forecasts via Pirate Weather API
- When enabled, configure:
  - `weather_api_key` - Pirate Weather API key for fetching weather data
  - `weather_latitude` - Latitude coordinate for weather location
  - `weather_longitude` - Longitude coordinate for weather location
- **Note**: All three weather options must be set for the feature to work.

**HVV Public Transport** (`enable_hvv`)
- Enable HVV public transport departures display for Hamburg using Geofox API
- When enabled, configure:
  - `geofox_user` - Geofox API username for HVV departures
  - `geofox_secret` - Geofox API secret key for HVV departures
- **Note**: Both Geofox options must be set for the feature to work.

**Telegram Notifications** (`enable_telegram`)
- Enable Telegram bot notifications
- When enabled, configure:
  - `telegram_bot_token` - Telegram bot token for sending notifications
  - `telegram_chat_id` - Telegram chat ID for receiving notifications

#### Home Assistant Entity Integrations

**Garage Door** (`enable_garage`)
- Enable garage door monitoring and control
- When enabled, configure:
  - `entity_garage_door` - Entity ID for the garage door cover (e.g., `cover.garagentor`)

**Laundry Status** (`enable_laundry`)
- Enable laundry status tracking for washing machines and dryer
- When enabled, configure one or more of:
  - `entity_washing_machine_new` - Entity ID for the new washing machine status sensor
  - `entity_washing_machine_old` - Entity ID for the old washing machine status sensor
  - `entity_dryer` - Entity ID for the dryer status sensor

**Doorbell** (`enable_doorbell`)
- Enable doorbell notifications with CCTV integration
- When enabled, configure:
  - `entity_doorbell` - Entity ID for the doorbell binary sensor
  - `entity_doorbell_button` - Entity ID for the doorbell unlatch button

**Everyday Calendar** (`enable_everyday_calendar`)
- Enable everyday calendar visual tracking for daily habits
- When enabled, configure:
  - `entity_everyday_calendar` - Entity ID for the everyday calendar sensor

#### Hardware Integration

**Physical Buttons** (`enable_physical_buttons`)
- Enable physical button integration via WebSocket
- When enabled, configure:
  - `buttons_ws_url` - WebSocket URL for physical button integration (e.g., `ws://hostname:5678/`)

## How It Works

### Runtime Configuration Injection

Unlike traditional add-ons that use build-time environment variables, this add-on uses **runtime configuration injection**:

1. The add-on's `run.sh` script reads configuration from Home Assistant's add-on options
2. Feature toggles control which configuration options are included in the generated `config.js`
3. A `config.js` file is generated at startup with `window.APP_CONFIG` containing only enabled features and their configuration
4. The React application reads from `window.APP_CONFIG` first, falling back to build-time env vars for local development
5. Features are automatically disabled if their toggle is off or if their required configuration is missing

### Architecture

- **Base Image**: `homeassistant/*-base` (supports aarch64, amd64, armhf, armv7, i386)
- **Web Server**: Apache HTTP Server 2.4
- **Frontend**: React 19 with Vite, served as static files from `add-on/dist/`
- **Configuration**: Injected at runtime via `config.js` generated by `run.sh`
- **Ingress**: Enabled on port 80, accessible through Home Assistant UI
- **API Access**: `homeassistant_api: true` enables direct Home Assistant API access

## Build & Deployment

### Production Releases

Production releases are triggered by creating a git tag in the format `v<major>.<minor>.<patch>` (e.g., `v2.3.4`):

1. Create and push a tag: `git tag v2.3.4 && git push origin v2.3.4`
2. GitHub Actions will automatically:
   - Extract the version from the tag
   - Update `add-on/config.yaml` with the tag version
   - Build the frontend
   - Update CHANGELOG.md
   - Commit changes to `main` branch
   - Create a GitHub Release with release notes from CHANGELOG

### Staging Releases

Staging releases are automatically built on every push to the `develop` branch:

1. Push changes to `develop` branch
2. GitHub Actions will automatically:
   - Generate version in format `next-{build_number}` (e.g., `next-123`)
   - Update `add-on/config.yaml` with the staging version
   - Build the frontend
   - Update CHANGELOG.md with staging entry
   - Commit changes back to `develop` branch

The build number increments automatically with each workflow run using `github.run_number`.

### Manual Build

To build manually:

1. Run `pnpm run build` in the project root
2. Build output goes to `add-on/dist/`
3. The Dockerfile copies the dist files and serves them via Apache
4. Configuration is injected at container startup via `run.sh`

## Development Notes

### Merry Timeline Fix

The `merry-timeline` dependency (v0.5.0) requires a postinstall fix that is automatically applied via `scripts/fix-merry-timeline.js` during `pnpm install`.

### Local Development

For local development, use the `.env` file approach (see main `README.md`). The add-on configuration system is only active when running as a Home Assistant add-on.

### Quick Development Workflow

When testing changes in your local Home Assistant instance:

1. **Build and deploy**:
   ```bash
   pnpm run dev:deploy
   ```

2. **Watch mode** (automatically rebuilds and deploys on changes):
   ```bash
   pnpm run dev:deploy:watch
   ```

3. **Restart the add-on** from Home Assistant UI or use:
   ```bash
   ./scripts/restart-addon.sh --host http://homeassistant.local:8123 --token YOUR_TOKEN
   ```

See the main `README.md` for detailed development workflow documentation, including VS Code task configuration and environment variable setup.

### Configuration Changes

After changing configuration in the Home Assistant UI:
1. Restart the add-on for changes to take effect
2. The `config.js` file is regenerated on each startup
3. Hard refresh the browser (Ctrl+F5 / Cmd+Shift+R) to clear cached config

## Troubleshooting

### Features Not Showing

- Ensure the feature toggle is enabled in the add-on configuration
- Check that required configuration options are set for the enabled feature
- Verify entity IDs match your Home Assistant entities exactly
- Check browser console for configuration errors
- Restart the add-on after configuration changes

### Cannot Connect to Home Assistant

- When running as an add-on, HASS_HOST and HASS_ACCESS_TOKEN should be **empty/unset**
- The add-on uses relative URLs and ingress authentication automatically
- Only set these if connecting to a different Home Assistant instance

### Weather/HVV Not Loading

- Ensure the feature toggle is enabled (e.g., `enable_weather` or `enable_hvv`)
- Verify API keys are correct and have proper permissions
- Check that all required options for the feature are configured
- Review browser console for API errors

## Version

Current version: **2.0**

See `CHANGELOG.md` for version history and updates.
