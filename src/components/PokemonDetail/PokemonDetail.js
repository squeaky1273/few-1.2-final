import React from 'react';
import data from '../../pokemon.js';

function Pokemon(props) {
    const { id } = props.match.params // Location index
    const { name, number, image, type, weakness } = data[id]
    return (
        <div className="pokemon">
            <p>{ name }  #{ number }</p>
            <p>{ image }</p>
            {/* <img src={`${process.env.PUBLIC_URL}images/${image[0]}`} /> */}
            <p>{ type }</p>
            <p>{ weakness }</p>
        </div>
    )
}
export default Pokemon;
