import React from 'react';
import classes from './Contact.module.css';
import ContactForm from './ContactForm/ContactForm';
import scrollReveal from 'scrollreveal';

export const Contact = () => {
    const options = {
        distance: '150%',
        origin: 'left',
        delay: '500',
        duration: '1500',
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
    };

    scrollReveal().reveal('#contactForm', options);

    return (
        <div id='contact' className={classes.ContactContainer}>
            <div id='contactForm' className={classes.ContainerInner}>
                <ContactForm />
            </div>
        </div>
    );
};

export default Contact;
