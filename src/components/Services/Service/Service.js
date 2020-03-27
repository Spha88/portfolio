import React from 'react';
import classes from './Service.module.css';

const Service = props => {

    const { number, title, content } = props;

    return ( 
        <div className={classes.ServiceItem}>
            <div className={classes.ServiceNumber}>
                <h1>{number}</h1>
            </div>
            <div className={classes.Service}>
                <h4>{title}</h4>
                <p>{content}</p>
            </div>
        </div>
     );
}
 
export default Service; 