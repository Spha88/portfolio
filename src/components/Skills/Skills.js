import React from 'react';
import classes from './Skills.module.scss';

import Container from '../UI/Container/Container';
import Skill from './Skill/Skill';
import skills from './skillsList';

const Skills = props => {
    return (
        <Container id="skills">
            <h1 className={classes.SkillsHeading}>My Set of Skills</h1>
            <div className={classes.SkillsList}> {
                skills.map((skill, index) => {
                    return <Skill
                        key={index}
                        number={index}
                        skillHeading={skill.name}
                        experience={skill.experience} />
                })
            } </div>
        </Container>
    );
}

export default Skills;