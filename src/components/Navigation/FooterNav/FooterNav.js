import React from 'react';
import classes from './FooterNav.module.css';

import navItems from '../NavItems';
import { Link } from 'react-scroll';

import { useHistory } from 'react-router-dom';

const FooterNav = () => {

    const history = useHistory();

    return (
    <div className={classes.FooterNav}>
        <ul>
            {
                navItems.map( navItem => {
                    return (
                        <li key={navItem.id}>
                            <Link 
                                to={navItem.id} 
                                spy={true} smooth={true}  
                                duration={1000}  
                                offset={-60}  
                                activeClass={classes.active} 
                                onClick={()=> history.push(`/${navItem.id}`)}> 
                                    <span className={classes.Label}>{navItem.label}</span>
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
