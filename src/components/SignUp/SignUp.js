import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    };

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    };

    if (user) {
        navigate('/shop');
    }

    const handleCreateUser = event => {
        event.preventDefault();//to stop page reload after filling up from

        //validation
        if (password !== confirmPassword) {
            setError('Your Passwords Did Not Match')
            return;
        }

        if (password.length < 6) {
            setError('Password Must be 6 Characters or More')
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="Email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='form-submit' type="submit" value="Sign Up" />
                </form>
                <div>
                    <p style={{ textAlign: 'center' }}>Already have an account ? <Link className='from-link' to='/login'>Login</Link></p>
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

export default SignUp;