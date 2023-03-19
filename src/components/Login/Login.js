import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form action="">
                    <div className="input-group">
                        <label htmlFor="Email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" />
                    </div>
                    <input className='form-submit' type="submit" value="Login" required />
                </form>
                <div>
                    <p style={{ textAlign: 'center' }}>New to Ema-john? <Link className='from-link' to='/signup'>Create New Account</Link></p>
                </div>
                <div>
                    <p className='hr-lines'>
                        Or
                    </p>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Login;