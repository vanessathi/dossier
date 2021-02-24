import React from 'react';
import Navbar from './Navbar';
import classes from './Portfolio.module.css';
import Header from './PortfolioHeader.svg';



const Portfolio = () => {
    return (
        <div>

        <Navbar />

        <div class="hero">
        <section class="hero is-large" className={classes.Pheader}>
            <div class="hero-body">
                <img src={Header} draggable="false" alt='pheader' />
            </div>
        </section>
        </div>
        <section class="section is-medium" className={classes.Psection}>

        </section>

        </div>
    );
}


export default Portfolio;