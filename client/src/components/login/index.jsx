import React, { useState } from 'react';


const Login = () => {
  const [isLoggingIn, setIsLoggingIn] = useState(null);
  const [email, setEmail] = useState('');
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
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-half">
          <div className="login">
            <div className="tabs">
              <button className={isLoggingIn ? "is-active" : ""} onClick={() => showForm(true)}>Log in</button>
              <button className={!isLoggingIn ? "is-active" : ""} onClick={() => showForm(false)}>Register</button>
            </div>
            {isLoggingIn !== null && (
              <form className="login-form" onSubmit={handleSubmit}>
                <div className="field">
                  <label className="label">Email:</label>
                  <div className="control">
                    <input className="input" type="email" value={email} onChange={(e) => handleInputChange(e, setEmail)} required />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Password:</label>
                  <div className="control">
                    <input className="input" type="password" value={password} onChange={(e) => handleInputChange(e, setPassword)} required />
                  </div>
                </div>
                {!isLoggingIn && (
                  <>
                    <div className="field">
                      <label className="label">First Name:</label>
                      <div className="control">
                        <input className="input" type="text" value={firstName} onChange={(e) => handleInputChange(e, setFirstName)} required />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">Last Name:</label>
                      <div className="control">
                        <input className="input" type="text" value={lastName} onChange={(e) => handleInputChange(e, setLastName)} required />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">Confirm Password:</label>
                      <div className="control">
                        <input className="input" type="password" value={confirmPassword} onChange={(e) => handleInputChange(e, setConfirmPassword)} required />
                      </div>
                    </div>
                  </>
                )}
                <div className="field">
                  <div className="control">
                    <button className="button is-primary" type="submit">{isLoggingIn ? 'Log in' : 'Register'}</button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
