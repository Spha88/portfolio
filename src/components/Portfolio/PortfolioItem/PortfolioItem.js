import React from 'react';
import classes from './PortfolioItem.module.css';

const PortfolioItem = props => {
    const { backgroundImage, link } = props;
    return ( 
        <div className={classes.PortfolioItem}>
            <div style={{backgroundImage: `url(${backgroundImage})`}}>
                <a href={link} > </a>
            </div>
        </div>
    );
}
 
export default PortfolioItem; 