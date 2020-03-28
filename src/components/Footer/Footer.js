import React from 'react';
import classes from './Footer.module.css';

import SocialMedia from './SocialMedia/SocialMedia';
import ContactDetails from './ContactDetails/ContactDetails';
import PortfolioSmall from './PortfolioSmall/PortfolioSmall';

const Footer = props => {
    return ( 
        <footer className={classes.Footer} id="contact">
            <div className={classes.FooterInner}>
                <div className={classes.FooterSections}>
                    <div>
                        <SocialMedia />
                    </div>
                    <div>
                        <ContactDetails /> 
                    </div>
                    <div>
                        <PortfolioSmall />
                    </div>
                </div>
            </div>
            <div className={classes.lastRow}>
                <p><a href="http://www.netslate.co.za/">Developed during the 21 days of Lock-down by yours truly</a></p>
                <p><a href="http://www.netslate.co.za/">Spha</a></p>
            </div>
        </footer>
    );
}
 
export default Footer;