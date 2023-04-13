import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { fetchAlbum } from "../../store/album";
import Navigation from "../Navigation";
import SideBar from "../SideBar";
import TrackAlbumItem from "./TrackAlbumItem";
// import TrackPlayButton from "./TrackPlayButton";
import './AlbumShow.css'
import PlayBar from "../PlayBar/PlayBar";

function AlbumShow() {
    const { albumId } = useParams();
    const dispatch = useDispatch();
    const album = useSelector(state => state.albums[albumId]);
    // const currentSong = useSelector(state => state.audio["currentSong"]);
    

    useEffect(() => {
        dispatch(fetchAlbum(albumId))
        console.log('useEffect is mounting')
    }, [dispatch, albumId])

    if (!album) {
        return null;
    }

    let songCount;
    let albumDuration;
    let tracks;
    

    if (album?.tracks) {
        songCount = Object.values(album?.tracks).length;
        // albumDuration = Object.values(album?.tracks).length
        tracks = Object.values(album?.tracks);
    }

    //could create a component for the top section of the album/track/playlist show page
    //similar format
    //focus on that later though

    return (
        <>
            <div className="album-show-flex-container">
                <div className="non-play-bar-section">

                    <SideBar />
                    <div className="album-show-nav-main-container">
                        <Navigation />
                        <div className="album-show-container">
                            <header className="album-show-item album-show-header">
                                <div className="album-show-header-item album-show-image">
                                    <img src={album?.photoUrl} alt="" />
                                    {/* <i className="fa-solid fa-image fa-xl" style={{ color: '#919cb1' }}></i> */}
                                </div>
                                <div className="album-show-header-item album-show-info">
                                    <h4 className="album-show-info component-type">Album</h4>
                                    <h1 className="album-show-info album-title">{album?.title}</h1>
                                    <div className="album-show-info extra-info">
                                        <div className="extra-info-item artist-info">
                                            <i className="artist-picture fa-solid fa-user fa-xs" style={{ color: '#ffffff' }}></i>
                                            <span className="artist-name">{album?.artistName}</span>
                                        </div>
                                        <span className="extra-info-item album-year">{album?.year}</span>
                                        <span className="extra-info-item album-track-count">{songCount} songs</span>
                                        {/* <span className="extra-info-item album-duration">{album.duration}</span> */}
                                    </div>
                                </div>
                            </header>
                            <div className="album-show-item album-show-play-area" >
                                {/* <TrackPlayButton track={track} /> */}
                            </div>
                            <div className="album-show-item album-tracks-container">
                                <div className="album-tracks-label-holder">
                                    <div className="album-tracks-label">
                                        
                                        <div className="tracks-id-indicator">#</div>
                                        <div className="tracks-title-indicator">Title</div>
                                        <div className="tracks-duration-icon-container">
                                            <img src={require('../../assets/icons8-clock-32.png')} alt=''></img>
                                        </div>
                                    </div>
                                </div>
                                <div className="album-tracks-list-container">
                                    {tracks?.map(track => (
                                        <TrackAlbumItem key={track.id} track={track} />
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

export default AlbumShow