import React from 'react'
import './PokemonSpace.css';

function PokemonSpace(props) {
  // Get the
  const {number, name} = props
  return (
    <div className="PokemonSpace">
        <p># {number}</p>
        <h1>{name}</h1>
    </div>
  )
}

export default PokemonSpace