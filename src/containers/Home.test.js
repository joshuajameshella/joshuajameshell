import React from 'react';
import ReactDOM, { unmountComponentAtNode } from "react-dom";
import Home from './Home';

let container = null;

// setup a DOM element as a render target
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

// cleanup on exiting
afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home />, div);
});
