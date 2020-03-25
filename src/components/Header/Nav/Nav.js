import React from 'react';
import classes from './Nav.module.css'

const Nav = props =>  {

    const {displayNav} = props;

    const navClasses = [classes.Nav];
    if( displayNav ) navClasses.push( classes.DisplayNav );

    return ( 
        <nav className={navClasses.join(' ')}>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">skills</a></li>
                <li><a href="#about">My Services</a></li>
                <li><a href="#about">Work</a></li>
                <li><a href="#testimonials" >Testimonials</a></li>
            </ul>
        </nav>
    );
}
 
export default Nav;