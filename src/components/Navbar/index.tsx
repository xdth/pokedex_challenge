import React from 'react';
import { Container, Logo } from './styles';
 
const Navbar: React.FC = () => {
  return (
    <>
      <Container>
        <Logo id="logo"><b>Pokedex</b><span>Lite</span></Logo>
      </Container>
    </>
  );
}
 
export default Navbar;