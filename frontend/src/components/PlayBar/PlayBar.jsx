import { useDispatch, useSelector } from "react-redux";
import { skipToNextSong, skipToPrevSong } from "../../store/audio";
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';
import './Playbar.css'

function PlayBar() {
    const dispatch = useDispatch();
    const currentSong = useSelector(state => state.audio.currentSong);
    const previousSong = useSelector(state => state.audio.previousSong);
    const nextSong = useSelector(state => state.audio.nextSong);
    const currentAlbum = useSelector(state => state.audio.currentAlbum)
    const trackSong = currentSong?.songUrl;
    const trackPic = currentSong?.photoUrl;


    const handlePlay = (e) => {
        
    }

    const handlePause = (e) => {

    }

    const handleNextSkip = (e) => {
        e.preventDefault();
        dispatch(skipToNextSong(currentSong, previousSong, nextSong, currentAlbum))
    }

    const handlePrevSkip = (e) => {
        e.preventDefault();
        dispatch(skipToPrevSong(currentSong, previousSong, nextSong, currentAlbum))
    }


    return (
        (currentSong &&
            <div className='footer-container'>
                <div className="play-bar-track-info">
                    <div className="now-playing-section">
                        <div className="now-playing-image-container">
                            {trackPic &&
                                <img src={trackPic} alt=""/>
                            }
                        </div>
                        <div className="now-playing-artist-info">
                            <p className="now-playing-artist-info-name">{currentSong?.title}</p>
                            <p className="now-playing-artist-info-artist">{currentSong?.artistName}</p>
                        </div>
                    </div>
                </div>
                <div className="play-bar-control-container">
                    {trackSong &&
                        <AudioPlayer 
                            src={trackSong} 
                            layout="stacked-reverse"
                            autoPlay={true}
                            showSkipControls={true}
                            showDownloadProgress={false}
                            showJumpControls={false}
                            showFilledVolume={true}
                            hasDefaultKeyBindings={false}  
                            style={{
                                // display: "flex",
                                width: '100%',
                                height: '100%'
                            }}
                            customControlsSection={
                                [
                                    // <div className="controls-container">
                                        RHAP_UI.MAIN_CONTROLS,
                                        // RHAP_UI.ADDITIONAL_CONTROLS
                                    // </div>
                                ]
                            }
                            customProgressBarSection={
                                [
                                    RHAP_UI.CURRENT_TIME,
                                    RHAP_UI.PROGRESS_BAR,
                                    RHAP_UI.DURATION,
                                    RHAP_UI.VOLUME,
                                ]
                            }
                            customVolumeSection={[]}
                            // onPlay={handlePlay}
                            // onPause={handlePause}
                            onClickNext={handleNextSkip}
                            onClickPrevious={handlePrevSkip}
                        />
                    }
                </div>
            </div>
        )
    )

}


export default PlayBar;