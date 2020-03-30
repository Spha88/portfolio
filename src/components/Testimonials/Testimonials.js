import React, { Component } from 'react';
import Container from '../UI/Container/Container';
import classes from './Testimonials.module.css';

import Testimonial from './Testimonial/Testimonial';

import portrait_one from '../../assets/images/portrait-one.jpg';
import portrait_two from '../../assets/images/portrait-two.jpg';
import portrait_three from '../../assets/images/portrait-three.jpg';

class Testimonials extends Component {
    state = { 
        currentSlide: 1,
        actualCurrentSlide: 1,
        numberOfSlides: 0,
    }

    bootUpSlide = () => {

        let carouselContainer = document.querySelector('#carouselInner');

        let carouselContainerWidth = carouselContainer.offsetWidth;
        let slides = carouselContainer.lastChild.children;

        this.setState({ numberOfSlides: slides.length });

        // Set the width of the slides to be equal to that of the parent div
        for (let i = 0; i < slides.length; i++) slides[i].style.width = carouselContainerWidth + 'px';

        // Height of the
        console.dir(carouselContainer)
        let firstChildHeight = carouselContainer.children[1].offsetHeight;
        let lastChildHeight = carouselContainer.lastElementChild.offsetHeight;

        carouselContainer.style.height = firstChildHeight + lastChildHeight + 'px';
    }

    componentDidMount() {
        this.bootUpSlide();
    }


    slide = e => {
        
        let slideStrip = e.target.offsetParent.offsetParent.children[2];
        slideStrip.style.transition = 'all ease-in-out 1000ms';
        this.setState({ 
            currentSlide: parseInt( e.target.dataset.slideTo ), 
            actualCurrentSlide:  parseInt( e.target.dataset.slideTo ) 
        })
    }

    nextSlide = (e) => {
        let slideStrip = e.currentTarget.offsetParent.lastChild;
        console.log(slideStrip);
        if( this.state.currentSlide > this.state.actualCurrentSlide ) {

            slideStrip.style.transition = 'all ease-in-out 1000ms';
            this.setState({ currentSlide: 2, actualCurrentSlide: 2 });

        } else if( this.state.currentSlide === (this.state.numberOfSlides - 2) ) {

            this.setState( state => {
                return { currentSlide: state.currentSlide++, actualCurrentSlide: 1 }
            })

            setTimeout(()=>{
                slideStrip.style.transition = 'none';
                slideStrip.style.transform = `translateX(-${( 1/this.state.numberOfSlides ) * 100 }%)`;
            }, 1000)

        } else if(this.state.currentSlide === 0 && this.state.actualCurrentSlide === (this.state.numberOfSlides-2)){
            
            slideStrip.style.transition = 'all ease-in-out 1000ms';
            this.setState({ currentSlide: this.state.numberOfSlides-2 })

        } else {
            this.setState( state => {
                return { currentSlide: state.currentSlide++, actualCurrentSlide: state.actualCurrentSlide++ }
            })
        }
        
    }

    prevSlide = e => {
        let slideStrip = e.currentTarget.offsetParent.lastChild;
        console.log(slideStrip);
        if( this.state.currentSlide === 1 && this.state.actualCurrentSlide === 1 ){

            this.setState( state => {
                return { currentSlide: state.currentSlide--, actualCurrentSlide: 3 };
            })

            setTimeout(()=>{
                slideStrip.style.transition = 'none';
                slideStrip.style.transform = `translateX(-${( 3/this.state.numberOfSlides ) * 100 }%)`;
            }, 1000)

        } else if ( this.state.currentSlide === 0 && this.state.actualCurrentSlide === 3 ) {

            slideStrip.style.transition = 'all ease-in-out 1000ms';
            this.setState({ currentSlide: 2, actualCurrentSlide: 2});
        
        } else if ( this.state.currentSlide === ( this.state.numberOfSlides - 1 )) {

            slideStrip.style.transition = 'all ease-in-out 1000ms';
            this.setState({ currentSlide: 1, actualCurrentSlide: 1 })

        } else  {
            this.setState( state => {
                return { currentSlide: state.currentSlide--, actualCurrentSlide: state.actualCurrentSlide-- }
            })
        }
    }

    render() { 
        const style = {
            'transform': `translateX(-${ (this.state.currentSlide/this.state.numberOfSlides)*100 }%)`
        }

        return ( 
            <Container id="testimonials">
                <div className={classes.TestimonialsCarousel} id="carouselInner">

                    <div className={classes.slideButtons}>
                        <div className={classes.next} onClickCapture={ this.nextSlide }>
                            <span><i className="fas fa-chevron-right"></i></span>
                        </div>
                        <div className={classes.prev} onClick={ this.prevSlide }>
                            <span><i className="fas fa-chevron-left"></i></span>
                        </div>
                    </div>

                    <ul className={classes.CarouselIndicators}>
                        <li 
                            onClick={this.slide} 
                            data-slide-to={1} 
                            className={ this.state.actualCurrentSlide === 1 ? classes.active : null }
                            style={{backgroundImage: `url(${portrait_one})`}}></li>
                        <li 
                            onClick={this.slide} 
                            data-slide-to={2} 
                            className={ this.state.actualCurrentSlide === 2 ? classes.active : null }
                            style={{backgroundImage: `url(${portrait_two})`}}></li>
                        <li 
                            onClick={this.slide} 
                            data-slide-to={3} 
                            className={ this.state.actualCurrentSlide === 3 ? classes.active : null }
                            style={{backgroundImage: `url(${portrait_three})`}}></li>
                    </ul>

                    <div className={classes.CarouselInner} id="carouselStrip" style={style}>
                        <Testimonial 
                            personName="3 Robert Nqwamla"
                            companyName="Finance Company"
                            testimonialText="Spha was very professional, he kept me up to date with every part of the process."/>
                        <Testimonial
                            personName="1 Siya Makamole"
                            companyName="Physiotherapist"
                            testimonialText="Spha was very professional, he kept me up to date with every part of the process." />
                        <Testimonial 
                            personName="2 Emma Strydom"
                            companyName="Riverside Lodge"
                            testimonialText="Spha is always available when I need help, I would recommend him to any other company"/>
                        <Testimonial 
                            personName="3 Robert Nqwamla"
                            companyName="Finance Company"
                            testimonialText="Spha was very professional, he kept me up to date with every part of the process."/>
                        <Testimonial
                            personName="1 Siya Makamole"
                            companyName="Physiotherapist"
                            testimonialText="Spha was very professional, he kept me up to date with every part of the process." />
                    </div>
        
                </div>
            </Container>
        );
    }
}
 
export default Testimonials;