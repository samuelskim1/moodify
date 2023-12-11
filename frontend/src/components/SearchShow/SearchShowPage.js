import { useSelector } from 'react-redux';
import { fetchSearchResults } from "../../store/search";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import SideBar from '../SideBar';
import Navigation from '../Navigation';
import TrackIndexItem from "../Track/TrackIndexItem";
import TrackShow from '../Track/TrackShow';
import './SearchShowPage.css';
const Search = () => {
    // this component takes all of our search results and displays them;
    const dispatch = useDispatch();
    const history = useHistory();
    const searchedTracks = useSelector(state => Object.values(state.search));
    const searchPhrase = history.location.search.split("=")[1]
    const filteredSearchPhrase = searchPhrase.split("%20").join(" ");
    useEffect(() => {
        // this prefills our state bc when we refresh we have nothing in our state
        const query = history.location.search.split("=")[1];
        dispatch(fetchSearchResults(query.toLowerCase()))
        //toLowerCase is used because the backend checks for whether or not whatever is in the query is = to the lowercase version of any track
    }, []);
    //make sure to make whatever we named it inside of the reducer in line 15
    // const search = useSelector((state) => state.search);

    let searchResults;

    if (Object.keys(searchedTracks).length > 0) {
        searchResults = (
            <>
                <h1 className="search-results">Search Results</h1>
                <div className="search-show-flexbox-container">
                    <div className="search-show-tracks">
                        {searchedTracks.map(track => (
                            <TrackIndexItem key={track.id} track={track} />
                        ))}
                    </div>
                </div>
            </>
        );
    } else {
        searchResults = (
            <>
                <div className="no-search-results">
                    <h1 className="no-results-found">No results found for "{filteredSearchPhrase}"</h1>
                    <h1 className="correct-input">Please make sure that your words are spelled correctly, or use fewer or different keywords</h1>
                </div>
            </>

        )
    }


    return (
        <div className="search-show-flex-container">
            <SideBar/>
            <div className="nav-main-container">
                <Navigation/>
                <div className="search-show-container">
                    {searchResults}
                {/* {Object.values(search).map((ele) => {
                    return <div>{ele.title}</div>
                })} */}
                </div>
            </div>

        </div>
        
    );
}
export default Search;