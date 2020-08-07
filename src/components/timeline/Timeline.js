import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Timeline.css';


// Timeline is the visual representation of diffrent milestones in my life,
// and is used to illustrate my education and work history
class Timeline extends Component {
  render() {
    return (
      <div className="timeline-container">
        <div className="timeline-point" />
        <div className="timeline-text-container">
          <p className="timeline-title">{this.props.data.name}</p>
          <p className="timeline-date">{this.props.data.date}</p>
          {this.props.data.description.map(item =>
            <p key={item} className="timeline-body">{item}</p>
          )}
        </div>
      </div>
    );
  }
}

export default Timeline;


Timeline.propTypes = {
  data: PropTypes.object.isRequired,
};
