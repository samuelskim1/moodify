import { useDispatch, useSelector, connect } from 'react-redux';
import { deletePlaylist } from '../../store/playlist';
import { useHistory } from 'react-router-dom';
import './PlaylistDeleteButton.css'
import { useEffect } from 'react';
import { openModal, closeModal } from '../../store/modal';

function PlaylistDeleteButton({playlist, openModal}) {
    // const dispatch = useDispatch();
    // const currentUserId = useSelector(state => state.session?.user?.id);
    // const history = useHistory();
    // useEffect(() => {

    // }, [])


    // async function openPlaylistDeleteModal() {
    //     const playlistId = playlist.id
    //     if (currentUserId === playlist.creatorId) {

    //         await dispatch(deletePlaylist(playlistId));
    //         history.push("/");
    //     }
    
    const openPlaylistDeleteModal = (e) => {
        e.preventDefault();
        openModal('Delete-Playlist');
        console.log("opening Playlist Delete Modal!")
    };

    // }

    return (
        <div className="delete-button-container" onClick={(e) => openPlaylistDeleteModal(e)}>
            <i className="fa-regular fa-trash-can"></i>
        </div>
    )

};

const mapStateToProps = state => {
    return {
        modal: state.modal
    };
};

const mapDispatchToProps = dispatch => {
    console.log("we're mapping dispatch to props!");
    return {
        openModal: () => dispatch(openModal('Delete-Playlist')),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistDeleteButton);