# Use the official PHP image with FPM
FROM php:8.2-fpm

# Install system dependencies and PHP extensions
RUN apt-get update && apt-get install -y \
    libpng-dev libjpeg-dev libfreetype6-dev \
    libicu-dev libzip-dev libonig-dev git unzip \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd intl zip pdo pdo_mysql \
    && rm -rf /var/lib/apt/lists/*

# Install Node.js and npm
# RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
#     && apt-get install -y nodejs \
#     && npm install -g npm@latest

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /var/www/html

# Copy package.json and package-lock.json
# COPY ./backend/package*.json ./

# Install npm dependencies
# RUN npm install

# Copy the rest of the application code
# COPY ./backend /var/www/html

# Run npm build command
# RUN npm run build
# RUN npm run dev

# Expose port 80 for Nginx
# EXPOSE 80