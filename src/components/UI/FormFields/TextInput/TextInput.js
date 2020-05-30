import React, { useState, useEffect } from 'react';
import classes from './TextInput.module.scss';
import validator from 'validator';

const TextInput = ({ name, label }) => {
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
            if (validator.isEmpty(userName)) {
                setErrorMessage('Name is required');
                setError(true);
            } else {
                setErrorMessage('');
                setError(false);
            }
        }

        setCharsRemaining(50 - userName.length);

        // Make sure name is not too short
        if (userName.length > 0 && userName.length <= 3) {
            setError(true);
            setErrorMessage('Name too short');
        } else if (!validator.isEmpty(userName)) {
            setError(false);
        }
    }, [userName, inputChanged, error, charsRemaining]);

    let formGroupClasses = [classes.FormGroup];
    error && formGroupClasses.push(classes.Error);

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
