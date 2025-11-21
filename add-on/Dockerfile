ARG BUILD_FROM
FROM ${BUILD_FROM:-homeassistant/amd64-base:latest}

# Install Apache and required tools
# Install Apache base packages and module packages for proxy, SSL, and proxy_html
RUN apk add --no-cache \
    apache2 \
    apache2-utils \
    apache2-proxy \
    apache2-proxy-html \
    apache2-ssl \
    sed \
    gawk

# Create Apache directories matching httpd:2.4 structure
RUN mkdir -p /usr/local/apache2/htdocs /usr/local/apache2/conf /usr/local/apache2/logs /run/apache2

# Copy files
COPY dist /usr/local/apache2/htdocs/
COPY ./my-httpd.conf /usr/local/apache2/conf/httpd.conf
COPY ./run.sh /run.sh

# Verify Apache modules are installed (for debugging)
RUN ls -la /usr/lib/apache2/mod_*.so 2>/dev/null | head -30 || echo "Note: Some modules may be in /usr/libexec/apache2"

# Set permissions
RUN chmod a+x /run.sh && \
    chown -R apache:apache /usr/local/apache2/htdocs /usr/local/apache2/logs

# Create s6 service to run our script
# This allows s6 to initialize properly before running the script
RUN mkdir -p /etc/services.d/app && \
    echo '#!/command/with-contenv bash' > /etc/services.d/app/run && \
    echo 'exec /run.sh' >> /etc/services.d/app/run && \
    chmod +x /etc/services.d/app/run