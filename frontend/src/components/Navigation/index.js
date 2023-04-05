import React from 'react';
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import ProfileButton from './ProfileButton';
import './Navigation.css'


function Navigation() {
    const sessionUser = useSelector(state => state.session.user)
    const location = useLocation();
    let sessionLinks;
    

    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
            <>
                <NavLink to="/signup">
                    <button className='nav-signup-button'>Sign up</button>
                </NavLink>
                <NavLink to="/login">
                    <button className='nav-login-button'>Log In</button>
                </NavLink>
            </>

        )
    }

    if (location.pathname === '/login' || location.pathname === '/signup') {
        sessionLinks = null;
    }


    return (
        <div className='navigation-bar-container'>
            <ul className='navigation-bar'>
                <li>
                    <NavLink to='/'></NavLink>
                    {sessionLinks}
                </li>
            </ul>

        </div>
    )
}

export default Navigation;