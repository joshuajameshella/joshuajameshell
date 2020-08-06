import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BasicDisplay.css';


// BasicDisplay is the component used to lay out the basic text Information
// shown on the landing page.
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
