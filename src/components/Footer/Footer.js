import React from 'react';
import './Footer.css';
import logo from '../../images/logo.png';
import fbLogo from '../../images/fb-logo.png';
import twitterLogo from '../../images/twitter-logo.png';
import linkedinLogo from '../../images/linkedin-logo.png';
import dribbbleLogo from '../../images/dribbble-logo.png';
import behanceLogo from '../../images/behance-logo.png';

const Footer = () => {
  return (
    <div className="container">
      <div className="footer mt-5">
        <h1 style = {{color: '#0D052E' , fontSize: '45px' , fontWeight: '800' , fontFamily: 'Merriweather serif'}} className="font-weight-bold text-center">Get your design right, right now</h1>
        <p className="mt-3 mb-5 text-center">Be the first know our latest offers and updates!</p>
        <div className="d-flex justify-content-center">
          <div class="input-group-prepend inputWidth">
            <input type="email" class="form-control mr-3 " placeholder="Enter your email address"/>
            <div class="input-group-append">
            <span class=" inputBtn align-middle d-flex align-items-center">Get Started</span>
              </div>
            
          </div>
        </div>
        <div className="row footerList">
          <div className="col-md-6 text-left">
            <div className="mt-3 mb-4">
              <img className="footerImg" src={logo} alt=""/>
            </div>
            <img src={fbLogo} alt=""/>
            <img src={twitterLogo} alt=""/>
            <img src={linkedinLogo} alt=""/>
            <img src={dribbbleLogo} alt=""/>
            <img className="behanceLogo" src={behanceLogo} alt=""/>
          </div>
          <div className="col-md-2">
          <ul class="list-group">
            <li class="list-group-item">Features</li>
            <li class="list-group-item">Enterprise</li>
            <li class="list-group-item">Pricing</li>
          </ul>
          </div>
          <div className="col-md-2">
            <ul class="list-group">
              <li class="list-group-item">Blog</li>
              <li class="list-group-item">Help Center</li>
              <li class="list-group-item">Contact Us</li>
              <li class="list-group-item">Status</li>
            </ul>
          </div>
          <div className="col-md-2">
            <ul class="list-group">
              <li class="list-group-item">About Us</li>
              <li class="list-group-item">Terms Of Service</li>
              <li class="list-group-item">Security</li>
              <li class="list-group-item">Login</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;