import React, { Component } from 'react';
import Pagination from 'react-js-pagination';


import api from '../../../utils/api.js';

import Pokemon from '../../../Components/Pokemons/Pokemons';

class Home extends Component {

  constructor() {
    super();

    this.state = {
      pokemons: [],
      page: 1,
      loading: true,
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentDidMount() {
    this.initialFetch();
  }

  async initialFetch() {
    const pokemons = await api.pokemons.ListPokemons();
    this.setState({
      pokemons,
      loading: false,
    })
  }

  handlePageChange(newpage) {
    this.setState({ page: newpage })
  }

  render() {

    if ( this.state.loading ) {
      return(
        <p>Cargando...</p>
      );
    }

    const limit = 5;
    const secundary = this.state.page * limit;
    const initial = secundary - limit
    const pokemons = this.state.pokemons.objects.slice(initial, secundary);


    return (
      <div className="container-pokemons">
        {pokemons
          .map((item, index) => {
            return(
              <Pokemon key={index} {...item}/>
            );
          })
        }

        <Pagination
          activePage={this.state.page}
          itemsCountPerPage={limit}
          totalItemsCount={this.state.pokemons.objects.length}
          onChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default Home;
