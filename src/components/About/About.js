import React, { Component } from 'react';
import classes from './About.module.css';

import Container from '../UI/Container/Container';

class About  extends Component {

    state = {
        containerWidth: 0
    }

    prepareComponent = () => {
        let container = document.querySelector('#aboutContainer');
        let backgroundImage = container.firstChild;
        let containerWidth = container.offsetWidth; 

        this.setState({ containerWidth: containerWidth });

        backgroundImage.style.width = containerWidth + 'px';

        //Make sure the size of the the background element is dynamically resizes to that of the container;
        window.addEventListener( 'resize', () => {
            this.setState({ containerWidth: container.offsetWidth });
        })
    }

    componentDidMount() {
        this.prepareComponent(); 
    }

    render(){
        return ( 
            <Container id="about">
                <div className={classes.aboutUsContainer} id="aboutContainer">
                    <div style={{ width: `${this.state.containerWidth}px` }} className={classes.backgroundImage}></div>
                    <div className={classes.content}>
                        <h5>My story</h5>
                        <h1>I'm a freelancing Web designer and developer</h1>
                        <p>When I started I never thought I would get hooked in this art, I was just trying to help a friend market her business. As a business student I knew one of the most effective ways was online marketing. We didn't have the money to pay for a website, so I did some research and came across a simple guideline on how to create a web page using HTML, next thing I was learning CSS. When I started using JavaScript I knew I found something interesting and I loved it. </p>
                        <p>I created her website then moved on to create for other clients, from there I went on to learn other web design tools and technologies. </p>
                    </div>
                </div>
            </Container>
        );
    }
}
 
export default About;