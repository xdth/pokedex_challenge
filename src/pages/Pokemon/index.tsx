import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import LoadingAnimation from '../../components/LoadingAnimation';
import api from '../../services/api';
import { Pokemon } from './styles';
import arrowLeft from '../../assets/arrow-left.svg';

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
  const [loadingAnimation, setLoadingAnimation] = useState<boolean>(true);

  const { params } = useRouteMatch<IPokemonParams>();

  useEffect(() => {
    params.id 
    && api.get(`pokemon/${params.id}`)
    .then(response => {
      setPokemon(response.data);
    })
    .catch(err => console.log(err));
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
      }).then(() => setLoadingAnimation(false))
      .catch(err => console.log(err));
    }
  }, [species.evolution_chain_url]);

  return (
    <>
      {pokemon && (
        <Pokemon data-testid="page-pokemon">
          <Link id="go-back" to="/">
            <img src={arrowLeft} alt="arrowLeft" />
            Back
          </Link>
          <section>
            {loadingAnimation && <LoadingAnimation />}
            {/* <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt={pokemon.name} /> */}
            {pokemon.id && <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} alt={pokemon.name} />}
              <div>
                <h1 data-testid="page-pokemon-container-name">{pokemon.name}</h1>
                <p id="flavor-text">{species.flavor_text}</p>
                <div data-testid="page-pokemon-container-evolution">
                  <strong>Evolution chain</strong>
                  <ul>
                  {evolution.map(chain => (
                    chain.id ?
                    <li key={chain.id}>
                      <a href={`/pokemon/${chain.id}`} >{chain.name}</a>
                    </li>
                    : ''
                  ))}
                  </ul>
                </div>
              </div>
              <div>
                <strong data-testid="page-pokemon-container-types">Types:</strong>
                <ul>
                  {pokemon.types && pokemon.types.map(item => <li key={item.type.name}>{item.type.name}</li>)}  
                </ul>            
              </div>
          </section>
        </Pokemon>
      )}
    </>
  );
}