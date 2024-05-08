import React from 'react';
import { closeModal } from '../../store/modal';
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";
import './Modal.css';
import DeletePlaylistModal from './DeletePlaylistModal';
import PlaylistCreationLoginSignupPrompt from './PlaylistCreationLoginSignupPrompt';
import LoginAndSignupPrompt from './LoginAndSignupPrompt';


function Modal({ modal, closeModal }) {
    if (!modal) {
        console.log("modal is null");
        return null;
    }
    console.log(closeModal);

    let component;
    switch (modal) {
        case 'Login/Signup-Prompt':
            component = <LoginAndSignupPrompt />;
            break;
        case 'Delete-Playlist':
            component = <DeletePlaylistModal/>;
            break;
        case 'Create-Playlist-Login/Signup-Prompt':
            component = <PlaylistCreationLoginSignupPrompt/>
        default:
            return null;
    }



    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);