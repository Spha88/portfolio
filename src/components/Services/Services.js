import React from 'react';
import classes from './Services.module.css';

import Container from '../UI/Container/Container';
import Service from './Service/Service';


const Services = props => {
    return ( 
        <Container>
            <h1>Things I do <span className={classes.Cursive}>Services</span></h1>
            <div className={classes.ServiceItems}>
                <Service
                    number="01"
                    title="Web and Graphic Design"
                    content="From websites, logos, pamphlets, business cards, billboards, 
                            calendars and other graphic work. I always make sure to involve my 
                            clients when I am working on a design to create a product that not only 
                            satisfies the client but is also artistically excellent." />
                <Service
                     number="02"
                    title="Development"
                    content="I develop all kinds of websites for, one page, multi-page, 
                            Content Management Systems (CMS) and I always make sure 
                            my websites meet the requirements of a modern and functional website." />
                <Service
                    number="03"  
                    title="Branding"
                    content="It is important for every business to be unique, a good brand is key to this. 
                            Corporate Identity Design is an indispensable element of any brand for new and well 
                            established businesses. I design business cards, letter heads, email branding 
                            (header, footer and signatures for email) and stationery to mention a few." />
                <Service
                    number="04"
                    title="Marketing"
                    content="I provide an online presence for businesses through SEO and social media 
                            integration into websites, increasing traffic on both websites and social media 
                            platforms. We stand on the brink of a technology revolution, 4th industrial revolution 
                            and now more than ever, online marketing has become vital as people consume content 
                            through the web and related technologies." />
            </div>
        </Container>
     );
}
 
export default Services;