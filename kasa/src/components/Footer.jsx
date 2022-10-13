import React from 'react';
import '../App.css'
import logo from '../assets/LOGOwhite.png';

const Footer = () => {
    return (
        <div className='footer'>
           <img src={logo} alt="logo kasa" className='footer-logo'/> 
           <p className='footer-text'> © 2020 Kasa. All right reserved</p>
        </div>
    );
};

export default Footer;