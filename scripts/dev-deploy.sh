#!/bin/bash
set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
CONFIG_FILE="$PROJECT_ROOT/.deploy-config.local"
BUILD_DIR="$PROJECT_ROOT/add-on/dist"

# Default values - initialize as empty to allow config file to set them
# Defaults will be applied in load_config() after reading config file
ADDON_SLUG="family_calendar"
DEPLOY_MODE="auto"  # auto, ssh, local
HA_SSH_HOST=""
HA_SSH_USER=""  # Will default to "root" in load_config if not set
HA_SSH_PATH=""
HA_SSH_KEY=""
HA_SSH_PORT=""
HA_ADDON_DIR=""
HA_HOST=""
HA_TOKEN=""

# Parse arguments
WATCH_MODE=false
RESTART_ADDON=false
SKIP_BUILD=false

# Load configuration from .deploy-config.local if it exists
load_config() {
    local config_loaded=false
    if [ -f "$CONFIG_FILE" ]; then
        config_loaded=true
        # Safely load the config file by parsing variable assignments
        while IFS= read -r line || [ -n "$line" ]; do
            # Skip comments and empty lines
            [[ "$line" =~ ^[[:space:]]*# ]] && continue
            [[ -z "${line// }" ]] && continue
            
            # Parse variable assignments (VAR="value" or VAR=value)
            if [[ "$line" =~ ^[[:space:]]*([A-Z_][A-Z0-9_]*)=\"([^\"]*)\"[[:space:]]*$ ]]; then
                # Quoted value
                var_name="${BASH_REMATCH[1]}"
                var_value="${BASH_REMATCH[2]}"
            elif [[ "$line" =~ ^[[:space:]]*([A-Z_][A-Z0-9_]*)=([^#[:space:]]*)[[:space:]]* ]]; then
                # Unquoted value
                var_name="${BASH_REMATCH[1]}"
                var_value="${BASH_REMATCH[2]}"
            else
                continue
            fi
            
            # Only set if not already set by environment or command line
            if [ -z "${!var_name}" ]; then
                export "$var_name=$var_value"
            fi
        done < "$CONFIG_FILE"
    fi
    # Store config loaded status for later use
    CONFIG_LOADED="$config_loaded"
    
    # Set defaults for values not set by config, environment, or command line
    # This ensures variables have sensible defaults even if not in config file
    HA_SSH_HOST="${HA_SSH_HOST:-}"
    HA_SSH_USER="${HA_SSH_USER:-root}"  # Default to root if not set
    HA_SSH_PATH="${HA_SSH_PATH:-}"
    HA_SSH_KEY="${HA_SSH_KEY:-}"
    HA_SSH_PORT="${HA_SSH_PORT:-22}"
    HA_ADDON_DIR="${HA_ADDON_DIR:-/Volumes/addons/family_calendar}"
    HA_HOST="${HA_HOST:-}"
    HA_TOKEN="${HA_TOKEN:-}"
    ADDON_SLUG="${ADDON_SLUG:-family_calendar}"
}

show_help() {
    cat << EOF
Usage: $0 [OPTIONS]

Deploy the built add-on files to your Home Assistant instance via SSH/rsync or local mount.

OPTIONS:
    -w, --watch              Watch for changes and automatically rebuild and deploy
    -r, --restart            Rebuild and restart the add-on after deployment (requires HA_HOST and HA_TOKEN)
    -s, --skip-build         Skip the build step and only deploy existing dist files
    -t, --target DIR         Target directory for local deployment (overrides HA_ADDON_DIR)
    -h, --host HOST          Home Assistant host URL (e.g., http://homeassistant.local:8123)
    -k, --token TOKEN        Home Assistant long-lived access token
    --ssh-host HOST          SSH hostname or IP (overrides config file)
    --ssh-user USER           SSH username (overrides config file)
    --ssh-path PATH           Remote add-on directory path (overrides config file)
    --ssh-key KEY             SSH private key path (overrides config file)
    --help                    Show this help message

CONFIGURATION:
    The script loads configuration from .deploy-config.local (gitignored).
    Copy .deploy-config.local.example to .deploy-config.local and configure:
    - HA_SSH_HOST, HA_SSH_USER, HA_SSH_PATH for SSH deployment
    - HA_HOST, HA_TOKEN for API restart functionality
    - HA_ADDON_DIR for local mount deployment

ENVIRONMENT VARIABLES:
    All configuration can be overridden via environment variables.
    See .deploy-config.local.example for available options.

EXAMPLES:
    # Basic deploy (uses .deploy-config.local)
    $0

    # Watch mode for continuous development
    $0 --watch

    # Deploy and rebuild/restart add-on
    $0 --restart

    # Override SSH settings via command line
    $0 --ssh-host homeassistant.local --ssh-path /usr/share/hassio/addons/git_123/family_calendar
EOF
}

# Parse command line arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        -w|--watch)
            WATCH_MODE=true
            shift
            ;;
        -r|--restart)
            RESTART_ADDON=true
            shift
            ;;
        -s|--skip-build)
            SKIP_BUILD=true
            shift
            ;;
        -t|--target)
            HA_ADDON_DIR="$2"
            shift 2
            ;;
        -h|--host)
            HA_HOST="$2"
            shift 2
            ;;
        -k|--token)
            HA_TOKEN="$2"
            shift 2
            ;;
        --ssh-host)
            HA_SSH_HOST="$2"
            shift 2
            ;;
        --ssh-user)
            HA_SSH_USER="$2"
            shift 2
            ;;
        --ssh-path)
            HA_SSH_PATH="$2"
            shift 2
            ;;
        --ssh-key)
            HA_SSH_KEY="$2"
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

