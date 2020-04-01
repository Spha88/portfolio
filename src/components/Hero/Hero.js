import React from 'react';
import classes from './Hero.module.css';
import pattern from '../../assets/images/log_pattern.png';

const Hero = props => {
    return ( 
        <section className={classes.Hero}>
            
            <div className={classes.SocialMedia}>
                <ul>
                    <li><a href="https://web.facebook.com/mr.spha" title="Facebook"><i className="fab fa-facebook-square" aria-hidden="true"></i> </a></li>
                    <li><a href="https://twitter.com/spha88" title="Twitter"><i className="fab fa-twitter-square" aria-hidden="true"></i> </a></li>
                    <li><a href="https://za.pinterest.com/mrspha/" title="Pinterest"><i className="fab fa-pinterest-square" aria-hidden="true"></i> </a></li>
                    <li><a href="https://www.instagram.com/spha88/" title="Instagram"><i className="fab fa-instagram-square"></i> </a></li>
                </ul>
            </div>
            
            <div className={classes.Slogan}>
                <h2 className={classes.cursive}> Web Design & </h2>
                <h2>Development</h2> 
            </div>

        </section> 
     );
}
 
export default Hero;