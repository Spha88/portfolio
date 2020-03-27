import React, { Component } from 'react';
import classes from './Header.module.css';

import Nav from './Nav/Nav';
import BurgerIcon from '../UI/BurgerIcon/BurgerIcon';
import Logo from '../UI/Logo/Logo';
import SideDrawer from './SideDrawer/SideDrawer';


class Header extends Component {

    state = {
        displayNav: false,
        displaySideDrawer: false
    }

    toggleDisplayNav = () => {
        this.setState( state => {
            return { displayNav: !state.displayNav }
        })
    }

    toggleSideDrawer = () => {
        console.log('Mobile pressed');
        this.setState( state => {
            return { displaySideDrawer: !state.displaySideDrawer }
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
                <BurgerIcon toggleSideDrawer={this.toggleSideDrawer} mobile={true}/>
                <SideDrawer 
                    toggleSideDrawer = { this.toggleSideDrawer }
                    displaySideDrawer = { this.state.displaySideDrawer } />
            </header> 
         );
    }
}
 
export default Header;