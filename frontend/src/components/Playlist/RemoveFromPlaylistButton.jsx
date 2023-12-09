import { useDispatch } from 'react-redux';
import { deletePlaylistTrack } from '../../store/playlist_tracks';
// import { useHistory} from 'react-router-dom';
import './RemoveFromPlaylistButton.css'


function RemoveFromPlaylistButton({track}) {
    const dispatch = useDispatch();
    // const history = useHistory();
    

    async function removePlaylistTrack() {
        console.log(track);
        const playlistTrackId = track.id;
        //this track.id is actually playlistTrack.id
        //what we're passing into the params of this component is actually a playlistTrack that we get when looping through playlistTracks
        console.log(playlistTrackId);

        await dispatch(deletePlaylistTrack(playlistTrackId));
        console.log("playlist track deleted!")


    }

    return (
        <>
            <div className="remove-track-area">
                <i onClick={removePlaylistTrack} className="fa-solid fa-circle-minus remove-track-button"></i>
            </div>      
        </>
    )
}

export default RemoveFromPlaylistButton;