import { useDispatch, useSelector } from 'react-redux';
import { setCurrentSong, setCurrentAlbum, setPrevSong, setNextSong } from '../../store/audio';
import { fetchAlbum } from '../../store/album';
import './PlaylistDeleteButton.css'
import { useEffect } from 'react';

function PlaylistDeleteButton({playlist}) {

    useEffect(() => {

    }, [])

    const deletePlaylist = () => {

    }

    return (
        <div className="delete-button-container" onClick={deletePlaylist}>
            <i class="fa-regular fa-trash-can"></i>
        </div>
    )
}

export default PlaylistDeleteButton;