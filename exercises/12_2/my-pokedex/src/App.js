import React from 'react';
import './App.css';
import pokemons from './data';
import PokeProfile from './PokeProfile';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 0};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render () {
    // const renderList = pokemons.map((pokemon) => 
    // <PokeProfile key={pokemon.id} cat={pokemon} />)
    
    const pokeList = pokemons.map((poke, i=0) => 
    <option value = {i++}>{poke.name}</option>)

    // const value = Math.floor(Math.random() * 10)
     //Nota - 03:36 consegui achar a solução para receber os dados do pokemon
     //nota - 02:10 consegui entender(?) como funcionava o eventListener no REACT

    return (

      <div>
        
        <PokeProfile cat={pokemons[this.state.value]}/>
      <div className="select-container">
        <select  className = "select" onChange={this.handleChange}>
          {pokeList}
        </select>

          <button>./info</button>
          <div className="info"> </div>
       
      </div>




      </div>

      
  
    );

  }

}

export default App;
