import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BasicDisplay.css';


// Content is the 'introduction' component of the webpage.
// It provides an entry point for the user.
class BasicDisplay extends Component {
  render() {
    return (
      <div className="display-container">
        <div className="basic-display-left">
          <p>{this.props.title}</p>
        </div>

        <div className="basic-display-right">
          <p>{this.props.body}</p>
        </div>

      </div>
    );
  }
}

export default BasicDisplay;


BasicDisplay.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
