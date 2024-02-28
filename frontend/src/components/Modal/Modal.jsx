import React from 'react';
import { closeModal } from '../../store/modal';
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";
import './Modal.css';

function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }


    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                <div>
                    <h2>You can't use this feature unless you're logged in!</h2>
                    <NavLink to="/login">
                        <button className='modal-login-button'>Log In</button>
                    </NavLink>

                    <p>Don't have an account? Create a free Moodify account today!</p>
                    <NavLink to="/signup">
                        <button className='modal-signup-button'>Sign up</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(null, mapDispatchToProps)(Modal);