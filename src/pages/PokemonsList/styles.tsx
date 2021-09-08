import styled from 'styled-components';
 
export const Pokemons = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  a {
    color: #ffffff;
    text-decoration: none;
    color: #ffffff;
    background: orange;
    width: 150px;
    margin: 10px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.5); /* Color white with alpha 0.9*/
    img {
    }
  }

  @media (max-width: 600px) {
    a {
      width: 100px;
      margin: 10px;
    }
  }
`;
 
export const Pokemon = styled.div`
  color: #ffffff;
  strong {
    display: flex;
    justify-content: center;
    padding-bottom: 10px;
  }
`;
 
export const PaginationButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-left: 10%;
  width: 80%;

  button {
    background: none;
    border: none;
  }

  img {
    width: 100px;
  }
  
  @media (max-width: 600px) {
    img {
      width: 80px;
    }
  }
`;

export const PreviousPage = styled.button`
  color: #ffffff;
  width: 300px;
  height: 150px;
  cursor: pointer;
  font-family: 'Press Start 2P', cursive;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
 
export const NextPage = styled.button`
  color: #ffffff;
  width: 300px;
  height: 150px;
  margin-left: 10px;
  cursor: pointer;
  font-family: 'Press Start 2P', cursive;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;