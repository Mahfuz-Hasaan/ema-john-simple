import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div className='login-form-container'>
            <h2 className='form-title'>Login</h2>
            <form>
                 <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' id='email' placeholder='Email' required />
                 </div>
                 <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' id='password' placeholder='Password' required />
                 </div>
                 <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p><Link to="/signup">New to Ema-John?</Link></p>
        </div>
    );
};

export default Login;