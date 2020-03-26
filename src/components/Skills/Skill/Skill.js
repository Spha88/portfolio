import React from 'react';
import classes from './Skill.module.css';

const Skill = props => {

    const {skillHeading, experience } = props;

    const style = {
        width: experience
    }

    return ( 
        <div className={classes.Skill}>
            <h4>{skillHeading}</h4>
            <div className={classes.Bar}>
                <div class={classes.Experience} style={style} >
                    <div className={classes.AnimateExperience}></div>
                </div>
            </div>
        </div>
    );
}
 
export default Skill;