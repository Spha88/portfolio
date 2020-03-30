import React from 'react';
import classes from './SocialMedia.module.css';

import Logo from '../../UI/Logo/Logo';

const SocialMedia = props => {
    return ( 
        <div className={classes.SocialMedia}>
            <Logo />
            <main className="body">
                <p>Do not hesitate to check me out on social media, I am not that active but once in a while I do retweet or pin something of interest on Pinterest</p>
            </main>
            <ul className={classes.SocialMediaIcons}>
                <li><a href="https://web.facebook.com/mr.spha" title="Facebook"><i className="fab fa-facebook-square" aria-hidden="true"></i> </a></li>
                <li><a href="https://twitter.com/spha88" title="Twitter"><i className="fab fa-twitter-square" aria-hidden="true"></i> </a></li>
                <li><a href="https://za.pinterest.com/mrspha/" title="Pinterest"><i className="fab fa-pinterest-square" aria-hidden="true"></i> </a></li>
                <li><a href="https://www.instagram.com/spha88/" title="Instagram"><i className="fab fa-instagram-square"></i> </a></li>
            </ul>
        </div>
     );
}
 
export default SocialMedia; 