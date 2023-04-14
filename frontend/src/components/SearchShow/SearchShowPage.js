import { useSelector } from 'react-redux';
import { fetchSearchResults } from "../../store/search";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
const Search = () => {
    // this component takes all of our search results and displays them;
    const dispatch = useDispatch();
    const history = useHistory();
    // debugger;
    useEffect(() => {
        // this prefills our state bc when we refresh we have nothing in our state
        const query = history.location.search.split("=")[1];
        dispatch(fetchSearchResults(query))
    }, []);
    //make sure to make whatever we named it inside of the reducer in line 15
    const search = useSelector((state) => state.search);
    return (
        <>
            {Object.values(search).map((ele) => {
                return <div>{ele.title}</div>
            })}
        </>
    );
}
export default Search;