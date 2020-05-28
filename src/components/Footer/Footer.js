import React from 'react';
import classes from './Footer.module.css';

import SocialMedia from './SocialMedia/SocialMedia';
import ContactDetails from './ContactDetails/ContactDetails';
import FooterNav from '../../components/Navigation/FooterNav/FooterNav';

const Footer = props => {
    return (
        <footer className={classes.Footer} id='contact'>
            <div className={classes.FooterInner}>
                <div className={classes.FooterSections}>
                    <div>
                        <SocialMedia />
                    </div>
                    <div>
                        <ContactDetails />
                    </div>
                    <div>
                        <FooterNav />
                    </div>
                </div>
            </div>

            <div className={classes.lastRow}>
                <p>
                    <a href='http://www.netslate.co.za/'>
                        Developed during the 21 days of Lock-down by
                    </a>
                </p>
                <p>
                    <a href='http://www.netslate.co.za/'>Spha</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
