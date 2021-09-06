import React from 'react';
import { Pokemons, PreviousPage, NextPage } from './styles';
import { Link } from 'react-router-dom';
import { PokemonListProvider, usePokemonList } from '../../hooks/pokemonList';
 
const PokemonsList: React.FC = () => {
  const { pokemonsList, handleNextPage, handlePreviousPage } = usePokemonList();

  return (
    <>
      <PokemonListProvider>
        <Pokemons>
          <h4>Name</h4>
          {pokemonsList.map(pokemon => (
            <div key={pokemon.url}>
              <Link to={`/pokemon/${pokemon.id}`}>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={pokemon.name} />
                <strong>{pokemon.name}</strong>
              </Link>
            </div>
          ))}
        </Pokemons>
        <div>
          {<PreviousPage onClick={handlePreviousPage}>Previous</PreviousPage>}
          {<NextPage onClick={handleNextPage}>Next</NextPage>}
          <br/>
          <br/>
          <br/>
        </div>
      </PokemonListProvider>
    </>
  );
}
 
export default PokemonsList;