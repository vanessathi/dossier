import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import classes from "./Home.module.css";
import "./Nav.css";
import PlainLogo from "./LogoNew.svg";

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <nav class="navbar" className={classes.Navigation}
        role="navigation"
        aria-label="main navigation"
        >
        <div class="navbar-brand">
            <NavLink class="navbar-item" to="/">
                <img src={PlainLogo} alt="landing" />
            </NavLink>
        </div>
        <div class="navbar-burger is-right">
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
                <div class={`navbar-menu ${isOpen && "is-active"}`}>

                        <NavLink className="navbar-item" activeClassName="is-active"to="/Home">
                            H O M E 
                        </NavLink>
                        <NavLink className="navbar-item" activeClassName="is-active"to="/About">
                            A B O U T 
                        </NavLink>
                        <NavLink className="navbar-item" activeClassName="is-active"to="/Portfolio">
                            P O R T F O L I O 
                        </NavLink>
                        <NavLink className="navbar-item" activeClassName="is-active"to="/Contact">
                            C O N T A C T 
                        </NavLink>
                </div>  
        </nav>              
    );
};

export default Navbar;