import React from 'react';
import { Link } from 'react-router-dom';

import './Pokemons.css';

function Pokemon(props) {

  const date = new Date(`${props.created}`);
  const created  = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

  return(
    <Link to={`/pokemon/${props.national_id}`}>
      <div className="Pokemon">
        <figure className="Pokemon-avatar">
          <img src="images/Pokebola.png" width="50" height="50" alt={props.name} />
        </figure>
        <div className="Pokemon-info">
          <h3>{ props.name }</h3>
          <time>{ created }</time>
        </div>
      </div>
    </Link>
  );
}

export default Pokemon;
