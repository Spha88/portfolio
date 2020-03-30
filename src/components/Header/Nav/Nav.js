import React from 'react';
import classes from './Nav.module.css';
import { Link } from 'react-scroll';

const Nav = props =>  {

    const {displayNav} = props;

    const navClasses = [classes.Nav];
    if( displayNav ) navClasses.push( classes.DisplayNav );

    return ( 
        <nav className={navClasses.join(' ')}>
            <ul>
                <li><Link to="about" spy={true} smooth={true} duration={1000} offset={-100} activeClass={classes.active}>About</Link></li>
                <li><Link to="skills" spy={true} smooth={true} duration={1000} offset={-100} activeClass={classes.active}>Skills</Link></li>
                <li><Link to="services" spy={true} smooth={true} duration={1000} offset={-100} activeClass={classes.active}>My Services</Link></li>
                <li><Link to="portfolio" spy={true} smooth={true} duration={1000} offset={-100} activeClass={classes.active}>Portfolio</Link></li>
                <li><Link to="testimonials" spy={true} smooth={true} duration={1000} offset={-100} activeClass={classes.active}>Testimonials</Link></li>
            </ul>
        </nav>
    );
}
 
export default Nav;