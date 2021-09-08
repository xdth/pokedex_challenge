import React from 'react';
import { Link } from 'react-router-dom';
import { About } from './styles';

export default function AboutPage() {
  return (
    <>
      <About data-testid="page-about">About: Lorem ipsum dolor sit amet <Link to="/">Back</Link></About>
      <h1>About Page</h1>
    </>
  );
}