import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchSearchResults } from "../../store/search";
import './Searchbar.css';

const SearchBar = ()  => {
    const dispatch = useDispatch();
    const history = useHistory();
    //handleSearch

    //we want to have a local state because as the user is typing in handleSearch,
    // we will set whatever that user is typing in the useState
    // we wnat to have more control in our query string
    // if the user types nothing, we dont want to redirect (this is in handleSearchSubmit)
    const [searchText, setSearchText] = useState("");
    // const [searchParams, setSearchParams] = useSearchParams();

    async function handleSearch(e) {
        e.preventDefault();
        //this grabs what the user typed in the search bar
        const query = e.target.value;
        //setSearchText is async function and we dont want it to break if the user is typing fast
        
        
        await setSearchText(query);
        //we are constantly dispatching fetch requests 
        dispatch(fetchSearchResults(query));
        // history.push(`/search?tracks=${searchText}`);
        

    }

    function handleSearchSubmit(e) {
        e.preventDefault();
        if (searchText.length > 0) {
            //this redirects it to that path
            history.push(`/search?tracks=${searchText}`);
        }
        
    }

    
    // let search = document.getElementById("search-bar-input-field");
    // search.addEventListener("keypress", function (event) {
    //     if (event.key === "Enter") {
    //         event.preventDefault();
    //         document.getElementById("search-bar-button").click();
    //     }
    // });
    


    return (
        <> 
            <div className="search-bar-container">
                <input className="search-bar-input-field" 
                    onChange={handleSearch}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") 
                        handleSearchSubmit(e)
                    }}
                    type="text" placeholder="What do you want to listen to?"
                    
                />
                <div className="search-bar-icon-holder">
                    <i className="fa-solid fa-magnifying-glass search-bar-icon" style={{color: '#000000'}}></i>
                </div>
                <button className="search-bar-button" onClick={handleSearchSubmit}>search</button>
            </div>
        </>
    )

    
}

export default SearchBar;