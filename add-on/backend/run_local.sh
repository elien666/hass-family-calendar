#!/bin/bash
# Run the FastAPI backend locally with virtual environment

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
VENV_DIR="$SCRIPT_DIR/venv"

# Check if virtual environment exists
if [ ! -d "$VENV_DIR" ]; then
    echo "Virtual environment not found. Running setup..."
    "$SCRIPT_DIR/setup_venv.sh"
fi

# Activate virtual environment
source "$VENV_DIR/bin/activate"

# Check if requirements are installed
if ! python -c "import fastapi" 2>/dev/null; then
    echo "Installing requirements..."
    pip install -r "$SCRIPT_DIR/requirements.txt"
fi

# Run the local development server
echo "Starting FastAPI development server..."
python "$SCRIPT_DIR/run_local.py"

