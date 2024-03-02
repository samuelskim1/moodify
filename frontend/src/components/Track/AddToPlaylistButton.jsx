import { useSelector, connect} from 'react-redux';
import { useState, useEffect} from "react";
import Modal from '../Modal/Modal';
import PlaylistsDropdownIndex from '../PlaylistDropdown/PlaylistsDropdownIndex';
import { openModal, closeModal } from '../../store/modal';
function AddToPlaylistButton({modal, openModal, closeModal, track}) {
    // const dispatch = useDispatch();
    const [showPlaylistsMenu, setShowPlaylistsMenu] = useState(false);
    const currentUser = useSelector(state => state.session.user);
    console.log(modal);

    const loggedIn = (e) => {
        e.preventDefault();
        if (currentUser) {
            console.log("yeah the user's logged in")
            openPlaylistMenu(e);
        } else {
            console.log("nope the user is not logged in")
            openModal();
        }
    }

    // const handleCloseModal = () => {
    //     // e.stopPropagation();
    //     closeModal();
    // };


    const openPlaylistMenu = (e) => {
        e.preventDefault();
        if (showPlaylistsMenu) return;
        //if the playlist menu is open, dont do anything;
        setShowPlaylistsMenu(true);
        //if the playlist menu isn't open, change the useState to true to trigger it to open
    }
    //useEffect runs after the first render and every rerender( specified in dependancy array)
    useEffect(() => {
        if (!showPlaylistsMenu) return;
        //this line is there to skip lines 22-31 if the menu isn't open;
        //same concept as line 8 except it's the opposite;
        //if the playlist menu is open, don't do anything;

        const closePlaylistMenu = () => {
            setShowPlaylistsMenu(false);
            //sane concept as line 11 except it's the opposite.
            //if playlist menu is open, change the useState to false to trigger it to close;
        }

        document.addEventListener('click', closePlaylistMenu);
        //whenever you click on the document/page, trigger closePlaylistMenu

        return () => document.removeEventListener('click', closePlaylistMenu);
        //cleanup function: for when the component unmounts/dismounts 
        //need a cleanup function bc we added an event listener to the entire doc in line 28.
        //best practice to cleanup after ourselves 
    }, [showPlaylistsMenu]);


    return (
        <>
            <div className="add-to-playlist-area">
                <i onClick={(e) => loggedIn(e)} className="fa-solid fa-circle-plus playlist-menu-button"></i>
                {/* {modal && <Modal closeModal={handleCloseModal} />} */}
            </div>

            {showPlaylistsMenu && (
                <PlaylistsDropdownIndex track={track}/>
            )
            }
        </>

    )
    
}

const mapStateToProps = state => {
    return {
        modal: state.modal
    };
};

const mapDispatchToProps = dispatch => {
    console.log("we're mapping dispatch to props!");
    return {
        openModal: () => dispatch(openModal('login/signup')),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddToPlaylistButton);