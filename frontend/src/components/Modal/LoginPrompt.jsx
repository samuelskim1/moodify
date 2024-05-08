import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal } from '../../store/modal';

function PlaylistCreationLoginPrompt() {


    <div className="modal-content">
        <div className="modal-login-section">
            <h2 className="">You can't use this feature unless you're logged in!</h2>
            <NavLink to="/login">
                <button onClick={closeModal} className='modal-login-button'>Log In</button>
            </NavLink>
        </div>
        <div className="modal-signup-section">
            <p>Don't have an account? Create a free Moodify account today!</p>
            <NavLink to="/signup">
                <button onClick={closeModal} className='modal-signup-button'>Sign up</button>
            </NavLink>
        </div>
    </div>

//     const mapDispatchToProps = dispatch => {
//         return {

//                 <div>
//                     <h2>Create a Playlist</h2>
//                     <p>Please Log in to create/edit playlists.</p>
//                     <button onClick={() => dispatch(openModal('login-signup'))}>
//                         Log In
//                     </button>
//                     <p>Don't have a Moodify Account? Sign up today!</p>
//                     <button onClick={() => dispatch(openModal('login-signup'))}>
//                         Sign up
//                     </button>
//                 </div>
            
//         }


//     }
    
}

export default LoginAndSignupPrompt;
