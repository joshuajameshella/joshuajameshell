import React, { Component } from 'react';
import TimelineDisplay from '../../components/timeline/Timeline';
import HMG from './employer_info/hmg/HMG';
import Icelolly from './employer_info/icelolly/Icelolly';
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


// The following objects contain the data which will be inserted into the 'Education' timeline
const hmg = {
  name: "",
  image: require("./employer_info/hmg/hmg.png"),
  date: "2017 - 2019",
  description: [],
  component: <HMG />,
};
const icelolly = {
  name: "",
  image: require("./employer_info/icelolly/icelolly.png"),
  date: "2019 - CURRENTLY",
  description: [],
  component: <Icelolly />,
};


// Timeline is the container which shows my education & work history on a timeline display
class Timeline extends Component {
  render() {
    return (
      <div className="home">

        <div className="timeline-content">
          <div style={{ position: 'relative' }}>
            <h1 className="content-header">Education</h1>
            <TimelineDisplay data={highSchool} />
            <TimelineDisplay data={university} />
          </div>
        </div>

        <div className="timeline-content">
          <div style={{ position: 'relative' }}>
            <h1 className="content-header">Work History</h1>
            <TimelineDisplay data={hmg} />
            <TimelineDisplay data={icelolly} />
          </div>
        </div>

      </div>
    );
  }
}

export default Timeline;
