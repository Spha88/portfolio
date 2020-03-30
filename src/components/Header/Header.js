import React, { Component } from 'react';
import classes from './Header.module.css';

import Nav from './Nav/Nav';
import BurgerIcon from '../UI/BurgerIcon/BurgerIcon';
import Logo from '../UI/Logo/Logo';
import SideDrawer from './SideDrawer/SideDrawer';
import SideNav from './SideNav/SideNav';

import { animateScroll as scroll } from 'react-scroll';


class Header extends Component {

    state = {
        displayNav: false,
        displaySideDrawer: false
    }

    componentDidMount = () => {
        window.addEventListener('scroll', e => {
            let logo = document.querySelector('#header_logo');
            let burgerIcon = document.querySelector('#mobileBurgerIcon');
            if(window.pageYOffset > 20 ) {
                logo.style.transform = "scale(0.7)";
                burgerIcon.style.transform = "scale(0.7)";
            } else {
                logo.style.transform = "scale(1)";
                burgerIcon.style.transform = "scale(1)";
            }
        })
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

    scrollTop = () => {
        scroll.scrollToTop();
    }

    render() { 
        return ( 
            <header className={classes.Header} onClick={(e) => console.dir(e.target)}>
                <div className={classes.HeaderContainer}>

                    <Logo
                        small={this.state.logoSmall}
                        click={ this.scrollTop } 
                        id="header_logo" />

                    <div className={classes.NavContainer}>
                        <Nav displayNav={this.state.displayNav} />
                        <BurgerIcon toggleNav={this.toggleDisplayNav} />
                    </div>

                    <BurgerIcon toggleSideDrawer={this.toggleSideDrawer} mobile={true}/>

                    <SideDrawer 
                        toggleSideDrawer = { this.toggleSideDrawer }
                        displaySideDrawer = { this.state.displaySideDrawer } /> 

                    <SideNav />
                </div>
            </header> 
         );
    }
}
 
export default Header;