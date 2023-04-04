import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, NavLink } from "react-router-dom";
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
    

    if (sessionUser) return <Redirect to="/" />;

    // const months = [
    //     <option value="1">January</option>,
    //     <option value="2">February</option>,
    //     <option value="3">March</option>,
    //     <option value="4">April</option>,
    //     <option value="5">May</option>,
    //     <option value="6">June</option>,
    //     <option value="7">July</option>,
    //     <option value="8">August</option>,
    //     <option value="9">September</option>,
    //     <option value="10">October</option>,
    //     <option value="11">November</option>,
    //     <option value="12">December</option>
    // ]



    const demoLogin = (e) => {
        e.preventDefault();
        return dispatch(sessionActions.login({credential: 'demo@user.io', password: 'password'}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);

        if  (email !== confirmEmail) {
            return setErrors(['Your email must be the same as your confirmed email']);
        } else {
            return dispatch(sessionActions.signup({email, username, password}))
                .catch(async (res) => {
                    let data;
                    try {
                        data = await res.clone().json();
                    } catch {
                        data = await res.text();
                    }
                    if (data?.errors) setErrors(data.errors);
                    else if (data) setErrors([data]);
                    else setErrors([res.statusText]);
                });
        }
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
                <div className="signup_errors">
                    <ul>
                        {errors.map(error => <li key={error}>{error}</li>)}
                    </ul>
                </div>
                <div className="signup_labels">
                    <label>
                        What is your email?
                        <input
                            type="text"
                            value={email}
                            placeholder='Enter your email.'
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Confirm your email
                        <input
                            type="text"
                            value={confirmEmail}
                            placeholder='Enter your email again.'
                            onChange={(e) => setConfirmEmail(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Create a password
                        <input
                            type="password"
                            value={password}
                            placeholder='Create a password.'
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
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