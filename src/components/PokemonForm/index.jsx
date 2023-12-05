import React, { useState } from 'react'

const PokemonForm = (props) => {
    const [inputPokemonName, setPokemonName] = useState('');

    const updatePokemonName = (e) => {
        setPokemonName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.setPokemon([{ text: inputPokemonName }])
        setPokemonName('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="pokemonName" >
                Enter Pokemon Name:
            </label>

            <input type="text" id="pokemonName"
                className="pokemonInput"
                value={inputPokemonName}
                onChange={updatePokemonName}
            />

            <input type="submit" value="Search" />
        </form>
    )
}

export default PokemonForm
