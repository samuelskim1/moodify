import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllTracks} from "../../store/track";
import Navigation from "../Navigation";
import SideBar from "../SideBar";
import TrackIndexItem from "./TrackIndexItem";
import './TrackIndex.css';

function TrackIndex() {
    const dispatch = useDispatch();
    const tracks = useSelector(state => Object.values(state.tracks))
    console.log(tracks, "this is tracks");

    useEffect(() => {
        dispatch(fetchAllTracks())
    },[dispatch]);




    return (
        <>
            <div className="track-index-container">
                <SideBar/>
                <Navigation/>

                <div className="main-container">
                    <h2 className="track-index-title">Tracks</h2>
                    <div className='track-item-index-grid'>
                        {tracks.map(track => (
                            <TrackIndexItem key={track.id} track={track} />
                        ))}
                    </div>
                </div>


            </div>
        </>
        
    )
}

export default TrackIndex