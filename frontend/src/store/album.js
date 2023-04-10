const GET_ALBUM = 'GET_ALBUM'
const GET_ALBUMS = 'GET_ALBUMS'
const GET_SPLASH_ALBUMS = 'GET_SPLASH_ALBUMS'

const getAlbum = (album) => ({
    type: GET_ALBUM,
    album
})

const getAlbums = (albums) => ({
    type: GET_ALBUMS,
    albums
})

const getSplashAlbums = (albums) => ({
    type: GET_SPLASH_ALBUMS,
    albums
})


export const fetchAllAlbums = () => async (dispatch) => {

    const res = await fetch('/api/albums');
    if (res.ok) {
        const albums = await res.json();
        return dispatch(getAlbums(albums));
    }
}

export const fetchSplashPageAlbums = () => async (dispatch) => {
    const res = await fetch('/api/albums/splash');
    if (res.ok) {
        const albums = await res.json();
        return dispatch(getSplashAlbums(albums));
    }
}

export const fetchAlbum = (albumId) => async (dispatch) => {
    const res = await fetch(`/api/albums/${albumId}`);
    if (res.ok) {
        const album = await res.json();
        return dispatch(getAlbum(album));
    }
}


const albumReducer = (state = {}, action) => {
    const nextState = { ...state }

    switch (action.type) {
        case GET_ALBUM:
            nextState[action.album.id] = action.album;
            return nextState;
        case GET_ALBUMS:
            return { ...nextState, ...action.albums };
        case GET_SPLASH_ALBUMS:
            return action.albums;
        default:
            return nextState;
    };
};

export default albumReducer;