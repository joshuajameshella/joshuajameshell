import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './DotDisplay.css';


// The following 'GenerateDot' functions take the skill level and renders the
// necessary number of elements
function GenerateFullDots(props) {
  return (
    [...Array(props.skillLevel)].map((e, i) => (
      <div className="full-dot" key={i}/>
    ))
  );
}
function GenerateEmptyDots(props) {
  return (
    [...Array(5 - props.skillLevel)].map((e, i) => (
      <div className="empty-dot" key={i}/>
    ))
  );
}


// DotDisplay is a visual representation of my skills in a particular subject
class DotDisplay extends Component {
  render() {
    return (
      <div className="display-container">
        <div className="basic-display-left">
          <p>{this.props.title}</p>
        </div>
        <div className="basic-display-right">
          <GenerateFullDots skillLevel={this.props.skillLevel} />
          <GenerateEmptyDots skillLevel={this.props.skillLevel} />
        </div>
      </div>
    );
  }
}

export default DotDisplay;


DotDisplay.propTypes = {
  title: PropTypes.string.isRequired,
  skillLevel: PropTypes.number.isRequired,
};
