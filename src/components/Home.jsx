import React, { Component } from 'react';
import classes from './BackgroundVideo.module.css';
import LandingPage from './Landing';

class Home extends Component {
    render() {
        return (
            <div className={classes.Container}>
                <LandingPage />
            </div>
        )
    }
}

export default Home;