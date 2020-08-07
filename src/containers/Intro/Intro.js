import React, { Component } from 'react';
import Profile from '../../components/profile/Profile';
import BasicDisplay from '../../components/basic_display/BasicDisplay';
import DotDisplay from '../../components/dot_display/DotDisplay';
import IconDisplay from '../../components/icon_display/IconDisplay';

import { professionalIntro, personalIntro } from './TextBody';
import './styles.css';


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
      <h2 className="content-section-title">Programming Languages</h2>
      <DotDisplay title="Go" skillLevel={3}/>
      <DotDisplay title="Javascript (ES6)" skillLevel={3}/>
      <DotDisplay title="SQL" skillLevel={2}/>
      <DotDisplay title="Python" skillLevel={1}/>
    </div>
  );
}

function PersonalHobbies() {
  return (
    <div className="content-divider-right">
      <h2 className="content-section-title">Personal Hobbies</h2>
      <IconDisplay title="Cycling" icon={{image: "https://static.thenounproject.com/png/215-200.png", description: "cycling icon"}}/>
      <IconDisplay title="Snowboarding" icon={{image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-DbMMEj8A1uk9LBriVnoNMn9ZtD-jK_Wk0w&usqp=CAU", description: "snowboarding icon"}}/>
      <IconDisplay title="Programming" icon={{image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZvi26Y0im8MFpmLe__3nZT-nYT0363sc-mw&usqp=CAU", description: "programming icon"}}/>
      <IconDisplay title="Reading" icon={{image: "https://static.thenounproject.com/png/7456-200.png", description: "reading icon"}}/>
    </div>
  );
}

function TechnologySkills() {
  return (
    <div className="content-divider-left">
      <h2 className="content-section-title">Technology Skills</h2>
      <DotDisplay title="React" skillLevel={3}/>
      <DotDisplay title="Git" skillLevel={3}/>
      <DotDisplay title="AWS" skillLevel={1}/>
      <DotDisplay title="Jenkins" skillLevel={1}/>
    </div>
  );
}


// Intro is the landing page section used to give a brief summary and introduction
// of myself, including skills and hobbies.
class Intro extends Component {
  render() {
    return (
      <div className="home">

        <Profile />

        <div className="content">

          <h1 className="content-header">Hello, I'm Josh</h1>
          <p className="content-body">{professionalIntro}</p>
          <p className="content-body">{personalIntro}</p>
          <div className="content-break" />

          <PersonalInfo />
          <PersonalHobbies />
          <ProfessionalSkills />
          <TechnologySkills />

        </div>

      </div>
    );
  }
}

export default Intro;
