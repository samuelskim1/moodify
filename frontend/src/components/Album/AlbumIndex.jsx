import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllAlbums } from "../../store/album";
import Navigation from "../Navigation";
import SideBar from "../SideBar";
import AlbumIndexItem from "./AlbumIndexItem";
import './AlbumIndex.css';
import PlayBar from "../PlayBar/PlayBar";

function AlbumIndex() {
    const dispatch = useDispatch();
    const albums = useSelector(state => Object.values(state.albums));
   

    //do the fetch inside of the outercomponent(maybe in our splashpage, albumsshowpage, searchpage)
    //or have a conditional inside 
    useEffect(() => {
        dispatch(fetchAllAlbums())
    }, [dispatch]);

    //waits for data to be in the frontend state before rendering page 
    //react will keep on rerendering component if it doesn't return an html element
    //That's how this works
    if (!albums) {
        return null;
    }

    return (
        
        <div className="album-index-flex-container">
            <SideBar />
            <div className="nav-main-container">
                <Navigation />
                <div className="album-index-container">
                    <h2 className="album-index-title">Albums</h2>
                    <div className='album-item-index-flexbox'>
                        {albums.map(album => (
                            <AlbumIndexItem key={album.id} album={album} />
                        ))}
                    </div>
                </div>
            </div>
            {/* <PlayBar/> */}
        </div>

    )
}

export default AlbumIndex