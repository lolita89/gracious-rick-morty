import React from 'react';
import RickAndMortyPage from './components/RickAndMortyPage';
import { Route } from 'react-router-dom';

export default function App() {
  return (
  <main>
      <Route path="" component={RickAndMortyPage} />
  </main>
  );
}
