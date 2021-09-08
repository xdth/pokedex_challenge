<h3 align="center">
  Pokedex|Lite
</h3>

<p align="center">
  <a href="https://dthlabs.com">
    <img alt="Made by dthlabs" src="https://img.shields.io/badge/made%20by-dthlabs-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">
</p>



# Pokedex|Lite

This is a "lite" pokedex that I created for a code challenge. It uses Context API and custom hooks for state management, styled-components for the CSS-in-JS, routes, etc..

## Features

- Customised fonts old school, gaming
- media queries, responsive design
- state management, passing states to specific routes, state manipulation from child nodes via callback function
- LoadingAnimation - entirely in CSS3
- Unit testing

## Unit tests

I did not have a lot of time to complete the challenge and testing was not a requirement. I still added a few basic
tests.

  Pokemon page
    ✓ should render the Pokemon page
    ✓ should render the Pokemon's name container
    ✓ should render the Pokemon's type container
    ✓ should render the Pokemon's evolution container

  About page
    ✓ should render the About page

## Clone and run

To run this project, just clone the repository, cd into it on your local machine and download all dependencies by simply typing:

`git clone https://github.com/xdth/pokedex_challenge.git`
`cd pokedex_challenge`
`yarn`

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

For production, you might need to add something like the .htaccess below:

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
