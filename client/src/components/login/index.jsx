import React, { useState } from 'react';
import './login.css';

const Login = () => {
  const [isLoggingIn, setIsLoggingIn] = useState(null); 
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const showForm = (isLogin) => {
    setIsLoggingIn(isLogin);
  };

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoggingIn) {
      console.log('Logging in with email:', email, 'and password:', password);
    } else {
      console.log('Registering with email:', email, 'password:', password, 'first name:', firstName, 'last name:', lastName);
    }
  };

  return (
    <div>
      <div className="login">
        <div className="tabs">
          <button onClick={() => showForm(true)}>Log in</button>
          <button onClick={() => showForm(false)}>Register</button>
        </div>
        {isLoggingIn !== null && (
          <form className="login-form" onSubmit={handleSubmit}>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => handleInputChange(e, setEmail)} required />
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => handleInputChange(e, setPassword)} required />
            {!isLoggingIn && (
              <>
                <label>First Name:</label>
                <input type="text" value={firstName} onChange={(e) => handleInputChange(e, setFirstName)} required />
                <label>Last Name:</label>
                <input type="text" value={lastName} onChange={(e) => handleInputChange(e, setLastName)} required />
                <label>Confirm Password:</label>
                <input type="password" value={confirmPassword} onChange={(e) => handleInputChange(e, setConfirmPassword)} required />
              </>
            )}
            <button type="submit">{isLoggingIn ? 'Log in' : 'Register'}</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
