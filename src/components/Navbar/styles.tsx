import styled from 'styled-components';
 
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  color: #F1F1F1;
  margin-bottom: 30px;


  @media (max-width: 800px) {
  
  }
  
  @media (max-width: 600px) {
    #logo {
      font-size: 5vw;
    }
  }
  `;
export const Logo = styled.div`
  margin-left: 30px;
  font-family: 'Press Start 2P', cursive;
  font-size: 40px;

  span {
    color: #9a009a;
  }
`;
 
export const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
`;
 
export const MenuItem = styled.div`
  margin-right: 30px;
  font-size: 1em;

  a {
    text-decoration: none;
    color: #ffffff;

    &:hover {
    text-decoration: underline;
    }
  }
  
`;