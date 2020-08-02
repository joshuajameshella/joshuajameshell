import React, { Component } from 'react';
import Profile from '../components/profile/Profile';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Profile />
      </div>
    );
  }
}


export default Home;
