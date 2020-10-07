import React, { useState } from 'react';
import validator from 'validator';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Fade from 'react-reveal/Fade';


import classes from './ContactForm.module.scss';
import { Button50 } from '../../UI/Button50/Button50';

const ContactForm = () => {

    const [sent, setSent] = useState(false);
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        axios({
            method: 'post',
            url: 'form_handler.php',
            headers: { 'Content-type': 'application/json' },
            data: {
                name: data.name,
                email: data.email,
                subject: 'Email enquiry from the website',
                message: data.message
            }
        })
            .then(res => {
                console.log('Message sent')
                document.getElementById('contact-form').reset();
                setSent(true);
            })
            .catch(error => {
                console.log('Could not send message', error);
            })

    }

    return (
        <div className={`${classes.ContactFormContainer} ${sent && classes.sent}`}>

            <h1>Get in touch</h1>

            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" id="contact-form">

                {/** Name */}
                <div className={classes.InputFieldGroup}>
                    <label htmlFor="name">Name</label>
                    <input name="name" type="text"
                        ref={register({
                            required: { value: true, message: 'Name is required.' },
                            minLength: { value: 2, message: 'Name too short.' },
                            maxLength: { value: 60, message: 'Your name is too long.' },
                            validate: value => validator.isAlpha(value.replace(/\s/g, '')) || 'Invalid characters, only alphabets allowed',
                        })}
                    />
                    <div className={classes.ErrorMsg}>
                        <Fade bottom when={!!(errors?.name?.message)}>
                            <span>{errors?.name?.message}</span>
                        </Fade>
                    </div>
                </div>

                {/** Email */}
                <div className={classes.InputFieldGroup}>
                    <label htmlFor="email">Email</label>
                    <input name="email" type="text"
                        ref={register({
                            required: { value: true, message: 'Email is required.' },
                            validate: email => validator.isEmail(email) || 'Invalid E-mail'
                        })}
                    />
                    <div className={classes.ErrorMsg}>
                        <Fade bottom when={!!(errors?.email?.message)}>
                            <span>{errors?.email?.message}</span>
                        </Fade>
                    </div>
                </div>

                {/** Message */}
                <div className={classes.InputFieldGroup}>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" cols="30" rows="6 "
                        ref={register({
                            required: { value: true, message: 'Message is required.' },
                            minLength: { value: 2, message: 'Message too short.' },
                            maxLength: { value: 1000, message: 'Your name is too long.' },
                        })}
                    ></textarea>
                    <div className={classes.ErrorMsg}>
                        <Fade bottom when={!!(errors?.message?.message)}>
                            <span>{errors?.message?.message}</span>
                        </Fade>
                    </div>
                </div>

                <div className={classes.SendBtnContainer}>
                    <Button50 />
                </div>
            </form>
        </div>
    );
}

export default ContactForm;
