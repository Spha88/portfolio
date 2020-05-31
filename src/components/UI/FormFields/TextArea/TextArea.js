import React, { useState, useEffect } from 'react';
import classes from './TextArea.module.scss';
import validator from 'validator';

const TextArea = ({ name, label, updateDetails }) => {
    let [userMessage, setUserMessage] = useState('');
    let [inputChanged, setInputChange] = useState(false);
    let [error, setError] = useState(false);
    let [errorMessage, setErrorMessage] = useState('');
    let [charsRemaining, setCharsRemaining] = useState(200);

    const inputChangeHandler = e => {
        setInputChange(true);
        let value = e.target.value;
        value.length < 201 && setUserMessage(value);
    };

    useEffect(() => {
        if (inputChanged) {
            // validate empty
            if (validator.isEmpty(userMessage)) {
                setErrorMessage('Message is required');
                setError(true);
            } else {
                setErrorMessage('');
                setError(false);
            }
        }

        // Make sure Message is not too short
        if (userMessage.length > 0 && userMessage.length <= 15) {
            setError(true);
            setErrorMessage('Message too short');
            updateDetails('message', '');
        } else if (!validator.isEmpty(userMessage)) {
            setError(false);
            updateDetails('message', userMessage);
        }

        setCharsRemaining(200 - userMessage.length);
    }, [userMessage, inputChanged, error, charsRemaining, updateDetails]);

    // Change the color of border and messages to warning red validation fails
    let formGroupClasses = [classes.FormGroup];
    error && formGroupClasses.push(classes.Error);

    // change border-color to green if the input field passes validation
    inputChanged && !error && formGroupClasses.push(classes.Acceptable);

    return (
        <div className={formGroupClasses.join(' ')}>
            {label && <label htmlFor='message'>{label}</label>}
            <textarea
                type='text'
                name='message'
                value={userMessage}
                onChange={inputChangeHandler}
                onFocus={inputChangeHandler}
            ></textarea>
            <div className={classes.ErrorMsgContainer}>
                {errorMessage.length !== '' && <span>{errorMessage}</span>}
            </div>
            <span
                className={`${classes.CharsRemaining} ${
                    charsRemaining < 31 && classes.FewCharsRemaining
                }`}
            >
                {charsRemaining < 41 && charsRemaining}
            </span>
        </div>
    );
};

export default TextArea;
