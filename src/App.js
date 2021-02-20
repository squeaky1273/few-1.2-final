// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Title from './components/Title/Title';
import PokemonList from './components/PokemonList/PokemonList';

function App() {
  return (
    <div className="App">
        <Title />
        <PokemonList />
    </div>
  );
}

export default App;
