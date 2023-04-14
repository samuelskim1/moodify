import csrfFetch from "./csrf";

const GET_PLAYLIST_TRACKS = 'GET_PLAYLIST_TRACKS';

const getPlaylistTracks = (playlistTracks) => ({
    type: GET_PLAYLIST_TRACKS,
    playlistTracks
})

export const fetchPlaylistTracks = (playlistId) => async (dispatch) => {
    // debugger;
    const res = await csrfFetch(`/api/playlists/${playlistId}`);
    if (res.ok) {
        const playlist = await res.json();
        //res doesnt have the key of playlistTracks when i ran through the debugger
        //
        return dispatch(getPlaylistTracks(playlist.playlistTracks));
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
        default:
            return nextState;
    }
}

export default playlistTracksReducer;