import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === confirmEmail) {
            setErrors([]);
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
                })
        }
        return setErrors(['Your email must be the same as your confirmed email'])
    }


    return (
        <>
            <header>
                <div>
                    {/* <a>
                    </a> */}
                    <h2>Sign up for free to start listening.</h2>
                </div>
            </header>
        
            <form onSubmit={handleSubmit}>
                <h3>Sign up with your email address</h3>
                <ul>
                    {errors.map(error => <li key={error}>{error}</li>)}
                </ul>
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
                        type="text"
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
                <button type='submit'>Sign Up</button>
            </form>
        </>
    )
}

export default SignupFormPage;