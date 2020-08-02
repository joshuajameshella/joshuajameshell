import React, { Component } from 'react';
import './Home.css';

// User Avatar link
const imgLink = "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=Auburn&facialHairType=BeardLight&facialHairColor=Auburn&clotheType=ShirtCrewNeck&clotheColor=Black&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
const introText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="profile-container">
          <img className="profile-photo" src={imgLink} alt="Illustrated portrait of Josh" />
          <h2 className="profile-title">Welcome to React</h2>
          <p className="profile-intro">{introText}</p>
        </div>
      </div>
    );
  }
}


export default Home;
