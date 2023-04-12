import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import UserPlaylistsIndex from './UserPlaylistsIndex';
import './SideBar.css'




function SideBar() {
    const location = useLocation();
    const active = () => {
        if (location.pathname === '/') {
            return 'active'
        } else {
            return 'not-active'
        }
    }

    return (
        <div className="sidebar-container">
            <div className="banner">
                <img src={require('../../assets/spotify-48.png')} alt=''></img>
                <h2>Moodify</h2>
            </div>
            <ul className='sidebar-nav'>
                <div className="sidebar-home-search-library-container">
                    <div className="sidebar-home-container">
                        <NavLink to='/' className='sidebar-home'>
                            <li>
                                <i className="fa-solid fa-house" style={{ color: '#ffffff' }}></i>
                                <h3 className={`${active}`}>Home</h3>
                            </li>
                        </NavLink>
                    </div>
                </div>
                <div className='sidebar-playlists-section-container'>
                    <div className='sidebar-playlists-create-and-likes-container'>
                        <div className='playlists-create-playlist-container'>
                            <div className='create-playlists-button'></div>
                            <div className='create-playlists-label'>Create Playlist</div>
                        </div>
                        <div className='playlists-liked-songs-playlist-container'></div>
                    </div>
                    <div className='linebreak-between-playlist-containers'></div>
                    <UserPlaylistsIndex/>
                </div>
            </ul>
        </div>
    )
}

export default SideBar;