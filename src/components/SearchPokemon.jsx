import React, { Component} from 'react';
import ListPokemon from './ListPokemon';
import '../App.css';

export default class SearchPokemon extends Component {

      constructor(props){
        super(props);

        this.state = {
          name: "",
          name2: "",
          img: "#",
          id: "",
          base_experience: "",
          weight: "",
          types: ""
        }
      }

      fetchApi = async () =>{
        let resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.name}`); 
        let data = await resp.json();


        this.setState({
          img: data.sprites.other.dream_world.front_default,
          types: data.types[0].type.name,
          name2: data.name,
          name: data.name,
          id: data.id,
          base_experience: data.base_experience,
          weight: data.weight
        })
      }

      handlerName = e =>{
        this.setState({
          name: e.target.value
        })
      }

      handlerSubmit = e => {
        e.preventDefault();
        this.fetchApi();
      }

      reload = () => {
        window.location.reload(true);
      }



  render(){
    if(this.state.img === "#"){
        return (
          <div className='App-header'>
              <nav className="navbar ">
                <div className="container-fluid">
                  <form onSubmit= {this.handlerSubmit} className="d-flex" role="search">
                    <input 
                    id="enlaceLimpiar"
                    className="form-control m-2" 
                    type="text" 
                    value={this.state.name}
                    onChange={this.handlerName}
                    placeholder="Nombre Pokemon" 
                    aria-label="Search" required></input>
                    <button className="btn m-2 btn-outline-success" type="submit">Buscar</button>
                  </form>
                </div>
              </nav>
              <ListPokemon/>
          </div>
        )
    }else {
      return (
        <div className='App-header'>
            <nav className="navbar ">
              <div className="container-fluid">
                <form onSubmit= {this.handlerSubmit} className="d-flex" role="search">
                  <input 
                  id="enlaceLimpiar"
                  className="form-control m-2" 
                  type="text" 
                  value={this.state.name}
                  onChange={this.handlerName}
                  placeholder="Nombre Pokemon" 
                  aria-label="Search" required></input>
                  <button className="btn m-2 btn-outline-success" type="submit">Buscar</button>
                  <button onClick={this.reload}className="btn m-2 btn-outline-success" type="clear">Actualizar</button>
                </form>
                <br/><br></br>
              </div>
            </nav>
          <div>
            <div className="row row-cols-sm-1 bg-secondary">
                <div className="card h-50 text-black">ID: {this.state.id}     
                </div>
                <img src={this.state.img} className="card-img-top" width="100" height="100" alt=""/>
                <div className="card-body text-black">
                <h5 className="card-title text-capitalize">{this.state.name2}</h5>
                <p className="card-text text-capitalize">Exp: {this.state.base_experience} <br></br>Peso: {this.state.weight} Kg <br></br>
                </p> 
                </div> 
                <div className="card-footer">
                <small className="text-black text-capitalize">Tipo: {this.state.types} <br></br></small>  
                </div>
            </div>
          </div>
        </div>
      )
    }
  }
}
