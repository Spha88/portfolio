import React from 'react'
import classes from './SideNav.module.css'
import navItems from '../NavItems';
import { Link } from 'react-scroll';
import { useHistory } from 'react-router-dom';

/*
    This component uses react-scroll links to smoothly scroll the page to the different section,
    attached to each link is a click event that uses history.push to change the url to meet the relevant section. 
    I used to react-scroll because it updates the bullets and active class. 
*/

const SideNav = props => {

    const history = useHistory();

    return (
        <div className={classes.SideNav}>
            <ul>
                <li>
                    <Link 
                        to="home" 
                        spy={true} smooth={true} 
                        duration={1000} 
                        offset={-100} 
                        activeClass={classes.active}
                        onClick={()=> history.push(`/`)} >
                            <span className={classes.Label}>Home</span>
                    </Link>
                </li>

                { navItems.map( navItem => {
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
                })}
            </ul>
        </div>
    )
}


export default SideNav;
