import React from 'react';
import Pokemon from '../Pokemon/Pokemon';
import data from '../../pokemon.json';

function PokemonList() {
    const pokemons = data.map(({ ID, name, number, type, weakness }) => {
        return (
            <Pokemon
                // key = {ID}
                name = {name}
                // number = {number}
                // // image = {image[0]}
                // type = {type}
                // weakness = {weakness}
            />
        )
    })

    return (
        <div className = "PokemonList">
            <div className="Pokemon">
                { pokemons }
            </div>
        </div>
    )
}

export default PokemonList;