import './TrackIndexItem.css'

function TrackIndexItem({track}) {
    const artistName = track.artistName;
    debugger;
    return (
        <div className='track-index-item'>
            <div className='track-image'>
                <i className="fa-solid fa-image fa-xl" style={{color: '#919cb1'}}></i></div>
            <h2>This is Track {track?.id}</h2>
            <h6>{track.title}</h6>
            <h6>{artistName}</h6>
            
        </div>
    )
}

export default TrackIndexItem;