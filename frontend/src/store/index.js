import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session';
import tracks from './track';
import audio from './audio';
import albums from './album';
import playlists from './playlist';
import playlist_tracks from './playlist_tracks';
import users from './user';
import search from './search';
// import modal from './modal';


const rootReducer = combineReducers({
    session,
    tracks,
    audio,
    albums,
    playlists,
    playlist_tracks,
    users,
    search
    // modal
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require('redux-logger').default;
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
}

export default configureStore;
