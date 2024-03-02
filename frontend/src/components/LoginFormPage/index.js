import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import './LoginForm.css';

function LoginFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to="/" />;

    const demoLogin = (e) => {
        e.preventDefault();
        return dispatch(sessionActions.login({ credential: 'demo@user.io', password: 'password' }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);

        //reminder that sessionActions.login() returns the response formatted in json already
        //Promise.prototype.catch() schedules a function to be called when the promise is rejected
        return dispatch(sessionActions.login({ credential, password }))
            .catch(async (res) => {
                let data;
                try {
                    // .clone() essentially allows you to read the response body twice
                    data = await res.clone().json();
                } catch {
                    // Will hit this case if the server is down
                    data = await res.text();
                }

                if (data?.errors) setErrors(data.errors);
                else if (data) setErrors([data]);
                else setErrors([res.statusText]);
                //this .errors is coming from our render json response in our session controller
            });

    }

    const toggleErrors = () => {
        if (!errors.length) {
            return 'no-errors'
        } else {
            return 'login_errors'
        }
    }


    return (
        <>
        
            <div className='logo_header'>
                <i className="fa-brands fa-spotify fa-3x"></i>
                <h2>Moodify</h2>
            </div>
            <div className='login_page'>
                <form onSubmit={handleSubmit} className="forms" id="login_form">
                    <h2>To continue, log in to Moodify.</h2>
                    <div className={`${toggleErrors()}`}>
                        <ul>
                            {errors.map(error => <li key={error}>{error}</li>)}
                        </ul>
                    </div>
                    <div className='login_labels'>
                        <label>
                            Email address or username
                            <input
                                type='text'
                                value={credential}
                                onChange={(e) => setCredential(e.target.value)}
                                required
                            />
                        </label>
                        <label>
                            Password
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <button type="submit">Log In</button>
                    <button onClick={demoLogin}>Demo Login</button>
                    
                </form>
                <hr className='login_break'/>
                <div className='signup_link'>
                    <p>Don't have an account?</p>
                    <NavLink to='/signup'>
                        <button className='signup_button'>SIGN UP FOR MOODIFY</button>
                    </NavLink>
                </div>
            </div>
        </>
    );
}

export default LoginFormPage;