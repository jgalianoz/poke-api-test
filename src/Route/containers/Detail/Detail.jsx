import React, { Component } from 'react';

import './Detail.css';

import api from '../../../utils/api.js';

import Loading from './../../../Components/Shared/Loading/Loading';

class Detail extends Component {

  constructor() {
    super();
    this.state = {
      pokemon: {},
      description: '',
      loading: true,
    };
  }

  componentDidMount() {
    this.initialFetch();
  }
  /* Función para hacer la petición a la API para obtener los detalles de los pokemones */
  async initialFetch() {
    const [
      pokemon,
      description,
    ] = await Promise.all([
      api.pokemons.SinglePokemons(this.props.match.params.id),
      api.pokemons.PokemonsDescription(this.props.match.params.id),
    ])
    this.setState({
      pokemon,
      description,
      loading: false,
    }) //Actualizamos el estado

    console.log(this.state.description);
  }

  render(){

    if ( this.state.loading ) return <Loading /> //Si no ha llegado la data cargando...

    return(
      <section className="container-detail">
        <h2>Detail / {this.state.pokemon.name}</h2>

        <div className="container-detail-datos">
          <img src="/images/pokemon.png" width="200" alt="pokemon" />
          <h3 className="detail-title">{ this.state.pokemon.name }</h3>
          <p>{this.state.description.description}</p>

          <div className="detailt-caracteristicas">
            <div className="item detailt-caracteristicas-weight">
              <i className="material-icons acess">accessibility</i>
              <span>{this.state.pokemon.weight} weight</span>
            </div>

            <div className="item detailt-caracteristicas-exp">
              <i className="material-icons star">stars</i>
              <span>{this.state.pokemon.exp} exp</span>
            </div>

            <ul className="detailt-caracteristicas-hab">
              <h4 className="title-hab">Abilities</h4>
              {this.state.pokemon.abilities
                .map(item => {
                    return(
                      <li key={item.name}>{item.name}</li>
                    );
                })
              }
            </ul>
          </div>

          <a className="previus" href="/">Regresar al listado</a>

        </div>


      </section>
    );
  }
}

export default Detail;
