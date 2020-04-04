import React from 'react';
import classes from './Logo.module.css';
import { Link } from 'react-router-dom';

const Logo = props => {

    const logoClasses = [classes.Logo];
    if( props.small ){
        logoClasses.push(classes.Small);
        console.log(props.small);
    }

    return ( 
        <div className={logoClasses.join(' ')} onClick={props.click} id={props.id}>
            <Link to="/"><span>Spha</span></Link>
        </div>
     );
}
 
export default Logo;