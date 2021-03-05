import React, { Component } from 'react';
import classes from './BackgroundVideo.module.css';
import Navbar from './Navbar';

class Contact extends Component {
    render() {
        return (
            <div>
            <Navbar />
            <div className={classes.Content}>
            This is the contact page. Insert contact hero.
            </div>
            <div>
                Insert contact form.
            </div>
            <div>
                Insert footer here.
            </div>
            <div>
                Made visual components...
            </div>
            </div>
        )
    }
}

export default Contact;