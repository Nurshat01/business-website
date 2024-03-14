import React, { useState } from 'react';
import './header.css';

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      setIsLoggedIn(true);
      setLoggedInUser(username);
    } else {
      alert('Invalid username or password');
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    alert(`Registered with username: ${username}, email: ${email}, password: ${password}`);
    setShowRegister(false);
    setShowLogin(true);
  };

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">Your Company</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
              <li className="nav-item">
                {!isLoggedIn ? (
                  <button className="nav-link btn btn-link" onClick={() => setShowLogin(true)}>Login</button>
                ) : (
                  <button className="nav-link btn btn-link" onClick={() => { setIsLoggedIn(false); setLoggedInUser(''); }}>Logout</button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {showLogin && (
        <div className="login-form">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
          </form>
          <p onClick={() => { setShowLogin(false); setShowRegister(true); }}>Create an account</p>
        </div>
      )}
      {showRegister && (
        <div className="register-form">
          <h2>Register</h2>
          <form onSubmit={handleRegister}>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Register</button>
          </form>
          <p onClick={() => { setShowLogin(true); setShowRegister(false); }}>Already have an account? Login</p>
        </div>
      )}
      {isLoggedIn && <p>Welcome, {loggedInUser}!</p>}
    </header>
  );
};

export default Header;
