import React from 'react';
import classes from './SocialMedia.module.css';
import SocialMediaIcons from '../../UI/SocialMediaIcons/SocialMediaIcons';

import Logo from '../../UI/Logo/Logo';

const SocialMedia = props => {
    return ( 
        <div className={classes.SocialMedia}>
            <Logo />
            <main className="body">
                <p>Do not hesitate to check me out on social media, I am not that active but once in a while I do retweet or pin something of interest on Pinterest</p>
            </main>
            <SocialMediaIcons />
        </div>
     );
}
 
export default SocialMedia; 