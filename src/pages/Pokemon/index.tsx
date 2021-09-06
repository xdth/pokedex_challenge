import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import api from '../../services/api';
import { Pokemon } from './styles';

interface IPokemonParams {
  id: string;
}

interface IPokemonType {
  type: {
    name: string;
    url: string;
  };
}

interface IPokemon {
  id: number;
  name: string;
  url: string;
  types: IPokemonType[];
  species?: {
    name: string;
    url: string;
  };
  height: number;
  weight: number;
}

interface ISpecies {
  evolution_chain_url: string;
  flavor_text: string;
}

interface IEvolution {
  id: number;
  name: string;
}

export default function PokemonPage() {
  const [pokemon, setPokemon] = useState<IPokemon>({} as IPokemon);
  const [species, setSpecies] = useState<ISpecies>({} as ISpecies);
  const [evolution, setEvolution] = useState<IEvolution[]>([] as IEvolution[]);

  const { params } = useRouteMatch<IPokemonParams>();

  useEffect(() => {
    params.id && api.get(`pokemon/${params.id}`).then(response => {
      setPokemon(response.data);
    });
  }, [params.id]);

  useEffect(() => {
    if (pokemon.species?.url) {
      let splittedUrl = pokemon.species?.url.split("/");
      let speciesId = parseInt(splittedUrl[6]);

      api.get(`pokemon-species/${speciesId}`).then(response => {
        setSpecies({
          evolution_chain_url: response.data.evolution_chain.url,
          flavor_text: response.data.flavor_text_entries[0].flavor_text
        });
      });
    }
  }, [pokemon.species?.url]);

  useEffect(() => {
    if (species.evolution_chain_url) {
      let splittedUrl = species.evolution_chain_url.split("/");
      let speciesId = parseInt(splittedUrl[6]);

      api.get(`evolution-chain/${speciesId}`).then(response => {
        let evolutionFirstSplitted: string;
        let evolutionFirstId: number;
        let evolutionFirstName: string;
        if (typeof response.data.chain.species.url !== 'undefined') {
          evolutionFirstSplitted = response.data.chain.species.url.split("/");
          evolutionFirstId = parseInt(evolutionFirstSplitted[6]);
          evolutionFirstName = response.data.chain.species.name;
        } else {
          evolutionFirstId = 0;
          evolutionFirstName = '';
        }

        let evolutionSecondSplitted: string;
        let evolutionSecondId: number;
        let evolutionSecondName: string;
        if (typeof response.data.chain.evolves_to[0] !== 'undefined') {
          evolutionSecondSplitted = response.data.chain.evolves_to[0].species.url.split("/");
          evolutionSecondId = parseInt(evolutionSecondSplitted[6]);
          evolutionSecondName = response.data.chain.evolves_to[0].species.name;
        } else {
          evolutionSecondId = 0;
          evolutionSecondName = '';
        }

        let evolutionThirdSplitted: string;
        let evolutionThirdId: number;
        let evolutionThirdName: string;
        if (typeof response.data.chain.evolves_to[0] !== 'undefined' 
            && typeof response.data.chain.evolves_to[0].evolves_to[0] !== 'undefined') {
          evolutionThirdSplitted = response.data.chain.evolves_to[0].evolves_to[0].species.url.split("/");
          evolutionThirdId = parseInt(evolutionThirdSplitted[6]);
          evolutionThirdName = response.data.chain.evolves_to[0].evolves_to[0].species.name;
        } else {
          evolutionThirdId = 0;
          evolutionThirdName = '';
        }

        setEvolution([
          {
            id: evolutionFirstId,
            name: evolutionFirstName,
          },
          {
            id: evolutionSecondId,
            name: evolutionSecondName,
          },
          {
            id: evolutionThirdId,
            name: evolutionThirdName,
          }
        ]);
      });
    }
  }, [species.evolution_chain_url]);

  return (
    <>
      <Link to="/">Back</Link>
      {pokemon && (
        <Pokemon>
          <header>
            {/* <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt={pokemon.name} /> */}
            {pokemon.id && <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} alt={pokemon.name} />}
            <div>
              <strong>{pokemon.name}</strong>
              <p>{species.flavor_text}</p>
              {evolution.map(chain => (
                <p key={chain.id}>
                  <a href={`/pokemon/${chain.id}`} >{chain.id} - {chain.name}</a>
                </p>
              ))}
            </div>
            <div>
              <p>Types:</p>
              {pokemon.types && pokemon.types.map(item => <p key={item.type.name}>{item.type.name}</p>)}              
            </div>
          </header>
          <ul>
            <li>
              <strong>{pokemon.height}</strong>
              <span>Height</span>
            </li>
            <li>
              <strong>{pokemon.weight}</strong>
              <span>Weight</span>
            </li>
          </ul>
        </Pokemon>
      )}
    </>
  );
}