import React from 'react';
import classes from './SideDrawer.module.css';
import OverLay from '../../UI/Overlay/Overlay';

import navItems from '../NavItems';

import { Link } from 'react-scroll';

const SideDrawer = props => {

    const { displaySideDrawer, toggleSideDrawer } = props;

    const sideDrawerClasses = [ classes.SideDrawer ];
    if(displaySideDrawer) sideDrawerClasses.push( classes.DisplaySideDrawer );

    return ( 
        <nav className={sideDrawerClasses.join(' ')}>
            <ul>
                { 
                    navItems.map( navItem => {
                        return (
                            <li key={navItem.id}>
                                <Link
                                    to={navItem.id} 
                                    spy={true} 
                                    smooth={true} 
                                    duration={1000} 
                                    offset={-70} 
                                    activeClass={classes.active} 
                                    onClick={ toggleSideDrawer }>
                                        {navItem.label}
                                </Link>
                            </li>
                        );
                    })
                }
            </ul>
            <OverLay click={ toggleSideDrawer } /> 
            
        </nav>
    );
}
 
export default SideDrawer;