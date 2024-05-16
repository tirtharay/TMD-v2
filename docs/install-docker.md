## Installing Docker

##### For Windows:

###### 1. Download Docker Desktop:

- Go to the Docker Desktop for Windows download page.
- Download the Docker Desktop installer.

###### 2. Install Docker Desktop:
- Run the downloaded installer.
- Follow the installation instructions.
- When prompted, ensure that you enable the required Windows components for WSL 2.

###### 3. Start Docker Desktop:

- After installation, launch Docker Desktop.
- Follow the onboarding tutorial in Docker Desktop.

###### 4. Verify Installation:

- Open a Command Prompt or PowerShell and run:
```sh
docker --version
docker-compose --version
```

##### For macOS:
###### 1. Download Docker Desktop:

- Go to the Docker Desktop for Mac download page.
- Download the Docker Desktop .dmg file.

###### 2. Install Docker Desktop:

- Open the downloaded .dmg file.
- Drag the Docker icon to the Applications folder.

###### 3. Start Docker Desktop:

- Launch Docker Desktop from the Applications folder.
- Follow the onboarding tutorial in Docker Desktop.

###### 4. Verify Installation:

Open a Terminal and run:
```sh
docker --version
docker-compose --version
```

##### For Ubuntu:

###### 1. Update the Package Index:

Open a Terminal and run:
```sh
sudo apt-get update
```
###### 2. Install Required Packages:

Run:
```sh
sudo apt-get install \
  ca-certificates \
  curl \
  gnupg \
  lsb-release
```

###### 3. Add Docker’s Official GPG Key:

Run:
```sh
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
```

###### 4. Set Up the Stable Repository:

Run:
```sh
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

###### 5. Install Docker Engine:
Run:
```sh
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io
```

###### 6. Install Docker Compose:

Run:
```sh
sudo curl -L "https://github.com/docker/compose/releases/download/v2.3.3/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

###### 7. Verify Installation:

Run:
```sh
docker --version
docker-compose --version
```
