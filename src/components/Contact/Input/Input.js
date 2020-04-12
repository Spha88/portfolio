import React from 'react'
import classes from './Input.module.css';

const Input = props => {
    switch (props.type) {
        case 'text':
            return (
                <div className={classes.FormGroup}>
                    <label htmlFor={props.name}>{props.label}</label>
                    <input 
                        type={props.type} 
                        name={props.name}
                        value={props.value}
                        onChange={props.change}/>
                </div>
            )
        case 'email':
            return (
                <div className={classes.FormGroup}>
                    <label htmlFor={props.name}>{props.label}</label>
                    <input 
                        type={props.type} 
                        name={props.name}
                        value={props.value}
                        onChange={props.change}/>
                </div>
            )
        case 'textarea':
            return (
                <div className={classes.FormGroup}>
                    <label htmlFor={props.name}>
                        {props.label}
                    </label>
                    <textarea 
                        name={props.name} 
                        rows={props.rows}
                        placeholder={props.placeholder}
                        onChange={props.change}>
                    </textarea>
                </div>
            );
        default:
            return (
                <h3 style={{color: 'red'}}>Error: Enter the input type</h3>
            )
    }

    
}

export default Input;