# Initialize config loaded status
CONFIG_LOADED="false"

# Load configuration early (before any log messages that might reference config)
load_config

# Determine deployment mode
determine_deploy_mode() {
    # Show config load status
    if [ "$CONFIG_LOADED" = "true" ]; then
        log_info "Configuration loaded from .deploy-config.local"
    fi
    
    if [ -n "$HA_SSH_HOST" ] && [ -n "$HA_SSH_PATH" ]; then
        DEPLOY_MODE="ssh"
        log_info "Using SSH/rsync deployment mode"
        log_info "  Host: ${HA_SSH_USER}@${HA_SSH_HOST}"
        log_info "  Path: ${HA_SSH_PATH}"
    elif [ -d "$HA_ADDON_DIR" ]; then
        DEPLOY_MODE="local"
        log_info "Using local mount deployment mode"
        log_info "  Directory: ${HA_ADDON_DIR}"
    else
        if [ -n "$HA_SSH_HOST" ] || [ -n "$HA_SSH_PATH" ]; then
            log_error "SSH configuration incomplete. Set both HA_SSH_HOST and HA_SSH_PATH"
            log_info "Configure .deploy-config.local or use --ssh-host and --ssh-path"
        else
            log_error "No deployment method configured"
            log_info "Either:"
            log_info "  1. Configure SSH in .deploy-config.local (HA_SSH_HOST, HA_SSH_PATH)"
            log_info "  2. Mount the add-on directory to ${HA_ADDON_DIR}"
            log_info "  3. Set HA_ADDON_DIR environment variable"
            log_info ""
            log_info "Copy .deploy-config.local.example to .deploy-config.local and configure it."
        fi
        exit 1
    fi
}

# Function to build the project
build_project() {
    if [ "$SKIP_BUILD" = true ]; then
        log_info "Skipping build step"
        return 0
    fi

    log_info "Building project..."
    cd "$PROJECT_ROOT"
    
    if ! command -v pnpm &> /dev/null; then
        log_error "pnpm is not installed. Please install pnpm first."
        exit 1
    fi
    
    pnpm run build
    
    if [ ! -d "$BUILD_DIR" ] || [ -z "$(ls -A "$BUILD_DIR" 2>/dev/null)" ]; then
        log_error "Build failed or build directory is empty: $BUILD_DIR"
        exit 1
    fi
    
    log_success "Build completed successfully"
}

