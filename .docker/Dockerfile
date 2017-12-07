# base image to use
FROM php:7.0-apache

# add the working directory
ADD . /var/www/html
WORKDIR /var/www/html

# install composer
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" \
    php -r "if (hash_file('SHA384', 'composer-setup.php') === '669656bab3166a7aff8a7506b8cb2d1c292f042046c5a994c43155c0be6190fa0355160742ab2e1c88d40d5be660b410') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;" \
    php composer-setup.php --install-dir=/bin \
    php -r "unlink('composer-setup.php');"

# make sure we have the .composer directory for cache
RUN mkdir -p /var/www/.composer \
	&& chgrp -R www-data /var/www/.composer \
	&& chmod -R g+w /var/www/.composer

# permissions
RUN chgrp -R www-data /var/www/html \
	&& chmod -R g+w /var/www/html

# install packages
RUN apt-get update \
	&& apt-get install zip unzip sudo git zlib1g-dev libfreetype6-dev libjpeg62-turbo-dev libpng12-dev -y

# Install GD
RUN docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/
RUN docker-php-ext-install gd

# enable some extensions
RUN sudo a2enmod rewrite
RUN	sudo a2enmod expires
RUN	sudo a2enmod headers
