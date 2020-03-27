import React from 'react';
import classes from './Overlay.module.css';

const Overlay = props => {

    const { click } = props;

    return <div onClick={ click } className={classes.Overlay} />
}
 
export default Overlay;