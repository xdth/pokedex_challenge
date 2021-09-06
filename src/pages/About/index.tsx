import React from 'react';
import { Link } from 'react-router-dom';
import { About } from './styles';

export default function AboutPage() {
  return (
    <>
      <About>Lorem ipsum dolor sit amet <Link to="/">Back</Link></About>
      <h1>About Page</h1>
    </>
  );
}