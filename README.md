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

## Environment Variables

All sensitive configuration has been moved to environment variables. Create a `.env` file in the root directory based on `.env.example`.

### Required Variables

#### Home Assistant Configuration
- `VITE_HASS_HOST` - Your Home Assistant instance URL (e.g., `https://your-instance.ui.nabu.casa`)
- `VITE_HASS_ACCESS_TOKEN` - Long-lived access token from Home Assistant

#### Weather API
- `VITE_WEATHER_API_KEY` - Pirate Weather API key
- `VITE_WEATHER_LATITUDE` - Latitude for weather location (default: 53.570)
- `VITE_WEATHER_LONGITUDE` - Longitude for weather location (default: 10.091)

#### Geofox API (HVV Departures)
- `VITE_GEOFOX_SECRET` - Geofox API secret key
- `VITE_GEOFOX_USER` - Geofox API username

### Optional Variables

#### Telegram Bot (for debugging)
- `VITE_TELEGRAM_BOT_TOKEN` - Telegram bot token (optional)
- `VITE_TELEGRAM_CHAT_ID` - Telegram chat ID for notifications (optional)

#### Physical Buttons
- `VITE_BUTTONS_WS_URL` - WebSocket URL for physical button integration (optional, default: `ws://:5678/`)

### Home Assistant Entity IDs

Configure these to match your Home Assistant entity names:

- `VITE_ENTITY_GARAGE_DOOR` - Garage door entity (default: `cover.garagentor`)
- `VITE_ENTITY_WASHING_MACHINE_NEW` - New washing machine status (default: `input_select.wasching_machine_neu_status`)
- `VITE_ENTITY_WASHING_MACHINE_OLD` - Old washing machine status (default: `input_select.washing_machine_alt_status`)
- `VITE_ENTITY_DRYER` - Dryer status (default: `input_select.dryer_status`)
- `VITE_ENTITY_DOORBELL` - Doorbell sensor (default: `binary_sensor.tuerklingel_person`)
- `VITE_ENTITY_DOORBELL_BUTTON` - Doorbell unlatch button (default: `button.haustur_unlatch_2`)
- `VITE_ENTITY_EVERYDAY_CALENDAR` - Everyday calendar sensor (default: `sensor.everyday_calendar`)

### Getting Your Home Assistant Token

1. Go to your Home Assistant profile
2. Scroll down to "Long-Lived Access Tokens"
3. Create a new token
4. Copy the token to `VITE_HASS_ACCESS_TOKEN` in your `.env` file

## Deployment

### Home Assistant Add-on

This project is designed to be deployed as a Home Assistant add-on. The build output goes to `add-on/dist` which is served by Apache.

See `add-on/README.md` for add-on specific documentation.

### Build Notes

- The build uses Vite for fast development and optimized production builds
- All environment variables must be prefixed with `VITE_` to be accessible in the browser
- The `merry-timeline` package requires a postinstall fix (automated via `scripts/fix-merry-timeline.js`)

## Development Notes

- The project uses React 19 with modern hooks
- Error boundaries are implemented for better error handling
- Logger utility is used instead of console.log (disabled in production)
- All API credentials are now environment-based for security