# Function to deploy files via SSH/rsync
deploy_files_ssh() {
    local remote_path="$HA_SSH_PATH"
    
    # Expand tilde in SSH key path if present
    local ssh_key_path="$HA_SSH_KEY"
    if [ -n "$ssh_key_path" ]; then
        # Remove any surrounding quotes that might have been included
        ssh_key_path="${ssh_key_path#\"}"
        ssh_key_path="${ssh_key_path%\"}"
        
        # Expand tilde using the most reliable method
        # Check if path starts with ~/ using string comparison (most reliable)
        if [[ "${ssh_key_path:0:2}" == "~/" ]]; then
            # Replace leading ~/ with $HOME/
            ssh_key_path="${HOME}${ssh_key_path#\~}"
        elif [[ "$ssh_key_path" == "~" ]]; then
            # Just ~
            ssh_key_path="$HOME"
        elif [[ "$ssh_key_path" =~ ^~ ]]; then
            # Starts with ~ (could be ~username or other variants)
            # Use eval to expand, with fallback to manual substitution
            eval "ssh_key_path=$ssh_key_path" 2>/dev/null || {
                # Fallback: manual substitution
                ssh_key_path="${ssh_key_path/#\~/$HOME}"
            }
        fi
        # Verify the path is now absolute (no tilde)
        if [[ "$ssh_key_path" =~ ^~ ]]; then
            log_warning "Could not expand tilde in SSH key path: $HA_SSH_KEY"
            log_info "Using path as-is, SSH may fail if tilde is not expanded by SSH"
        fi
    fi
    
    # Validate SSH user is set
    if [ -z "$HA_SSH_USER" ]; then
        log_error "HA_SSH_USER is not set. Please configure it in .deploy-config.local"
        exit 1
    fi
    
    # Build SSH options array for direct SSH commands
    local ssh_opts=()
    if [ -n "$ssh_key_path" ]; then
        ssh_opts+=("-i" "$ssh_key_path")
    fi
    if [ "$HA_SSH_PORT" != "22" ]; then
        ssh_opts+=("-p" "$HA_SSH_PORT")
    fi
    ssh_opts+=("-o" "StrictHostKeyChecking=no")
    ssh_opts+=("-o" "UserKnownHostsFile=/dev/null")
    ssh_opts+=("-o" "BatchMode=yes")
    
    # Build SSH command string for rsync -e option
    # rsync's -e expects a single command string
    # Explicitly specify the user with -l to ensure correct user is used
    local ssh_cmd="ssh -l $(printf '%q' "$HA_SSH_USER")"
    if [ -n "$ssh_key_path" ]; then
        # Quote the key path in case it has spaces, use expanded path
        ssh_cmd="$ssh_cmd -i $(printf '%q' "$ssh_key_path")"
    fi
    if [ "$HA_SSH_PORT" != "22" ]; then
        ssh_cmd="$ssh_cmd -p $HA_SSH_PORT"
    fi
    ssh_cmd="$ssh_cmd -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null -o BatchMode=yes"
    
    # Ensure remote directory exists
    log_info "Ensuring remote directory exists: ${HA_SSH_USER}@${HA_SSH_HOST}:${remote_path}"
    if ! ssh "${ssh_opts[@]}" "${HA_SSH_USER}@${HA_SSH_HOST}" "mkdir -p ${remote_path}/dist" 2>/dev/null; then
        log_warning "Could not create remote directory, will try rsync anyway"
    fi
    
    # Build rsync command with proper SSH command
    # Use user@host:path format to explicitly specify the user
    # The -l flag in ssh_cmd ensures SSH connects as the correct user
    local rsync_opts=("-av" "--delete" "--progress" "-e" "$ssh_cmd")
    local addon_dir="$PROJECT_ROOT/add-on"
    local remote_base="${HA_SSH_USER}@${HA_SSH_HOST}:${remote_path}"
    
    # Deploy dist folder
    log_info "Deploying dist files via SSH/rsync to ${remote_base}/dist"
    local remote_dist="${remote_base}/dist/"
    
    if ! rsync "${rsync_opts[@]}" "${BUILD_DIR}/" "$remote_dist"; then
        log_error "Failed to deploy dist files"
        log_info "Check:"
        log_info "  1. SSH connectivity: ssh ${ssh_opts[*]} ${HA_SSH_USER}@${HA_SSH_HOST}"
        log_info "  2. Remote path is correct: ${remote_path}"
        log_info "  3. SSH key is configured if using key authentication"
        log_info "  4. rsync is installed on both local and remote systems"
        exit 1
    fi
    
    # Deploy other add-on files (excluding dist folder)
    log_info "Deploying add-on configuration files via SSH/rsync to ${remote_base}"
    local remote_target="${remote_base}/"
    
    # Build exclude patterns for rsync
    local exclude_opts=(
        "--exclude=dist"
        "--exclude=.DS_Store"
        "--exclude=.git"
        "--exclude=.gitignore"
    )
    
    # Deploy add-on configuration files
    # Capture rsync output to check for permission errors
    local rsync_output
    if ! rsync_output=$(rsync "${rsync_opts[@]}" "${exclude_opts[@]}" "${addon_dir}/" "$remote_target" 2>&1); then
        local rsync_exit=$?
        # Check if it's a permission error
        if echo "$rsync_output" | grep -q "Permission denied\|Operation not permitted"; then
            log_warning "Some add-on configuration files could not be deployed due to permissions"
            log_info "Dist files deployed successfully. To fix permissions, run on remote:"
            log_info "  sudo chown -R ${HA_SSH_USER}:${HA_SSH_USER} ${remote_path}"
        else
            log_warning "Failed to deploy some add-on configuration files (exit code: $rsync_exit)"
            log_info "Dist files deployed successfully. Check SSH connectivity and remote path."
        fi
        # Don't fail the entire deployment if dist was successful
        log_success "Dist files deployed successfully via SSH/rsync"
        return 0
    fi
    
    log_success "All files deployed successfully via SSH/rsync"
}

