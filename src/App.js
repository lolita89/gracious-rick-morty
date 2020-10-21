import React from 'react';
import CharacterList from './components/CharacterList';
import { Route } from 'react-router-dom';

export default function App() {
  return (
  <main>
      <Route path="" component={CharacterList} />
  </main>
  );
}
