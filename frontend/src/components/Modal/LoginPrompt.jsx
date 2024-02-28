import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';

function PlaylistCreationLoginPrompt() {

    return (
        <>
            <div>
                <h2>Create a Playlist</h2>
                <p>Please Log in to create/edit playlists.</p>
                <button onClick={() => dispatch(openModal('login-signup'))}>
                    Log In
                </button>
                <p>Don't have a Moodify Account? Sign up today!</p>
                <button onClick={() => dispatch(openModal('login-signup'))}>
                    Sign up
                </button>
            </div>
        </>
    )
}

export default LoginPrompt;
