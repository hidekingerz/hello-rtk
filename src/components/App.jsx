import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout';
import Navigation from './Navigation';
import { Main } from '../features/main/main';
import { PokemonList, ReadOnlyPokemon } from '../features/pokemon/pokemon';

const Sub = () => {
  return (
    <React.Fragment>
      <div>sub</div>;
      <Navigation />
    </React.Fragment>
  );
};

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="main" element={<Main />} />
        <Route path="sub" element={<Sub />} />
        <Route path="pokemon" element={<PokemonList />} />
        <Route path="ro" element={<ReadOnlyPokemon />} />
      </Route>
    </Routes>
  );
}
