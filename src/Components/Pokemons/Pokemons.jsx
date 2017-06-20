import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Pokemons.css';

import api from '../../utils/api.js';

class Pokemon extends Component {

  constructor(props) {
    super(props);
    this.state = {
      description: '',
    };
  }

  componentDidMount() {
    this.initialFetch();
  }

  /* función de petición a la API  para obtener las description de los pokemones*/
  async initialFetch() {

    const description = await api.pokemons.PokemonsDescription(this.props.national_id);
    this.setState({
      description,
    })

    console.log(this.state.description);
  }

  render() {
    const date = new Date(`${this.props.created}`);
    const created  = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

    return(
      <Link to={`/pokemon/${this.props.national_id}`}>
        <div className="Pokemon">
          <figure className="Pokemon-avatar">
            <img src="images/Pokebola.png" width="50" height="50" alt={this.props.name} />
          </figure>
          <div className="Pokemon-info">
            <h3>{ this.props.name }</h3>
            <time>{ created }</time>
            <p>{ this.state.description.description }</p>
          </div>
        </div>
      </Link>
    );
  }
}

export default Pokemon;
