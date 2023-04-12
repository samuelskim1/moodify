import csrfFetch from "./csrf"

const GET_TRACK = 'GET_TRACK'
const GET_TRACKS = 'GET_TRACKS'
const GET_SPLASH_TRACKS = 'GET_SPLASH_TRACKS'

const getTrack = (track) => ({
    type: GET_TRACK,
    track
})

const getTracks = (tracks) => ({
    type: GET_TRACKS,
    tracks
})

const getSplashTracks = (tracks) => ({
    type: GET_SPLASH_TRACKS,
    tracks
})


export const fetchAllTracks = () => async (dispatch) => {

    const res = await csrfFetch('/api/tracks');
    if (res.ok) { 
        const tracks = await res.json(); 
        return dispatch(getTracks(tracks)); 
    }
}

export const fetchSplashPageTracks = () => async (dispatch) => {
    const res = await csrfFetch('/api/tracks/splash');
    if (res.ok) {
        const tracks = await res.json();
        return dispatch(getSplashTracks(tracks));
    }
}

export const fetchTrack = (trackId) => async (dispatch) => {
    const res = await csrfFetch(`/api/tracks/${trackId}`);
    if (res.ok) { 
        const track = await res.json(); 
        return dispatch(getTrack(track)); 
    }
}


const trackReducer = (state = {}, action) => {
    const nextState = {...state}

    switch (action.type) {
        case GET_TRACK:
            nextState[action.track.id] = action.track;
            return nextState;
        case GET_TRACKS:
            return {...nextState, ...action.tracks};
        case GET_SPLASH_TRACKS:
            return action.tracks;
        default:
            return nextState;
    };
};

export default trackReducer;