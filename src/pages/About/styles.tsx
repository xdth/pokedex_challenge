import styled from 'styled-components';
 
export const About = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  width: 80%;
  min-height: 600px;
  margin: auto;
  padding-top: 50px;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.5);

  a {
    text-decoration: none;
    color: #ffffff;
  }
  
  a:hover {
    text-decoration: underline;
  }

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

  h1 {
    margin-bottom: 30px;
  }

  h3 {
    padding-top: 20px;
  }
`;