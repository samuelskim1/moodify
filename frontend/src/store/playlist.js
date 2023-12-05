import csrfFetch from "./csrf";

const GET_PLAYLIST = 'GET_PLAYLIST';
const GET_CURRENT_USER_PLAYLISTS = 'GET_PLAYLISTS';
const REMOVE_PLAYLIST = 'REMOVE_PLAYLIST';

const getPlaylist = (playlist) => ({
    type: GET_PLAYLIST,
    playlist
})

const getCurrentUserPlaylists = (playlists) => ({
    type: GET_CURRENT_USER_PLAYLISTS,
    playlists
})

const removePlaylist = (playlistId) => ({
    type: REMOVE_PLAYLIST,
    playlistId
})

export const fetchPlaylist = (playlistId) => async (dispatch) => {
    const res = await csrfFetch(`/api/playlists/${playlistId}`);
    if (res.ok) {
        const playlist = await res.json();
        return dispatch(getPlaylist(playlist));
    }
}

export const fetchCurrentUserPlaylists = () => async(dispatch) => {
    const res = await csrfFetch('/api/playlists');
    if (res.ok) {
        const currentUserPlaylists = await res.json();
        return dispatch(getCurrentUserPlaylists(currentUserPlaylists));
    }
}

export const createNewPlaylist = (playlist) => async (dispatch) => {
    const { creator_id, title, description } = playlist;
    const res = await csrfFetch('/api/playlists', {
        method: 'POST',
        body: JSON.stringify({
            creator_id,
            title,
            description
        })
    });

    const playlistData = await res.json();
    return dispatch(getPlaylist(playlistData));
}

export const deletePlaylist = (playlistId) => async (dispatch) => {
    console.log(playlistId);
    const res = await csrfFetch(`/api/playlists/${playlistId}`, {
        method: 'DELETE'
    })
    if (res.ok) {
        return dispatch(removePlaylist(playlistId));
    }
}

const playlistReducer = (state = {}, action) => {
    const nextState = { ...state }
    switch (action.type) {
        case GET_PLAYLIST:
            nextState[action.playlist.id] = action.playlist;
            return nextState;
        case GET_CURRENT_USER_PLAYLISTS:
            return action.playlists;
        case REMOVE_PLAYLIST:
            delete nextState[action.playlistId];
            return nextState;
        default:
            return nextState;
    }
}

export default playlistReducer;