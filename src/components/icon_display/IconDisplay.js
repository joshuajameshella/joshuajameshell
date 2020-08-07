import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './IconDisplay.css';


// IconDisplay is a visual representation of my skills in a particular subject
class IconDisplay extends Component {
  render() {
    return (
      <div className="display-container">
        <div className="basic-display-left">
          <p>{this.props.title}</p>
        </div>
        <div className="basic-display-right">
          <img
            src={this.props.icon.image}
            alt={this.props.icon.description}
            className="icon-display-image"
          />
        </div>
      </div>
    );
  }
}

export default IconDisplay;


IconDisplay.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
};
