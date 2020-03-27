import React from 'react';
import classes from './ContactDetails.module.css';

const ContactDetails = props => {
    return ( 
        <div className={classes.ContactDetails}>
            <h2>Get in touch</h2>
            <ul>
                <li><span className={classes.Bold}>A</span>: ALIWAL NORTH, 9750</li>
                <li><span className={classes.Bold}>P</span>: <a href="tel:+27781160376">+2778 116 0376</a></li>
                <li><span className={classes.Bold}>P</span>: <a href="tel:+27783250866">+2778 325 0866</a></li>
                <li><span className={classes.Bold}>E</span>: <a href="mailto:spha@netslate.co.za">spha@netslate.co.za</a></li>
                <li><span className={classes.Bold}>E</span>: <a href="mailto:mr.smehlomakulu@gmail.com">mr.smehlomakulu@gamil.com</a></li>
            </ul>
        </div>
     );
}
 
export default ContactDetails;