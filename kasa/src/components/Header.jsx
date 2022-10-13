import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/LOGO.svg';
import '../App.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='header-logo'>
            <img src={logo} alt="logo kasa" className='header-logo'/>
            </div>
            <div >
                <ul className='header-nav'>
            <NavLink className={({ isActive }) => (isActive ? 'nav-active' : "")} to="/Home">
                <li style={{ listStyle: 'none' }}>Accueil</li>
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'nav-active' : "")} to="/APropos">
                <li className='header-li' style={{ listStyle: 'none' }}>A propos</li>
            </NavLink>
            </ul>
            </div>
        </div>
    );
};

export default Header;