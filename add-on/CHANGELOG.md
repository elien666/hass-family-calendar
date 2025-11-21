**next-1 - 2025-11-21**

_Staging build_

- Add feature toggle switches with conditional visibility in HA add-on config
- feat: implement tag-based releases and staging workflow
- Fix undefined API URLs and improve config handling
- Remove deprecated options from config.yaml and update schema for Home Assistant integration
- fix: update CHANGELOG generation to replace content and filter merge PRs
- Refactor configuration management and improve feature handling in the HASS Family Calendar add-on. Updated README for clarity on environment variables and local development setup. Enhanced runtime configuration injection for Home Assistant add-on mode, ensuring features are only rendered if properly configured. Added optional entity IDs and improved error handling across components. Updated Dockerfile for better build practices.
- fix: update pnpm version to 10 in CI to support lockfile v9
- fix: add packages field to pnpm-workspace.yaml to fix GH build
- Configure manual chunks to optimize bundle size
- Remove fallback values from config.js
- Add GitHub Action for automated addon builds and Home Assistant repository config
- Add opening and closing states to garage door
- Remove .env from git tracking
- Refactor: Security, performance, and code quality improvements
- Fix issues with weather data display
- Overlay close button improved layout
- Added click on CCTV to unlatch front door
- Changed trigger to person instead of visitor
- Reload every 3 hours to keep backend connectiopn alive
- Telegram Debug
- Fix HVV over non - ssl
- Fix video cams
- upgraded to latest libs and fixed weather
- Cosmetic css changes
- Doorbell streams
- Works now
- Using WebRTC instead of HLS for video streams
- Added delay to closing of doorbell cam overlay
- Show doorbell cam on visit
- Fix everyday calendar
- Remove debug message
- Fixed entity ID
- Fix issue with garage door status
- Everyday calendar
- Fixed Vite build relative paths and fixed nginx cache-control
- Improved visualization for multi-day events
- Refactored to use Vite
- Updated all modules to latest version and refactored to native crypto
- Don't use physical buttons
- 1.0.16
- Optimize background loading of calendar w/o flicker
- Streamlined HVV view
- Fix issue with spinning laundry icons
- Release 1.0.15
- Improved overlay UX

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
