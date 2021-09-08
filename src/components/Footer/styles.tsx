import styled from 'styled-components';
 
export const Container = styled.div`
  height: 70px;
  color: #F1F1F1;
  width: 100%;
`;
 
export const FooterNav = styled.div`
  display: flex;
  justify-content: flex-end;
`;
 
export const FooterNavItem = styled.div`
  margin: 30px 30px 0px 0px;
  font-size: 1em;
  a {
    color: #ffffff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;