import { useSelector } from 'react-redux';
import { fetchSearchResults } from "../../store/search";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import SideBar from '../SideBar';
import Navigation from '../Navigation';
import TrackIndexItem from "../Track/TrackIndexItem";
import TrackShow from '../Track/TrackShow';
const Search = () => {
    // this component takes all of our search results and displays them;
    const dispatch = useDispatch();
    const history = useHistory();
    const searchedTracks = useSelector(state => Object.values(state.search));
    console.log(searchedTracks);
    // debugger;
    useEffect(() => {
        // this prefills our state bc when we refresh we have nothing in our state
        const query = history.location.search.split("=")[1];
        dispatch(fetchSearchResults(query))
    }, []);
    //make sure to make whatever we named it inside of the reducer in line 15
    // const search = useSelector((state) => state.search);
    // console.log(search);
    return (
        <div className="search-show-flex-container">
            <SideBar/>
            <div className="nav-main-container">
                <Navigation/>
                <div className="search-show-container">
                    <div className="search-show-flexbox-container">
                        <div className="search-show-tracks">
                            {searchedTracks.map(track => (
                                <TrackIndexItem key={track.id} track={track} />
                            ))}
                        </div>
                    </div>
                
                {/* {Object.values(search).map((ele) => {
                    return <div>{ele.title}</div>
                })} */}
                </div>
            </div>

        </div>
        
    );
}
export default Search;