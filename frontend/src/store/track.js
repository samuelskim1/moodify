
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
        console.log(tracks, 'tracks from fetchAllTracks Thunk Action!')
        return dispatch(getTracks(tracks)); 
    }
}

export const fetchTrack = (trackId) => async (dispatch) => {
    const res = await fetch(`/api/tracks/${trackId}`);
    if (res.ok) {
        const track = await res.json();
        console.log(track, 'tracks from fetchAllTracks Thunk Action!')
        return dispatch(getTrack(track));
    }
    // } else {
    //     return res.errors
    // }
}


const trackReducer = (state = {}, action) => {
    const nextState = {...state}

    switch (action.type) {
        case GET_TRACK:
            nextState[action.track.id] = action.track;
            
            console.log(nextState, 'this is the nextState from GET TRACK')
            return nextState
            
        case GET_TRACKS:
            console.log(nextState, 'this is the nextState from GET TRACKS')
            return {...nextState, ...action.tracks};
        default:
            return nextState;
    };
};

export default trackReducer;