# TMD V2

The objective of this challenge is to implement a mini site using Wordpress 6.3 or higher. The site should contain information about movies and actors. The site 
shows information about the latest and most popular movies and actors, by receiving data from a third party API. The API I used is from 
https://developers.themoviedb.org/3 
✨Magic ✨

## Features

- Clone the Git repository to your local machine.
```sh
git clone https://github.com/tirtharay/TMD-v2.git
```
- Make sure you have Docker and Composer installed.
[Install](https://docs.docker.com/engine/install/) - Docker
[Install](https://getcomposer.org/download/) - Composer
- Navigate to the cloned repository folder.
```sh
cd tmd ( for example)
```
- Drag and drop markdown and HTML files into Dillinger
- Export documents as Markdown, HTML and PDF

## Running Your WordPress Instance
- Execute the following command to start your WordPress instance
```sh
docker-compose up -d
```
- Once the command completes, access your WordPress site by opening your web browser to
```sh
localhost:8000
```
## Setting Up WordPress on Your Local Machine
-Install WordPress on your local machine.
```sh
(Thanks to the volume mapping configured in our docker-compose.yml, the wp-content directory from the Docker container synchronizes with your local machine. This means any changes you make locally to plugins, themes, or other files will be reflected in the Docker WordPress instance, and vice versa.)
```
- When you're finished, you can stop the services using
```sh
docker-compose down
```
- To start them up again
```sh
docker-compose up -d
```
## Importing the .sql File


## Mandatory Features

- [X] The homepage must show the next 10 upcoming movies, separated by month and year of release.
- [X] The homepage must show the top 10 most popular actors.
- [X] Each displays the following: movie poster, movie title, date of release and genre on hover over the movie poster.
- [X] Each actor should display the actor’s photo and name.
- [X] The movie list page should list all movies in the site, ordered by title.
- [X] Movies should be filterable by name, year, genre and title.
- [X] The actors list page should list all actors ordered by name.
- [X] Actors are filterable by name and movie..

## Bonus
- [X] Users can register using default Wordpress system 
- [X] Users can search Movies and Actors by clieking on the Search Icon
