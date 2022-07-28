import React, { Component } from "react";
import Pokemon from './Pokemon';
import pokemons from "../data";

class Pokedex extends Component {
  render() {
    const pokemonsElements = pokemons.map((pokemon) => <Pokemon pokemonInfo={ pokemon } />);

    return (
      <section className="pokedex">
        <h1>POKEDEX</h1>
        <section className="pokemons">
          { pokemonsElements }
        </section>
      </section>
    )
  }
}

export default Pokedex;
