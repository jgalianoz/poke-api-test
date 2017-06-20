import React from 'react';
import ReactDOM from 'react-dom';
import Page from './Route/containers/Route.jsx'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Page />, div);
});
