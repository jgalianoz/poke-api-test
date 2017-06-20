import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Header from '../../Components/Shared/Header/Header';

import Home from './Home/Home';
import PokeDetail from './Detail/Detail';

function Page() { //Definimos las rutas de la app
  return(
    <section>
      <Header />
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/pokemon/:id" component={PokeDetail} />
        </div>
      </Router>
    </section>
  );
}


export default Page;
