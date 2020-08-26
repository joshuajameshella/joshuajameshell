import React from 'react';
import ReactDOM from 'react-dom';

import Intro from './containers/Intro/Intro';
import Timeline from './containers/Timeline/Timeline';
import Contact from './containers/Contact/Contact';

import './index.css';

ReactDOM.render(
  <div className="container">
    <Intro />
    <Timeline />
    <Contact />
  </div>,
  document.getElementById('root')
);
