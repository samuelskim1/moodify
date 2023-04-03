import React, { useState, useEffect} from "react"
import { useDispatch} from 'react-redux';
import * as sessionActions from '../../store/session'


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


    //line 30 checks first if showMenu is truthy:
    //if it is, we run the code after the &&
    //if it isnt, we dont run it
    return (
        <>
            <button onClick={openMenu}>
                <i className="fa-regular fa-user"></i>
            </button>
            
            {showMenu && (
                <ul className="profile-dropdown">
                    <li>{user.username}</li>
                    <li>{user.email}</li>
                    <li>
                        <button onClick={logout}>Log Out</button>
                    </li>
                </ul>

            )
                
            }
        </>
    )

}



export default ProfileButton