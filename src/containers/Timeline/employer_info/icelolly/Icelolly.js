import React, { Component } from 'react';
import '../../styles.css';

class Icelolly extends Component {
  render() {
    return (
      <div className="">
        <p className="timeline-body">{"Whilst working as a software engineer for HMG, my responsibilities included managing greenfield software projects from their inception, writing thorough documentation and setting both personal and team goals in the effort of continuous improvements. I successfully completed 4 projects during the two years I spent working here, and listed below are the main technologies I have used to achieve this."}</p>

        <p className="timeline-subheader">{"Full Stack Web Developer"}</p>
        <p className="timeline-bulletpoint">{"- Used MERN stack to develop a public facing webpage"}</p>
        <p className="timeline-bulletpoint">{"- Stored user account data on a NoSQL database (MongoDB) accessible via a REST API"}</p>
        <p className="timeline-bulletpoint">{"- Managed endpoint security by creating a server-side certificate check"}</p>

        <p className="timeline-subheader">{"Network Traffic Optimisation"}</p>
        <p className="timeline-bulletpoint">{"- Designed a micro-service system architecture for horizontally scaling application (using Docker)"}</p>
        <p className="timeline-bulletpoint">{"- Used Kafka to ingest and coordinate millions of data packets per second"}</p>
        <p className="timeline-bulletpoint">{"- Made use of Golang's go-routines to maximise CPU efficiency"}</p>
      </div>
    );
  }
}

export default Icelolly;
