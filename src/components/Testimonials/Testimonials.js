import React, { Component } from 'react';
import Container from '../UI/Container/Container';
import classes from './Testimonials.module.css';

import Testimonial from './Testimonial/Testimonial';

import portrait_one from '../../assets/images/portrait-one.jpg';
import portrait_two from '../../assets/images/portrait-two.jpg';
import portrait_three from '../../assets/images/portrait-three.jpg';

class Testimonials extends Component {
    bootUpSlide = () => {
        let carouselContainer = document.querySelector('#carouselInner');

        let carouselContainerWidth = carouselContainer.offsetWidth;
        let slides = carouselContainer.lastChild.children;

        this.setState({ numberOfSlides: slides.length });

        // Set the width of the slides to be equal to that of the parent div
        for (let i = 0; i < slides.length; i++)
            slides[i].style.width = carouselContainerWidth + 'px';

        // Track the size of the parent div on resize and set the slides to that side again
        window.addEventListener('resize', () => {
            for (let i = 0; i < slides.length; i++)
                slides[i].style.width = carouselContainer.offsetWidth + 'px';
        });

        // Height of the
        let firstChildHeight = carouselContainer.children[1].offsetHeight;
        let lastChildHeight = carouselContainer.lastElementChild.offsetHeight;

        carouselContainer.style.height =
            firstChildHeight + lastChildHeight + 'px';
    };

    componentDidMount() {
        this.bootUpSlide();

        let slideContainer = document.getElementById('carouselInner');
        let slideStrip = slideContainer.lastChild;
        let totalSlides = slideContainer.lastChild.children.length;
        let nextButton = slideContainer.firstChild.firstChild;
        let prevButton = slideContainer.firstChild.lastChild;
        let portraitButtons = slideContainer.querySelectorAll('li');

        nextButton.addEventListener('click', e => {
            this.nextSlide(e, totalSlides, portraitButtons);
        });
        prevButton.addEventListener('click', e => {
            this.prevSlide(e, totalSlides, portraitButtons);
        });

        portraitButtons.forEach(button =>
            button.addEventListener('click', e => {
                this.slide(e, totalSlides, portraitButtons);
            })
        );

        //display first slide
        slideStrip.style.transform = `translateX(-${(1 / totalSlides) * 100}%)`;
    }

    slide = (e, totalSlides, portraitButtons) => {
        let slideStrip = e.target.offsetParent.offsetParent.children[2];
        let currentSlide = parseInt(e.target.dataset.slideTo);

        slideStrip.style.transition = 'all ease-in-out 1000ms';
        slideStrip.style.transform = `translateX(-${
            (currentSlide / totalSlides) * 100
        }%)`;

        portraitButtons.forEach(button =>
            button.classList.remove(classes.active)
        );
        e.target.classList.add(classes.active);

        return currentSlide;
    };

    nextSlide = (e, totalSlides, portraitButtons) => {
        let slideStrip = e.currentTarget.offsetParent.lastChild;

        let currentSlide;
        portraitButtons.forEach(button => {
            if (button.classList.contains(classes.active)) {
                currentSlide = parseInt(button.dataset.slideTo);
            }
        });

        if (totalSlides - 2 === currentSlide) {
            // console.log('We have reached the end, do something special or this shit will crush')
            currentSlide++;
            portraitButtons.forEach(button =>
                button.classList.remove(classes.active)
            );
            slideStrip.style.transition = 'all ease-in-out 1000ms';
            slideStrip.style.transform = `translateX(-${
                (currentSlide / totalSlides) * 100
            }%)`;
            portraitButtons[0].classList.add(classes.active);

            setTimeout(() => {
                slideStrip.style.transition = 'none';
                slideStrip.style.transform = `translateX(-${
                    (1 / totalSlides) * 100
                }%)`;
            }, 1000);
        } else {
            currentSlide++;
            portraitButtons.forEach(button =>
                button.classList.remove(classes.active)
            );
            slideStrip.style.transition = 'all ease-in-out 1000ms';
            slideStrip.style.transform = `translateX(-${
                (currentSlide / totalSlides) * 100
            }%)`;
            portraitButtons[currentSlide - 1].classList.add(classes.active);
        }
    };

