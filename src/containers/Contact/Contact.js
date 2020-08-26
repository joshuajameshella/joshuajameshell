import React, { Component } from 'react';
import './styles.css';

import { contactInfo } from './TextBody';


// Timeline is the container which shows my education & work history on a timeline display
class Contact extends Component {
  render() {
    return (
      <div className="home">

        <div className="timeline-content">
          <div style={{ position: 'relative' }}>
            <h1 className="content-header">Contact</h1>
            <p className="content-body">{contactInfo}</p>
          </div>
        </div>

      </div>
    );
  }
}

export default Contact;
