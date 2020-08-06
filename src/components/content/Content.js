import React, { Component } from 'react';
import BasicDisplay from '../basic_display/BasicDisplay';
import './Content.css';
import { professionalIntro, personalIntro } from './TextBody';




function PersonalInfo() {
  return (
    <div className="content-divider-left">
      <h2 className="content-subheader">Personal Information</h2>
      <BasicDisplay title="Full Name" body="Josh Hellawell"/>
      <BasicDisplay title="D.O.B" body="3rd February 1996"/>
      <BasicDisplay title="Email" body="josh@hellawell.co.uk"/>
      <BasicDisplay title="Mobile" body="(+44) 7816 048 017"/>
    </div>
  );
}

function PersonalInfo2() {
  return (
    <div className="content-divider-right">
      <h2 className="content-subheader">Personal Information</h2>
      <BasicDisplay title="Full Name" body="Josh Hellawell"/>
      <BasicDisplay title="D.O.B" body="3rd February 1996"/>
      <BasicDisplay title="Email" body="josh@hellawell.co.uk"/>
      <BasicDisplay title="Mobile" body="(+44) 7816 048 017"/>
    </div>
  );
}

// Content is the 'introduction' component of the webpage.
// It provides an entry point for the user.
class Content extends Component {
  render() {
    return (
      <div className="content">

        <h1 className="content-header">Hello, I'm Josh</h1>
        <p className="content-body">{professionalIntro}</p>
        <p className="content-body">{personalIntro}</p>
        <div className="content-break" />

        <PersonalInfo />
        <PersonalInfo2 />



      </div>
    );
  }
}

export default Content;
