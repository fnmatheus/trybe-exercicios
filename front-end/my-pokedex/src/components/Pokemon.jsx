import React, { Component } from "react";

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemonInfo;
    const { value: weightValue, measurementUnit: weightUnit } = averageWeight;
    const imgAlt = `image of ${name}`
    return (
      <div className="pokemon">
        <div className="info">
          <p>{ name }</p>
          <p>{ type }</p>
          <p>{ weightValue }{ weightUnit }</p>
        </div>
        <img src={ image } alt={ imgAlt }/>
      </div>
    )
  }
}

export default Pokemon;
