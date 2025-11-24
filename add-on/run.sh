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
# In ingress mode, DON'T output these when empty
# Vite's import.meta.env.DEV will be false in production builds, so the app will use relative URLs
# Only output if they have actual values
if [ -n "$HASS_HOST" ]; then
  output_json_value "HASS_HOST" "$HASS_HOST" "false" "false" >> "$CONFIG_FILE"
fi
if [ -n "$HASS_ACCESS_TOKEN" ]; then
  output_json_value "HASS_ACCESS_TOKEN" "$HASS_ACCESS_TOKEN" "false" "false" >> "$CONFIG_FILE"
fi

# Helper function to check if a config value exists and is not empty
has_config_value() {
  local config_key=$1
  if [ "$IN_HA" = true ] && command -v bashio > /dev/null 2>&1; then
    # Try to read the config value
    local value=$(bashio::config "$config_key" 2>/dev/null || echo "")
    value="${value:-}"
    # Return true if value is non-empty and not "undefined" or "null"
    [ -n "$value" ] && [ "$value" != "undefined" ] && [ "$value" != "null" ]
  else
    return 1
  fi
}

# Helper function to read and output config value
read_and_output_config() {
  local config_key=$1
  local env_key=$2
  local is_number=$3

  # Read the config value
  if [ "$IN_HA" = true ] && command -v bashio > /dev/null 2>&1; then
    local value=$(bashio::config "$config_key" 2>/dev/null || echo "")
    # Ensure value is not unset and is not the string "undefined" or "null"
    value="${value:-}"
    if [ -n "$value" ] && [ "$value" != "undefined" ] && [ "$value" != "null" ]; then
      output_json_value "$env_key" "$value" "$is_number" "false" >> "$CONFIG_FILE"
    fi
  fi
}

# Determine if features are enabled based on whether their config values are present
# Note: bashio::config uses dot notation for nested config: "section.key"
# Weather: enabled if weather_api_key OR (weather_latitude AND weather_longitude) are set
ENABLE_WEATHER="false"
if has_config_value "weather.weather_api_key" || (has_config_value "weather.weather_latitude" && has_config_value "weather.weather_longitude"); then
  ENABLE_WEATHER="true"
  read_and_output_config "weather.weather_api_key" "WEATHER_API_KEY" "false"
  read_and_output_config "weather.weather_latitude" "WEATHER_LATITUDE" "true"
  read_and_output_config "weather.weather_longitude" "WEATHER_LONGITUDE" "true"
fi
output_json_value "ENABLE_WEATHER" "$ENABLE_WEATHER" "false" "true" >> "$CONFIG_FILE"

# HVV: enabled if both geofox_user and geofox_secret are set
ENABLE_HVV="false"
if has_config_value "hvv.geofox_user" && has_config_value "hvv.geofox_secret"; then
  ENABLE_HVV="true"
  read_and_output_config "hvv.geofox_user" "GEOFOX_USER" "false"
  read_and_output_config "hvv.geofox_secret" "GEOFOX_SECRET" "false"
fi
output_json_value "ENABLE_HVV" "$ENABLE_HVV" "false" "true" >> "$CONFIG_FILE"

# Telegram: enabled if both telegram_bot_token and telegram_chat_id are set
ENABLE_TELEGRAM="false"
if has_config_value "telegram.telegram_bot_token" && has_config_value "telegram.telegram_chat_id"; then
  ENABLE_TELEGRAM="true"
  read_and_output_config "telegram.telegram_bot_token" "TELEGRAM_BOT_TOKEN" "false"
  read_and_output_config "telegram.telegram_chat_id" "TELEGRAM_CHAT_ID" "false"
fi
output_json_value "ENABLE_TELEGRAM" "$ENABLE_TELEGRAM" "false" "true" >> "$CONFIG_FILE"

# Garage: enabled if entity_garage_door is set
ENABLE_GARAGE="false"
# Read the entity value first, then check if it's valid
if [ "$IN_HA" = true ] && command -v bashio > /dev/null 2>&1; then
  GARAGE_ENTITY_VALUE=$(bashio::config "garage.entity_garage_door" 2>/dev/null || echo "")
  GARAGE_ENTITY_VALUE="${GARAGE_ENTITY_VALUE:-}"
  # Check if value is non-empty and not "undefined" or "null"
  if [ -n "$GARAGE_ENTITY_VALUE" ] && [ "$GARAGE_ENTITY_VALUE" != "undefined" ] && [ "$GARAGE_ENTITY_VALUE" != "null" ]; then
    ENABLE_GARAGE="true"
    output_json_value "ENTITY_GARAGE_DOOR" "$GARAGE_ENTITY_VALUE" "false" "false" >> "$CONFIG_FILE"
  fi
fi
output_json_value "ENABLE_GARAGE" "$ENABLE_GARAGE" "false" "true" >> "$CONFIG_FILE"

