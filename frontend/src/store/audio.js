import trackReducer from "./track";

const UPDATE_SONG = 'UPDATE_AUDIO'
const PLAY_SONG = 'PLAY_SONG'

export const updateSong = (audio, previousAudioValue) => ({
    type: UPDATE_SONG,
    // track,
    audio,
    previousAudioValue
})

export const playSong = (audio) => ({
    type: PLAY_SONG,
    audio
    // track
})

const audioReducer = (state = {}, action ) => {
    const nextState = {...state}
    
    switch (action.type) {
        case PLAY_SONG:
            return action.track.id = action.track.songUrl
        case UPDATE_SONG:
            action.previousAudioValue.load();
            return action.track.id = action.track.songUrl
        default:
            return nextState;
        
    };
};

export default audioReducer;