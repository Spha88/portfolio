import React from 'react'
import classes from './SideNav.module.css'
import navItems from '../NavItems';

import { Link } from 'react-scroll';

const SideNav = () => {
    return (
        <div className={classes.SideNav}>
            <ul>
                { navItems.map( navItem => {
                    return (
                        <li key={navItem.id}>
                            <Link
                                to={navItem.id} 
                                spy={true} 
                                smooth={true} 
                                duration={1000} 
                                offset={-60} 
                                activeClass={classes.active}> 
                                <span className={classes.Label}>{navItem.label}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}


export default SideNav;
