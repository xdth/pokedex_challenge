import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Pokemon from '../../pages/Pokemon';

describe("Pokemon page", () => {
  it('should render the Pokemon page', () => {
    render(<BrowserRouter><Pokemon /></BrowserRouter>);
    const pokemonElement = screen.getByTestId('page-pokemon');
    expect(pokemonElement).toBeInTheDocument();
    expect(pokemonElement).toHaveTextContent('Pokemon');
  });

  it('should render the Pokemon\'s name container', () => {
    render(<BrowserRouter><Pokemon /></BrowserRouter>);
    const pokemonElement = screen.getByTestId('page-pokemon-container-name');
    expect(pokemonElement).toBeInTheDocument();
  });

  it('should render the Pokemon\'s type container', () => {
    render(<BrowserRouter><Pokemon /></BrowserRouter>);
    const pokemonElement = screen.getByTestId('page-pokemon-container-types');
    expect(pokemonElement).toBeInTheDocument();
  });

  it('should render the Pokemon\'s evolution container', () => {
    render(<BrowserRouter><Pokemon /></BrowserRouter>);
    const pokemonElement = screen.getByTestId('page-pokemon-container-evolution');
    expect(pokemonElement).toBeInTheDocument();
  });
});