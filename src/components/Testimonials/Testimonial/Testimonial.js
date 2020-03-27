import React from 'react';
import classes from './Testimonial.module.css';

const Testimonial = props => {
    const { testimonialText, personName, companyName } = props;
    return ( 
        <div className={classes.CarouselItem} data-target="0">
            <div className={classes.TestimonialContent}>
                <i className="fa fa-quote-right fa-2x" aria-hidden="true"></i>
                <p>{testimonialText}</p>
                <span className={classes.PersonName}>{personName}</span> <br />
                <span className={classes.CompanyName}>{companyName}</span>
            </div>
        </div>
    );
}
 
export default Testimonial;