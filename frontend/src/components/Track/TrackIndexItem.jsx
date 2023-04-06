import { useSelector } from 'react-redux';
import './TrackIndexItem.css'

function TrackIndexItem({track}) {
    const artistName = track?.artist?.name;
    return (
        <div className='track-index-item'>
            <div className='track-image'>
                <i className="fa-light fa-image fa-lg"></i>
            </div>
            <h2>This is Track {track?.id}</h2>
            <h6>{track?.title}</h6>
            {/* <h6>{artistName}</h6> */}
            
        </div>
    )
}

export default TrackIndexItem;