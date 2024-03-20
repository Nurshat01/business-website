import React from 'react';
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const handleLinkClick = (event) => {
    const targetPath = event.target.pathname;
    if (targetPath === '/about' || targetPath === '/contact') {
      event.preventDefault();
      // You can add more logic here if needed
    }
  };

  return (
    <header className="header">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link to='/' className="navbar-item">
              Your Company {" "}
              <span role="img" aria-label="company">🏢</span>
              <span className="fun-emoji" role="img" aria-label="fun">🤪</span>
            </Link>
            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-end">
              <NavLink to='/' exact className="navbar-item" activeClassName="active" onClick={handleLinkClick}>
                Home
              </NavLink>
              <Link to='/about' className="navbar-item" onClick={handleLinkClick}>
                About {" "}
                <span role="img" aria-label="about">📚</span>
              </Link>
              <NavLink to='/services' className="navbar-item" activeClassName="active" onClick={handleLinkClick}>
                Services {" "}
                <span role="img" aria-label="services">🔧</span>
              </NavLink>
              <NavLink to='/contact' className="navbar-item" activeClassName="active" onClick={handleLinkClick}>
                Contact {" "}
                <span role="img" aria-label="contact">📞</span>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
