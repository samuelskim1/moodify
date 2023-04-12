
// const UPDATE_SONG = 'UPDATE_AUDIO'
// const PLAY_SONG = 'PLAY_SONG'



// export const updateSong = (audio, previousAudioValue) => ({
    //     type: UPDATE_SONG,
    //     // track,
    //     audio,
    //     previousAudioValue
    // })
    
    // export const playSong = (audio) => ({
        //     type: PLAY_SONG,
//     audio
//     // track
// })

const SET_CURRENT_SONG = 'SET_CURRENT_SONG';
const SET_CURRENT_ALBUM = 'SET_CURRENT_ALBUM';
const SET_PREV_SONG = "SET_PREV_SONG";
const SET_NEXT_SONG = "SET_NEXT_SONG";
const SKIP_TO_NEXT_SONG = "SKIP_TO_NEXT_SONG";
const SKIP_TO_PREV_SONG = "SKIP_TO_PREV_SONG";


export const setCurrentSong = (track) => ({
    type: SET_CURRENT_SONG,
    track
})

export const setCurrentAlbum = (album) => ({
    type: SET_CURRENT_ALBUM,
    album
})

export const setPrevSong = (track) => ({
    type: SET_PREV_SONG,
    track
})

export const setNextSong = (track) => ({
    type: SET_NEXT_SONG,
    track
})

export const skipToNextSong = (payload) => ({
    type: SKIP_TO_NEXT_SONG,
    payload
})

export const skipToPrevSong = (payload) => ({
    type: SKIP_TO_PREV_SONG,
    payload
})




const audioReducer = (state = {}, action ) => {
    const nextState = {...state}
    let albumTracks;

    switch (action.type) {
        // case PLAY_SONG:
        //     return action.track.id = action.track.songUrl
        // case UPDATE_SONG:
        //     action.previousAudioValue.load();
        //     return action.track.id = action.track.songUrl
        case SET_CURRENT_SONG:
            nextState["currentSong"] = action.track;
            return nextState;
        case SET_CURRENT_ALBUM:
            nextState["currentAlbum"] = action.album
            return nextState;
        case SET_PREV_SONG:
            nextState["previousSong"] = action.track;
            return nextState;
        case SET_NEXT_SONG:
            nextState["nextSong"] = action.track;
            return nextState;
        case SKIP_TO_NEXT_SONG:
            // debugger;
            albumTracks = Object.values(nextState.currentAlbum.tracks)
            nextState.previousSong = nextState.currentSong;
            nextState.currentSong = nextState.nextSong;

            let newNextSong;
            albumTracks.forEach((song, index) => {
                if ((song.id === nextState.nextSong.id) && (index + 1 > albumTracks.length - 1)) {
                    newNextSong = albumTracks[0];
                } else if ((song.id === nextState.nextSong.id)) {
                    newNextSong = albumTracks[index + 1]
                }
            })

            nextState.nextSong = newNextSong;
            return nextState;
        case SKIP_TO_PREV_SONG:
            albumTracks = Object.values(nextState.currentAlbum.tracks)
            nextState.nextSong = nextState.currentSong;
            nextState.currentSong = nextState.previousSong;

            let newPrevSong;
            albumTracks.forEach((song, index) => {
                if ((song.id === nextState.previousSong.id) && (index - 1 < 0)) {
                    newPrevSong = albumTracks[albumTracks.length - 1];
                } else if ((song.id === nextState.previousSong.id)) {
                    newPrevSong = albumTracks[index - 1]
                }
            })

            nextState.previousSong = newPrevSong;
            return nextState;
        default:
            return nextState;
        
    };
};

export default audioReducer;