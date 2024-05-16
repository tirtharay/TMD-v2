## Installing Composer

##### For Windows:

###### 1. Download the Composer Installer:

- Go to the Composer website and download the [installer](https://getcomposer.org/Composer-Setup.exe).

###### 2. Install Composer:
- Run the downloaded installer.
- Follow the installation instructions.
- Ensure that PHP is added to your PATH during installation.

###### 3. Verify Installation:
- Open a Command Prompt or PowerShell and run:
```sh
composer --version
```

##### For macOS:
###### 1. Install Composer:

- Open a Terminal and run:
```sh
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('SHA384', 'composer-setup.php') === 'e115a8dc7878896b2a3a23c1b4e8bb7a5a7971e93c105f8a1c1dfcb2ec9d6c5c9b29740e60c8014adf8eb2ff768a8943') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"
sudo mv composer.phar /usr/local/bin/composer
```
###### 2. Verify Installation:

- Run
```sh
composer --version
```

##### For Ubuntu:

###### 1. Install Composer:

Open a Terminal and run:
```sh
sudo apt update
sudo apt install php-cli unzip
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('SHA384', 'composer-setup.php') === 'e115a8dc7878896b2a3a23c1b4e8bb7a5a7971e93c105f8a1c1dfcb2ec9d6c5c9b29740e60c8014adf8eb2ff768a8943') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"
sudo mv composer.phar /usr/local/bin/composer
```
###### 2. Verify Installation:

- Run
```sh
composer --version
```
