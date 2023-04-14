import { NavLink } from 'react-router-dom';
import './TrackAlbumItem.css'

function TrackAlbumItem({track, albumId}) {
    const artistName = track.artistName;

    return (
        <div className="track-album-item-container">
            <div className="track-album-item">
                <div className="track-album-item-#">
                    <div className="track-album-item-id">{albumId}</div>
                </div>
                <div className="track-album-item-info">
                    <NavLink to={`/tracks/${track.id}`} className="track-album-item-link">
                        <div className="track-album-item-title">{track.title}</div>
                    </NavLink>
                    <div className="track-album-item-artist">{artistName}</div>
                </div>
                <div className="track-album-item-duration">{track.duration}</div>
            </div>
        </div>
    )
}

export default TrackAlbumItem;