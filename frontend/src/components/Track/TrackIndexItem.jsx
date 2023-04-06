import './TrackIndexItem.css'

function TrackIndexItem({track}) {
    const artistName = track.artistName;

    return (
        <div className='track-index-item'>
            <div className='track-image'>
                <i className="fa-solid fa-image fa-xl" style={{color: '#919cb1'}}></i></div>
            <h6 className="track-title">{track.title}</h6>
            <h6 className="artist-name">{artistName}</h6>
            
        </div>
    )
}

export default TrackIndexItem;