import React, { Component } from 'react';
import '../../styles.css';

class University extends Component {
  render() {
    return (
      <div>
        <p className="timeline-body">{"During my time at the University of York, I obtained a Bachelors degree in Electrical & Electronic Engineering. I graduated with a 2:1 grade in 2017. My degree mainly encompassed areas in software, mathematics and nanotechnology."}</p>
        <p className="timeline-body">{"My final year project at the University of York encompassed elements of both hardware and software. Utilising embedded processors, low power design and knowledge of hardware integration, component selection and tolerance issues. It was this project that ultimately steered me towards a career in software development."}</p>
      </div>
    );
  }
}

export default University;
