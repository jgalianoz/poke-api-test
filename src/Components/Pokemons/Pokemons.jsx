import React from 'react';

import './Pokemons.css';

function Pokemon(props) {

  const date = new Date(`${props.created}`);
  const created  = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;


  return(
    <div className="Pokemon">
      <figure className="Pokemon-avatar">
        <img src="images/Pokebola.png" width="50" height="50" />
      </figure>
      <div className="Pokemon-info">
        <h3>{ props.name }</h3>
        <time>{ created }</time>
      </div>
    </div>
  );
}

export default Pokemon;
