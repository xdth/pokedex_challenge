import React, { createContext, useCallback, useState, useContext, useEffect } from 'react';
import api from '../services/api';

interface IPokemon {
  id: number;
  name: string;
  url: string;
  evolution?: {
    name: string;
    evolution_url: string;
  };
}

interface IPokemonListContextData {
  pokemonsList: IPokemon[];
  handlePreviousPage(): void;
  handleNextPage(): void;
  previousPage: string | null;
  nextPage: string | null;
  loadingAnimation: boolean;
}

const PokemonListContext = createContext<IPokemonListContextData>({} as IPokemonListContextData);

const PokemonListProvider: React.FC = ({ children }) => {
  const [pokemonsList, setPokemonsList] = useState<IPokemon[]>([]);
  const [currentPage, setCurrentPage] = useState<string>('pokemon?offset=0&limit=27');
  const [previousPage, setPreviousPage] = useState<string | null>(null);
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [loadingAnimation, setLoadingAnimation] = useState<boolean>(false);

  useEffect(() => {
    setLoadingAnimation(true);
    api.get(currentPage).then(response => {
      response.data.previous ? setPreviousPage(response.data.previous) : setPreviousPage(null);
      response.data.next && setNextPage(response.data.next);

      let pokemonsList = response.data.results;
      for (let pokemon of pokemonsList) {
        let splittedUrl = pokemon.url.split("/");
        pokemon.id = parseInt(splittedUrl[6]);
      }
      setPokemonsList(pokemonsList);
    }).then(() => setLoadingAnimation(false));
  }, [currentPage]);

  const handlePreviousPage = useCallback(() => {
    previousPage && setCurrentPage(previousPage);
  }, [previousPage]);
  
  const handleNextPage = useCallback(() => {
    nextPage && setCurrentPage(nextPage);
  }, [nextPage]);

  return (
    <PokemonListContext.Provider value={{ 
      pokemonsList, 
      previousPage, 
      nextPage, 
      handlePreviousPage, 
      handleNextPage, 
      loadingAnimation
      }}>
      {children}
    </PokemonListContext.Provider>
  );
};

function usePokemonList(): IPokemonListContextData {
  const context = useContext(PokemonListContext);

  if (!context) {
    throw new Error('usePokemonList must be used within an PokemonListProvider');
  }

  return context;
}

export { PokemonListProvider, usePokemonList };