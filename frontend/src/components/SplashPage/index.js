import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink} from "react-router-dom";
import Navigation from "../Navigation";
import SideBar from "../SideBar";
import TrackIndexItem from "../Track/TrackIndexItem";
import './SplashPage.css'
import { fetchAllTracks } from "../../store/track";

function SplashPage() {
    const dispatch = useDispatch();
    const tracks = useSelector(state => Object.values(state.tracks));
    
    useEffect(() => {
        dispatch(fetchAllTracks())
    }, [dispatch]);
    
    console.log(tracks);
    
    


    return (
        <div className="splash_page">
            <SideBar/>
            <Navigation/>
        
            <div className="main-container">
                <h1 className="time">Good Afternoon</h1>
                
                <h2 className="start-listening">Start listening</h2>

                <div className="tracks-index-section">
                    <header className="tracks-index-header">
                        <h2 className="tracks-index-title">Tracks</h2>
                        <NavLink to='/tracks' className='tracks-index-link'>Show all</NavLink>
                    </header>
                    <div className="splash-random-tracks">
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