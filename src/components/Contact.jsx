import React, { Component } from 'react';
import classes from './BackgroundVideo.module.css';
import LandingPage from './Landing';

class Contact extends Component {
    render() {
        return (
            <div className={classes.Content}>
            <LandingPage />
            </div>
        )
    }
}

export default Contact;