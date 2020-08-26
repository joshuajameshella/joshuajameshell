import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import './styles.css';

import { makeStyles } from '@material-ui/core/styles';
import { contactInfo } from './TextBody';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


// ContactIcons return the icons used to illustrate the different forms of communication
function ContactIcons() {
  
  const classes = useStyles();
  const linkedinLink = "https://www.linkedin.com/in/josh-hellawell-5760a8184/";
  const twitterLink = "https://twitter.com/joshuajameshell";
  const facebookLink = "https://www.facebook.com/joshuajameshell";

  return (
    <div className={classes.root}>

      <Tooltip title="Email Me">
        <IconButton onClick={() => window.location.href = "mailto:josh@hellawell.co.uk?subject=&body="}>
          <img src={require('./icons/email-icon.png')} alt="email icon" className="contact-icon" />
        </IconButton>
      </Tooltip>

      <Tooltip title="Contact me on Linkedin">
        <IconButton onClick={() => window.open(linkedinLink, "_blank")}>
          <img src={require('./icons/linkedin-icon.png')} alt="email icon" className="contact-icon" />
        </IconButton>
      </Tooltip>

      <Tooltip title="Twitter">
        <IconButton onClick={() => window.open(twitterLink, "_blank")}>
          <img src={require('./icons/twitter-icon.png')} alt="email icon" className="contact-icon" />
        </IconButton>
      </Tooltip>

      <Tooltip title="Find me on Facebook">
        <IconButton onClick={() => window.open(facebookLink, "_blank")}>
          <img src={require('./icons/facebook-icon.png')} alt="email icon" className="contact-icon" />
        </IconButton>
      </Tooltip>

    </div>
  );
}

// Contact is the container which shows the various different ways in which to contact me
class Contact extends Component {
  render() {
    return (
      <div className="home">
        <div className="timeline-content">
          <div style={{ position: 'relative' }}>
            <h1 className="content-header">Contact</h1>
            <p className="content-body">{contactInfo}</p>
            <ContactIcons />
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
