cd /home/elien/hass-family-calendar
git pull

echo Cleaning target folder
rm -rf /var/www/html/*

echo Deploying site
cp -R build/* /var/www/html/.