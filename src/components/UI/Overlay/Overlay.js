import React from 'react';
import classes from './Overlay.module.css';

import overlayBg from '../../../assets/images/overlay_bg.jpg'

const Overlay = props => {

    const { click } = props;

    return <div style={{backgroundImage: `url(${overlayBg})`}} onClick={ click } className={classes.Overlay} />
}
 
export default Overlay;