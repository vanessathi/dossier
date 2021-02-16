import React from 'react';
import classes from './BackgroundVideo.module.css';
import InkVideo from './InkVideo.mp4';
// import HandwrittenLogo from './HandwrittenSize1.png';
import Logo from './Logo.svg';
import { BrowserRouter,
    Switch, Route
} from 'react-router-dom';

//pages
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const LandingPage = () => {
    const videoSource = InkVideo;
    return (
    <div className={classes.Container}>
         <BrowserRouter>
            <Switch>
            <Route exact path="/Contact" component={ Contact }>
                <Contact />
            </Route>
            <Route exact path="/Home" component={ Home }>
                <Home />
            </Route>
            <Route exact path="/Portfolio" component={ Portfolio }>
                <Portfolio />
            </Route>
            <Route exact path="/About" component={ About }>
                 <About />
            </Route>
            </Switch>
        </BrowserRouter>

            <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className={classes.Header}>
            <div className={classes.Logo}>
                <img src={Logo} alt="logo" />
            </div>
            <Navbar />
            <div class="block" className={classes.Block} />
            </div>
    
    </div>
    )
}

export default LandingPage;

