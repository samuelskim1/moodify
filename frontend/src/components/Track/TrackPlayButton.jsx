import { useDispatch} from 'react-redux';
import { setCurrentSong } from '../../store/audio';
import './TrackPlayButton.css'

function TrackPlayButton({track}) {
    const dispatch = useDispatch();
    // const currentSong = useSelector(state => state.audio["currentSong"]);

    const connectToPlaybar = () => {
        dispatch(setCurrentSong(track));
    }


    //or
    // const track = useSelector(state => state.track)
    // const [song] = useState(new Audio(track.songUrl))
    // const [playing, setPlaying] = useState(false);
    // const toggle = () => setPlaying(!playing);

    // useEffect(() => {
    //     // dispatch(playSong(audio))
    //     if (playing) {
    //         song.play()
    //     } else {
    //         song.pause();
    //     }    
    // }, [playing]);
    
    // useEffect(() => {
    //     previousAudioValue.current = song
    //     dispatch(updateSong(audio, previousAudioValue.current))
    // }, [track])

    

    // const playPause = () => {
    //     if (isPlaying) {
    //         song.pause();
               
    //     } else {
    //         song.play();
            
    //     }
    //     setIsPlaying(!isPlaying);
    // }


    return (
        <div className="play-button-container" onClick={connectToPlaybar}>
            <i className="fa-solid fa-circle-play fa-2xl" style={{ color: '#2dc819' }}>
                <div className="play-button-size-setter"></div>
            </i>
        </div>
    )
}

export default TrackPlayButton;