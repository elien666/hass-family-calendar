#!/usr/bin/with-contenv bashio

# Generate config.js from HA add-on configuration
CONFIG_DIR="/usr/local/apache2/htdocs"
CONFIG_FILE="${CONFIG_DIR}/config.js"

# Ensure config directory exists
mkdir -p "$CONFIG_DIR"

# Function to escape JSON string
json_escape() {
  local input="${1:-}"
  if [ -z "$input" ]; then
    printf ''
    return 0
  fi
  
  # Use awk for reliable JSON escaping - avoids sed command substitution issues
  # The original implementation used $(printf '\n') inside sed patterns which fails
  local escaped=""
  if command -v awk > /dev/null 2>&1; then
    # Use awk with RS='^$' to read entire input as one record
    # This allows us to properly escape newlines, tabs, etc.
    escaped=$(printf '%s' "$input" | awk -v RS='^$' '
      {
        # Escape backslashes first (must be first)
        gsub(/\\/, "\\\\")
        # Escape quotes
        gsub(/"/, "\\\"")
        # Escape dollar signs
        gsub(/\$/, "\\$")
        # Escape newlines
        gsub(/\n/, "\\n")
        # Escape carriage returns
        gsub(/\r/, "\\r")
        # Escape tabs
        gsub(/\t/, "\\t")
        # Print the result
        print
      }' 2>/dev/null)
    # Fallback if RS='^$' doesn't work (some awk implementations)
    if [ -z "$escaped" ]; then
      escaped=$(printf '%s' "$input" | awk '{
        gsub(/\\/, "\\\\")
        gsub(/"/, "\\\"")
        gsub(/\$/, "\\$")
        printf "%s", $0
      }' 2>/dev/null)
    fi
  fi
  
  # Fallback: use sed with simple, guaranteed-to-work expressions
  # Only escape backslash, quote, and dollar to avoid sed command substitution issues
  if [ -z "$escaped" ]; then
    escaped=$(printf '%s' "$input" | sed -e 's/\\/\\\\/g' -e 's/"/\\"/g' -e 's/\$/\\$/g' 2>/dev/null)
  fi
  
  # Ensure we always return something, even if escaping failed
  printf '%s' "${escaped:-$input}"
}

# Function to output JSON value (string or number)
output_json_value() {
  local key=$1
  local value="${2:-}"  # Default to empty string if unset
  local is_number=$3
  local always_output=$4
  
  # Ensure value is not the string "undefined" or "null"
  if [ "$value" = "undefined" ] || [ "$value" = "null" ]; then
    value=""
  fi
  
  # Always output if always_output is true, or if value is not empty
  if [ "$always_output" = "true" ] || [ -n "$value" ]; then
    if [ "$is_number" = "true" ] && [ -n "$value" ]; then
      echo "  $key: $value,"
    else
      local escaped=$(json_escape "$value")
      echo "  $key: \"$escaped\","
    fi
  fi
}

# Start building the config object
# Initialize with empty object to ensure valid JSON even if generation fails
echo "window.APP_CONFIG = {" > "$CONFIG_FILE" || {
  echo "Error: Failed to create config file" >&2
  exit 1
}

# Detect if running in HA (check for supervisor token or supervisor API)
IN_HA=false
if [ -n "${SUPERVISOR_TOKEN:-}" ] || command -v bashio > /dev/null 2>&1; then
  IN_HA=true
fi

# Handle HASS_HOST and HASS_ACCESS_TOKEN specially for HA mode
if [ "$IN_HA" = true ]; then
  # In HA, use empty string for HASS_HOST (relative URLs) and empty for token (ingress handles auth)
  HASS_HOST=""
  HASS_ACCESS_TOKEN=""
else
  # Outside HA, try to read from config if bashio is available, fallback to empty
  if command -v bashio > /dev/null 2>&1; then
    HASS_HOST=$(bashio::config 'hass_host' 2>/dev/null || echo "")
    HASS_ACCESS_TOKEN=$(bashio::config 'hass_access_token' 2>/dev/null || echo "")
  else
    HASS_HOST=""
    HASS_ACCESS_TOKEN=""
  fi
fi

# Ensure HASS_HOST and HASS_ACCESS_TOKEN are set to empty string if unset or null
HASS_HOST="${HASS_HOST:-}"
HASS_ACCESS_TOKEN="${HASS_ACCESS_TOKEN:-}"

# Output HASS_HOST and HASS_ACCESS_TOKEN
# In ingress mode, DON'T output these when empty - let app fall back to build-time env vars
# This matches the "broken config.js" behavior that worked
# Only output if they have actual values
if [ -n "$HASS_HOST" ]; then
  output_json_value "HASS_HOST" "$HASS_HOST" "false" "false" >> "$CONFIG_FILE"
fi
if [ -n "$HASS_ACCESS_TOKEN" ]; then
  output_json_value "HASS_ACCESS_TOKEN" "$HASS_ACCESS_TOKEN" "false" "false" >> "$CONFIG_FILE"
fi

# Helper function to check if a toggle is enabled
is_toggle_enabled() {
  local toggle_key=$1
  if [ "$IN_HA" = true ] && command -v bashio > /dev/null 2>&1; then
    local toggle_value=$(bashio::config "$toggle_key" 2>/dev/null || echo "false")
    # Check if toggle is true (handle various true representations)
    [ "$toggle_value" = "true" ] || [ "$toggle_value" = "1" ] || [ "$toggle_value" = "yes" ]
  else
    return 1
  fi
}

# Helper function to read and output config value if toggle is enabled
read_and_output_config() {
  local toggle_key=$1
  local config_key=$2
  local env_key=$3
  local is_number=$4
  
  # Check if toggle is enabled
  if ! is_toggle_enabled "$toggle_key"; then
    return 0
  fi
  
  # Read the config value
  if [ "$IN_HA" = true ] && command -v bashio > /dev/null 2>&1 && bashio::config.has_value "$config_key" 2>/dev/null; then
    local value=$(bashio::config "$config_key" 2>/dev/null || echo "")
    # Ensure value is not unset and is not the string "undefined"
    value="${value:-}"
    if [ -n "$value" ] && [ "$value" != "undefined" ]; then
      output_json_value "$env_key" "$value" "$is_number" "false" >> "$CONFIG_FILE"
    fi
  fi
}

# Read and output enable toggle flags (always output, even if false)
ENABLE_TOGGLES=(
  "enable_weather:ENABLE_WEATHER"
  "enable_hvv:ENABLE_HVV"
  "enable_telegram:ENABLE_TELEGRAM"
  "enable_garage:ENABLE_GARAGE"
  "enable_laundry:ENABLE_LAUNDRY"
  "enable_doorbell:ENABLE_DOORBELL"
  "enable_everyday_calendar:ENABLE_EVERYDAY_CALENDAR"
  "enable_physical_buttons:ENABLE_PHYSICAL_BUTTONS"
)

for toggle_spec in "${ENABLE_TOGGLES[@]}"; do
  IFS=':' read -r config_key env_key <<< "$toggle_spec"
  toggle_value="false"
  if [ "$IN_HA" = true ] && command -v bashio > /dev/null 2>&1; then
    toggle_value=$(bashio::config "$config_key" 2>/dev/null || echo "false")
  fi
  # Convert to boolean string and always output
  if [ "$toggle_value" = "true" ] || [ "$toggle_value" = "1" ] || [ "$toggle_value" = "yes" ]; then
    output_json_value "$env_key" "true" "false" "true" >> "$CONFIG_FILE"
  else
    output_json_value "$env_key" "false" "false" "true" >> "$CONFIG_FILE"
  fi
done

# Read other config options only if their corresponding toggle is enabled
# Weather config (requires enable_weather)
read_and_output_config "enable_weather" "weather_api_key" "WEATHER_API_KEY" "false"
read_and_output_config "enable_weather" "weather_latitude" "WEATHER_LATITUDE" "true"
read_and_output_config "enable_weather" "weather_longitude" "WEATHER_LONGITUDE" "true"

# HVV config (requires enable_hvv)
read_and_output_config "enable_hvv" "geofox_user" "GEOFOX_USER" "false"
read_and_output_config "enable_hvv" "geofox_secret" "GEOFOX_SECRET" "false"

# Telegram config (requires enable_telegram)
read_and_output_config "enable_telegram" "telegram_bot_token" "TELEGRAM_BOT_TOKEN" "false"
read_and_output_config "enable_telegram" "telegram_chat_id" "TELEGRAM_CHAT_ID" "false"

# Garage config (requires enable_garage)
read_and_output_config "enable_garage" "entity_garage_door" "ENTITY_GARAGE_DOOR" "false"

# Laundry config (requires enable_laundry)
read_and_output_config "enable_laundry" "entity_washing_machine_new" "ENTITY_WASHING_MACHINE_NEW" "false"
read_and_output_config "enable_laundry" "entity_washing_machine_old" "ENTITY_WASHING_MACHINE_OLD" "false"
read_and_output_config "enable_laundry" "entity_dryer" "ENTITY_DRYER" "false"

# Doorbell config (requires enable_doorbell)
read_and_output_config "enable_doorbell" "entity_doorbell" "ENTITY_DOORBELL" "false"
read_and_output_config "enable_doorbell" "entity_doorbell_button" "ENTITY_DOORBELL_BUTTON" "false"

# Everyday calendar config (requires enable_everyday_calendar)
read_and_output_config "enable_everyday_calendar" "entity_everyday_calendar" "ENTITY_EVERYDAY_CALENDAR" "false"

# Physical buttons config (requires enable_physical_buttons)
read_and_output_config "enable_physical_buttons" "buttons_ws_url" "BUTTONS_WS_URL" "false"

# Remove trailing comma from last entry and close the config object
# Use awk for reliable trailing comma removal across different systems
if command -v awk > /dev/null 2>&1; then
  # Use awk to remove trailing comma from the last line
  awk '{
    if (NR > 1) print prev
    prev = $0
  }
  END {
    sub(/,$/, "", prev)
    print prev
  }' "$CONFIG_FILE" > "${CONFIG_FILE}.tmp" 2>/dev/null
  if [ -f "${CONFIG_FILE}.tmp" ] && [ -s "${CONFIG_FILE}.tmp" ]; then
    mv "${CONFIG_FILE}.tmp" "$CONFIG_FILE" 2>/dev/null || rm -f "${CONFIG_FILE}.tmp" 2>/dev/null
  else
    rm -f "${CONFIG_FILE}.tmp" 2>/dev/null
  fi
