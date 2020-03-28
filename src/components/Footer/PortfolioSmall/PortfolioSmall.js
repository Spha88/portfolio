import React from 'react';
import classes from './PortfolioSmall.module.css';

import Item from './Item/Item';

import image_1 from '../../../assets/images/image_1.jpg';
import image_2 from '../../../assets/images/image_2.jpg';
import image_3 from '../../../assets/images/image_3.jpg';
import image_4 from '../../../assets/images/image_4.jpg';
import image_5 from '../../../assets/images/image_5.jpg';
import image_6 from '../../../assets/images/image_6.jpg';
import image_7 from '../../../assets/images/image_7.jpg';
import image_8 from '../../../assets/images/image_8.jpg';

const PortfolioSmall = props => {
    return ( 
        <div className={classes.PortfolioSmall}>
            <h2>My Portfolio</h2>
            <div className={classes.PortfolioItems}> 
                <Item background={image_1} />
                <Item background={image_2} />
                <Item background={image_3} />
                <Item background={image_4} />
                <Item background={image_5} />
                <Item background={image_6} />
                <Item background={image_7} />
                <Item background={image_8} />
            </div>
        </div>
     );
}
 
export default PortfolioSmall;