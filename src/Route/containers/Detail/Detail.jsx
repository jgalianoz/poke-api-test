import React, { Component } from 'react';

import api from '../../../utils/api.js';

class Detail extends Component {

  constructor() {
    super();
    this.state = {
      pokemon: {},
      loading: true,
    };
  }

  componenteDidMount() {
    this.initialFetch();
  }

  async initialFetch() {
    const pokemon = await api.pokemons.SinglePokemons(this.props.match.params.id);
    this.setState({
      pokemon,
      loading: false,
    })
  }

  render(){
    console.log(this.state.pokemon);
    return(
      <h1>Detalles u/o perfil</h1>
    );
  }
}

export default Detail;
