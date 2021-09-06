import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { PokemonListProvider } from '../hooks/pokemonList';

import PokemonsList from '../pages/PokemonsList';
import Pokemon from '../pages/Pokemon';
import About from '../pages/About';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/about" component={About} />
    <Route path="/pokemon/:id" component={Pokemon} />
    <PokemonListProvider>
      <Route path="/" exact component={PokemonsList} />
    </PokemonListProvider>
  </Switch>
);

export default Routes;
