import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form action="">
                    <div className="input-group">
                        <label htmlFor="Email">Email</label>
                        <input type="email" name="email" id="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" />
                    </div>
                    <input className='form-submit' type="submit" value="Login" />
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