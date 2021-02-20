import React from 'react';
import PokemonSpace from '../PokemonSpace/PokemonSpace';
import './PokemonList.css';
import data from '../../pokemon.json';

function PokemonList() {
    const pokemons = data.map(({ ID, name, number, type, weakness }) => {
        return (
            <PokemonSpace
                // key = {ID}
                name = {name}
                number = {number}
                // // image = {image[0]}
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