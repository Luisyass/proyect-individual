import React from 'react'
import Card from './Card'

export default function DisplayPokemon({pokemon}) {

  return (
    <div className="row row-cols-1 row-cols-md-5 g-3">{
        pokemon.map((value, index) =>
        <Card key={index} {...value}/>
        )
    }
    </div> 
  )
}
