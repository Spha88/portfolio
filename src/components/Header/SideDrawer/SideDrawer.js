import React from 'react';
import classes from './SideDrawer.module.css';
import OverLay from '../../UI/Overlay/Overlay';

import { Link } from 'react-scroll';

const SideDrawer = props => {

    const { displaySideDrawer, toggleSideDrawer } = props;

    const sideDrawerClasses = [ classes.SideDrawer ];
    if(displaySideDrawer) sideDrawerClasses.push( classes.DisplaySideDrawer );

    return ( 
        <nav className={sideDrawerClasses.join(' ')}>
            <ul>
                <li> <Link to="about" spy={true} smooth={true} duration={1000} offset={-70} activeClass={classes.active} onClick={ toggleSideDrawer }>About</Link></li>
                <li><Link to="skills" spy={true} smooth={true} duration={1000} offset={-70} activeClass={classes.active} onClick={ toggleSideDrawer }>Skills</Link></li>
                <li><Link to="services" spy={true} smooth={true} duration={1000} offset={-70} activeClass={classes.active} onClick={ toggleSideDrawer }>My Services</Link></li>
                <li><Link to="portfolio" spy={true} smooth={true} duration={1000} offset={-70} activeClass={classes.active} onClick={ toggleSideDrawer }>Portfolio</Link></li>
                <li><Link to="testimonials" spy={true} smooth={true} duration={1000} offset={-70} activeClass={classes.active} onClick={ toggleSideDrawer }>Testimonials</Link></li>
                <li><Link to="contact" spy={true} smooth={true} duration={1000} offset={-70} activeClass={classes.active} onClick={ toggleSideDrawer }>Get in touch</Link></li>
            </ul>
            <OverLay click={ toggleSideDrawer } /> 
            
        </nav>
    );
}
 
export default SideDrawer;