# Function to deploy files to local mount
deploy_files_local() {
    local target_dir="$HA_ADDON_DIR"
    local addon_dir="$PROJECT_ROOT/add-on"
    
    log_info "Deploying to local directory: $target_dir"
    
    # Check if target directory exists
    if [ ! -d "$target_dir" ]; then
        log_error "Target directory does not exist: $target_dir"
        log_info "Please ensure the add-on directory is mounted or accessible."
        exit 1
    fi
    
    # Check if build directory exists and has content
    if [ ! -d "$BUILD_DIR" ] || [ -z "$(ls -A "$BUILD_DIR" 2>/dev/null)" ]; then
        log_error "Build directory is empty or doesn't exist: $BUILD_DIR"
        log_info "Run build first or remove --skip-build flag"
        exit 1
    fi
    
    # Create target dist directory if it doesn't exist
    local target_dist="${target_dir}/dist"
    mkdir -p "$target_dist"
    
    # Copy dist files
    log_info "Copying dist files from $BUILD_DIR to $target_dist..."
    if command -v rsync &> /dev/null; then
        rsync -av --delete "$BUILD_DIR/" "$target_dist/" || {
            log_warning "rsync failed, using cp instead"
            rm -rf "$target_dist"/*
            cp -r "$BUILD_DIR"/* "$target_dist/"
        }
    else
        log_warning "rsync not available, using cp instead"
        rm -rf "$target_dist"/*
        cp -r "$BUILD_DIR"/* "$target_dist/"
    fi
    
    # Copy other add-on files (excluding dist folder)
    log_info "Copying add-on configuration files from $addon_dir to $target_dir..."
    if command -v rsync &> /dev/null; then
        rsync -av --delete \
            --exclude=dist \
            --exclude=.DS_Store \
            --exclude=.git \
            --exclude=.gitignore \
            "$addon_dir/" "$target_dir/" || {
            log_warning "rsync failed for add-on files, using cp instead"
            # Copy files individually, excluding dist
            find "$addon_dir" -maxdepth 1 -type f ! -name ".DS_Store" -exec cp {} "$target_dir/" \;
        }
    else
        log_warning "rsync not available, using cp instead"
        # Copy files individually, excluding dist
        find "$addon_dir" -maxdepth 1 -type f ! -name ".DS_Store" -exec cp {} "$target_dir/" \;
    fi
    
    log_success "All files deployed successfully"
}

# Function to deploy files (routes to appropriate method)
deploy_files() {
    determine_deploy_mode
    
    if [ "$DEPLOY_MODE" = "ssh" ]; then
        deploy_files_ssh
    else
        deploy_files_local
    fi
}

# Function to restart the add-on via HA Supervisor API
restart_addon() {
    if [ -z "$HA_HOST" ] || [ -z "$HA_TOKEN" ]; then
        log_warning "HA_HOST and HA_TOKEN are required for rebuild/restart"
        log_info "Set them in .deploy-config.local or via --host and --token flags"
        log_info "Alternatively, rebuild and restart the add-on manually from Home Assistant UI"
        return 1
    fi
    
    # Remove trailing slash from HA_HOST
    HA_HOST="${HA_HOST%/}"
    
    # First, rebuild the container to ensure latest changes are included
    log_info "Rebuilding add-on container via Home Assistant API..."
    local rebuild_url="${HA_HOST}/api/hassio/addons/${ADDON_SLUG}/rebuild"
    
    local rebuild_response=$(curl -s -w "\n%{http_code}" -X POST \
        -H "Authorization: Bearer $HA_TOKEN" \
        -H "Content-Type: application/json" \
        "$rebuild_url" 2>/dev/null || echo -e "\n000")
    
    local rebuild_http_code=$(echo "$rebuild_response" | tail -n1)
    local rebuild_body=$(echo "$rebuild_response" | sed '$d')
    
    if [ "$rebuild_http_code" = "200" ] || [ "$rebuild_http_code" = "201" ]; then
        log_success "Add-on container rebuild initiated successfully"
        # Wait a bit for rebuild to start
        sleep 2
    elif [ "$rebuild_http_code" = "401" ] || [ "$rebuild_http_code" = "403" ]; then
        log_error "Authentication failed during rebuild. Check your HA_TOKEN"
        return 1
    elif [ "$rebuild_http_code" = "404" ]; then
        log_warning "Supervisor API not available or add-on not found for rebuild"
        log_info "Skipping rebuild, will attempt restart only"
    else
        log_warning "Failed to rebuild via API (HTTP $rebuild_http_code)"
        log_info "Response: $rebuild_body"
        log_info "Continuing with restart attempt..."
    fi
    
    # Now restart the add-on
    log_info "Restarting add-on via Home Assistant API..."
    local restart_url="${HA_HOST}/api/hassio/addons/${ADDON_SLUG}/restart"
    
    local restart_response=$(curl -s -w "\n%{http_code}" -X POST \
        -H "Authorization: Bearer $HA_TOKEN" \
        -H "Content-Type: application/json" \
        "$restart_url" 2>/dev/null || echo -e "\n000")
    
    local restart_http_code=$(echo "$restart_response" | tail -n1)
    local restart_body=$(echo "$restart_response" | sed '$d')
    
    if [ "$restart_http_code" = "200" ] || [ "$restart_http_code" = "201" ]; then
        log_success "Add-on restart initiated successfully"
        return 0
    elif [ "$restart_http_code" = "401" ] || [ "$restart_http_code" = "403" ]; then
        log_error "Authentication failed during restart. Check your HA_TOKEN"
        return 1
    elif [ "$restart_http_code" = "404" ]; then
        log_warning "Supervisor API not available or add-on not found"
        log_info "You may need to restart the add-on manually from Home Assistant UI"
        return 1
    else
        log_warning "Failed to restart via API (HTTP $restart_http_code)"
        log_info "Response: $restart_body"
        log_info "Please restart the add-on manually from Home Assistant UI"
        return 1
    fi
}

# Main deploy function
deploy() {
    echo ""
    log_info "Starting deployment process..."
    echo ""
    
    build_project
    deploy_files
    
    if [ "$RESTART_ADDON" = true ]; then
        restart_addon || true  # Don't fail if restart fails
    else
        log_info "Add-on rebuild/restart skipped. Rebuild and restart manually from HA UI if needed."
    fi
    
    echo ""
    log_success "Deployment completed!"
    log_info "Next steps:"
    log_info "  1. Rebuild and restart the add-on from Home Assistant UI if not done automatically"
    log_info "  2. Hard refresh your browser (Ctrl+F5 / Cmd+Shift+R) to see changes"
    echo ""
}

# Watch mode
if [ "$WATCH_MODE" = true ]; then
    log_info "Starting watch mode..."
    log_info "Watching for changes in: $PROJECT_ROOT/src"
    log_info "Press Ctrl+C to stop"
    echo ""
    
    # Check if chokidar-cli is available
    if command -v chokidar &> /dev/null || [ -f "$PROJECT_ROOT/node_modules/.bin/chokidar" ] || npx --yes chokidar --version &> /dev/null 2>&1; then
        log_info "Using chokidar for file watching"
        log_info "Watching: $PROJECT_ROOT/src"
        echo ""
        
        # Use chokidar to watch for changes
        if [ -f "$PROJECT_ROOT/node_modules/.bin/chokidar" ]; then
            CHOKIDAR_CMD="$PROJECT_ROOT/node_modules/.bin/chokidar"
        else
            CHOKIDAR_CMD="npx --yes chokidar"
        fi
        
        # Export environment variables for the recursive call
        export HA_HOST HA_TOKEN HA_ADDON_DIR HA_SSH_HOST HA_SSH_USER HA_SSH_PATH HA_SSH_KEY HA_SSH_PORT
        
        # Build the command to run on file changes
        if [ "$RESTART_ADDON" = true ]; then
            RESTART_FLAG="--restart"
        else
            RESTART_FLAG=""
        fi
        
        # Create the change command as a function call with proper argument handling
        CHANGE_CMD="echo '' && echo '🔄 Change detected, rebuilding...' && \"$0\" $RESTART_FLAG"
        if [ -n "$HA_HOST" ]; then
            CHANGE_CMD="$CHANGE_CMD --host \"$HA_HOST\""
        fi
        if [ -n "$HA_TOKEN" ]; then
            CHANGE_CMD="$CHANGE_CMD --token \"$HA_TOKEN\""
        fi
        
        # Run chokidar with the change command
        $CHOKIDAR_CMD "$PROJECT_ROOT/src/**/*" \
            --ignore "**/node_modules/**" \
            --ignore "**/*.swp" \
            --ignore "**/*.swo" \
            --ignore "**/.DS_Store" \
            --debounce 1000 \
            -c "$CHANGE_CMD"
    else
        log_warning "chokidar not available, using simple file watching"
        log_info "Install chokidar-cli for better performance: pnpm add -D chokidar-cli"
        echo ""
        
        # Simple polling-based watch using find
        LAST_MODIFIED=0
        while true; do
            CURRENT_MODIFIED=$(find "$PROJECT_ROOT/src" -type f -not -path "*/node_modules/*" -exec stat -f "%m" {} \; 2>/dev/null | sort -n | tail -1 || echo "0")
            
            if [ "$CURRENT_MODIFIED" -gt "$LAST_MODIFIED" ] && [ "$CURRENT_MODIFIED" != "0" ]; then
                LAST_MODIFIED=$CURRENT_MODIFIED
                echo ""
                log_info "Change detected, rebuilding..."
                deploy
            fi
            
            sleep 2
        done
    fi
else
    deploy
fi
