import { useDispatch, useSelector, connect } from 'react-redux';
import { useState, useEffect } from "react";
import { useHistory, useParams, NavLink } from 'react-router-dom';
import { openModal, closeModal } from '../../store/modal';
import { deletePlaylist } from '../../store/playlist';

function DeletePlaylistModal() {
    const dispatch = useDispatch();
    const { playlistId } = useParams();
    const playlist = useSelector(state => state.playlists[playlistId]);
    const currentUserId = useSelector(state => state.session?.user?.id);
    const history = useHistory();

    console.log("we made it to Delete-Playlist Modal");

    async function removePlaylist() {;
        if (currentUserId === playlist.creatorId) {
            await dispatch(deletePlaylist(playlistId));
            history.push("/");
        }
        closeModal();
    }


    return (
        <>
            <i className="fa-regular fa-circle-xmark" onClick={closeModal}></i>
            <div className="modal-content">
                <div className="modal-delete-playlist-section">
                    <h2 className="">Delete from Your Playlists?</h2>
                    This will delete this playlist from your playlists.
                    
                </div>
                <div className="modal-signup-section">
                    <p>Don't have an account? Create a free Moodify account today!</p>
                    <button onClick={closeModal} className='modal-cancel-button'>Cancel</button>
                    <NavLink to="/">
                        <button onClick={removePlaylist} className='modal-playlist-delete-button'>Delete</button>
                    </NavLink>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        modal: state.modal
    };
};

const mapDispatchToProps = dispatch => {
    console.log("we're mapping dispatch to props!");
    return {
        // openModal: () => dispatch(openModal('deletePlaylist')),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeletePlaylistModal)