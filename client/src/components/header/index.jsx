import Auth from '../../utils/auth';
import { useState } from 'react';

const Header = () => {
  const [isActive, setisActive] = useState(false)
  
  return (
    <header className="header">
      <nav className="navbar has-shadow" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand my-3">
            <a className="navbar-item p-0 m-4" href="/">
              <figure>
                <img className="image" src="/assets/GreenHaven.jpg" alt="GreenHavenLogo" />
              </figure>
              <p className='has-text-weight-bold ml-3 is-size-3 is-italic has-text-primary'>Green Haven Landscaping</p>
            </a>
            <a onClick={() => {setisActive(!isActive)}} role="button" className={`navbar-burger burger ${isActive ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" data-target="navMenu">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navMenu" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
            <div className="navbar-end">
              <a className="navbar-item has-text-weight-semibold mr-1 is-size-4 has-text-primary" href="/">
                Home
              </a>
              <a className="navbar-item has-text-weight-semibold mr-1 is-size-4 has-text-primary" href="/about">
                About Us
              </a>
              <a className="navbar-item has-text-weight-semibold mr-1 is-size-4 has-text-primary" href="/services">
                Services
              </a>
              {!Auth.loggedIn()
              ? <a className="navbar-item has-text-weight-semibold is-size-4 has-text-primary" href="/loginsignup">
                  Login/Signup
                </a>
              : <>
                <a className="navbar-item has-text-weight-semibold mr-1 is-size-4 has-text-primary" href="/myservicerequests">
                  My Service Requests
                </a>
                <a className="navbar-item has-text-weight-semibold is-size-4 has-text-primary"onClick={Auth.logout}  href="/">
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
