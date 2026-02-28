ARG BUILD_FROM
# hadolint ignore=DL3006
FROM ${BUILD_FROM}

# Install Python 3 and pip, create static files directory
# Note: bashio is already available in the Home Assistant base image
# hadolint ignore=DL3018
RUN apk add --no-cache python3 py3-pip \
    && mkdir -p /usr/local/apache2/htdocs

# Copy static files (frontend dist)
COPY dist /usr/local/apache2/htdocs/

# Copy backend code and install Python dependencies
COPY ./backend /app/backend
WORKDIR /app
# Use --break-system-packages flag for Python 3.12+ (PEP 668)
# This is safe in Docker containers as they are isolated
RUN pip3 install --no-cache-dir --break-system-packages -r backend/requirements.txt \
    && chmod -R a+r /usr/local/apache2/htdocs

# Copy rootfs overlay (S6-overlay v3 service definitions)
COPY rootfs /