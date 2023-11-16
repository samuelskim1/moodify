import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, NavLink } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

function SignupFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    

    if (sessionUser) return <Navigate to="/" />;

    const demoLogin = (e) => {
        e.preventDefault();
        return dispatch(sessionActions.login({credential: 'demo@user.io', password: 'password'}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const currentErrors = {};
        // setErrors([]);

        if (email !== confirmEmail) currentErrors['ConfirmEmailError'] = 'Your email must be the same as your confirmed email';
        return dispatch(sessionActions.signup({email, username, password}))
            .catch(async (res) => {
                let data;
                try {
                    data = await res.clone().json();
                } catch {
                    data = await res.text();
                }
                if (data?.errors) {
                    
                    data.errors.map(error => {
                        if (error.includes('Email is invalid')) {
                            currentErrors['EmailError'] = error
                        } else if (error.includes('Password')) {
                            currentErrors['PasswordError'] = error
                        } else {
                            currentErrors['UsernameError'] = error;
                        }
                    })
                }

                setErrors(currentErrors);
                // else if (data) setErrors([data]);
                // else setErrors([res.statusText]);
            });
        }
    
    return (
        <div className='signup_page'>
            <header>
                <div className="header_container">
                    <div className="logo">
                        <i className="fa-brands fa-spotify fa-2x"></i>
                        <h2>Moodify</h2>
                    </div>
                    <h2 className="signup_title">Sign up for free to start listening.</h2>
                </div>
            </header>
            
            <form onSubmit={handleSubmit} className="forms" id="signup_form">
                <h1>Sign up with your email address</h1>
                <div className="signup_labels">
                    <label>
                        What is your email?
                        <input
                            type="text"
                            value={email}
                            placeholder='Enter your email.'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    <p className='signup-errors'>{errors['EmailError']}</p>
                    <label>
                        Confirm your email
                        <input
                            type="text"
                            value={confirmEmail}
                            placeholder='Enter your email again.'
                            onChange={(e) => setConfirmEmail(e.target.value)}
                        />
                    </label>
                    <p className='signup-errors'>{errors['ConfirmEmailError']}</p>
                    <label>
                        Create a password
                        <input
                            type="password"
                            value={password}
                            placeholder='Create a password.'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <p className='signup-errors'>{errors['PasswordError']}</p>
                    <label>
                        What should we call you?
                        <input
                            type="text"
                            value={username}
                            placeholder='Enter a profile name'
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </label> 
                    <p className='signup-errors'>{errors['UsernameError']}</p>
                </div>
                {/* <label>
                    Month
                    <select
                        name="month" id="month"
                        value={username}
                        placeholder='Month'
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </label>  */}
                

                <button type='submit'>Sign Up</button>
                <button onClick={demoLogin}>Demo Login</button>
            </form>
            <div className='login_link'>
                <span>Have an account? <NavLink to="/login">Log In.</NavLink></span>
            </div>
        </div>
        
    )
}

export default SignupFormPage;