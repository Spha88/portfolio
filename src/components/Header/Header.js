import React, { Component } from 'react';
import classes from './Header.module.css';

import Nav from './Nav/Nav';
import BurgerIcon from '../UI/BurgerIcon/BurgerIcon';
import Logo from '../UI/Logo/Logo';


class Header extends Component {
    state = {
        displayNav: false
    }

    toggleDisplayNav = () => {
        this.setState( state => {
            return { displayNav: !state.displayNav }
        })
    }

    render() { 
        return ( 
            <header className={classes.Header}>
                <Logo />
                <div className={classes.NavContainer}>
                    <Nav displayNav={this.state.displayNav} />
                    <BurgerIcon toggleNav={this.toggleDisplayNav} />
                </div>
            </header>
         );
    }
}
 
export default Header;