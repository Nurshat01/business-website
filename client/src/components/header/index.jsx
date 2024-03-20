import React from 'react';
import Auth from '../../utils/auth';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar has-background-grey-light" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item is-size-2 has-text-weight-bold has-text-primary is-italic" href="/">
              Green Haven
            </a>
            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div className="navbar-menu">
            <div className="navbar-end">
              <a className="navbar-item has-text-weight-semibold mr-1 is-size-4 has-text-primary has-background-grey-lighter" href="/">
                Home
              </a>
              <a className="navbar-item has-text-weight-semibold mr-1 is-size-4 has-text-primary has-background-grey-lighter" href="/about">
                About Us
              </a>
              <a className="navbar-item has-text-weight-semibold mr-1 is-size-4 has-text-primary has-background-grey-lighter" href="/services">
                Services
              </a>
              {!Auth.loggedIn()
              ? <a className="navbar-item has-text-weight-semibold is-size-4 has-text-primary has-background-grey-lighter" href="/loginsignup">
                  Login/Signup
                </a>
              : <>
                <a className="navbar-item has-text-weight-semibold mr-1 is-size-4 has-text-primary has-background-grey-lighter" href="#">
                  My Service Requests
                </a>
                <a className="navbar-item has-text-weight-semibold is-size-4 has-text-primary has-background-grey-lighter" href="#">
                  Logout
                </a>
                </>}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
