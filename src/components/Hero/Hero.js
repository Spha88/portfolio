import React from 'react';
import classes from './Hero.module.css';

const Hero = props => {
    return ( 
        <section className={classes.Hero}>
            
            <div className={classes.SocialMedia}>
                <ul>
                    <li><a href="https://web.facebook.com/mr.spha" title="Facebook"><i class="fab fa-facebook-square" aria-hidden="true"></i></a></li>
                    <li><a href="https://twitter.com/spha88" title="Twitter"><i class="fab fa-twitter-square" aria-hidden="true"></i></a></li>
                    <li><a href="https://za.pinterest.com/mrspha/" title="Pinterest"><i class="fab fa-pinterest-square" aria-hidden="true"></i></a></li>
                    <li><a href="https://www.instagram.com/spha88/" title="Instagram"><i class="fab fa-instagram-square"></i></a></li>
                </ul>
            </div>
            
            <div className={classes.Slogan}>
                <h2 className={classes.cursive}>Web & Graphics</h2>
                <h2>Content Creation</h2>
            </div>

        </section>
     );
}
 
export default Hero;