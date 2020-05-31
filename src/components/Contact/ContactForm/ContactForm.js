import React, { Component } from 'react';
import validator from 'validator';
import classes from './ContactForm.module.scss';
import TextInput from '../../UI/FormFields/TextInput/TextInput';
import { Button50 } from '../../UI/Button50/Button50';
import EmailInput from '../../UI/FormFields/EmailInput/EmailInput';
import TextArea from '../../UI/FormFields/TextArea/TextArea';

export default class ContactForm extends Component {
    state = {
        name: '',
        email: '',
        message: '',
        errorMessage: '',
    };
    submitHandler = e => {
        e.preventDefault();
        let { name, email, message } = this.state;
        if (
            validator.isEmpty(name) ||
            validator.isEmpty(email) ||
            validator.isEmpty(message)
        ) {
            this.setState({ errorMessage: 'Fill in all the fields' });
            return;
        }

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
        let { errorMessage } = this.state;
        return (
            <div className={classes.ContactFormContainer}>
                <h1>Get in touch</h1>
                <div className={classes.ErrorMsgContainer}>
                    {errorMessage && <small>{errorMessage}</small>}
                </div>
                <form onSubmit={this.submitHandler}>
                    <TextInput
                        label='Name'
                        name='name'
                        updateDetails={this.updateContactFormDetails}
                    />
                    <EmailInput
                        label='Email'
                        name='email'
                        updateDetails={this.updateContactFormDetails}
                    />
                    <TextArea
                        label='Message'
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
