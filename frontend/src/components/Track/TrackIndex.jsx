import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllTracks} from "../../store/track";
import { useLocation } from "react-router-dom";
import TrackIndexItem from "./TrackIndexItem";

function TrackIndex() {
    const dispatch = useDispatch();
    const location = useLocation();
    const tracks = useSelector(state => Object.values(state.tracks))
    console.log(tracks, "this is tracks");
    debugger;

    useEffect(() => {
        dispatch(fetchAllTracks())
    },[]);




    return (
        <>
            <div className="track-index-container">
                <h2>Tracks</h2>
                <ul className='tracks-ul'>
                    {tracks.map(track => (
                        <TrackIndexItem key={track.id} track={track} />
                    ))}
                </ul>

            </div>
        </>
        
    )
}

export default TrackIndex