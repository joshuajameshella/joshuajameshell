import React from 'react';
import ReactDOM, { unmountComponentAtNode } from "react-dom";
import Profile from './Profile';

describe('Profile', () => {
  // Test that the component renders
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Profile />, div);
  });
})
