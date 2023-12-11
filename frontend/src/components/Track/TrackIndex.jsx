import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllTracks} from "../../store/track";
import Navigation from "../Navigation";
import SideBar from "../SideBar";
import TrackIndexItem from "./TrackIndexItem";
import PlayBar from "../PlayBar/PlayBar";
import './TrackIndex.css';
import { fetchCurrentUserPlaylists } from "../../store/playlist";

function TrackIndex() {
    const dispatch = useDispatch();
    const currentSong = useSelector(state => state.audio["currentSong"]);
    
    //do the fetch inside of the outercomponent(maybe in our splashpage, albumsshowpage, searchpage)
    //or have a conditional inside 
    useEffect(() => {
        dispatch(fetchAllTracks());
        dispatch(fetchCurrentUserPlaylists());
    },[dispatch]);
    
    const tracks = useSelector(state => Object.values(state.tracks));
    //waits for data to be in the frontend state before rendering page 
    //react will keep on rerendering component if it doesn't return an html element
    //That's how this works
    if (!tracks) {
        return null;
    }



    return (
        <>
            <div className="track-index-flex-container">
                <SideBar/>
                <div className="nav-main-container">
                    <Navigation/>
                    <div className="track-index-container">
                        <h2 className="track-index-title">Tracks</h2>
                        <div className='track-item-index-flexbox'>
                            {tracks.map(track => (
                                <TrackIndexItem key={track.id} track={track} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* <PlayBar/>                        */}
            </div>
        </>
        
    )
}

export default TrackIndex