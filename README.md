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
