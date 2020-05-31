import React, { useState, useEffect } from 'react';
import classes from './EmailInput.module.scss';
import validator from 'validator';

const EmailInput = ({ name, label, updateDetails, sent }) => {
    let [userEmail, setUserEmail] = useState('');
    let [inputChanged, setInputChange] = useState(false);
    let [error, setError] = useState(false);
    let [errorMessage, setErrorMessage] = useState('');
    let [charsRemaining, setCharsRemaining] = useState(40);

    const inputChangeHandler = e => {
        setInputChange(true);
        let value = e.target.value.trim();
        value.length < 41 && setUserEmail(value);
    };

    const validateEmail = e => {
        // Make sure it is a valid email address
        if (inputChanged && !validator.isEmail(userEmail) && !sent) {
            setError(true);
            setErrorMessage('Enter a valid email address');
        } else if (!validator.isEmpty(userEmail)) {
            setError(false);

            // send input field value to contact form
            updateDetails('email', userEmail);
            //-------------------------------------------
        }

        validator.isEmpty(userEmail) &&
            !sent &&
            setErrorMessage('Email Required');
    };

    useEffect(() => {
        if (inputChanged) {
            // validate empty
            if (validator.isEmpty(userEmail) && !sent) {
                setErrorMessage('Email is required');
                setError(true);
            } else {
                setErrorMessage('');
            }

            validator.isEmail(userEmail) ? setError(false) : setError(true);
            !validator.isEmail(userEmail) && updateDetails('email', '');
        }
        setCharsRemaining(40 - userEmail.length);

        if (sent) {
            setError(false);
            setErrorMessage('');
            setUserEmail('');
        }
    }, [userEmail, inputChanged, error, charsRemaining, updateDetails, sent]);

    // Change the color of border and messages to warning red validation fails
    let formGroupClasses = [classes.FormGroup];
    error && formGroupClasses.push(classes.Error);

    // change border-color to green if the input field passes validation
    inputChanged && !error && formGroupClasses.push(classes.Acceptable);

    return (
        <div className={formGroupClasses.join(' ')}>
            {label && <label htmlFor={name}>{label}</label>}
            <input
                type='text'
                name={name}
                value={userEmail}
                onChange={inputChangeHandler}
                onFocus={inputChangeHandler}
                onBlur={validateEmail}
            />
            <div className={classes.ErrorMsgContainer}>
                {errorMessage.length !== '' && <span>{errorMessage}</span>}
            </div>
            <span
                className={`${classes.CharsRemaining} ${
                    charsRemaining < 11 && classes.FewCharsRemaining
                }`}
            >
                {charsRemaining < 21 && charsRemaining}
            </span>
        </div>
    );
};

export default EmailInput;
