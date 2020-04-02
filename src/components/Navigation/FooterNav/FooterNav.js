import React from 'react';
import classes from './FooterNav.module.css';

import navItems from '../NavItems';
import { Link } from 'react-scroll';

const FooterNav = () => {
    return (
        <div className={classes.FooterNav}>
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
                                    offset={-60} 
                                    activeClass={classes.active} >
                                        {navItem.label} 
                                </Link>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    )
}

export default FooterNav;
