#!/bin/bash
# Simple script to upload add-on directory via rsync

SSH_HOST="${1:-homeassistant.local}"
SSH_USER="${2:-root}"
REMOTE_PATH="${3:-/addons/family-calendar}"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
ADDON_DIR="$PROJECT_ROOT/add-on"

if [ ! -d "$ADDON_DIR" ]; then
    echo "Error: Add-on directory not found: $ADDON_DIR"
    exit 1
fi

echo "Uploading add-on directory..."
echo "  Source: $ADDON_DIR"
echo "  Destination: ${SSH_USER}@${SSH_HOST}:${REMOTE_PATH}"
echo ""

# Use rsync to sync all contents (--delete removes files on destination that don't exist in source)
# This ensures the destination is 100% identical to the source, with no leftover files
rsync -av --delete "$ADDON_DIR/" "${SSH_USER}@${SSH_HOST}:${REMOTE_PATH}/"

echo ""
echo "Upload completed!"
