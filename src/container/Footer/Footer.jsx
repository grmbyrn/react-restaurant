import React from 'react';

import {FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi'
import {FooterOverlay, Newsletter} from '../../components'
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>18 Suffolk Street, Dublin 2, Ireland</p>
        <p className='p__opensans'>01 677 5651</p>
        <a href='mail:info@pacinos.ie' className='link'>info@pacinos.ie</a>
      </div>
      <div className='app__footer-links_logo'>
        <img src={images.logo} alt='footer logo' />
        <p className='p__opensans'>"The best way to find yourself is to lose yourself in the service of others."</p>
        <img src={images.spoon} alt='spoon' className='spoon__img' style={{marginTop: 15}} />
        <div className='app__footer-links_icons'>
          <a href='https://www.facebook.com/PacinosRestaurantDublin' target="_blank"><FiFacebook /></a>
          <a href='https://twitter.com/pacinosdublin' target="_blank"><FiTwitter /></a>
          <a href='https://www.instagram.com/pacinosdub/' target="_blank"><FiInstagram /></a>
        </div>
      </div>
      <div className='app__footer-links_work'>
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2022 Pacino's. All Rights Reserved</p>
    </div>
  </div>
);

export default Footer;