    prevSlide = (e, totalSlides, portraitButtons) => {
        let slideStrip = e.currentTarget.offsetParent.lastChild;
        let currentSlide;

        portraitButtons.forEach(button => {
            if (button.classList.contains(classes.active)) {
                currentSlide = parseInt(button.dataset.slideTo);
            }
        });

        if (currentSlide === 1) {
            currentSlide--;
            portraitButtons.forEach(button =>
                button.classList.remove(classes.active)
            );
            slideStrip.style.transition = 'all ease-in-out 1000ms';
            slideStrip.style.transform = `translateX(-${
                (currentSlide / totalSlides) * 100
            }%)`;
            portraitButtons[totalSlides - 3].classList.add(classes.active);

            setTimeout(() => {
                slideStrip.style.transition = 'none';
                slideStrip.style.transform = `translateX(-${
                    ((totalSlides - 2) / totalSlides) * 100
                }%)`;
            }, 1000);
        } else {
            currentSlide--;
            portraitButtons.forEach(button =>
                button.classList.remove(classes.active)
            );
            slideStrip.style.transition = 'all ease-in-out 1000ms';
            slideStrip.style.transform = `translateX(-${
                (currentSlide / totalSlides) * 100
            }%)`;
            portraitButtons[currentSlide - 1].classList.add(classes.active);
        }
    };

    render() {
        return (
            <Container id='testimonials'>
                <div
                    className={classes.TestimonialsCarousel}
                    id='carouselInner'
                >
                    <div className={classes.slideButtons}>
                        <div className={classes.next}>
                            <span>
                                <i className='fas fa-chevron-right'></i>
                            </span>
                        </div>
                        <div className={classes.prev}>
                            <span>
                                <i className='fas fa-chevron-left'></i>
                            </span>
                        </div>
                        info@cielo.co.za
                    </div>

                    <ul className={classes.CarouselIndicators}>
                        <li
                            data-slide-to={1}
                            className={classes.active}
                            style={{ backgroundImage: `url(${portrait_one})` }}
                        ></li>
                        <li
                            data-slide-to={2}
                            style={{ backgroundImage: `url(${portrait_two})` }}
                        ></li>
                        <li
                            data-slide-to={3}
                            style={{
                                backgroundImage: `url(${portrait_three})`,
                            }}
                        ></li>
                    </ul>

                    <div className={classes.CarouselInner} id='carouselStrip'>
                        <Testimonial
                            personName='Emmerentia Pieterse'
                            companyName='Riverside Lodge'
                            testimonialText='Professional, to the point, always ready to assist with beautiful designs. Been working with him for years and still to date. Will recommend him to anyone'
                        />
                        <Testimonial
                            personName='Seana Makamole'
                            companyName='ANOCS Physiotherapy'
                            testimonialText='Professionalism and work ethic oozes from              the design and quality on these 
                            business cards, highly commendable.'
                        />
                        <Testimonial
                            personName='Luvuyo Mnguni'
                            companyName=''
                            testimonialText="Executed my request efficiently, demonstrating professionalism and expertise, right through to delivery.  I wouldn't hesitate to use him again."
                        />
                        <Testimonial
                            personName='Emmerentia Pieterse'
                            companyName='Riverside Lodge'
                            testimonialText='Professional, to the point, always ready to assist with beautiful designs. Been working with him for years and still to date. Will recommend him to anyone'
                        />
                        <Testimonial
                            personName='Seana Makamole'
                            companyName='ANOCS Physiotherapy'
                            testimonialText='Professionalism and work ethic oozes from              the design and quality on these 
                            business cards, highly commendable.'
                        />
                    </div>
                </div>
            </Container>
        );
    }
}

export default Testimonials;
