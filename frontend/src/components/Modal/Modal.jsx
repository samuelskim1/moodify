import React from 'react';
import { closeModal } from '../../store/modal';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import SignupPrompt from './SignupPrompt';
import LoginPrompt from './LoginPrompt';

function Modal({ modal, closeModal }) {
    const sessionUser = useSelector(state => state.session.user);


    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'login-signup':
            component = <LoginPrompt />;
            break;
        // case 'signup':
        //     component = <SignupPrompt />;
        //     break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
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