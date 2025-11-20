**2.1 - 2025-11-20**

fix: update pnpm version to 10 in CI to support lockfile v9
**2.0 - 2025-11-20**

__New__
- Environment variable configuration system
  - All credentials and configuration moved to `.env` file
  - Created `.env.example` template with all 17 required variables
  - Improved security by removing hardcoded credentials
- Error boundaries for better error handling and recovery
- Custom logger utility (replaces console.log, disabled in production)
- Automated fix for merry-timeline package (postinstall script)
- Garage door opening/closing states
  - Added 'opening' and 'closing' states with appropriate icons
  - Motion detection now includes opening/closing states
  - Toast notifications for all motion states

__Updates__
- Major dependency updates
  - React 19.1.0 → 19.2.0
  - Axios 1.9.0 → 1.13.2 (security patches)
  - Vite 6.3.5 → 7.2.4
  - @vitejs/plugin-react 4.4.1 → 5.1.1
  - react-loader-spinner 6.1.6 → 8.0.0
  - Updated all other dependencies to latest versions
  - Removed unused dependencies (grammy, node-telegram-bot-api, http-proxy-middleware)
- Performance improvements
  - Added React.memo to major components (Weather, Hvv, Sidebar, Garage, Laundry, Header, Clock)
  - Implemented useMemo for expensive computations
  - Added useCallback for event handlers
  - Optimized calendar data fetching with 5-minute cache
  - Fixed React hooks order violation in Weather component
- Memory leak fixes
  - Fixed setInterval memory leaks in use-physical-buttons, use-garage-door, and other components
  - Added proper cleanup functions for all useEffect hooks
  - Fixed WebSocket connection cleanup
  - Fixed counter bug in use-physical-buttons
- Improved error handling
  - Converted Error objects to strings before rendering
  - Better API error handling throughout
  - Added logging for unrecognized garage door states
- Configuration cleanup
  - Removed redundant VITE_ENTITY_GARAGE_DOOR_CONTROL (now uses VITE_ENTITY_GARAGE_DOOR)
  - Reduced environment variables from 18 to 17
- Documentation
  - Completely rewrote README.md with project-specific documentation
  - Added comprehensive environment variables documentation
  - Added getting started instructions and prerequisites

__Fixes__
- Fixed React rendering error: "Objects are not valid as a React child"
- Fixed setInterval memory leaks across multiple components
- Fixed useEffect dependency arrays to prevent stale closures
- Fixed async cleanup in Home Assistant connections
- Overlay close button accessibility improvements
- Weather data display fixes
