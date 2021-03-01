import React from 'react';
import './PokemonDetail.css';
import data from '../../pokemon.js';

function Pokemon(props) {
    const { id } = props.match.params // Location index
    const { name, number, image, type, weakness } = data[id]
    return (
        <div className="PokemonDetail">
            <h1>{ name }  #{ number }</h1>
            <div className="PokemonDetail-column">
                <div className="PokemonDetail-image">
                    {/* Images credited to official Pokemon website */}
                    <img src={`${process.env.PUBLIC_URL}images/${image}`} width="500" height="500"/>
                </div>
                <h2>Type:</h2>
                <p>{ type }</p>
                <h2>Weaknesses:</h2>
                <p>{ weakness }</p>
            </div>
        </div>
    )
}
export default Pokemon;
