import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './footer.css'; // Assuming you have a separate CSS file for footer styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="columns">
          <div className="column">
            <h4 className="title is-4 has-text-primary">
              <span className="emoji">😄</span> Contact Us
            </h4>
            <p className="has-text-grey">123 Main Street</p>
            <p className="has-text-grey">City, State, ZIP</p>
            <p className="has-text-grey">Email: info@example.com</p>
            <p className="has-text-grey">Phone: 123-456-7890</p>
          </div>
          <div className="column">
            <h4 className="title is-4 has-text-primary">Links</h4>
            <ul>
              <li><a href="/" className="has-text-grey">Home</a></li>
              <li><a href="/about" className="has-text-grey">About Us</a></li>
              <li><a href="/services" className="has-text-grey">Services</a></li>
            </ul>
          </div>
          <div className="column">
            <h4 className="title is-4 has-text-primary">Newsletter</h4>
            <p className="has-text-grey">Subscribe to our newsletter for the latest updates.</p>
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
            <h4 className="title is-4 has-text-primary">Follow Us</h4>
            <ul className="social-icons is-flex">
              <li><a href="#"><FontAwesomeIcon icon={faTwitter} className="fun-icon" /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faFacebook} className="fun-icon" /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faInstagram} className="fun-icon" /></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p className="has-text-grey">&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
