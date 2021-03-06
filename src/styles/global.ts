import { createGlobalStyle } from 'styled-components';
import BackgroundImage from '../assets/background.jpg';
 
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
 
  #root {
    margin: 0 auto;
  }
 
  html {
    background: url(${BackgroundImage}) no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    font-family: 'Signika', sans-serif;
  }

  body {
    height: 100%;
  }

  h1, h2 {
    font-family: 'Press Start 2P', cursive;
    font-size: 15px;
  }
`;