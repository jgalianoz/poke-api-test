import React, { Component } from 'react';
import Pagination from 'react-js-pagination';


import api from '../../../utils/api.js';

import Pokemon from '../../../Components/Pokemons/Pokemons';
import Loading from '../../../Components/Shared/Loading/Loading';

class Home extends Component {

  constructor() {
    super();
    //Definimos el estado inicial del componente
    this.state = {
      pokemons: [],
      description: '',
      page: 1,
      loading: true,
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentDidMount() {
    this.initialFetch();
  }

  /* función de petición a la API  para obtener todos los pokemones*/
  async initialFetch() {

    const [
      pokemons,
      description,
    ] = await Promise.all([
      api.pokemons.ListPokemons(),
      api.pokemons.PokemonsDescription(this.props.match.params.id),
    ])
    this.setState({
      pokemons,
      description,
      loading: false,
    })
  }

  /* Función para cambiar el estado para el paginado*/
  handlePageChange(newpage) {
    this.setState({ page: newpage })
  }

  render() {

    if ( this.state.loading ) return <Loading /> //Si no ha llegado la data, cargando ....

    const limit = 30;
    const secundary = this.state.page * limit;
    const initial = secundary - limit
    const pokemons = this.state.pokemons.objects.slice(initial, secundary);


    return (
      <div className="container-pokemons">
        {pokemons
          .map((item, index) => {
            return(
              <Pokemon key={index} {...item} description={this.state.description}/>
            );
          })
        }

        <div className="container-pagination">
          <Pagination
            activePage={this.state.page}
            itemsCountPerPage={limit}
            totalItemsCount={this.state.pokemons.objects.length}
            onChange={this.handlePageChange}
          />
        </div>

      </div>
    );
  }
}

export default Home;
