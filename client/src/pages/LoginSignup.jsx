import { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import { LOGIN } from '../utils/mutations';

import Auth from '../utils/auth';

const LoginSignup = () => {
  const [loginFormData, setLoginFormData] = useState({ email: '', password: '' });
  const [signupFormData, setsignupFormData] = useState({ firstName: '', lastName: '', email: '', password: '' });

  const [addUser] = useMutation(ADD_USER);
  const [login] = useMutation(LOGIN);

  const handleLoginInputChange = (event) => {
    const { name, value } = event.target;
    setLoginFormData({ ...loginFormData, [name]: value });
  };

  const handleSignupInputChange = (event) => { 
    const { name, value } = event.target;
    console.log(name, value)
    setsignupFormData({ ...signupFormData, [name]: value });
  };

  const handleLogin = async () => {
    console.log('handle signup clicked');

    try {
      const response = await login({
        variables: { ...loginFormData },
      });

      const token = response.data.login.token

      Auth.login(token);
    } catch (e) {
      console.error(e);
    }

    setLoginFormData({
      email: '',
      password: '',
    });
  };

  const handleSignup = async () => {
    console.log('handle signup clicked');

    try { 
      const response = await addUser({
        variables: { ...signupFormData },
      });
      console.log(signupFormData);
      console.log(response);

      const token = response.data.addUser.token

      Auth.login(token);
    } catch (e) {
      console.error(e);
    }

    setsignupFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    });
  };

  return (
    <div className='content box'>
      <div className='columns'>
        <div className='column'>
          <div className='card box has-background-grey-lighter'>
            <div className='card-content'>
              <div className='media-content mb-4'>
                <p className='title has-text-centered'>Login</p>
              </div>
              <div className='field'>
                <label className='label'>Email:</label>
                  <div className='control'>
                    <input
                    className='input'
                    value={loginFormData.email}
                    name='email'
                    onChange={handleLoginInputChange}
                    type='text' 
                    placeholder='Email'/>
                  </div>
              </div>
              <div className='field'>
                <label className='label'>Password:</label>
                  <div className='control'>
                    <input
                    className='input'
                    value={loginFormData.password}
                    name='password'
                    onChange={handleLoginInputChange}
                    type='text'
                    placeholder='********'/>
                  </div>
              </div>
              <div className='card-footer-item'>
                <button type='submit' className='card-footer-item button is-primary' disabled={!(loginFormData.email && loginFormData.password)} onClick={handleLogin}>Login</button>
              </div>
            </div>
          </div>
        </div>
        <div className='column'>
          <div className='card box has-background-grey-lighter'>
            <div className='card-content'>
              <div className='media-content mb-4'>
                <p className='title has-text-centered'>Signup</p>
              </div>
              <div className='field'>
                <label className='label'>First Name:</label>
                  <div className='control'>
                    <input
                    className='input'
                    value={signupFormData.firstName}
                    name='firstName'
                    onChange={handleSignupInputChange}
                    type='text'
                    placeholder='First Name'/>
                  </div>
              </div>
              <div className='field'>
                <label className='label'>Last Name:</label>
                  <div className='control'>
                    <input
                    className='input'
                    value={signupFormData.lastName}
                    name='lastName'
                    onChange={handleSignupInputChange}
                    type='text'
                    placeholder='Last Name'/>
                  </div>
              </div>
              <div className='field'>
                <label className='label'>Email:</label>
                  <div className='control'>
                    <input
                    className='input'
                    value={signupFormData.email}
                    name='email'
                    onChange={handleSignupInputChange}
                    type='text'
                    placeholder='Email'/>
                  </div>
              </div>
              <div className='field'>
                <label className='label'>Password:</label>
                  <div className='control'>
                    <input
                    className='input'
                    value={signupFormData.password}
                    name='password'
                    onChange={handleSignupInputChange}
                    type='text'
                    placeholder='********'/>
                  </div>
              </div>
              <div className='card-footer-item'>
                <button type='submit' className='card-footer-item button is-primary' disabled={!(signupFormData.firstName && signupFormData.lastName && signupFormData.email && signupFormData.password)} onClick={handleSignup}>Signup</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
