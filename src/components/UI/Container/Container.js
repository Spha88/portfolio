import React from 'react';
import classes from './Container.module.css';

const Container = props => {

    const { id } = props;

    return  <section id={id} className={classes.Container}>{props.children}</section> ;
}
 
export default Container;