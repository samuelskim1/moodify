
import './PlaylistsDropDownIndexItem.css'

function PlaylistsDropDownIndexItem({playlist, track}) {


    return (
            <div className="playlist-title">{playlist.title}</div>
    );
}

export default PlaylistsDropDownIndexItem;