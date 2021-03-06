import React from 'react';
import { Link } from 'react-router-dom';
import { About } from './styles';
import arrowLeft from '../../assets/arrow-left.svg';

export default function AboutPage() {
  return (
    <>
      <About data-testid="page-about">
        <Link id="go-back" to="/">
          <img src={arrowLeft} alt="arrowLeft" />
          Back
        </Link>
        <section>
          <h1>About Page</h1>
          <p>This app was created as a code challenge by Lucas "dth" Lopes in September 7, 2021.</p>
          <p>It uses multiple modern technologies, such as React JS and TypeScript.</p>
          <p>Its state management is obtained with the Context API. Unit tests are written with Jest and React Testing Library.</p>
          <p>Read more in the GitHub repository's README file for the project.</p>
          <h3>Links</h3>
          <ul>
            <li><a href="https://github.com/xdth/pokedex_challenge">GitHub Repository</a></li>
            <li><a href="https://pokedex.dthlabs.com/">Online demo</a></li>
          </ul>
          <p></p>
        </section>
      </About>
    </>
  );
}