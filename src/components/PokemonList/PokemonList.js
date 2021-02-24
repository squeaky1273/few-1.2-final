import React from 'react';
import PokemonSpace from '../PokemonSpace/PokemonSpace';
import './PokemonList.css';
import data from '../../pokemon.js';

function PokemonList() {
    const pokemons = data.map(({ ID, name, number, image, type, weakness }) => {
        return (
            <PokemonSpace
                id = {ID}
                key = {ID}
                name = {name}
                number = {number}
                // Images credited to official Pokemon website
                image = {image[0]}
                // type = {type}
                // weakness = {weakness}
            />
        )
    })

    return (
        <div className = "PokemonList">
            { pokemons }
        </div>
    )
}

export default PokemonList;