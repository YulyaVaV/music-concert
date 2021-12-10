import React from 'react';

import './Footer.scss';

import logo from './images/logo.png';
import facebook from './images/facebook.png';
import twitter from './images/twitter.png';
import linkedin from './images/linkedin.png';
import instagram from './images/insta.png';

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="footer__wrap">
        <nav className="footer__nav"> 
          <a href="/" className="footer__link">Home</a>
          <a href="/" className="footer__link">Company</a>
          <a href="/" className="footer__link">Blog</a>
          <a href="/" className="footer__link">Contact us</a>
          <a href="/" className="footer__link">Sitemap</a>
        </nav>
        <div className="footer__icons">
          <a href="/" className="footer__link"><img src={facebook} alt="facebook" /></a>
          <a href="/" className="footer__link"><img src={twitter} alt="twitter" /></a>
          <a href="/" className="footer__link"><img src={linkedin} alt="linkedin" /></a>
          <a href="/" className="footer__link"><img src={instagram} alt="instagram" /></a>
        </div>
        <h4 className="footer__site">© musik.com, 2021</h4>
      </div>
    </div>
  )
}

export default Footer;
