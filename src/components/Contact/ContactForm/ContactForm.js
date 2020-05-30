import React, { useState } from 'react';
import classes from './ContactForm.module.css';
import Input from '../Input/Input';
import { Button50 } from '../../UI/Button50/Button50';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const submitHandler = e => {
        e.preventDefault();
        console.log(name, email, message);
        let template_params = {
            reply_to: email,
            from_name: name,
            to_name: 'Spha',
            message_html: message,
        };

        let service_id = 'default_service';
        let template_id = 'template_qgWb1eio';
        window.emailjs.send(service_id, template_id, template_params);
    };

    const inputFieldChangeHandler = e => {
        switch (e.target.name) {
            case 'name':
                setName(e.target.value);
                break;
            case 'email':
                setEmail(e.target.value);
                break;
            case 'message':
                setMessage(e.target.value);
                break;
            default:
                return;
        }
    };

    return (
        <div className={classes.ContactFormContainer}>
            <h1>Get in touch</h1>
            <form onSubmit={submitHandler}>
                <Input
                    type='text'
                    label='Name'
                    name='name'
                    value={name}
                    change={inputFieldChangeHandler}
                />
                <Input
                    type='text'
                    label='How did you hear about me?'
                    name='name'
                    value={name}
                    change={inputFieldChangeHandler}
                />
                <Input
                    type='email'
                    label='Email'
                    name='email'
                    value={email}
                    change={inputFieldChangeHandler}
                />
                <Input
                    type='textarea'
                    label='Message'
                    rows='6'
                    name='message'
                    value={message}
                    change={inputFieldChangeHandler}
                />
                <div className={classes.SendBtnContainer}>
                    <Button50 />
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
