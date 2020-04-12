import React from 'react';
import classes from './Skill.module.css';

import scrollReveal from 'scrollreveal';

const Skill = props => {
    const {skillHeading, experience, number } = props;
    const delay = number * 100 + 500;

    const options = {distance: '100%', origin: 'left', delay: delay, duration: '500' }
    scrollReveal().reveal('#skillItem', options)

    return ( 
        <div className={classes.Skill} id="skillItem">
            <h4>{skillHeading}</h4>
            <div className={classes.Bar}>
                <div className={classes.Experience} style={{width: experience}} >
                    <div className={classes.AnimateExperience}></div>
                </div> 
            </div>
        </div>
    );
}
 
export default Skill;