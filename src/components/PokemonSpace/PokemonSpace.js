import React from 'react'
import './PokemonSpace.css';
import { Link } from 'react-router-dom'

function PokemonSpace(props) {
  // Get the
  const {number, name, id, image} = props
  return (
    <div className="PokemonSpace">
      <Link to={`/details/${id}`}>
        {/* Images credited to official Pokemon website */}
        <img src={`${process.env.PUBLIC_URL}/images/${image}`} />
      </Link>
      <Link to={`/details/${id}`}>
        <p># {number}</p>
      </Link>
      <Link 
          className="POPOSSpace-title" // add a class name!
          to={`/details/${id}`}>
          <h3>{name}</h3>
      </Link>
    </div>
  )
}

export default PokemonSpace