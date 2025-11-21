#!/bin/bash
set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
ADDON_SLUG="family_calendar"
HA_HOST="${HA_HOST:-}"
HA_TOKEN="${HA_TOKEN:-}"

show_help() {
    cat << EOF
Usage: $0 [OPTIONS]

Restart the Home Assistant add-on via the Supervisor API.

OPTIONS:
    -h, --host HOST          Home Assistant host URL (e.g., http://homeassistant.local:8123)
    -k, --token TOKEN        Home Assistant long-lived access token
    -s, --slug SLUG          Add-on slug (default: family_calendar)
    --help                   Show this help message

ENVIRONMENT VARIABLES:
    HA_HOST                  Home Assistant host URL
    HA_TOKEN                 Home Assistant long-lived access token

EXAMPLES:
    # Restart with environment variables
    HA_HOST=http://homeassistant.local:8123 HA_TOKEN=your_token $0

    # Restart with command line arguments
    $0 --host http://homeassistant.local:8123 --token your_token
EOF
}

# Parse command line arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        -h|--host)
            HA_HOST="$2"
            shift 2
            ;;
        -k|--token)
            HA_TOKEN="$2"
            shift 2
            ;;
        -s|--slug)
            ADDON_SLUG="$2"
            shift 2
            ;;
        --help)
            show_help
            exit 0
            ;;
        *)
            echo -e "${RED}Unknown option: $1${NC}"
            show_help
            exit 1
            ;;
    esac
done

# Function to print colored messages
log_info() {
    echo -e "${BLUE}ℹ${NC} $1"
}

log_success() {
    echo -e "${GREEN}✓${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

log_error() {
    echo -e "${RED}✗${NC} $1"
}

# Check if required parameters are set
if [ -z "$HA_HOST" ] || [ -z "$HA_TOKEN" ]; then
    log_error "HA_HOST and HA_TOKEN are required"
    log_info "Set them via environment variables or --host and --token flags"
    exit 1
fi

# Remove trailing slash from HA_HOST
HA_HOST="${HA_HOST%/}"

log_info "Restarting add-on '$ADDON_SLUG' via Home Assistant API..."
log_info "Host: $HA_HOST"

# Try Supervisor API
SUPERVISOR_URL="$HA_HOST/api/hassio/addons/$ADDON_SLUG/restart"

RESPONSE=$(curl -s -w "\n%{http_code}" -X POST \
    -H "Authorization: Bearer $HA_TOKEN" \
    -H "Content-Type: application/json" \
    "$SUPERVISOR_URL" 2>/dev/null || echo -e "\n000")

HTTP_CODE=$(echo "$RESPONSE" | tail -n1)
BODY=$(echo "$RESPONSE" | sed '$d')

if [ "$HTTP_CODE" = "200" ] || [ "$HTTP_CODE" = "201" ]; then
    log_success "Add-on restart initiated successfully"
    exit 0
elif [ "$HTTP_CODE" = "401" ] || [ "$HTTP_CODE" = "403" ]; then
    log_error "Authentication failed. Check your HA_TOKEN"
    log_info "Make sure you're using a long-lived access token from Home Assistant"
    exit 1
elif [ "$HTTP_CODE" = "404" ]; then
    log_error "Add-on not found: $ADDON_SLUG"
    log_info "Check that the add-on is installed and the slug is correct"
    exit 1
else
    log_error "Failed to restart add-on (HTTP $HTTP_CODE)"
    if [ -n "$BODY" ]; then
        log_info "Response: $BODY"
    fi
    log_info "Please restart the add-on manually from Home Assistant UI"
    exit 1
fi

