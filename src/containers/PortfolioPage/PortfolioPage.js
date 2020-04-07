import React, { useEffect } from 'react'
import Portfolio from '../../components/Portfolio/Portfolio';
import Gallery from '../../components/Portfolio/Gallery/Gallery';

import { animateScroll as scroll } from 'react-scroll';
import { useLocation } from 'react-router-dom';

const PortfolioPage = () => {

    let location = useLocation();

    useEffect(() => {
        if(location.pathname === '/portfolio/all' ){
            scroll.scrollToTop({smooth: true, duration: 1000 });
        }
    })

    return ( 
        <React.Fragment>
            <Portfolio />
            <Gallery />
        </React.Fragment>
    );
}

export default PortfolioPage;


