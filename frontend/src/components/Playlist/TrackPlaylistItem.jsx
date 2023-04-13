import { NavLink } from 'react-router-dom';
import './TrackPlaylistItem.css'

function TrackPlaylistItem({ track }) {
    const artistName = track.artistName;

    return (
        <div className="track-playlist-item-container">
            <div className="track-playlist-item">
                <div className="track-playlist-item-#">
                    <div className="track-playlist-item-id">{track.id}</div>
                </div>
                <div className="track-playlist-item-info">
                    <div className="track-playlist-item-title">{track.title}</div>
                    <div className="track-playlist-item-artist">{artistName}</div>
                </div>
                <div className="track-playlist-item-duration">{track.duration}</div>
            </div>
        </div>
    )
}

export default TrackPlaylistItem;