import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <h4>Contact Us</h4>
            <p>123 Main Street</p>
            <p>City, State, ZIP</p>
            <p>Email: info@example.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4>Links</h4>
            <ul className="list-unstyled">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4>Newsletter</h4>
            <p>Subscribe to our newsletter for the latest updates.</p>
            <form>
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Email Address" />
              </div>
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4>Follow Us</h4>
            <ul className="list-unstyled">
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p>&copy; 2024 Your Company. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
