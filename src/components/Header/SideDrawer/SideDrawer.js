import React from 'react';
import classes from './SideDrawer.module.css';
import OverLay from '../../UI/Overlay/Overlay';

const SideDrawer = props => {

    const { displaySideDrawer, toggleSideDrawer } = props;

    const sideDrawerClasses = [ classes.SideDrawer ];
    if(displaySideDrawer) sideDrawerClasses.push( classes.DisplaySideDrawer );

    return ( 
        <nav className={sideDrawerClasses.join(' ')}>
            <ul>
                <li><a className={classes.active} href="#about">About</a></li>
                <li><a href="#skills">skills</a></li>
                <li><a href="#about">My Services</a></li> 
                <li><a href="#about">Work</a></li>
                <li><a href="#testimonials" >Testimonials</a></li>
            </ul>
            
            <OverLay click={ toggleSideDrawer } />
            
        </nav>
    );
}
 
export default SideDrawer;