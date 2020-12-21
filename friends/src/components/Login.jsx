import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const initialFormValues = {
  username: '',
  password: '',
};

const Login = props => {
  const [credentials, setCredentials] = useState(initialFormValues);
  let history = useHistory();

  const handleChanges = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = e => {
    e.preventDefault();
    const trimmedCredentials = {
      username: credentials.username.trim(),
      password: credentials.password.trim()
    }
    axios
      .post('http://localhost:5000/api/login', trimmedCredentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        history.push('/friends');
    });
  };

  return (
    <div className='Login'>
      <h2>Login</h2>
      <form className='Form' onSubmit={handleLogin}>
        <label htmlFor='username'>Username</label>
        <input
          id='username'
          name='username'
          type='input'
          value={credentials.username}
          onChange={handleChanges}
        />
        <br />
        <label htmlFor='password'>Password</label>
        <input
          id='password'
          name='password'
          type='password'
          value={credentials.password}
          onChange={handleChanges}
        />
        <br />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default Login;
