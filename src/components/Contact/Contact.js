import React from 'react';
import classes from './Contact.module.css';
import ContactForm from './ContactForm/ContactForm';

export const Contact = () => {
    return (
        <div id="contact" className={classes.ContactContainer}>
            <div className={classes.ContainerInner}>
                <ContactForm />
            </div>
        </div>
    )
}

export default Contact;
