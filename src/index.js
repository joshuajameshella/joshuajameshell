import React from 'react';
import ReactDOM from 'react-dom';

import Intro from './containers/Intro/Intro';
import Education from './containers/Education/Education';

import './index.css';

ReactDOM.render(
  <div className="container">
    <Intro />
    <Education />
  </div>,
  document.getElementById('root')
);
