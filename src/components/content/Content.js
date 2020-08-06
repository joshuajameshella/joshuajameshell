import React, { Component } from 'react';
import BasicDisplay from '../basic_display/BasicDisplay';
import DotDisplay from '../dot_display/DotDisplay';
import './Content.css';
import { professionalIntro, personalIntro } from './TextBody';



function PersonalInfo() {
  return (
    <div className="content-divider-left">
      <h2 className="content-section-title">Personal Information</h2>
      <BasicDisplay title="Full Name" body="Josh Hellawell"/>
      <BasicDisplay title="D.O.B" body="3rd February 1996"/>
      <BasicDisplay title="Email" body="josh@hellawell.co.uk"/>
      <BasicDisplay title="Mobile" body="(+44) 7816 048 017"/>
    </div>
  );
}

function ProfessionalSkills() {
  return (
    <div className="content-divider-right">
      <h2 className="content-section-title">Software Languages</h2>
      <DotDisplay title="Go" skillLevel={3}/>
      <DotDisplay title="React" skillLevel={3}/>
      <DotDisplay title="Javascript" skillLevel={2}/>
      <DotDisplay title="Python" skillLevel={1}/>
    </div>
  );
}

function TechnologySkills() {
  return (
    <div className="content-divider-right">
      <h2 className="content-section-title">Technology Skills</h2>
      <DotDisplay title="MySQL" skillLevel={3}/>
      <DotDisplay title="Git" skillLevel={3}/>
      <DotDisplay title="AWS" skillLevel={1}/>
      <DotDisplay title="Jenkins" skillLevel={1}/>
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
        <ProfessionalSkills />

        <PersonalInfo />
        <TechnologySkills />

      </div>
    );
  }
}

export default Content;
