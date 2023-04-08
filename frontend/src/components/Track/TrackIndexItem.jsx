import './TrackIndexItem.css'

function TrackIndexItem({track}) {
    const artistName = track.artistName;

    return (
        <div className='track-index-item'>
            <div className='track-image'>
                <img src={track.photoUrl} alt="" />
            </div>
            <h6 className="track-title">{track.title}</h6>
            <h6 className="artist-name">{artistName}</h6>
            
        </div>
    )
}

export default TrackIndexItem;