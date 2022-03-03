import React from 'react';
import './Nav.css'
import logo from './../images/discogs_logo.png';

const Nav = () => {
    return (
        <div className='nav-container'>
            
            <a href="https://www.discogs.com/" target="_blank">      

                <img className='logo' src={logo}></img>
            </a>
            
        </div>
    )
}

export default Nav;