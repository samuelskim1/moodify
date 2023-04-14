import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './AlbumIndexItem.css'

function AlbumIndexItem({album}) {
    const artistName = album.artistName;

    return (
        <NavLink to={`albums/${album.id}`} className='album-index-item-link'>
            <div className='album-index-item'
            // onMouseEnter={() => setShowButton(true)}
            // onMouseLeave={() => setShowButton(false)}
            >
                <div className='album-image'>
                    <img src={album.photoUrl} alt="" />
                    {/* <div className='album-index-item-play-button'>
                        <i className="fa-solid fa-circle-play fa-2xl" style={{ color: '#2dc819' }}></i>
                    </div> */}
                </div>
                <h6 className="album-title">{album.title}</h6>
                <span className="album-index-album-year">{album.year}</span>
                <span className="album-index-artist-name">{artistName}</span>
            </div>
        </NavLink>
    )
}

export default AlbumIndexItem;