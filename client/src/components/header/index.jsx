import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="#">
              Your Company
            </a>
            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-end">
              <a className="navbar-item" href="#">
                Home
              </a>
              <a className="navbar-item" href="#">
                About
              </a>
              <a className="navbar-item" href="#">
                Services
              </a>
              <a className="navbar-item" href="#">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
