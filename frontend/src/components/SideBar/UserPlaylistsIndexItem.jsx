import { NavLink } from "react-router-dom";
import "./UserPlaylistsIndexItem.css"


function UserPlaylistsIndexItem({playlist}) {
    const playlistId = playlist.id;

    return (
        <NavLink to={`/playlists/${playlistId}`} className="nav-link-for-playlist-item">
            <li className="user-playlists-index-item">
                <span className="user-playlists-index-item-title">{playlist.title}</span>
            </li>
        </NavLink>
        
    )

}   

export default UserPlaylistsIndexItem;