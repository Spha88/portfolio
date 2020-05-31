import React, { Component } from 'react';
import classes from './ContactForm.module.css';
import TextInput from '../../UI/FormFields/TextInput/TextInput';
import { Button50 } from '../../UI/Button50/Button50';
import EmailInput from '../../UI/FormFields/EmailInput/EmailInput';

export default class ContactForm extends Component {
    state = {
        name: '',
        email: '',
        message: '',
    };
    submitHandler = e => {
        e.preventDefault();
        let { name, email, message } = this.state;

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

    updateContactFormDetails = (statePro, value) =>
        this.setState({ [statePro]: value });

    render() {
        let { name } = this.state;
        return (
            <div className={classes.ContactFormContainer}>
                <h1>Get in touch</h1>
                <form onSubmit={this.submitHandler}>
                    <TextInput
                        label='Name'
                        name='name'
                        value={name}
                        updateDetails={this.updateContactFormDetails}
                    />
                    <EmailInput
                        label='Email'
                        name='email'
                        updateDetails={this.updateContactFormDetails}
                    />
                    <div className={classes.SendBtnContainer}>
                        <Button50 />
                    </div>
                </form>
            </div>
        );
    }
}
