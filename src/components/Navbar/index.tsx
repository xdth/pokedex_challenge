import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Logo, Menu, MenuItem } from './styles';
 
const Navbar: React.FC = () => {
  return (
    <>
      <Container>
        <Logo>Pokedex</Logo>
        <Menu>
          <MenuItem>
            <Link to="/about">About</Link>
          </MenuItem>
        </Menu>
      </Container>
    </>
  );
}
 
export default Navbar;