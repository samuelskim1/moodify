import { NavLink } from 'react-router-dom';
import './TrackPlaylistItem.css'
import AddToPlaylistButtonPlaylistShow from './AddToPlaylistButtonPlaylistShow';
import RemoveFromPlaylistButton from './RemoveFromPlaylistButton';


function TrackPlaylistItem({ track, trackId }) {
    const artist = track.artistName;
    const album = track.albumName;
    const albumId = track.albumId;

    return (
        <div className="track-playlist-item-container">
            <div className="track-playlist-item">
                <div className="track-playlist-item-#">
                    <div className="track-playlist-item-id">{trackId}</div>
                </div>
                <div className="track-playlist-item-info">
                    <div className="track-playlist-item-title">{track?.title}</div>
                    <div className="track-playlist-item-artist">{artist}</div>
                </div>
                <NavLink to={`/albums/${albumId}`} className="track-playlist-item-album-link">
                    <div className="track-playlist-item-album">{album}</div>
                </NavLink>
                <div className="track-playlist-item-duration">{track.duration}</div>
                <div className="playlist-track-update-container">
                    <AddToPlaylistButtonPlaylistShow track={track} />
                    <RemoveFromPlaylistButton track={track} />
                </div>
            </div>
        </div>
    )
}

export default TrackPlaylistItem;