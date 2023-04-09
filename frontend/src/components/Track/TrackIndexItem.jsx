import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './TrackIndexItem.css'

function TrackIndexItem({track}) {
    // const [showButton, setShowButton] = useState(false);
    const artistName = track.artistName;

    return (
        <NavLink to={`tracks/${track.id}`} className='track-index-item-link'>
            <div className='track-index-item'
                // onMouseEnter={() => setShowButton(true)}
                // onMouseLeave={() => setShowButton(false)}
                >
                <div className='track-image'>
                    <img src={track.photoUrl} alt=""/>
                    <div className='track-index-item-play-button'>
                            <i className="fa-solid fa-circle-play fa-2xl" style={{ color: '#2dc819' }}></i>
                    </div>
                </div>
                <h6 className="track-title">{track.title}</h6>
                <h6 className="artist-name">{artistName}</h6>
                
            </div>
        </NavLink>
    )
}

export default TrackIndexItem;