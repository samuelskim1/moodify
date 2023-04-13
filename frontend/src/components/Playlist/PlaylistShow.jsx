import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { fetchPlaylist } from "../../store/playlist";
import { fetchPlaylistTracks } from "../../store/playlist_tracks";
import Navigation from "../Navigation";
import SideBar from "../SideBar";
import TrackPlaylistItem from "./TrackPlaylistItem";
// import TrackPlayButton from "./TrackPlayButton";
import './PlaylistShow.css'

function PlaylistShow() {
    const { playlistId } = useParams();
    const dispatch = useDispatch();
    const playlist = useSelector(state => state.playlists[playlistId]);
    const playlistTracks = useSelector(state => Object.values(state.playlist_tracks));

    useEffect(() => {
        dispatch(fetchPlaylist(playlistId))
        dispatch(fetchPlaylistTracks(playlistId))
    }, [dispatch, playlistId])
    
    // let songCount;
    // let tracks;
    

    if (!playlist) {
        return null;
    } 

    if (!playlistTracks.length) {
        return null;
    }

    const songCount = playlistTracks?.length;

    let playlistDuration;
    let playlistTracksIds;
    console.log(playlist)

    // if (playlistTracks) {
    //     debugger;
    //     songCount = playlistTracks?.length;
    // }

    //could create a component for the top section of the playlist/track/playlist show page
    //similar format
    //focus on that later though

    return (
        <>
            <div className="playlist-show-flex-container">
                <div className="non-play-bar-section">

                    <SideBar />
                    <div className="playlist-show-nav-main-container">
                        <Navigation />
                        <div className="playlist-show-container">
                            <header className="playlist-show-item playlist-show-header">
                                <div className="playlist-show-header-item playlist-show-image">
                                    <img src={playlist?.photoUrl} alt="" />
                                    {/* <i className="fa-solid fa-image fa-xl" style={{ color: '#919cb1' }}></i> */}
                                </div>
                                <div className="playlist-show-header-item playlist-show-info">
                                    <h4 className="playlist-show-info component-type">Playlist</h4>
                                    <h1 className="playlist-show-info playlist-title">{playlist?.title}</h1>
                                    <div className="playlist-show-info extra-info">
                                        <div className="extra-info-item artist-info">
                                            <i className="artist-picture fa-solid fa-user fa-xs" style={{ color: '#ffffff' }}></i>
                                            <span className="playlist-creator-name">Username</span>
                                        </div>
                                        <span className="extra-info-item playlist-year">{playlist?.year}</span>
                                        <span className="extra-info-item playlist-track-count">{songCount} songs</span>
                                        {/* <span className="extra-info-item playlist-duration">{playlist.duration}</span> */}
                                    </div>
                                </div>
                            </header>
                            <div className="playlist-show-item playlist-show-play-area" >
                                {/* <TrackPlayButton track={track} /> */}
                            </div>
                            <div className="playlist-show-item playlist-tracks-container">
                                <div className="playlist-tracks-label-holder">
                                    <div className="playlist-tracks-label">

                                        <div className="tracks-id-indicator">#</div>
                                        <div className="tracks-title-indicator">Title</div>
                                        <div className="tracks-album-indicator">Album</div>
                                        <div className="tracks-duration-icon-container">
                                            <img src={require('../../assets/icons8-clock-32.png')} alt=''></img>
                                        </div>
                                    </div>
                                </div>
                                <div className="playlist-tracks-list-container">
                                    {playlistTracks?.map((track, index) => (
                                        <TrackPlaylistItem key={track.id} track={track} trackId={index + 1}/>
                                    ))} 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default PlaylistShow