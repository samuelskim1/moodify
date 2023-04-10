import { useState, useEffect } from 'react';
import './TrackPlayButton.css'

function TrackPlayButton({track}) {
    const [song] = useState(new Audio(track.songUrl))
    const [playing, setPlaying] = useState(false);
    const toggle = () => setPlaying(!playing);

    useEffect(() => {
        playing ? song.play() : song.pause();
    }, [playing]);

    

    // const playPause = () => {
    //     if (isPlaying) {
    //         song.pause();
               
    //     } else {
    //         song.play();
            
    //     }
    //     setIsPlaying(!isPlaying);
    // }


    return (
        <div className="play-button-container" onClick={toggle}>
            <i className="fa-solid fa-circle-play fa-2xl" style={{ color: '#2dc819' }}>
                <div className="play-button-size-setter"></div>
            </i>
        </div>
    )
}

export default TrackPlayButton;