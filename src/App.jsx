import React, { useState } from 'react'
import { PokemonForm, PokemonList } from './components'
import './App.css'

function App() {
  const [pokemon, setPokemon] = useState([])

  return (
    <>
      <header>Pokemon's App</header>
      <PokemonForm pokemon={pokemon} setPokemon={setPokemon} />
      <PokemonList pokemon={pokemon} setPokemon={setPokemon}/>
    </>
  )
}

export default App
