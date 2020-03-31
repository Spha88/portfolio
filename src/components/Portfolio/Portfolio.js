import React from 'react';
import classes from './Portfolio.module.css';

import Container from '../UI/Container/Container';
import PortfolioItem from './PortfolioItem/PortfolioItem';
import Button from '../UI/Button/Button';

import bg_portfolio_1 from '../../assets/images/bg_portfolio_1.png';
import bg_portfolio_2 from '../../assets/images/bg_portfolio_2.png';
import bg_portfolio_3 from '../../assets/images/bg_portfolio_3.png';
import bg_portfolio_4 from '../../assets/images/bg_portfolio_4.png';
import bg_portfolio_5 from '../../assets/images/bg_portfolio_5.png';
import bg_portfolio_6 from '../../assets/images/bg_portfolio_6.png';

import document_2 from '../../assets/documents/project_2.pdf';
import document_4 from '../../assets/documents/project_4.pdf';
import document_5 from '../../assets/documents/project_5.pdf';
import document_6 from '../../assets/documents/project_6.pdf';

const Portfolio = props => {
    return ( 
        <Container id="portfolio">
            <header className={classes.PortfolioHeader}>
                    <h1>Clients and Work</h1>
                    <Button label="View All" />
            </header>
            <div className={classes.PortfolioThumbnails}>
                <PortfolioItem
                    link="http://jakstrydom.com/"
                    backgroundImage={bg_portfolio_1}
                />
                <PortfolioItem
                    link={document_2}
                    backgroundImage={bg_portfolio_2}
                />
                <PortfolioItem 
                    link="http://riversidelodgealiwalnorth.co.za/"
                    backgroundImage={bg_portfolio_3}
                />
                <PortfolioItem
                    link={document_4}
                    backgroundImage={bg_portfolio_4}
                />
                <PortfolioItem 
                    link={document_5}
                    backgroundImage={bg_portfolio_5}
                />
                <PortfolioItem
                    link={document_6} 
                    backgroundImage={bg_portfolio_6}
                />
            </div>
        </Container>
     );
}
 
export default Portfolio;