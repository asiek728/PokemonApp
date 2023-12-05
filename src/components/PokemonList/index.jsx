import React, { useState } from 'react'
import PokemonItem from '../PokemonItem'

const PokemonList = (props) => {
  return (
    <div className="pokemonContainer">
        <ul className="pokemonDetails">
            {props.pokemon.map((pokemon, idx) => {
                return <PokemonItem key={idx} pokemon={pokemon}/>
            })}
        </ul>
    </div>
    )
}

export default PokemonList
