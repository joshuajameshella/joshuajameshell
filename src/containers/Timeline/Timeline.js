import React, { Component } from 'react';
import TimelineDisplay from '../../components/timeline/Timeline';
import HMG from './employer_info/hmg/HMG';
import Icelolly from './employer_info/icelolly/Icelolly';
import HighSchool from './education_info/HighSchool/HighSchool';
import University from './education_info/University/University';
import './styles.css';


// The following objects contain the data which will be inserted into the 'Education' timeline
const highSchool = {
  name: "",
  image: require("./education_info/HighSchool/outwood.png"),
  date: "2012 - 2014",
  description: [],
  component: <HighSchool />,
};
const university = {
  name: "",
  image: require("./education_info/University/uoy.png"),
  date: "2014 - 2017",
  description: [],
  component: <University />,
};


// The following objects contain the data which will be inserted into the 'Work History' timeline
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
