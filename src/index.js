import React from 'react';
import ReactDOM from 'react-dom';

import NavBar from './components/navigation/NavBar';
import Home from './containers/Home';

import './index.css';

ReactDOM.render(
  <div>
    <NavBar />
    <Home />
  </div>,
  document.getElementById('root')
);
