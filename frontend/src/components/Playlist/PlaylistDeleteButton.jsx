import { useDispatch, useSelector } from 'react-redux';
import { deletePlaylist } from '../../store/playlist';
import { useHistory } from 'react-router-dom';
import './PlaylistDeleteButton.css'
import { useEffect } from 'react';
import { openModal, closeModal } from '../../store/modal';

function PlaylistDeleteButton({playlist}) {
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
        
    // }

    return (
        <div className="delete-button-container" onClick={openModal("Delete-Playlist")}>
            <i className="fa-regular fa-trash-can"></i>
        </div>
    )
}

export default PlaylistDeleteButton;