import React from 'react';
import classes from './SideDrawer.module.css';
import OverLay from '../../UI/Overlay/Overlay';

import navItems from '../NavItems';
import { NavLink } from 'react-router-dom';

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
                                <NavLink to={`/${navItem.id}`} activeClassName={classes.active} onClick={toggleSideDrawer}>
                                    {navItem.label}
                                </NavLink>
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