import React, { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';


const Login = () => {
    const [error,setError] = useState('');
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    
    const from = location.state?.from?.pathname || '/'

    const handleLogin = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        setError('');

        signIn(email,password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            toast.success('Successfully signed in', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
            form.reset();
            navigate(from, {replace:true});
            
        })
        .catch(error =>{
            console.log(error);
            setError('Invalid email or password ');
        })
    }
    return (
        <div className='login-form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleLogin}>
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
            <p className='error'>{error}</p>
            <p><Link to="/signup">New to Ema-John?</Link></p>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;