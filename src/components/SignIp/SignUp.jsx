import React, { useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
const SignUp = () => {
    const [error,setError] = useState('');
    const [success,setSuccess] = useState('');
    const [passwordStrength,setPasswordStrength] = useState('');

    const handleSignUp = event =>{
        event.preventDefault();
        
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email,password,confirm);
        setError('');
        event.target.reset();
        setPasswordStrength('');
        if(password != confirm){
            return setError('Password did not match')
        }
        if(!/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,})/.test(password)){
            return setError('Password must be at least 6 characters,one uppercase,one lowercase,one digit and one special character')
        }
    }
    const handlePasswordOnchange = (event) =>{
        const password = event.target.value;
        
        if(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{12,})/.test(password)){
            setPasswordStrength('Strong password');
        }
        else if(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{9,})/.test(password)){
            setPasswordStrength('Medium password');
        }
        else{
            setPasswordStrength('Weak password');
        }
    }
    
    return (
        <div className='login-form-container'>
            <h2 className='form-title'>Signup</h2>
            <form onSubmit={handleSignUp}>
                 <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' id='email' placeholder='Email' required />
                 </div>
                 <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' id='password' placeholder='Password' required onChange={handlePasswordOnchange} />
                    <p className={passwordStrength === 'Strong password'? 'strong-color' : passwordStrength === 'Medium password' ? 'medium-color' : 'weak-color' }>
                        {passwordStrength}
                    </p>
                 </div>
                 <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name='confirm' id='confirm' placeholder='Confirm Password' required />
                 </div>
                 <input className='btn-submit' type="submit" value="Signup" />
            </form>
            <p><Link to="/login">Allready have an account?</Link></p>
            <p className='error'>{error}</p>
        </div>
    );
};

export default SignUp;