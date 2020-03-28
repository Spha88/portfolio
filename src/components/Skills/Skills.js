import React from 'react';
import classes from './Skills.module.css';

import Container from '../UI/Container/Container';
import Skill from './Skill/Skill';

const Skills = props => {
    return ( 
        <Container id="skills">
            <h1 className={classes.SkillsHeading}>My Set of Skills</h1>
            <div  className={classes.SkillsList}>
                <Skill 
                    skillHeading="HTML5"
                    experience="95%" />
                <Skill 
                    skillHeading="CSS3, Saas"
                    experience="95%" />
                <Skill 
                    skillHeading="ECMAScript" 
                    experience="85%" />
                <Skill 
                    skillHeading="React.js"
                    experience="80%" />
                <Skill 
                    skillHeading="Php"
                    experience="50%" />
                <Skill 
                    skillHeading="WordPress"
                    experience="60%" />
                <Skill 
                    skillHeading="PhotoShop"
                    experience="75%" />
                <Skill 
                    skillHeading="Illustrator"
                    experience="60%" />
            </div>
        </Container>
    );
}
 
export default Skills;