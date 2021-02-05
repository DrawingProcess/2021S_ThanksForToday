import React from 'react';
import { Link } from 'react-router-dom';
import leaf1 from 'images/leaf1.png';
import leaf2 from 'images/leaf2.png';
import './Footer.scss';

const Footer = () => <div className="footer">
    <div className="footer-img1"><img src={leaf1}></img></div>
    <div className="footer-img2"><img src={leaf2}></img></div>
    <div className="footer-content">
        <div className="footer-text">
            <span className="text">MAIN</span>
            <span className="text">TODO</span>
            <span className="text">CALENDAR</span>
        </div>
    </div>
</div>;

export default Footer;
