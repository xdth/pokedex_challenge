import React from 'react';
import { Pokemons, Pokemon, PaginationButtons, PreviousPage, NextPage } from './styles';
import { Link } from 'react-router-dom';
import { PokemonListProvider, usePokemonList } from '../../hooks/pokemonList';
import arrowLeft from '../../assets/arrow-left.svg';
import arrowRight from '../../assets/arrow-right.svg';

const PokemonsList: React.FC = () => {
  const { pokemonsList, handleNextPage, handlePreviousPage, nextPage, previousPage } = usePokemonList();

  return (
    <>
      <PokemonListProvider>
        <Pokemons data-testid="page-pokemonlist">
          {pokemonsList.map(pokemon => (
            <Link to={`/pokemon/${pokemon.id}`} key={pokemon.url}>
              <Pokemon>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={pokemon.name} />
                <strong>{pokemon.name}</strong>
              </Pokemon>
            </Link>
          ))}
        </Pokemons>
        <PaginationButtons>
          {previousPage && <PreviousPage onClick={handlePreviousPage}>
            <img src={arrowLeft} alt="arrowLeft" />
            Previous
          </PreviousPage>}
          {nextPage && <NextPage onClick={handleNextPage}>
            Next
            <img src={arrowRight} alt="arrowRight" />
          </NextPage>}
        </PaginationButtons>
      </PokemonListProvider>
    </>
  );
}
 
export default PokemonsList;