# Laundry: enabled if any laundry entity is set
ENABLE_LAUNDRY="false"
# Read the entity values first, then check if any are valid
if [ "$IN_HA" = true ] && command -v bashio > /dev/null 2>&1; then
  LAUNDRY_NEW=$(bashio::config "laundry.entity_washing_machine_new" 2>/dev/null || echo "")
  LAUNDRY_NEW="${LAUNDRY_NEW:-}"
  LAUNDRY_OLD=$(bashio::config "laundry.entity_washing_machine_old" 2>/dev/null || echo "")
  LAUNDRY_OLD="${LAUNDRY_OLD:-}"
  LAUNDRY_DRYER=$(bashio::config "laundry.entity_dryer" 2>/dev/null || echo "")
  LAUNDRY_DRYER="${LAUNDRY_DRYER:-}"
  
  # Check if any value is non-empty and not "undefined" or "null"
  if ([ -n "$LAUNDRY_NEW" ] && [ "$LAUNDRY_NEW" != "undefined" ] && [ "$LAUNDRY_NEW" != "null" ]) || \
     ([ -n "$LAUNDRY_OLD" ] && [ "$LAUNDRY_OLD" != "undefined" ] && [ "$LAUNDRY_OLD" != "null" ]) || \
     ([ -n "$LAUNDRY_DRYER" ] && [ "$LAUNDRY_DRYER" != "undefined" ] && [ "$LAUNDRY_DRYER" != "null" ]); then
    ENABLE_LAUNDRY="true"
    if [ -n "$LAUNDRY_NEW" ] && [ "$LAUNDRY_NEW" != "undefined" ] && [ "$LAUNDRY_NEW" != "null" ]; then
      output_json_value "ENTITY_WASHING_MACHINE_NEW" "$LAUNDRY_NEW" "false" "false" >> "$CONFIG_FILE"
    fi
    if [ -n "$LAUNDRY_OLD" ] && [ "$LAUNDRY_OLD" != "undefined" ] && [ "$LAUNDRY_OLD" != "null" ]; then
      output_json_value "ENTITY_WASHING_MACHINE_OLD" "$LAUNDRY_OLD" "false" "false" >> "$CONFIG_FILE"
    fi
    if [ -n "$LAUNDRY_DRYER" ] && [ "$LAUNDRY_DRYER" != "undefined" ] && [ "$LAUNDRY_DRYER" != "null" ]; then
      output_json_value "ENTITY_DRYER" "$LAUNDRY_DRYER" "false" "false" >> "$CONFIG_FILE"
    fi
  fi
fi
output_json_value "ENABLE_LAUNDRY" "$ENABLE_LAUNDRY" "false" "true" >> "$CONFIG_FILE"

# Doorbell: enabled if entity_doorbell or entity_doorbell_button is set
ENABLE_DOORBELL="false"
if has_config_value "doorbell.entity_doorbell" || has_config_value "doorbell.entity_doorbell_button"; then
  ENABLE_DOORBELL="true"
  read_and_output_config "doorbell.entity_doorbell" "ENTITY_DOORBELL" "false"
  read_and_output_config "doorbell.entity_doorbell_button" "ENTITY_DOORBELL_BUTTON" "false"
fi
output_json_value "ENABLE_DOORBELL" "$ENABLE_DOORBELL" "false" "true" >> "$CONFIG_FILE"

# Everyday calendar: enabled if entity_everyday_calendar is set
ENABLE_EVERYDAY_CALENDAR="false"
if has_config_value "everyday_calendar.entity_everyday_calendar"; then
  ENABLE_EVERYDAY_CALENDAR="true"
  read_and_output_config "everyday_calendar.entity_everyday_calendar" "ENTITY_EVERYDAY_CALENDAR" "false"
fi
output_json_value "ENABLE_EVERYDAY_CALENDAR" "$ENABLE_EVERYDAY_CALENDAR" "false" "true" >> "$CONFIG_FILE"

# Physical buttons: enabled if buttons_ws_url is set
ENABLE_PHYSICAL_BUTTONS="false"
if has_config_value "physical_buttons.buttons_ws_url"; then
  ENABLE_PHYSICAL_BUTTONS="true"
  read_and_output_config "physical_buttons.buttons_ws_url" "BUTTONS_WS_URL" "false"
fi
output_json_value "ENABLE_PHYSICAL_BUTTONS" "$ENABLE_PHYSICAL_BUTTONS" "false" "true" >> "$CONFIG_FILE"

# Calendars: read array from config and output as JSON array
if [ "$IN_HA" = true ] && command -v bashio > /dev/null 2>&1; then
  # Read calendars array from config
  CALENDARS_JSON=$(bashio::config "calendars" 2>/dev/null || echo "[]")
  # Ensure it's valid JSON (bashio should return JSON array, but verify)
  if [ -z "$CALENDARS_JSON" ] || [ "$CALENDARS_JSON" = "null" ] || [ "$CALENDARS_JSON" = "undefined" ]; then
    CALENDARS_JSON="[]"
  fi
  # Output as JSON array (no quotes needed, it's already JSON)
  echo "  CALENDARS: $CALENDARS_JSON," >> "$CONFIG_FILE"
