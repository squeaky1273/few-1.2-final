// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Title from './components/Title/Title';
import PokemonList from './components/PokemonList/PokemonList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
      </header>
      <div className="PokemonList">
        <PokemonList />
      </div>
    </div>
  );
}

export default App;
