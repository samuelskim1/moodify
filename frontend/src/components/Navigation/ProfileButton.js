import React, { useState, useEffect} from "react";
import { useDispatch} from 'react-redux';
import * as sessionActions from '../../store/session'
import './ProfileButton.css'


function ProfileButton({user}) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    }

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener('click', closeMenu);
    }, [showMenu]);

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };


    //line 44 checks first if showMenu is truthy:
    //if it is, we run the code after the &&
    //if it isnt, we dont run it
    return (
        <>
            <div className="profile-button-section">
                <button onClick={openMenu} className="profile-button">
                    <i className="fa-regular fa-user"></i>
                    <p>{user.username}</p>
                </button>
                
                {showMenu && (
                    <div className="profile-dropdown">
                        <ul className="dropdown-content">
                            <li>{user.username}</li>
                            <li>{user.email}</li>
                            <li>
                                <button className="dropdown-logout"onClick={logout}>Log Out</button>
                            </li>
                        </ul>
                    </div>

                )
                    
                }
            </div>
        </>
    )

}



export default ProfileButton