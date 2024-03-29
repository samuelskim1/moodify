import { NavLink, Redirect } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useSelector, useDispatch, connect } from 'react-redux';
import { openModal, closeModal } from '../../store/modal';
import UserPlaylistsIndex from './UserPlaylistsIndex';
import './SideBar.css'
import { createNewPlaylist, fetchCurrentUserPlaylists } from '../../store/playlist';




function SideBar({openModal}) {
    const dispatch = useDispatch();
    const numOfPlaylists = useSelector(state => Object.values(state.playlists).length);
    const currentUserId = useSelector(state => state.session?.user?.id);
    const currentUser = useSelector(state => state.session?.user)
    const location = useLocation();
    const history = useHistory();

    let playlistButton;

    useEffect(() => {
        dispatch(fetchCurrentUserPlaylists);
    }, [])

    const loggedIn = (e) => {
        e.preventDefault();
        if (currentUser) {
            console.log("yeah the user's logged in")
            createPlaylist();
        } else {
            console.log("nope the user is not logged in")
            openModal();
        }
    }

    const active = () => {
        if (location.pathname === '/') {
            return 'active'
        } else {
            return 'not-active'
        }
    }

    async function createPlaylist() {
        if (currentUserId) {
            const newPlaylist = {
                title: `My Playlist #${numOfPlaylists + 1}`,
                creator_id: currentUserId,
                description: ""
            }
            const createdPlaylist = await dispatch(createNewPlaylist(newPlaylist));

            const newPath = `/playlists/${createdPlaylist?.id}`
            history.push(newPath);
        } else {
            // return <Redirect to="/login" />;
            history.push("/login");
        }
    }

    // if (currentUserId) {
    //     playlistButton = <div className='playlists-create-playlist-container' onClick={createPlaylist}>
    //             <div className='create-playlists-button'>
    //                 <i className="fa-solid fa-square-plus create-playlist-button-icon" style={{ color: "#d1d1d1" }}></i>
    //             </div>
    //             <div className='create-playlists-label'>Create Playlist</div>
    //         </div>
    // }

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
                        <div className='playlists-create-playlist-container' onClick={(e) => loggedIn(e)}>
                                <div className='create-playlists-button'>
                                    <i className="fa-solid fa-square-plus create-playlist-button-icon" style={{color: "#d1d1d1"}}></i>
                                </div>
                                <div className='create-playlists-label'>Create Playlist</div>
                        </div>
                        <div className='playlists-liked-songs-playlist-container'></div>
                    </div>
                    <div className='linebreak-between-playlist-containers'>
                        <hr></hr>
                        <div></div>
                    </div>
                    {currentUserId &&
                        <UserPlaylistsIndex/>
                    }
                </div>
            </ul>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        modal: state.modal
    };
};

const mapDispatchToProps = dispatch => {
    console.log("we're mapping dispatch to props!");
    return {
        openModal: () => dispatch(openModal('login/signup')),
        closeModal: () => dispatch(closeModal())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(SideBar);