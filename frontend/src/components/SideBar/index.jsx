import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './SideBar.css'



function SideBar() {
    const location = useLocation();
    const active = () => {
        if (location.pathname === '/') {
            return 'active'
        } else {
            return 'not-active'
        }
    }

    return (
        <div className="sidebar-container">
            <div className="banner">
                <img src={require('../../assets/spotify-48.png')} alt=''></img>
                <h2>Moodify</h2>
            </div>
            <ul className='sidebar-nav'>
                <NavLink to='/' className='sidebar-home'>
                    <li>
                        <i className="fa-solid fa-house" style={{ color: '#ffffff' }}></i>
                        <h3 className={`${active}`}>Home</h3>
                    </li>
                </NavLink>
            </ul>
        </div>
    )
}

export default SideBar;