else
  # Fallback to empty array if not in HA mode
  echo "  CALENDARS: []," >> "$CONFIG_FILE"
fi

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

# Generate Apache proxy configuration for Home Assistant API
# Forward /api/* requests to http://supervisor/core/api/* with SUPERVISOR_TOKEN
SUPERVISOR_PROXY_CONF="/usr/local/apache2/conf/extra/httpd-supervisor-proxy.conf"
# Always ensure the directory exists
mkdir -p "$(dirname "$SUPERVISOR_PROXY_CONF")"

if [ "$IN_HA" = true ] && [ -n "${SUPERVISOR_TOKEN:-}" ]; then
  # Escape the token for use in Apache config
  # Need to escape backslashes, quotes, and dollar signs for Apache config
  SUPERVISOR_TOKEN_ESCAPED=$(printf '%s' "$SUPERVISOR_TOKEN" | sed -e 's/\\/\\\\/g' -e 's/"/\\"/g' -e 's/\$/\\$/g')

  echo "=== DEBUG: Generating Apache proxy configuration for Home Assistant API ==="
  echo "SUPERVISOR_PROXY_CONF: $SUPERVISOR_PROXY_CONF"
  echo "IN_HA: $IN_HA"
  echo "SUPERVISOR_TOKEN present: $([ -n "${SUPERVISOR_TOKEN:-}" ] && echo "YES" || echo "NO")"
  echo "SUPERVISOR_TOKEN length: ${#SUPERVISOR_TOKEN}"
  echo "SUPERVISOR_TOKEN_ESCAPED length: ${#SUPERVISOR_TOKEN_ESCAPED}"

  cat > "$SUPERVISOR_PROXY_CONF" << EOF
# Auto-generated by run.sh - DO NOT EDIT MANUALLY
# Proxy Home Assistant API requests to http://supervisor/core/api/
# This allows the frontend to make API calls that are authenticated with SUPERVISOR_TOKEN

<Location /api>
    # ProxyPass without trailing slash on target to avoid double slashes
    # When request is /api/calendars/..., Apache strips /api and appends /calendars/...
    # Without trailing slash on target, we get /core/api/calendars/... (correct)
    # With trailing slash, we'd get /core/api//calendars/... (double slash)
    ProxyPass http://supervisor/core/api
    ProxyPassReverse http://supervisor/core/api
    ProxyAddHeaders On

    # Add SUPERVISOR_TOKEN as Bearer token for authentication
    RequestHeader set Authorization "Bearer ${SUPERVISOR_TOKEN_ESCAPED}"

    # Preserve original request headers
    ProxyPreserveHost On
</Location>
EOF
  echo "Generated Apache proxy configuration for Home Assistant API at $SUPERVISOR_PROXY_CONF"
  echo "=== DEBUG: Contents of generated proxy config ==="
  if [ -f "$SUPERVISOR_PROXY_CONF" ]; then
    cat "$SUPERVISOR_PROXY_CONF"
    echo "File exists: YES"
    echo "File size: $(wc -c < "$SUPERVISOR_PROXY_CONF") bytes"
  else
    echo "ERROR: File was not created!"
  fi
  echo "=== DEBUG: Checking IncludeOptional in Apache config ==="
  # Check both httpd.conf and my-httpd.conf
  for config_file in /usr/local/apache2/conf/httpd.conf /usr/local/apache2/conf/my-httpd.conf; do
    if [ -f "$config_file" ] && grep -q "IncludeOptional.*httpd-supervisor-proxy" "$config_file" 2>/dev/null; then
      echo "IncludeOptional found in $config_file:"
      grep "IncludeOptional.*httpd-supervisor-proxy" "$config_file" 2>/dev/null || true
    fi
  done
  # Also show the actual IncludeOptional line from my-httpd.conf if it exists
  if [ -f "/usr/local/apache2/conf/my-httpd.conf" ]; then
    echo "Checking my-httpd.conf for IncludeOptional:"
    grep "IncludeOptional.*supervisor" /usr/local/apache2/conf/my-httpd.conf 2>/dev/null || echo "Not found in my-httpd.conf"
  fi
  echo "=== END DEBUG ==="
else
  # Create empty file if not in HA mode or no token (so IncludeOptional doesn't fail)
  echo "=== DEBUG: Skipping Apache proxy configuration ==="
  echo "IN_HA: $IN_HA"
  echo "SUPERVISOR_TOKEN present: $([ -n "${SUPERVISOR_TOKEN:-}" ] && echo "YES" || echo "NO")"
  echo "# Apache proxy configuration for Home Assistant API" > "$SUPERVISOR_PROXY_CONF"
  echo "# Not generated - not in HA mode or no SUPERVISOR_TOKEN" >> "$SUPERVISOR_PROXY_CONF"
  echo "Skipping Apache proxy configuration (not in HA mode or no SUPERVISOR_TOKEN)"
  echo "=== END DEBUG ==="
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
