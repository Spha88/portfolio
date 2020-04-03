import React from 'react';
import classes from './FooterNav.module.css';

import navItems from '../NavItems';

import { Link } from 'react-scroll';

import { useLocation, NavLink } from 'react-router-dom';

const FooterNav = () => {

    const location = useLocation();

    const scrollLinks = (
        navItems.map( navItem => {
            return (
                <li key={navItem.id}>
                    <Link to={navItem.id} spy={true} smooth={true} duration={1000} offset={-60} activeClass={classes.active} >
                        {navItem.label} 
                    </Link>
                </li>
            );
        })
    );

    const routerLinks = (
        navItems.map( navItem => {
            return (
                <li key={navItem.id}>
                    <NavLink to={`/${navItem.id}`} activeClassName={classes.active} >
                        {navItem.label} 
                    </NavLink>
                </li>
            );
        })
    );

    return (
    <div className={classes.FooterNav}>
        <ul>
            { location.pathname === '/portfolio' ? routerLinks : scrollLinks }
        </ul>
    </div>
    )
}

export default FooterNav;
