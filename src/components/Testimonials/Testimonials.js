import React, { Component } from 'react';
import Container from '../UI/Container/Container';
import classes from './Testimonials.module.css';

import Testimonial from './Testimonial/Testimonial';

import portrait_one from '../../assets/images/portrait-one.jpg';
import portrait_two from '../../assets/images/portrait-two.jpg';
import portrait_three from '../../assets/images/portrait-three.jpg';

class Testimonials extends Component {
    state = { 
        currentSlide: 0 ,
        numberOfSlides: 0
    }

    bootUpSlide = () => {
        let carouselContainer = document.querySelector('#carouselInner');


        let carouselContainerWidth = carouselContainer.offsetWidth;
        let slides = carouselContainer.lastChild.children;

        this.setState({ numberOfSlides: slides.length });

        // Set the width of the slides to be equal to that of the parent div
        for (let i = 0; i < slides.length; i++) slides[i].style.width = carouselContainerWidth + 'px';

        // Height of the 
        let firstChildHeight = carouselContainer.firstElementChild.offsetHeight;
        let lastChildHeight = carouselContainer.lastElementChild.offsetHeight;

        carouselContainer.style.height = firstChildHeight + lastChildHeight + 'px';

        

    }

    componentDidMount() {
        this.bootUpSlide();
    }

    slide = e => {
        this.setState({ currentSlide: parseInt(e.target.dataset.slideTo ) })
    }

    render() { 
        const style = {
            'transform': `translateX(-${ (this.state.currentSlide/this.state.numberOfSlides)*100 }%)`
        }
        return ( 
            <Container id="testimonials">
                <div className={classes.TestimonialsCarousel} id="carouselInner">

                    <ul className={classes.CarouselIndicators}>
                        <li 
                            onClick={this.slide} 
                            data-slide-to={0} 
                            className={ this.state.currentSlide === 0 ? classes.active : null }
                            style={{backgroundImage: `url(${portrait_one})`}}></li>
                        <li 
                            onClick={this.slide} 
                            data-slide-to={1} 
                            className={ this.state.currentSlide === 1 ? classes.active : null }
                            style={{backgroundImage: `url(${portrait_two})`}}></li>
                        <li 
                            onClick={this.slide} 
                            data-slide-to={2} 
                            className={ this.state.currentSlide === 2 ? classes.active : null }
                            style={{backgroundImage: `url(${portrait_three})`}}></li>
                    </ul>

                    <div className={classes.CarouselInner} id="carouselStrip" style={style}>
                        <Testimonial
                            personName="Siya Makamole"
                            companyName="Physiotherapist"
                            testimonialText="Spha was very professional, he kept me up to date with every part of the process." />
                        <Testimonial 
                            personName="Emma Strydom"
                            companyName="Riverside Lodge"
                            testimonialText="Spha is always available when I need help, I would recommend him to any other company"/>
                        <Testimonial 
                            personName="Robert Nqwamla"
                            companyName="Finance Company"
                            testimonialText="Spha was very professional, he kept me up to date with every part of the process."/>
                    </div>

                </div>
            </Container>
        );
    }
}
 
export default Testimonials;