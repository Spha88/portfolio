import React, { useEffect } from 'react';

import { animateScroll as scroll } from 'react-scroll';
import { useHistory } from 'react-router-dom';

import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Skills from '../../components/Skills/Skills';
import Services from '../../components/Services/Services';
import Portfolio from '../../components/Portfolio/Portfolio';
import Testimonials from '../../components/Testimonials/Testimonials';
import SideNav from '../../components/Navigation/SideNav/SideNav';
import Contact from '../../components/Contact/Contact';


const HomePage = props => {

    let history = useHistory();

    useEffect(() => {
        if (props.match.params.section) {
            const section = props.match.params.section;
            const element = document.getElementById(section);
            console.log(props);
            if (element) {
                const elementPosition = element.offsetTop;
                scroll.scrollTo(elementPosition - 60, { smooth: true, duration: 1000, spy: true });
            } else {
                history.push('/not-found');
            }
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
            <Contact />
            <SideNav />
        </React.Fragment>
    );
}

export default HomePage;