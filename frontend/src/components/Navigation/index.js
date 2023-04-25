import React from 'react';
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import ProfileButton from './ProfileButton';
import SearchBar from './Searchbar';
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
                <SearchBar/>
                <div className="nav-bar-right-section">
                    <div className='about-me-icons'>
                        <a href="https://github.com/samuelskim1" className='github-link'><i className="fa-brands fa-github fa-lg" style={{ color: '#ffffff' }}></i> Github</a>
                        <a href="https://www.linkedin.com/in/samuel-kim-3b4935206/" className='linkedin-link'><i className="fa-brands fa-linkedin fa-lg" style={{ color: '#ffffff' }}></i> LinkedIn</a>
                    </div>
                    <li>
                        <NavLink to='/'></NavLink>
                        {sessionLinks}
                    </li>

                </div>
            </ul>

        </div>
    )
}

export default Navigation;