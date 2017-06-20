import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Home from './Home/Home';

function Page() {
  return(
    <section>
      <Router>
         <Route exact path="/" component={Home}/>
       </Router>
    </section>
  );
}


export default Page;
