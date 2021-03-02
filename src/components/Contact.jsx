import React, { Component } from 'react';
import classes from './BackgroundVideo.module.css';
import Navbar from './Navbar';

class Contact extends Component {
    render() {
        return (
            <div>
            <Navbar />
            <div className={classes.Content}>
            This is the contact page.
            </div>
            </div>
        )
    }
}

export default Contact;