# ensure permissions
echo ""
echo "======================================"
echo "Ensure permissions"
echo "======================================"
chown -R www-data:www-data /var/www
chmod -R g+w /var/www
echo ""

# install composer dependencies
echo ""
echo "======================================"
echo "Install composer dependencies"
echo "======================================"
php composer.phar install
echo ""

# start php
echo ""
echo "======================================"
echo "Starting PHP"
echo "======================================"
apache2-foreground
echo ""
