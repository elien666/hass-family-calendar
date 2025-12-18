**1.35 - 2025-12-18**

- Fix HVV integration for development mode
- Refactor WebSocket connection logic into reusable hook
- Fix infinite WebSocket reconnection loop
- Skip health checks in development mode to prevent connection state flipping
- Prevent config object reference changes when values haven't changed
- Fix infinite WebSocket connection loop in development mode
- Add config reload and persistence with graceful error handling
- chore(deps): update dependency fastapi to v0.125.0
- chore(deps): update dependency react-router-dom to v7.11.0
- chore(deps): update dependency python-multipart to v0.0.21
- chore(deps): update dependency vite to v7.3.0

