**next-6 - 2025-11-21**

_Staging build_

- docs: add build status badge to README
- feat: update workflow to trigger on PR merge with auto versioning
- fix: remove invalid 'releases' permission from workflow
- Clean up
- refactor: enable features based on config values, not separate toggles
- fix: add enable_* toggle fields to addon config schema
- fix: don't output empty HASS_HOST/HASS_ACCESS_TOKEN in config.js to allow fallback
- fix: remove duplicate return statement in getConfig
- fix: explicitly delete Authorization header when token is empty for ingress
- fix: improve Authorization header handling for ingress mode
- fix: remove Authorization header in ingress mode to fix 401 API errors
- fix: use relative path for config.js to support subpath deployment
- fix: use text/javascript MIME type for better browser compatibility
- fix: set correct MIME type for JavaScript files
- fix: resolve Apache configuration errors for Alpine Linux
- Use gawk instead of awk in Dockerfile for better compatibility
- Fix s6-envdir error and improve Supervisor API handling in dev-deploy
- feat: add container rebuild to dev-deploy restart option
- Update config.yaml to use options/schema format with device selectors
- Add development deployment workflow and fix addon config schema
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

**next-5 - 2025-11-21**

_Staging build_

- feat: update workflow to trigger on PR merge with auto versioning
- fix: remove invalid 'releases' permission from workflow
- Clean up
- refactor: enable features based on config values, not separate toggles
- fix: add enable_* toggle fields to addon config schema
- fix: don't output empty HASS_HOST/HASS_ACCESS_TOKEN in config.js to allow fallback
- fix: remove duplicate return statement in getConfig
- fix: explicitly delete Authorization header when token is empty for ingress
- fix: improve Authorization header handling for ingress mode
- fix: remove Authorization header in ingress mode to fix 401 API errors
- fix: use relative path for config.js to support subpath deployment
- fix: use text/javascript MIME type for better browser compatibility
- fix: set correct MIME type for JavaScript files
- fix: resolve Apache configuration errors for Alpine Linux
- Use gawk instead of awk in Dockerfile for better compatibility
- Fix s6-envdir error and improve Supervisor API handling in dev-deploy
- feat: add container rebuild to dev-deploy restart option
- Update config.yaml to use options/schema format with device selectors
- Add development deployment workflow and fix addon config schema
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

**next-4 - 2025-11-21**

_Staging build_

- fix: remove invalid 'releases' permission from workflow
- Clean up
- refactor: enable features based on config values, not separate toggles
- fix: add enable_* toggle fields to addon config schema
- fix: don't output empty HASS_HOST/HASS_ACCESS_TOKEN in config.js to allow fallback
- fix: remove duplicate return statement in getConfig
- fix: explicitly delete Authorization header when token is empty for ingress
- fix: improve Authorization header handling for ingress mode
- fix: remove Authorization header in ingress mode to fix 401 API errors
- fix: use relative path for config.js to support subpath deployment
- fix: use text/javascript MIME type for better browser compatibility
- fix: set correct MIME type for JavaScript files
- fix: resolve Apache configuration errors for Alpine Linux
- Use gawk instead of awk in Dockerfile for better compatibility
- Fix s6-envdir error and improve Supervisor API handling in dev-deploy
- feat: add container rebuild to dev-deploy restart option
- Update config.yaml to use options/schema format with device selectors
- Add development deployment workflow and fix addon config schema
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

**next-3 - 2025-11-21**

_Staging build_

- Clean up
- refactor: enable features based on config values, not separate toggles
- fix: add enable_* toggle fields to addon config schema
- fix: don't output empty HASS_HOST/HASS_ACCESS_TOKEN in config.js to allow fallback
- fix: remove duplicate return statement in getConfig
- fix: explicitly delete Authorization header when token is empty for ingress
- fix: improve Authorization header handling for ingress mode
- fix: remove Authorization header in ingress mode to fix 401 API errors
- fix: use relative path for config.js to support subpath deployment
- fix: use text/javascript MIME type for better browser compatibility
- fix: set correct MIME type for JavaScript files
- fix: resolve Apache configuration errors for Alpine Linux
- Use gawk instead of awk in Dockerfile for better compatibility
- Fix s6-envdir error and improve Supervisor API handling in dev-deploy
- feat: add container rebuild to dev-deploy restart option
- Update config.yaml to use options/schema format with device selectors
- Add development deployment workflow and fix addon config schema
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

**next-2 - 2025-11-21**

_Staging build_

- Clean up
- refactor: enable features based on config values, not separate toggles
- fix: add enable_* toggle fields to addon config schema
- fix: don't output empty HASS_HOST/HASS_ACCESS_TOKEN in config.js to allow fallback
- fix: remove duplicate return statement in getConfig
- fix: explicitly delete Authorization header when token is empty for ingress
- fix: improve Authorization header handling for ingress mode
- fix: remove Authorization header in ingress mode to fix 401 API errors
- fix: use relative path for config.js to support subpath deployment
- fix: use text/javascript MIME type for better browser compatibility
- fix: set correct MIME type for JavaScript files
- fix: resolve Apache configuration errors for Alpine Linux
- Use gawk instead of awk in Dockerfile for better compatibility
- Fix s6-envdir error and improve Supervisor API handling in dev-deploy
- feat: add container rebuild to dev-deploy restart option
- Update config.yaml to use options/schema format with device selectors
- Add development deployment workflow and fix addon config schema
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
