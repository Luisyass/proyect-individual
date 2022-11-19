import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import DisplayPokemon from './DisplayPokemon';

export default function ListPokemon() {

    const[pokemon, setPokemon] = useState([])

    const getPokemons = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20')
        .then((response)=> { 
            setPokemon(response.data.results);
        })
    }

    useEffect(() => getPokemons(),[]);

  return (
    <div className='cabecera'>
        <div className='izqd'>
        <h1>¡Busca tu Pokemon!</h1>
        </div>
        <DisplayPokemon pokemon= {pokemon}/>
    </div> 
    
  )
}
