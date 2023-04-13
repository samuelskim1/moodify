import csrfFetch from "./csrf";

const GET_PLAYLIST_TRACKS = 'GET_PLAYLIST_TRACKS';

const getPlaylistTracks = (playlistTracks) => ({
    type: GET_PLAYLIST_TRACKS,
    playlistTracks
})

export const fetchPlaylistTracks = (playlistId) => async (dispatch) => {
    const res = await csrfFetch(`/api/playlists/${playlistId}`);
    if (res.ok) {
        const playlist = await res.json();
        return dispatch(getPlaylistTracks(playlist.playlistTracks));
    }
}

const playlistTracksReducer = (state = {}, action ) => {
    const nextState = { ...state }
    switch (action.type) {
        case GET_PLAYLIST_TRACKS:
            return action.playlistTracks;
        default:
            return nextState;
    }
}

export default playlistTracksReducer;