import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, NavLink, useLocation } from "react-router-dom";
import * as sessionActions from "../../store/session";
import Navigation from "../Navigation";
import './SplashPage.css'

function SplashPage() {
    const location = useLocation();


    const active = () => {
        if (location.pathname === '/') {
            return 'active'
        } else {
            return 'not-active'
        }
    }


    return (
        <div className="splash_page">
            <Navigation/>
            <div className="sidebar-container">
                <div className="banner">
                    <img src={require('../../assets/spotify-48.png')} alt=''></img>
                    <h2>Moodify</h2>
                </div>
                <ul className='sidebar-nav'>
                    <NavLink to='/' className='sidebar-home'>
                        <li>
                            <i className="fa-solid fa-house" style={{color: '#ffffff'}}></i>
                            <h3 className={`${active}`}>Home</h3>
                        </li>
                    </NavLink>
                </ul>
            </div>
            <div className="main-container">
                <div className=""></div>
            </div>

        </div>
    )
}

export default SplashPage;