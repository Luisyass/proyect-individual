import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'


export default function Card(props) {

    const [onePokemon, setOnePokemon] = useState({
        name: "",
        id: [],
        sprites:{other: {dream_world:""}},
        types: [{type: []}] 
    })

    const getPokemon = (url) =>{
        axios.get(url)
        .then((response) => { 
            setOnePokemon(response.data);   
        })  
    }   

    useEffect(() => {
        getPokemon(props.url)
    }, []) 

  return (
    <div>
        <div className="col bg-secondary">
            <div className="card h-50 text-black">ID: {onePokemon.id}     </div>
            <img src={onePokemon.sprites.other.dream_world.front_default} className="card-img-top" width="100" height="100" alt=""/>
            <div className="card-body text-black">
                <h5 className="card-title text-capitalize">{onePokemon.name}</h5>
                <p className="card-text text-capitalize">Exp: {onePokemon.base_experience} <br></br>Peso: {onePokemon.weight} Kg <br></br>
                </p> 
            </div> 
            <div className="card-footer">
            <small className="text-black text-capitalize">Tipo: {onePokemon.types[0].type.name} <br></br></small>  
            </div>
        </div>
  </div> 
  )
}
