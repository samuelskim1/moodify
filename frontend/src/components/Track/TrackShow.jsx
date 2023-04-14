import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { fetchTrack } from "../../store/track";
import Navigation from "../Navigation";
import SideBar from "../SideBar";
import PlayBar from "../PlayBar/PlayBar";
import TrackPlayButton from "./TrackPlayButton";
import './TrackShow.css'

function TrackShow() {
    const {trackId} = useParams();
    const dispatch = useDispatch();
    const track = useSelector(state => state.tracks[trackId]);
    const currentSong = useSelector(state => state.audio["currentSong"]);

    useEffect(() => {
        dispatch(fetchTrack(trackId))
    }, [dispatch, trackId])

    if (!track) {
        return null;
    }

    //could create a component for the top section of the album/track/playlist show page
    //similar format
    //focus on that later though
    
    const lines = track?.lyrics?.split(/(\r|\n|\n|\r)/);
    const formattedLines = lines?.map(line => {
        if (line !== "\n" && line !== "") return <p>{line}</p>
    })

    return (
        <>
            <div className="track-show-flex-container">
                <div className="non-play-bar-section">
                    <SideBar/>
                    <div className="track-show-nav-main-container">
                        <Navigation/>
                        <div className="track-show-container">
                            <header className="track-show-item track-show-header">
                                <div className="track-show-header-item track-show-image">
                                    <img src={track.photoUrl} alt=""/>
                                </div>
                                <div className="track-show-header-item track-show-info">
                                    <h4 className="track-show-info component-type">Song</h4>
                                    <h1 className="track-show-info track-title">{track?.title}</h1>
                                    <div className="track-show-info extra-info">
                                        <div className="extra-info-item artist-info">
                                            <span className="artist-name">{track?.artistName}</span>
                                        </div>
                                        <span className="extra-info-item track-year">{track?.year}</span>
                                        <span className="extra-info-item track-duration">{track?.duration}</span>
                                    </div>
                                </div>
                            </header>
                            <div className="track-show-item track-show-play-area" >
                                <TrackPlayButton track={track}/>
                            </div>
                            <div className="track-show-item track-lyrics-container">
                                <h2 className="track-lyrics-container-item track-lyrics-header">Lyrics</h2>
                                <div className="track-show-item artist-link-container">
                                    <div className="artist-link-container-item artist-icon">
                                        <img src={track?.profilePicture} alt="" />
                                    </div>
                                    <div className="artist-link-container-item artist-and-name">
                                        <h6 className="artist-header-title">Artist</h6>
                                        <h6 className="artist-header-title">{track?.artistName}</h6>
                                    </div>
                                </div>
                                <div className="track-lyrics-container-item track-lyrics">{formattedLines}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default TrackShow