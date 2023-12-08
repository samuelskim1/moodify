import { useSelector } from "react-redux";
import PlaylistsDropDownIndexItem from "./PlaylistsDropDownIndexItem";
import "./PlaylistsDropdownIndexPlaylistShow.css"


function PlaylistsDropdownIndexPlaylistShow({ track }) {
    const currentUserId = useSelector(state => state.session?.user?.id);
    const currentUserPlaylists = useSelector(state => Object.values(state.playlists));


    return (
        <>
            {/* {!currentUserId && (
                <div className="please-log-in-first">
                    Please Log In To Add A Track To A Playlist!
                </div>
            )
            } */}
            {currentUserId ? (
                <div className="playlist-dropdown-playlist-show">
                    <ul className="playlist-dropdown-content">
                        <p>Add to Playlist</p>
                        <div className='linebreak-between-playlist-containers'>
                            <hr></hr>
                        </div>
                        <ul className="user-playlists-dropdown-index-list">
                            {currentUserPlaylists.map(playlist => (
                                <PlaylistsDropDownIndexItem key={playlist.id} playlist={playlist} track={track} />
                            ))
                            }

                        </ul>
                        {/* <li>test playlist dropdown #1</li>
                        <li>test playlist dropdown #2</li>
                        <li>test playlist dropdown #3</li>
                        <li>test playlist dropdown #4</li>
                        <li>test playlist dropdown #5</li>
                        <li>test playlist dropdown #6</li> */}
                    </ul>
                </div>
            ) : (
                <div className="please-log-in-first">
                    Please Log In To Add A Track To A Playlist!
                </div>
            )
            }
        </>

    )

}

export default PlaylistsDropdownIndexPlaylistShow;
