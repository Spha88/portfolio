import React from 'react';
import classes from './Nav.module.scss';
import { NavLink } from 'react-router-dom';
import navItems from '../NavItems';

const Nav = props => {
    const { displayNav } = props;

    const navClasses = [classes.Nav];
    if (displayNav) navClasses.push(classes.DisplayNav);

    return (
        <nav className={navClasses.join(' ')}>
            <ul>
                {' '}
                {navItems.map(navItem => {
                    return (
                        <li key={navItem.id}>
                            <NavLink
                                to={`/${navItem.id}`}
                                activeClassName={classes.active}
                            >
                                {navItem.label}
                            </NavLink>
                        </li>
                    );
                })}{' '}
            </ul>
        </nav>
    );
};

export default Nav;
