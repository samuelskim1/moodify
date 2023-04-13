import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentUserPlaylists } from "../../store/playlist";
import UserPlaylistsIndexItem from "./UserPlaylistsIndexItem";
import "./UserPlaylistsIndex.css";

function UserPlaylistsIndex() {
    const dispatch = useDispatch();
    const userPlaylists = useSelector(state => Object.values(state.playlists))
    const currentSong = useSelector(state => state.audio["currentSong"]);

    useEffect(() => {
        dispatch(fetchCurrentUserPlaylists())
    }, [dispatch])

    if (!userPlaylists) {
        return null;
    }

    return (
        <div className="user-playlists-index-outermost-container">
            <div className="user-playlists-index-padding-container">
                <div className="user-playlists-index-flexbox">
                    <ul className="user-playlists-index-list">
                        {userPlaylists.map(playlist => (
                            <UserPlaylistsIndexItem key={playlist.id} playlist={playlist}/>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default UserPlaylistsIndex;