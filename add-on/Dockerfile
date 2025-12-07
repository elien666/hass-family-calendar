ARG BUILD_FROM
FROM ${BUILD_FROM:-homeassistant/amd64-base:latest}

# Install Python 3 and pip
# Note: bashio is already available in the Home Assistant base image
RUN apk add --no-cache \
    python3 \
    py3-pip

# Create directories for static files and backend
RUN mkdir -p /usr/local/apache2/htdocs

# Copy static files (frontend dist)
COPY dist /usr/local/apache2/htdocs/

# Copy backend code and install Python dependencies
COPY ./backend /app/backend
WORKDIR /app
# Use --break-system-packages flag for Python 3.12+ (PEP 668)
# This is safe in Docker containers as they are isolated
RUN pip3 install --no-cache-dir --break-system-packages -r backend/requirements.txt

# Set permissions
RUN chmod -R a+r /usr/local/apache2/htdocs

# Create s6 service to run FastAPI
RUN mkdir -p /etc/services.d/app && \
    echo '#!/command/with-contenv bash' > /etc/services.d/app/run && \
    echo 'cd /app' >> /etc/services.d/app/run && \
    echo 'exec python3 -m uvicorn backend.main:app --host 0.0.0.0 --port 80' >> /etc/services.d/app/run && \
    chmod +x /etc/services.d/app/run