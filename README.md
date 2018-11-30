# React Django REST API Starter
## Summary
This project is intended to solve common issues regarding having a React SPA on top of a Django backend API. It is **less** opinionated, but still includes the latest patterns and architecture.

## Technologies, frameworks, and philosophy
* React
* Django
* DRF (djangorestframework)
* Webpack for ES6
* Babel
* Jest
* SCSS
* Bootstrap
* ESLint
* Pylint


## Project Structure
![structure](doc/project_structure.png)

## Usage
The project is **modular**.  The **UI** and **API** live in two different directories. By default, the **UI** is hosted on port 8080 and automatically proxies **API** requests to port 8000, where the Django app is hosted

1. Start the API
```console
$ cd api
$ python manage.py migrate
$ python manage.py runserver
````

2. Start the UI
```console
$ cd ui
$ npm install
$ npm start
````
visit http://localhost:8080 to view the UI.


## Building for production
During build, Webpack places the React application *inside* the Django app, and then the entire thing can be run as any other Django app.

```console
$ ./build.sh
$ cd api
$ python manage.py runserver
```
After this completes, visiting the Django app displays our UI.