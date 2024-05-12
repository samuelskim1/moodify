import { connect } from 'react-redux';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './PlaylistCreationLoginSignupPrompt.css';

import { openModal, closeModal } from '../../store/modal';

function PlaylistCreationLoginSignupPrompt() {

    console.log("we made it to Create-Playlist-Login/Signup-Prompt");

    return (
        <div className="modal-content">
            <h2>Create a Playlist</h2>
            <div className="modal-login-section">
                <p>Please Log in to create/edit playlists.</p>
                <NavLink to="/login">
                    <button onClick={closeModal} className='modal-login-button'>Log In</button>
                </NavLink>
            </div>
            <div className="modal-signup-section">
                <p>Don't have a Moodify Account? Sign up today!</p>
                <NavLink to="/signup">
                    <button onClick={closeModal} className='modal-signup-button'>Sign up</button>
                </NavLink>
            </div>
        </div>

    )


};

export default PlaylistCreationLoginSignupPrompt;
