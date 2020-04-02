import React, { Component } from 'react';

import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Skills from '../../components/Skills/Skills';
import Services from '../../components/Services/Services';
import Portfolio from '../../components/Portfolio/Portfolio';
import Testimonials from '../../components/Testimonials/Testimonials';
import SideNav from '../../components/Navigation/SideNav/SideNav';


class HomePage extends Component {

    render() { 
        return ( 
            <React.Fragment>
                <Hero />
                <About />
                <Skills />
                <Services />
                <Portfolio />
                <Testimonials />
                <SideNav />
            </React.Fragment>
        );
    }
}
 
export default HomePage;