import React from 'react';
import Navbar from './Navbar';
import classes from './Portfolio.module.css';
import Header from './PortfolioHeader.svg';



const Portfolio = () => {
    return (
        <div class="container" className={classes.Container}>

        <div class="nav">
        <Navbar />
        </div>

        <div class="hero">
        <section class="hero is-large" className={classes.Pheader}>
            <div class="hero-body">
                <img src={Header} draggable="false" alt='pheader' />
            </div>
        </section>
        </div>
        <div>
        <section class="section is-medium" className={classes.Psection}>
            <hr className={classes.Line1} />
        </section>
        </div>
        <div>
        <section class="section is-medium" className={classes.Psection}>
            <hr />
        </section>
        </div>

        </div>
    );
}


export default Portfolio;