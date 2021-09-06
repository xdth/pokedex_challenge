import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Routes from './routes';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Navbar />
      <Routes />
      <Footer />
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;