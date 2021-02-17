import React, { Component } from 'react';
import classes from './Home.module.css';
import HeroOne from './HeroOneTrans.svg';
import NavBar from './Navbar';
import HeroBg from './HeroOneBg.svg';


class Home extends Component {
    render() {
        return (
            <div>
            <section class="hero is-large" className={classes.HeroOne}>
                <div class="hero-body">
                    <img src={HeroOne} alt='heroone' />
                </div>
            </section>
            </div>
        )
    }
}

export default Home;