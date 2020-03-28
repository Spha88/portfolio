import React from 'react';
import classes from './Item.module.css';

const Item = props => {
    const { background } = props;

    return ( 
        <div 
            className={classes.PortfolioItem}
            style={{backgroundImage: `url(${background})`}} />
     );
}
 
export default Item; 