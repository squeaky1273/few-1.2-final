// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom'
import Title from './components/Title/Title';
import PokemonList from './components/PokemonList/PokemonList';
import PokemonDetail from './components/PokemonDetail/PokemonDetail';

function App() {
  return (
    <Router>
      <div className="App">
          <Title />
          <Route exact path="/" component={PokemonList}/>
          <Route path="/details/:id" component={PokemonDetail} />
      </div>
    </Router>
  );
}

export default App;
