ARG BUILD_FROM
FROM ${BUILD_FROM:-homeassistant/amd64-base:latest}

# Install Apache and required tools
RUN apk add --no-cache \
    apache2 \
    apache2-utils \
    sed

# Create Apache directories matching httpd:2.4 structure
RUN mkdir -p /usr/local/apache2/htdocs /usr/local/apache2/conf /usr/local/apache2/logs /run/apache2

# Copy files
COPY dist /usr/local/apache2/htdocs/
COPY ./my-httpd.conf /usr/local/apache2/conf/httpd.conf
COPY ./run.sh /run.sh

# Set permissions
RUN chmod a+x /run.sh && \
    chown -R apache:apache /usr/local/apache2/htdocs /usr/local/apache2/logs

# Set entrypoint
ENTRYPOINT ["/run.sh"]