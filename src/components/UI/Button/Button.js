import React from 'react';
import classes from './Button.module.css';

const Button = props => {
    const {label, click } = props;
    return ( 
        <button className={classes.Button} onClick={click}>
            {label}
        </button>
     );
}
 
export default Button;