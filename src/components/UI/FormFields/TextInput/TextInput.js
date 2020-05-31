import React, { useState, useEffect } from 'react';
import classes from './TextInput.module.scss';
import validator from 'validator';

const TextInput = ({ name, label, updateDetails, sent }) => {
    let [userName, setUserName] = useState('');
    let [inputChanged, setInputChange] = useState(false);
    let [error, setError] = useState(false);
    let [errorMessage, setErrorMessage] = useState('');
    let [charsRemaining, setCharsRemaining] = useState(50);

    const inputChangeHandler = e => {
        setInputChange(true);
        let value = e.target.value;
        value.length < 51 && setUserName(value);
    };

    useEffect(() => {
        if (inputChanged) {
            // validate empty
            if (validator.isEmpty(userName) && !sent) {
                setErrorMessage('Name is required');
                setError(true);
            } else {
                setErrorMessage('');
                setError(false);
            }
        }

        // Make sure name is not too short
        if (userName.length > 0 && userName.length <= 3 && !sent) {
            setError(true);
            setErrorMessage('Name too short');
        } else if (!validator.isEmpty(userName)) {
            setError(false);
            updateDetails('name', userName);
        }

        setCharsRemaining(50 - userName.length);

        if (sent) {
            setError(false);
            setErrorMessage('');
            setUserName('');
        }
    }, [userName, inputChanged, error, charsRemaining, updateDetails, sent]);

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
                value={userName}
                onChange={inputChangeHandler}
                onFocus={inputChangeHandler}
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

export default TextInput;
