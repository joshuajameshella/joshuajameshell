import React, { Component } from 'react';
import '../../styles.css';

class HighSchool extends Component {
  render() {
    return (
      <div>
        <p className="timeline-body">{"I recieved three A-levels from Outwood Grange Academy in 2014 with the following grades:"}</p>
        <p className="timeline-bulletpoint">{"A - Mathematics"}</p>
        <p className="timeline-bulletpoint">{"B - Physics"}</p>
        <p className="timeline-bulletpoint">{"B - Information Technology"}</p>
      </div>
    );
  }
}

export default HighSchool;
