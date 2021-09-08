import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container, FooterNav, FooterNavItem } from './styles';
 
interface IURLParams {
  id: string;
}

const Footer: React.FC = () => {
  const { pathname } = useLocation<IURLParams>();
  
  return (
    <>
      <Container>
        <FooterNav>
          <FooterNavItem>
            {pathname !== '/about' && <Link to="/about">About</Link>}
          </FooterNavItem>
        </FooterNav>
      </Container>
    </>
  );
}
 
export default Footer;