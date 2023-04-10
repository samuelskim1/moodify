import { NavLink } from 'react-router-dom';
import './TrackAlbumItem.css'

function TrackAlbumItem({track}) {
    const artistName = track.artistName;

    return (
        <div className="track-album-item-container">
            <div className="track-album-item">
                <div className="track-album-item-#">
                    <div className="track-album-item-id">{track.id}</div>
                </div>
                <div className="track-album-item-info">
                    <div className="track-album-item-title">{track.title}</div>
                    <div className="track-album-item-artist">{artistName}</div>
                </div>
                <div className="track-album-item-duration">{track.duration}</div>
            </div>
        </div>
    )
}

export default TrackAlbumItem;