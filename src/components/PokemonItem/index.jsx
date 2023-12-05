import React, { useState, useEffect } from 'react'

const PokemonItem = ({ pokemon }) => {

  const [data, setData] = useState([])
  useEffect(() => {
    setData([])
    getData()
  }, [pokemon])

  async function getData() {
    try {
      const url = "https://pokeapi.co/api/v2/pokemon/" + pokemon.text
      const response = await fetch(url)
      const data = await response.json()
      setData(data.abilities)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <div>
        {pokemon.text} abilities:
        {data.map(b => <li> {b.ability.name} </li>)}
      </div>
    </>
  )
}

export default PokemonItem