else
  # Fallback: try sed approaches
  if sed -i.bak '$ s/,$//' "$CONFIG_FILE" 2>/dev/null; then
    rm -f "${CONFIG_FILE}.bak" 2>/dev/null
  elif sed -i '' '$ s/,$//' "$CONFIG_FILE" 2>/dev/null; then
    # macOS sed
    :
  elif sed '$ s/,$//' "$CONFIG_FILE" > "${CONFIG_FILE}.tmp" 2>/dev/null && [ -f "${CONFIG_FILE}.tmp" ] && [ -s "${CONFIG_FILE}.tmp" ]; then
    mv "${CONFIG_FILE}.tmp" "$CONFIG_FILE" 2>/dev/null || rm -f "${CONFIG_FILE}.tmp" 2>/dev/null
  fi
fi
rm -f "${CONFIG_FILE}.bak" "${CONFIG_FILE}.tmp" 2>/dev/null
echo "};" >> "$CONFIG_FILE"

# Verify the config file is valid JSON
# Don't require HASS_HOST/HASS_ACCESS_TOKEN to be present - let app fall back to build-time env vars
if ! grep -q "window.APP_CONFIG" "$CONFIG_FILE" || ! grep -q "}" "$CONFIG_FILE"; then
  echo "Warning: config.js is invalid, regenerating with empty config..." >&2
  echo "window.APP_CONFIG = {};" > "$CONFIG_FILE"
fi

# Start Apache (try common paths)
HTTPD_BIN=""
if [ -x "/usr/sbin/httpd" ]; then
  HTTPD_BIN="/usr/sbin/httpd"
elif [ -x "/usr/local/apache2/bin/httpd" ]; then
  HTTPD_BIN="/usr/local/apache2/bin/httpd"
elif command -v httpd > /dev/null 2>&1; then
  HTTPD_BIN="httpd"
else
  echo "Error: Apache httpd not found" >&2
  exit 1
fi

# Start Apache with the config file
exec "$HTTPD_BIN" -f /usr/local/apache2/conf/httpd.conf -D FOREGROUND
