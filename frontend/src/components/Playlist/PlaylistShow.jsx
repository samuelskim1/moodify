import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { fetchPlaylist } from "../../store/playlist";
import { fetchPlaylistTracks } from "../../store/playlist_tracks";
import Navigation from "../Navigation";
import SideBar from "../SideBar/Sidebar";
import TrackPlaylistItem from "./TrackPlaylistItem";
import PlaylistDeleteButton from "./PlaylistDeleteButton";
import EditPlaylistModal from "../Modal/EditPlaylistModal";
import './PlaylistShow.css'

function PlaylistShow() {
    const { playlistId } = useParams();
    const dispatch = useDispatch();
    const playlist = useSelector(state => state.playlists[playlistId]);
    const playlistTracks = useSelector(state => Object.values(state.playlist_tracks));

    useEffect(() => {
        dispatch(fetchPlaylistTracks(playlistId))
    }, [dispatch, playlistId])

    const songCount = playlistTracks?.length;
    const username = playlist?.playlistCreator;
    
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
                                </div>
                                <div className="playlist-show-header-item playlist-show-info">
                                    <h4 className="playlist-show-info component-type">Playlist</h4>
                                    <h1 className="playlist-show-info playlist-title">{playlist?.title}</h1>
                                    <div className="playlist-show-info extra-info">
                                        <div className="extra-info-item artist-info">
                                            <i className="artist-picture fa-solid fa-user fa-xs" style={{ color: '#ffffff' }}></i>
                                        </div>
                                        <span className="extra-info-item playlist-year">{playlist?.year}</span>
                                        <span className="extra-info-item playlist-track-count">{songCount} songs</span>
                                    </div>
                                </div>
                            </header>
                            <div className="playlist-show-item playlist-show-play-area" >
                                <div className="edit-playlist-text">Edit Playlist</div>
                                <EditPlaylistButton playlist={playlist}/>
                                <div className="delete-playlist-text">Delete Playlist</div>
                                <PlaylistDeleteButton playlist={playlist}/>
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
                                        <TrackPlaylistItem key={index} track={track} trackId={index + 1}/>
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