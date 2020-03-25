import React from 'react';
import classes from './BurgerIcon.module.css';

const BurgerIcon = props => {

    const {toggleNav} = props

    return ( 
        <div 
            className={classes.BurgerIcon} 
            onClick={toggleNav} >
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}
 
export default BurgerIcon;