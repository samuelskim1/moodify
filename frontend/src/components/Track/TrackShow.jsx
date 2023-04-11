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

    useEffect(() => {
        dispatch(fetchTrack(trackId))
        console.log('useEffect is mounting')
    }, [trackId])

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
    // console.log(track.lyrics);
    // console.log(lines);
    // console.log(formattedLines);

    
    


    return (
        <>
            <div className="track-show-flex-container">
                <div className="non-play-bar-section">
                    <SideBar/>
                    <div className="nav-main-container">
                        <Navigation/>
                        <div className="track-show-container">
                            <header className="track-show-item track-show-header">
                                <div className="track-show-header-item track-show-image">
                                    <img src={track.photoUrl} alt=""/>
                                    {/* <i className="fa-solid fa-image fa-xl" style={{ color: '#919cb1' }}></i> */}
                                </div>
                                <div className="track-show-header-item track-show-info">
                                    <h4 className="track-show-info component-type">Song</h4>
                                    <h1 className="track-show-info track-title">{track.title}</h1>
                                    <div className="track-show-info extra-info">
                                        <div className="extra-info-item artist-info">
                                            <i className="artist-picture fa-solid fa-user fa-xs" style={{ color: '#ffffff'}}></i>
                                            <span className="artist-name">{track.artistName}</span>
                                        </div>
                                        <span className="extra-info-item track-year">{track.year}</span>
                                        <span className="extra-info-item track-duration">{track.duration}</span>
                                    </div>
                                </div>
                            </header>
                            <div className="track-show-item track-show-play-area" >
                                <TrackPlayButton track={track}/>
                            </div>
                            <div className="track-show-item track-lyrics-container">
                                <h2 className="track-lyrics-container-item track-lyrics-header">Lyrics</h2>
                                <div className="track-show-item artist-link-container">
                                    <i className="artist-link-container-item fa-solid fa-user" style={{ color: '#ffffff' }}></i>
                                    <div className="artist-link-container-item artist-and-name">
                                        <h6 className="artist-header-title">Artist</h6>
                                        <h6 className="artist-header-title">{track.artistName}</h6>
                                    </div>
                                </div>
                                <div className="track-lyrics-container-item track-lyrics">{formattedLines}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <PlayBar/>
            </div>
        </>
    )

}

export default TrackShow