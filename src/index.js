import React from 'react';
import ReactDOM from 'react-dom';

import Intro from './containers/Intro/Intro';
import Timeline from './containers/Timeline/Timeline';

import './index.css';

ReactDOM.render(
  <div className="container">
    <Intro />
    <Timeline />
  </div>,
  document.getElementById('root')
);
