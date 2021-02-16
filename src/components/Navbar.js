import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import classes from "./BackgroundVideo.module.css"

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <nav class="navbar" className={classes.navbar}
        role="navigation"
        aria-label="main navigation"
        >
       
        <div class="navbar-burger" className={classes.Burger}>
                <button className={`navbar-burger burger ${isOpen && "is-active"}`}
                aria-label="menu"
                aria-expanded="false"
                onClick={() => setOpen(!isOpen)}
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </button>
        
            </div>
            <div className = {classes.Navigation}>
                <div class={`navbar-menu ${isOpen && "is-active"}`}>
                        <NavLink className="navbar-item" activeClassName="is-active"to="/">
                            H O M E 
                        </NavLink>
                        <NavLink className="navbar-item" activeClassName="is-active"to="/About">
                            A B O U T 
                        </NavLink>
                        <NavLink className="navbar-item" activeClassName="is-active"to="/Portfolio" style={{ }}>
                            P O R T F O L I O 
                        </NavLink>
                        <NavLink className="navbar-item" activeClassName="is-active"to="/Contact">
                            C O N T A C T 
                        </NavLink>
                </div>  
            </div>  
        </nav>              
    );
};

export default Navbar;