import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { fetchPlaylistTracks, createPlaylistTrack } from '../../store/playlist_tracks';
import './PlaylistsDropDownIndexItem.css'

function PlaylistsDropDownIndexItem({playlist, track}) {
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const playlistId = playlist?.id;
    let trackId;
    if ((location.pathname === '/') || (location.pathname === '/tracks')) {
        trackId = track?.id;
    } else {
        trackId = track?.trackId;
    }
    const playlistTracks = useSelector(state => Object.values(state.playlist_tracks));

    // useEffect(() => {
    //     dispatch(fetchPlaylistTracks(playlistId));
    // }, [playlistTracks])

    async function handleClick(e) {
        e.preventDefault();
        console.log(playlistId, trackId);
        const creatingPlaylistTrack = await dispatch(createPlaylistTrack(playlistId, trackId));
        dispatch(fetchPlaylistTracks(playlistId));
        //create a new playlist track
        history.push(`/playlists/${playlistId}`);
    }

    return (
        <div onClick={(e) => handleClick(e)} className="playlist-title-playlist-dropdown">{playlist.title}</div>
    );
}

export default PlaylistsDropDownIndexItem;