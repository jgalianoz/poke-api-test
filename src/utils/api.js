import fetch from 'isomorphic-fetch';

const BaseURL = 'https://pokeapi.co/api/v1';

const api = {
  pokemons: {
    async ListPokemons() {
      const response = await fetch(`${BaseURL}/pokemon/?limit=100`)
      const data = await response.json();
      return data;
    },
    async SinglePokemons(id = 1) {
     const response = await fetch(`${BaseURL}/pokemon/${id}`);
     const data = await response.json();
     return data;
    },
  },
}

export default api;
