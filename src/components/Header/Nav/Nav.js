import React from 'react';
import classes from './Nav.module.css';
import { Link } from 'react-scroll';
import navItems from '../NavItems';

const Nav = props =>  {

    const {displayNav} = props;

    const navClasses = [classes.Nav];
    if( displayNav ) navClasses.push( classes.DisplayNav );

    return ( 
        <nav className={navClasses.join(' ')}>
            <ul>
                { 
                    navItems.map( navItem => {
                        return (
                            <li key={navItem.id}>
                                <Link
                                    to={navItem.id} 
                                    spy={true} smooth={true} 
                                    duration={1000} 
                                    offset={-100} 
                                    activeClass={classes.active}>
                                        {navItem.label}
                                </Link>
                            </li>
                        );
                    })
                }
            </ul>
        </nav>
    );
}
 
export default Nav;