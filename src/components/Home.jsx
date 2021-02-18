import React, { Component } from 'react';
import classes from './Home.module.css';
import HeroOne from './HeroOneTrans.svg';
import Navbar from './Navbar';

class Home extends Component {
    render() {
        return (
            <div>

            <Navbar />
 
            <div class="hero">
            <section class="hero is-large" className={classes.HeroOne}>
                <div class="hero-body">
                    <img src={HeroOne} alt='heroone' />
                </div>
            </section>
            </div>

            </div>
        )
    }
}

export default Home;