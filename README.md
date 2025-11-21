# HASS Family Calendar

A magic mirror dashboard for Home Assistant which can be used without a mirror:

- Calendar integration with multiple Home Assistant calendars
- Weather forecast (Pirate Weather API)
- Garage Door status and control
- Washing machine status
- HVV (Hamburg public transport) departures
- Doorbell notifications with CCTV integration
- Everyday calendar tracking

## Tech Stack

- **React 19** with Vite
- **Styled Components** for styling
- **Luxon** for date/time handling
- **Home Assistant JS WebSocket** for real-time updates
- **Axios** for API requests

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (or npm/yarn)
- Home Assistant instance with API access
- Weather API key (Pirate Weather)
- Geofox API credentials (for HVV departures)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

4. Configure your environment variables in `.env` (see [Environment Variables](#environment-variables) below)

5. Start the development server:
   ```bash
   pnpm start
   ```

6. Build for production:
   ```bash
   pnpm run build
   ```

## Available Scripts

- `pnpm start` - Start development server (Vite dev server on http://localhost:5173)
- `pnpm run build` - Build for production (outputs to `add-on/dist`)
- `pnpm run serve` - Preview production build
- `pnpm run dev:deploy` - Build and deploy to Home Assistant add-on directory
- `pnpm run dev:deploy:watch` - Watch for changes and automatically rebuild and deploy
- `pnpm run dev:deploy:restart` - Build, deploy, and restart the add-on

## Configuration

### Local Development

For local development, create a `.env` file in the root directory based on `.env.example` with the following variables:

#### Required for Local Development

- `VITE_HASS_HOST` - Your Home Assistant instance URL (e.g., `https://your-instance.ui.nabu.casa`)
- `VITE_HASS_ACCESS_TOKEN` - Long-lived access token from Home Assistant

#### Optional Features (disable if not set)

- `VITE_WEATHER_API_KEY` - Pirate Weather API key (disables weather feature if not set)
- `VITE_WEATHER_LATITUDE` - Latitude for weather location
- `VITE_WEATHER_LONGITUDE` - Longitude for weather location
- `VITE_GEOFOX_SECRET` - Geofox API secret key (disables HVV departures if not set)
- `VITE_GEOFOX_USER` - Geofox API username
- `VITE_TELEGRAM_BOT_TOKEN` - Telegram bot token (optional)
- `VITE_TELEGRAM_CHAT_ID` - Telegram chat ID for notifications (optional)
- `VITE_BUTTONS_WS_URL` - WebSocket URL for physical button integration (optional)
- `VITE_ENTITY_GARAGE_DOOR` - Garage door entity ID (disables garage feature if not set)
- `VITE_ENTITY_WASHING_MACHINE_NEW` - New washing machine status entity
- `VITE_ENTITY_WASHING_MACHINE_OLD` - Old washing machine status entity
- `VITE_ENTITY_DRYER` - Dryer status entity
- `VITE_ENTITY_DOORBELL` - Doorbell sensor entity
- `VITE_ENTITY_DOORBELL_BUTTON` - Doorbell unlatch button entity
- `VITE_ENTITY_EVERYDAY_CALENDAR` - Everyday calendar sensor entity

### Home Assistant Add-on Configuration

When running as a Home Assistant add-on, configuration is managed through the Home Assistant UI:

1. **HASS_HOST and HASS_ACCESS_TOKEN**: Not required when running in HA. The add-on automatically uses relative URLs and ingress authentication.
2. **All other properties**: Optional. If not configured, the respective feature will be disabled.
   - Weather feature requires `weather_api_key`, `weather_latitude`, `weather_longitude`
   - HVV departures require `geofox_user` and `geofox_secret`
   - Entity-based features require their respective entity IDs

See `add-on/README.md` for detailed add-on configuration instructions.

### Getting Your Home Assistant Token (for local development)

1. Go to your Home Assistant profile
2. Scroll down to "Long-Lived Access Tokens"
3. Create a new token
4. Copy the token to `VITE_HASS_ACCESS_TOKEN` in your `.env` file

## Development Workflow for Home Assistant Add-on

When developing with a local Home Assistant instance, you can quickly test and deploy changes using the development deployment scripts.

### Quick Start

1. **Configure deployment settings** (create local config file):
   ```bash
   # Copy the example config file
   cp .deploy-config.local.example .deploy-config.local
   
   # Edit .deploy-config.local with your settings
   # For SSH/rsync deployment (recommended, no mounting needed):
   # - Set HA_SSH_HOST, HA_SSH_USER, HA_SSH_PATH
   # - Set HA_HOST and HA_TOKEN for auto-restart
   ```

2. **Build and deploy**:
   ```bash
   pnpm run dev:deploy
   ```

3. **Watch mode for continuous development**:
   ```bash
   pnpm run dev:deploy:watch
   ```
   This will automatically rebuild and deploy whenever you save changes to files in `src/`.

**Note**: The `.deploy-config.local` file is gitignored and contains your personal deployment settings.

### Deployment Options

The script supports two deployment methods:

1. **SSH/rsync deployment** (recommended) - Direct deployment via SSH without mounting
2. **Local mount deployment** - Deploy to a locally mounted directory

The script automatically detects which method to use based on your `.deploy-config.local` configuration.

#### Configuration File

Create `.deploy-config.local` from the example:
```bash
cp .deploy-config.local.example .deploy-config.local
```

**For SSH/rsync deployment** (no mounting required):
```bash
HA_SSH_HOST="homeassistant.local"
HA_SSH_USER="root"
HA_SSH_PATH="/usr/share/hassio/addons/git_*/family_calendar"
HA_SSH_KEY=""  # Optional: path to SSH key
HA_HOST="http://homeassistant.local:8123"
HA_TOKEN="your_long_lived_access_token"
```

**For local mount deployment**:
```bash
HA_ADDON_DIR="/Volumes/addons/family_calendar"
HA_HOST="http://homeassistant.local:8123"
HA_TOKEN="your_long_lived_access_token"
```

#### Using the Script Directly

The `scripts/dev-deploy.sh` script provides flexible deployment options:

```bash
# Basic deploy (uses .deploy-config.local)
./scripts/dev-deploy.sh

# Watch mode for automatic rebuild on changes
./scripts/dev-deploy.sh --watch

# Deploy and restart add-on automatically
./scripts/dev-deploy.sh --restart

# Override SSH settings via command line
./scripts/dev-deploy.sh --ssh-host homeassistant.local --ssh-path /usr/share/hassio/addons/git_123/family_calendar

# Skip build and only deploy existing dist files
./scripts/dev-deploy.sh --skip-build
```

#### Using VS Code Tasks

If you have the VS Code extension enabled in your local HA instance, you can use the pre-configured tasks:

1. **Open Command Palette** (Cmd+Shift+P / Ctrl+Shift+P)
2. **Run Task** and select one of:
   - `build` - Build the project
   - `deploy` - Deploy existing build (skips build step)
   - `build-and-deploy` - Build and deploy in one step
   - `watch-and-deploy` - Watch for changes and auto-deploy
   - `deploy-and-restart` - Build, deploy, and restart add-on

Configure environment variables in VS Code settings or use the `.vscode/settings.json` file.

#### Using VS Code Deploy Extension

The project includes configuration for the VS Code Deploy extension (`.vscode/settings.json`):

1. Install the "Deploy" extension in VS Code
2. The add-on directory is mapped from `add-on/` to your target directory
3. Use the extension's deploy command to sync files
4. Run `pnpm run build` first to build the frontend

### Restarting the Add-on

After deploying changes, you need to restart the add-on to see them:

**Option 1: Automatic restart via API** (requires HA_HOST and HA_TOKEN):
```bash
./scripts/dev-deploy.sh --restart
# or
./scripts/restart-addon.sh --host http://homeassistant.local:8123 --token YOUR_TOKEN
```

**Option 2: Manual restart**:
1. Open Home Assistant UI
2. Go to **Settings** → **Add-ons** → **Familienkalender**
3. Click **Restart**

**Note**: After restarting, hard refresh your browser (Ctrl+F5 / Cmd+Shift+R) to clear cached files.

### Troubleshooting

**Configuration not loading**:
- Ensure `.deploy-config.local` exists (copy from `.deploy-config.local.example`)
- Check that variable names match exactly (case-sensitive)
- Verify no syntax errors in the config file

**SSH/rsync deployment failing**:
- Test SSH connectivity: `ssh root@homeassistant.local`
- Verify the remote path is correct (SSH in and check the add-on directory location)
- Ensure rsync is installed on both local and remote systems
- Check SSH key authentication if using keys
- Try with `--ssh-host` and `--ssh-path` flags to override config

**Target directory not found** (local mount mode):
- Ensure the add-on directory is mounted to the specified path
- Set `HA_ADDON_DIR` environment variable or in `.deploy-config.local`
- Check that the VS Code deploy extension is configured correctly

**Changes not appearing**:
- Restart the add-on after deploying
- Hard refresh your browser to clear cache
- Check browser console for errors
- Verify files were copied to the target `dist/` directory

**Watch mode not working**:
- Install chokidar-cli: `pnpm add -D chokidar-cli`
- The script will fall back to simple file polling if chokidar is not available

**Restart via API failing**:
- Verify `HA_HOST` and `HA_TOKEN` are correct
- Ensure you're using a long-lived access token from Home Assistant
- Check that the add-on slug matches (`family_calendar`)
- Fall back to manual restart from Home Assistant UI

## Deployment

### Home Assistant Add-on

This project is designed to be deployed as a Home Assistant add-on. The build output goes to `add-on/dist` which is served by Apache.

**Configuration**: When running as a HA add-on, configure options through the Home Assistant UI. HASS_HOST and HASS_ACCESS_TOKEN are automatically handled by the add-on (not required). All other options are optional - unset options will disable their respective features.

See `add-on/README.md` for detailed add-on configuration instructions.

### Build Notes

- The build uses Vite for fast development and optimized production builds
- For local development, environment variables must be prefixed with `VITE_` to be accessible in the browser
- For HA add-on deployment, configuration is injected at runtime via `config.js`
- The `merry-timeline` package requires a postinstall fix (automated via `scripts/fix-merry-timeline.js`)

## Development Notes

- The project uses React 19 with modern hooks
- Error boundaries are implemented for better error handling
- Logger utility is used instead of console.log (disabled in production)
- All API credentials are now environment-based for security
