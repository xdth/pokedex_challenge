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


## Online demo

<a href="https://pokedex.dthlabs.com" alt="PokedexLite app demo">https://pokedex.dthlabs.com</a>

## Features

- Amazing design, with beautiful fonts, perfectly mixing modernity to a retro vibe
- State management: 
  ■ passing states down to components available in specific routes
  ■ state manipulation from children nodes via callback function passed through with the context
- Pagination
- Media queries, responsive design
- LoadingAnimation (entirely in CSS3 for faster rendering)
- SVG images (local) for faster rendering
- Basic unit testing
- and more..

## Unit tests

I did not have a lot of time to complete the challenge and testing was not a requirement. I still added a few basic
tests nonetheless.

  Pokemon page
    ✓ should render the Pokemon page
    ✓ should render the Pokemon's name container
    ✓ should render the Pokemon's type container
    ✓ should render the Pokemon's evolution container

  About page
    ✓ should render the About page

  <img src="https://i.imgur.com/XihDs7N.png" alt="screenshot">

## Screenshots

 <table style="width:100%; border: none;">
  <tr style="border: none;">
    <td style="border: none;">
      <img src="https://i.imgur.com/D9L3ZzQ.png" alt="screenshot">
    </td>
    <td style="border: none;">
      <img src="https://i.imgur.com/mvwAmX3.png" alt="screenshot">
    </td>
  </tr>
  <tr style="border: none;">
    <td style="border: none;">
      <img src="https://i.imgur.com/n4yLF0n.png" alt="screenshot">
    </td>
    <td style="border: none;">
      <img src="https://i.imgur.com/0b5WYaH.png" alt="screenshot">
    </td>
  </tr>
</table> 


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
<pre>
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
</pre>