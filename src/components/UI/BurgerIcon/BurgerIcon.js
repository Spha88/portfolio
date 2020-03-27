import React from 'react';
import classes from './BurgerIcon.module.css';

const BurgerIcon = props => {

    const {toggleNav, toggleSideDrawer, mobile } = props;

    const iconClasses = [ classes.BurgerIcon ];

    if( mobile ) iconClasses.push(classes.Mobile);

    return ( 
        <div 
            className={iconClasses.join(' ')} 
            onClick={ mobile ? toggleSideDrawer : toggleNav } >
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}
 
export default BurgerIcon;