import React from 'react';
import classes from './BackgroundVideo.module.css';
import InkVideo from './InkVideo.mp4';
import BlueLogo from './BlueLogo.svg';
import { BrowserRouter,
    Switch, Route, Link
} from 'react-router-dom';
// import Enter from './EnterTransparent.svg';
import Enter from './EnterSite.png';

//pages
// import Navbar from "./Navbar";
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
         
                <div className={classes.Content}>
                <div className={classes.Logo}>
                <img src={BlueLogo} alt="logo" />
                </div>
                <div className={classes.SubContent}>
                <img src="https://pbs.twimg.com/profile_images/1352661731198132224/N9eWtTGV_400x400.jpg"
                        alt="profile" />
                </div>
                <div className={classes.EnterContent}>
                <Link to="/Home">
                    <img src={Enter} alt="enter" />
                </Link>
            </div>
            </div>

    
    </div>
    )
}

export default LandingPage;

