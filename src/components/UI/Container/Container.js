import React from 'react';
import classes from './Container.module.css';

const Container = props => {
    return ( 
        <section className={classes.Container}>{props.children}</section>
    );
}
 
export default Container;