import styled from 'styled-components';
 
export const Pokemon = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 80%;
  min-height: 600px;
  margin: auto;
  padding-top: 50px;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.5);

  #go-back {
    margin-left: auto;
    width: 150px;
    height: 50px;
    cursor: pointer;
    font-family: 'Press Start 2P', cursive;
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 50px;
    }
  }
  
  img {
    height: 300px;
  }

  h1 {
    font-size: 35px;
    margin-bottom: 25px;
    color: #9a009a;
  }

  #flavor-text {
    font-size: 20px;
    margin-bottom: 25px;
  }

  strong {
    color: #9a009a;
  }

  ul {
    list-style-type: square;
    margin: 0px 0px 30px 30px;
  }

  a {
    text-decoration: none;
    color: #ffffff;
  }
  
  a:hover {
    text-decoration: underline;
  }
`;