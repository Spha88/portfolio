import React from 'react';
import classes from './About.module.css';

const About = (props) => {
    return ( 
        <section className={classes.About}>
            <div className={classes.aboutUsContainer}>
                <div className={classes.backgroundImage}></div>
                <div className={classes.content}>
                    <h5>My short story</h5>
                    <h1>I'm a freelancing Web <span className={classes.lineThrough}>designer</span> and developer</h1>
                    <p>When I started I never thought I would get hooked into this field, I just wanted to help my partner forward slash other half, market her business. As a business student I knew one of the most effective ways was a website. I did some research and came across a simple guideline on how to create a web page using HTML, next thing I was on CSS, then JavaScript, that was it. </p>
                    <p>I created her website then moved on to create for other clients, from there I went on to learn other web design tools such as Photoshop and Illustrator. </p>
                </div>
            </div>
        </section>
    );
}
 
export default About;