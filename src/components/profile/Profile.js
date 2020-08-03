import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './Profile.css';

// Link to custom avatar image
const imgLink = "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=Auburn&facialHairType=BeardLight&facialHairColor=Auburn&clotheType=ShirtCrewNeck&clotheColor=Black&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"

// Link to CV - shared on google drive
const resumeLink = "https://drive.google.com/file/d/1IP22AdlIERIuQ-c1-KcoriiXPPUZOhVV/view"


// Profile is the 'summary' component shown fixed on the web page. It displays a quick overview of
// myself, and an option to download a PDF version of the resume.
class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <img className="profile-photo" src={imgLink} alt="Illustrated portrait of Josh" />
        <h2 className="profile-title">Josh Hellawell</h2>
        <p className="profile-subtitle">Software Developer</p>

        <div className="profile-contact">
          <Button id="download-resume-button" variant="outlined" color="primary" onClick={() => window.open(resumeLink, "_blank")}>
            DOWNLOAD CV
          </Button>
        </div>
      </div>
    );
  }
}

export default Profile;
