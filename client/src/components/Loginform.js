import { useState } from 'react';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Loginform = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (e) => {
      e.preventDefault();

      const res = await fetch('/signin', {
        method: "POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      });

      const data = res.json();

      if(res.status === 400 || !data) {
        window.alert("Invalid Credentials");
      } else {
        window.alert("Login Successful");
        navigate('/');
      }

  }

  return (
    <>
        <form method='POST' className='register-form' id='register-form'>
                    
            <div className='form-group'>
                <label htmlFor='email'>
                  <i className="zmdi zmdi-email material-icons-name"></i>
                </label>
                <input type="email" name='email' id='email' autoComplete='off'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Your Email' />
            </div>

            <div className='form-group'>
                <label htmlFor="password">
                  <i className="zmdi zmdi-account material-icons-name"></i>
                </label>
                <input type="password" name='password' id='password' autoComplete='off'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Your Password' />
            </div>

            <div className='form-group form-button'>
                <input type="submit" name='signin' id='signin' className='from-submit' 
                    onClick={loginUser}
                    value='Log In' />
            </div>

        </form>
    </>
  )
}

export default Loginform