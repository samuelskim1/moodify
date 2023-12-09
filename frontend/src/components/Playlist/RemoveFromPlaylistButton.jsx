import { useDispatch } from 'react-redux';
import { deletePlaylistTrack } from '../../store/playlist_tracks';
import { useHistory} from 'react-router-dom';
import './RemoveFromPlaylistButton.css'


function RemoveFromPlaylistButton({track}) {
    const dispatch = useDispatch();
    return (
        <>
            <div className="remove-track-area">
                <i class="fa-solid fa-circle-minus remove-track-button"></i>
            </div>      
        </>
    )
}

export default RemoveFromPlaylistButton;