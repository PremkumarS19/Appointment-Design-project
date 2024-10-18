import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

const SocialMediaIcons = () => (
    <div className="social-media-icons">
        <a href="https://facebook.com" target="_blank" className='icon' rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://instagram.com" target="_blank" className='icon' rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://youtube.com" target="_blank" className='icon' rel="noopener noreferrer"><FaYoutube /></a>
        <a href="https://twitter.com" target="_blank" className='icon' rel="noopener noreferrer"><FaTwitter /></a>
    </div>
);

export default SocialMediaIcons;
