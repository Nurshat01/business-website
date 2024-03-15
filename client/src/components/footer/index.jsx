import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="columns">
          <div className="column">
            <h4 className="title is-4">Contact Us</h4>
            <p>123 Main Street</p>
            <p>City, State, ZIP</p>
            <p>Email: info@example.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
          <div className="column">
            <h4 className="title is-4">Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="column">
            <h4 className="title is-4">Newsletter</h4>
            <p>Subscribe to our newsletter for the latest updates.</p>
            <form className="newsletter-form">
              <div className="field is-grouped">
                <div className="control is-expanded">
                  <input type="email" className="input" placeholder="Email Address" />
                </div>
                <div className="control">
                  <button type="submit" className="button is-primary">Subscribe</button>
                </div>
              </div>
            </form>
          </div>
          <div className="column">
            <h4 className="title is-4">Follow Us</h4>
            <ul className="social-icons is-flex">
              <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
