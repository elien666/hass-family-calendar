#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Get the directory where this script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
BACKEND_DIR="$PROJECT_ROOT/add-on/backend"
VENV_DIR="$BACKEND_DIR/venv"
PYTHON_EXEC="$VENV_DIR/bin/python3"

echo -e "${GREEN}Starting Family Calendar Development Environment${NC}"
echo ""

# Check if virtual environment exists, create if not
if [ ! -d "$VENV_DIR" ]; then
    echo -e "${YELLOW}Virtual environment not found. Creating and installing dependencies...${NC}"
    python3 -m venv "$VENV_DIR"
    "$PYTHON_EXEC" -m pip install --upgrade pip
    "$PYTHON_EXEC" -m pip install -r "$BACKEND_DIR/requirements.txt"
    echo ""
fi

# Check if .env file exists
if [ ! -f "$PROJECT_ROOT/.env" ]; then
    echo -e "${YELLOW}Warning: .env file not found at $PROJECT_ROOT/.env${NC}"
    echo -e "${YELLOW}See .env.example for required variables${NC}"
    echo ""
fi

# Start backend in background
echo -e "${GREEN}Starting FastAPI backend...${NC}"
cd "$BACKEND_DIR"
"$PYTHON_EXEC" run_local.py &
BACKEND_PID=$!

# Wait a moment for backend to start
sleep 2

# Start frontend
echo -e "${GREEN}Starting Vite frontend...${NC}"
cd "$PROJECT_ROOT"
pnpm start &
FRONTEND_PID=$!

# Function to cleanup on exit
cleanup() {
    echo ""
    echo -e "${YELLOW}Shutting down...${NC}"
    kill $BACKEND_PID 2>/dev/null
    kill $FRONTEND_PID 2>/dev/null
    exit 0
}

# Trap Ctrl+C and call cleanup
trap cleanup INT TERM

# Wait for both processes
wait $BACKEND_PID $FRONTEND_PID

