import React from 'react';
import classes from './Services.module.css';

import Container from '../UI/Container/Container';
import Service from './Service/Service';


const Services = props => {
    return ( 
        <Container id="services" name="services">
            <h1 className={classes.ServicesHeading}>Things I do <span className={classes.Cursive}>Services</span></h1>
            <div className={classes.ServiceItems}>
                <Service
                    number="01" 
                    title="Web Design and Development"
                    content="I design and develop responsive websites using current web technologies. 
                            If you need a website that will give your project or business an online presence, talk to me" />
                <Service
                     number="02"
                    title="Graphic Design"
                    content="Every business needs a corporate identity, a logo that is unique and can be easily integrated in all marketing campaigns
                    , printed or digital. Choosing the right colors and fonts for your kind of business is very important" />

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
                            platforms. We stand on the brink of a technology revolution, online marketing has become vital as people consume content 
                            through the web and related technologies." />
            </div>
        </Container>
     );
}
 
export default Services;