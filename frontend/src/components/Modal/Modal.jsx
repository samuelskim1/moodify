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


    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                <div>
                    <h2>You can't use this feature unless you're logged in!</h2>
                    <NavLink to="/login" onClick={e => e.stopPropagation()}>
                        <button onClick={closeModal} className='modal-login-button'>Log In</button>
                    </NavLink>

                    <p>Don't have an account? Create a free Moodify account today!</p>
                    <NavLink to="/signup" onClick={e => e.stopPropagation()}>
                        <button onClick={closeModal} className='modal-signup-button'>Sign up</button>
                    // </NavLink>
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