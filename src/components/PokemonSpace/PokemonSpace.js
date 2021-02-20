import React from 'react'
import './PokemonSpace.css';
import { Link } from 'react-router-dom'

function PokemonSpace(props) {
  // Get the
  const {number, name, id} = props
  return (
    <div className="PokemonSpace">
      <p># {number}</p>
      <Link 
          className="POPOSSpace-title" // add a class name!
          to={`/details/${id}`}>
          <h1>{name}</h1>
      </Link>
    </div>
  )
}

export default PokemonSpace