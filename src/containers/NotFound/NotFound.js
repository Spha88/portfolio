import React from 'react';
import classes from './NotFound.module.scss';
import { Link } from 'react-router-dom';
import not_found from '../../assets/images/not_found.svg';

const NotFound = () => {
    return (
        <div className={classes.NotFound}>
            <div>
                <img src={not_found} alt="page not found" />
                <h2>Oops! Page not found</h2>
                <Link to="/" >Back</Link>
            </div>
        </div>
    )
}

export default NotFound;
