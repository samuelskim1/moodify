import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { fetchPlaylistTracks, createPlaylistTrack } from '../../store/playlist_tracks';
import './PlaylistsDropDownIndexItem.css'

function PlaylistsDropDownIndexItem({playlist, track}) {
    const dispatch = useDispatch();
    const history = useHistory();
    const playlistId = playlist?.id;
    const trackId = track?.id;
    const playlistTracks = useSelector(state => Object.values(state.playlist_tracks));

    // useEffect(() => {
        
    // }, [])

    async function handleClick(e) {
        e.preventDefault();
        dispatch(fetchPlaylistTracks(playlistId))
        const creatingPlaylistTrack = await dispatch(createPlaylistTrack(playlistId, trackId));
        //create a new playlist track
        history.push(`/playlists/${playlistId}`);
    }

    return (
            <div onClick={(e) => handleClick(e)} className="playlist-title">{playlist.title}</div>
    );
}

export default PlaylistsDropDownIndexItem;