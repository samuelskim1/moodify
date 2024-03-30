import React from 'react';
import { closeModal } from '../../store/modal';
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";
import './Modal.css';

function Modal({ modal, closeModal }) {
    if (!modal) {
        console.log("modal is null");
        return null;
    }
    console.log(closeModal);

    // let component;
    // switch (modal) {
    //     case 'login':
    //         component = <LoginAndSignupContainer />;
    //         break;
    //     case 'signup':
    //         component = <DeletePlaylist/>;
    //         break;
    //     default:
    //         return null;
    // }



    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                <i className="fa-regular fa-circle-xmark" onClick={closeModal}></i>
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
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);