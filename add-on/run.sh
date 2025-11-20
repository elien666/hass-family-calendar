#!/usr/bin/with-contenv bashio

# Generate config.js from HA add-on configuration
CONFIG_DIR="/usr/local/apache2/htdocs"
CONFIG_FILE="${CONFIG_DIR}/config.js"

# Ensure config directory exists
mkdir -p "$CONFIG_DIR"

# Function to escape JSON string
json_escape() {
  printf '%s' "$1" | \
    sed 's/\\/\\\\/g' | \
    sed 's/"/\\"/g' | \
    sed 's/\$/\\$/g' | \
    sed 's/'"$(printf '\n')"'/\\n/g' | \
    sed 's/'"$(printf '\r')"'/\\r/g' | \
    sed 's/'"$(printf '\t')"'/\\t/g'
}

# Function to output JSON value (string or number)
output_json_value() {
  local key=$1
  local value=$2
  local is_number=$3
  local always_output=$4
  
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
echo "window.APP_CONFIG = {" > "$CONFIG_FILE"

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
    HASS_HOST=$(bashio::config 'hass_host' '' 2>/dev/null || echo "")
    HASS_ACCESS_TOKEN=$(bashio::config 'hass_access_token' '' 2>/dev/null || echo "")
  else
    HASS_HOST=""
    HASS_ACCESS_TOKEN=""
  fi
fi

# Always output HASS_HOST and HASS_ACCESS_TOKEN (even if empty)
output_json_value "HASS_HOST" "$HASS_HOST" "false" "true" >> "$CONFIG_FILE"
output_json_value "HASS_ACCESS_TOKEN" "$HASS_ACCESS_TOKEN" "false" "true" >> "$CONFIG_FILE"

# Read other config options only if they are set
CONFIG_VARS=(
  "weather_api_key:WEATHER_API_KEY:false"
  "weather_latitude:WEATHER_LATITUDE:true"
  "weather_longitude:WEATHER_LONGITUDE:true"
  "geofox_secret:GEOFOX_SECRET:false"
  "geofox_user:GEOFOX_USER:false"
  "telegram_bot_token:TELEGRAM_BOT_TOKEN:false"
  "telegram_chat_id:TELEGRAM_CHAT_ID:false"
  "buttons_ws_url:BUTTONS_WS_URL:false"
  "entity_garage_door:ENTITY_GARAGE_DOOR:false"
  "entity_washing_machine_new:ENTITY_WASHING_MACHINE_NEW:false"
  "entity_washing_machine_old:ENTITY_WASHING_MACHINE_OLD:false"
  "entity_dryer:ENTITY_DRYER:false"
  "entity_doorbell:ENTITY_DOORBELL:false"
  "entity_doorbell_button:ENTITY_DOORBELL_BUTTON:false"
  "entity_everyday_calendar:ENTITY_EVERYDAY_CALENDAR:false"
)

for var_spec in "${CONFIG_VARS[@]}"; do
  IFS=':' read -r config_key env_key is_number <<< "$var_spec"
  if [ "$IN_HA" = true ] && bashio::config.has_value "$config_key" 2>/dev/null; then
    value=$(bashio::config "$config_key" 2>/dev/null || echo "")
    if [ -n "$value" ]; then
      output_json_value "$env_key" "$value" "$is_number" "false" >> "$CONFIG_FILE"
    fi
  fi
done

# Remove trailing comma from last entry and close the config object
sed -i.bak '$ s/,$//' "$CONFIG_FILE" 2>/dev/null || sed -i '' '$ s/,$//' "$CONFIG_FILE" 2>/dev/null || sed '$ s/,$//' "$CONFIG_FILE" > "${CONFIG_FILE}.tmp" && mv "${CONFIG_FILE}.tmp" "$CONFIG_FILE"
rm -f "${CONFIG_FILE}.bak" 2>/dev/null
echo "};" >> "$CONFIG_FILE"

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
