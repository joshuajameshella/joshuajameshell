import React, { Component } from 'react';
import '../../styles.css';

class Icelolly extends Component {
  render() {
    return (
      <div>
        <p className="timeline-body">{"My role at icelolly.com is heavily focused on the production and maintenance of backend services, written in Go. I am responsible for creating API's used to retrieve and process data from the growing number of travel partners shown on the website. My responsibilities in this role include managing relationships between companies, optimising code efficiency, and creating software solutions used to fuel company growth."}</p>

        <p className="timeline-subheader">{"Backend Services Engineer"}</p>
        <p className="timeline-bulletpoint">{"- Using Go to create time-efficient backend API services"}</p>
        <p className="timeline-bulletpoint">{"- Utilising GraphQL for increased data transfer speed between services"}</p>
        <p className="timeline-bulletpoint">{"- Managing active services using Kubernetes and AWS"}</p>

      </div>
    );
  }
}

export default Icelolly;
