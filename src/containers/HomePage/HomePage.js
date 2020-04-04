import React, { useEffect } from 'react';

import { animateScroll as scroll } from 'react-scroll';

import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Skills from '../../components/Skills/Skills';
import Services from '../../components/Services/Services';
import Portfolio from '../../components/Portfolio/Portfolio';
import Testimonials from '../../components/Testimonials/Testimonials';
import SideNav from '../../components/Navigation/SideNav/SideNav';


const HomePage = props => {

        useEffect(() => {
            if( props.match.params.section ) {
                const section = props.match.params.section;
                const elementPosition = document.getElementById(section).offsetTop;
                scroll.scrollTo( elementPosition - 60 , { smooth: true, duration: 1000, spy: true } );

            } else {
                scroll.scrollToTop({ offset: -60, spy: true });
            }
        });

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
 
export default HomePage;