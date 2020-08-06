import React, { Component } from 'react';

import Profile from '../components/profile/Profile';
import Content from '../components/content/Content';

import './styles.css';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Profile />
        <Content />
      </div>
    );
  }
}

export default Home;
