import React from 'react'
import classes from './SideNav.module.css'

import { Link } from 'react-scroll';
const SideNav = () => {
    return (
        <div className={classes.SideNav}>
            <ul>
                <li>
                    <Link to="about" spy={true} smooth={true} duration={1000} offset={-100} activeClass={classes.active}> 
                        <span className={classes.Label}>About</span>
                    </Link>
                </li>
                <li>
                    <Link to="skills" spy={true} smooth={true} duration={1000} offset={-100} activeClass={classes.active}> 
                        <span className={classes.Label}>My Skills</span>
                    </Link>
                </li>
                <li>
                    <Link to="services" spy={true} smooth={true} duration={1000} offset={-100} activeClass={classes.active}> 
                        <span className={classes.Label}>My Services</span>
                    </Link>
                </li>
                <li>
                    <Link to="portfolio" spy={true} smooth={true} duration={1000} offset={-100} activeClass={classes.active}> 
                        <span className={classes.Label}>My Work</span>
                    </Link>
                </li>
                <li>
                    <Link to="testimonials" spy={true} smooth={true} duration={1000} offset={-100} activeClass={classes.active}>
                        <span className={classes.Label}>Testimonials</span> 
                    </Link>
                </li>
            </ul>
        </div>
    )
}


export default SideNav;
