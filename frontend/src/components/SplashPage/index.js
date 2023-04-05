import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import Navigation from "../Navigation";
import TrackIndexItem from "../Track/TrackIndexItem";
import './SplashPage.css'
import { fetchAllTracks } from "../../store/track";

function SplashPage() {
    const location = useLocation();
    const dispatch = useDispatch();
    const tracks = useSelector(state => Object.values(state.tracks));
    
    useEffect(() => {
        dispatch(fetchAllTracks())
    }, []);
    
    console.log(tracks);
    
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
                <h1 className="time">Good Afternoon</h1>
                
                <h2 className="start-listening">Start listening</h2>

                <div className="tracks-index-section">
                    <header className="tracks-index-header">
                        <h2 className="tracks-index-title">Tracks</h2>
                        <NavLink to='/tracks' className='tracks-index-link'>Show all</NavLink>
                    </header>
                    <div className="tracks-index">
                        <TrackIndexItem track={tracks[2]}/>
                        <TrackIndexItem track={tracks[13]}/>
                        <TrackIndexItem track={tracks[26]}/>
                        <TrackIndexItem track={tracks[9]}/>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default SplashPage;