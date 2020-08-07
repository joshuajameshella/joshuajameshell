import React, { Component } from 'react';
import Timeline from '../../components/timeline/Timeline';
import './styles.css';


// The following objects contain the data which will be inserted into the 'Education' timeline
const highSchool = {
  name: "Outwood Grange Academy",
  date: "2012 - 2014",
  description: [
    `I recieved three A-levels from Outwood Grange Academy in 2014 with the following grades:`,
    'A - Mathematics | B - Physics | B - IT',
  ]
};
const university = {
  name: "University of York",
  date: "2014 - 2017",
  description: ["During my time at the University of York, I obtained a Bachelors Degree in Electrical and Electronic Engineering, with a 2:1 grade"]
};

// Education is the container which shows my education history on a timeline display
class Education extends Component {
  render() {
    return (
      <div className="home">
        <div className="education-content">
          <h1 className="content-header">Education</h1>
          <Timeline data={highSchool} />
          <Timeline data={university} />
        </div>
      </div>
    );
  }
}

export default Education;
