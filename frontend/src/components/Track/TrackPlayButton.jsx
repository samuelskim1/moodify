import { useDispatch, useSelector} from 'react-redux';
import { setCurrentSong, setCurrentAlbum, setPrevSong, setNextSong } from '../../store/audio';
import { fetchAlbum } from '../../store/album';
import './TrackPlayButton.css'
import { useEffect } from 'react';

function TrackPlayButton({track}) {
    // console.log(track);
    const trackId = track?.id;
    const albumId = track?.albumId;
    const dispatch = useDispatch();
    const album = useSelector(state => state.albums[albumId]);
    
    //fetchAlbum action populates album slice of state with tracks of the album
    //fetch at the beginning so that we can then populate our "currentAlbum" key in audio slice of state with the tracks of the album 
    useEffect(() => {
        dispatch(fetchAlbum(albumId))
    }, [])
    
    if (!album) return null;
    if (!album?.tracks) return null;
    const albumTracks = Object.values(album?.tracks);
    
    //logic for settingPrevSong using the album slice of state

    const getPrevSong = () => {
        let previousSong;
        //at this point each song is an object with all the information of the songs in it
        albumTracks?.forEach((song, index) => {
            if ((song.id === trackId) && (index - 1 < 0)) {
                previousSong = albumTracks[albumTracks.length - 1]
            } else if ((song.id === trackId)) {
                previousSong = albumTracks[index - 1]
            }
        })
        
        return previousSong;
    }

    const getNextSong = () => {
        let nextSong;
        albumTracks?.forEach((song, index) => {
            if ((song.id === trackId) && (index + 1 > albumTracks.length - 1)) {
                nextSong = albumTracks[0];
            } else if ((song.id === trackId)) {
                nextSong = albumTracks[index + 1]
            }
        })
        
        return nextSong;
    }


    const connectToPlaybar = () => {
        dispatch(setCurrentSong(track));
        dispatch(setCurrentAlbum(album));
        dispatch(setPrevSong(getPrevSong()));
        dispatch(setNextSong(getNextSong()));
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