import csrfFetch from "./csrf";

const GET_PLAYLIST_TRACKS = 'GET_PLAYLIST_TRACKS';
const ADD_PLAYLIST_TRACK_TO_PLAYLIST = 'ADD_PLAYLIST_TRACK_TO_PLAYLIST';
const REMOVE_PLAYLIST_TRACK = 'REMOVE_PLAYLIST_TRACK';

const getPlaylistTracks = (playlistTracks) => ({
    type: GET_PLAYLIST_TRACKS,
    playlistTracks
})

const addPlaylistTrackToPlaylist = (newPlaylistTrack) => ({
    type: ADD_PLAYLIST_TRACK_TO_PLAYLIST,
    newPlaylistTrack
})

const removePlaylistTrack = (playlistTrackId) => ({
    type: REMOVE_PLAYLIST_TRACK,
    playlistTrackId
})

export const fetchPlaylistTracks = (playlistId) => async (dispatch) => {
    const res = await csrfFetch(`/api/playlists/${playlistId}`);
    if (res.ok) {
        const playlist = await res.json();
        //res doesnt have the key of playlistTracks when i ran through the debugger
        //
        return dispatch(getPlaylistTracks(playlist.playlistTracks));
    } else {
        return {};
    }
}

export const createPlaylistTrack = (playlistId, trackId) => async (dispatch) => {
    // const {playlistId, trackId} = playlist_track;
    const res = await csrfFetch(`/api/playlist_tracks`, {
        method: 'POST',
        body: JSON.stringify({
            playlistId,
            trackId
        })
        // body: JSON.stringify(playlist_track)
    })
    const newPlaylistTrackData = await res.json();
    dispatch(addPlaylistTrackToPlaylist(newPlaylistTrackData))
    return newPlaylistTrackData;
}

export const deletePlaylistTrack = (playlistTrackId) => async (dispatch) => {
    const res = await csrfFetch(`/api/playlist_tracks/${playlistTrackId}`, {
        method: 'DELETE'
    })

    if (res.ok) {
        dispatch(removePlaylistTrack(playlistTrackId));
    }
}

const playlistTracksReducer = (state = {}, action ) => {
    const nextState = { ...state }
    switch (action.type) {
        case GET_PLAYLIST_TRACKS:
            if (action.playlistTracks) {
                return action.playlistTracks;
            } else {
                return {};
            }
        case ADD_PLAYLIST_TRACK_TO_PLAYLIST: 
            return { ...state, [action.newPlaylistTrack.id ]: action.newPlaylistTrack };
        case REMOVE_PLAYLIST_TRACK:
            delete nextState[action.playlistTrackId];
            return nextState;
        default:
            return nextState;
    }
}

export default playlistTracksReducer;