
const GET_TRACK = 'GET_TRACK'
const GET_TRACKS = 'GET_TRACKS'

const getTrack = (track) => ({
    type: GET_TRACK,
    track
})

const getTracks = (tracks) => ({
    type: GET_TRACKS,
    tracks
})

export const fetchAllTracks = () => async (dispatch) => {

    const res = await fetch('/api/tracks');
    if (res.ok) { 
        const tracks = await res.json(); 
        return dispatch(getTracks(tracks)); 
    }
}

export const fetchSplashPageTracks = () => async (dispatch) => {
    const res = await fetch('/api/tracks/splash');
    if (res.ok) {
        const tracks = await res.json();
        return dispatch(getTracks(tracks));
    }
}

export const fetchTrack = (trackId) => async (dispatch) => {
    const res = await fetch(`/api/tracks/${trackId}`);
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
            console.log('getTrack action');
            return nextState;
        case GET_TRACKS:
            console.log('getTracks action');
            return {...nextState, ...action.tracks};
        default:
            return nextState;
    };
};

export default trackReducer;