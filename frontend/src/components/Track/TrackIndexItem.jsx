import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrack } from "../../store/track";
import './TrackIndexItem.css'

function TrackIndexItem({track}) {
    
    return (
        <div className='track-index-item'>
            <div className='track-image'>
                <i className="fa-light fa-image fa-lg"></i>
            </div>
            <h2>This is Track {track?.id}</h2>
            <h6>{track?.title}</h6>
        </div>
    )
}

export default TrackIndexItem;