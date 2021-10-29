import React, { useState, useRef, useCallback } from "react";
import { Pokemons, Pokemon, PaginationButtons, PreviousPage, NextPage } from './styles';
import usePokemonSearch from "../../hooks/usePokemonSearch";
import { Link } from 'react-router-dom';
import { PokemonListProvider, usePokemonList } from '../../hooks/pokemonList';
import arrowLeft from '../../assets/arrow-left.svg';
import arrowRight from '../../assets/arrow-right.svg';
import LoadingAnimation from '../../components/LoadingAnimation';

const PokemonsList = () => {
  const { pokemonsList, handleNextPage, handlePreviousPage, nextPage, previousPage, loadingAnimation } = usePokemonList();
  const [pageNumber, setPageNumber] = useState(1);
  const { pokemons, hasMore, loading, error } = usePokemonSearch(pageNumber);
  
  const observer = useRef();
  const lastPokemonRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <>
      <PokemonListProvider>
        <Pokemons data-testid="page-pokemonlist">
          {pokemons.map((pokemon, index) => {
             if (pokemons.length === index + 1) {
              return (
                <Link to={`/pokemon/${parseInt(pokemon.url.split("/")[6])}`} key={pokemon.url}>
                  <div ref={lastPokemonRef}>
                  {
                    
                    loadingAnimation 
                    ? <LoadingAnimation /> 
                    : <Pokemon>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${parseInt(pokemon.url.split("/")[6])}.png`} alt={pokemon.name} />
                        <strong>{pokemon.name}</strong>
                      </Pokemon>
                  }
                  </div>
                </Link>
              );
             }else{
              return (
                <Link to={`/pokemon/${parseInt(pokemon.url.split("/")[6])}`} key={pokemon.url}>
                  <div>
                  {
                    
                    loadingAnimation 
                    ? <LoadingAnimation /> 
                    : <Pokemon>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${parseInt(pokemon.url.split("/")[6])}.png`} alt={pokemon.name} />
                        <strong>{pokemon.name}</strong>
                      </Pokemon>
                  }
                  </div>
                </Link>
              );

             }
            
          })}
        </Pokemons>
       
      </PokemonListProvider>
    </>
  );
}
 
export default PokemonsList;