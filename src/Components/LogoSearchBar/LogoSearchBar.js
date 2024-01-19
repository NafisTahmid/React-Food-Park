import React from 'react';
import './LogoSearchBar.css'
import Logo from '../../Images/Logo.png'
const LogoSearchBar = () => {
    return (
        <div className="container-fluid">
            <div className="d-flex justify-content-center align-items-center">
                <img src={Logo} className="img-fluid" width="200" alt="" />
                <input type="text" className="search-bar" placeholder='Search Your Favorite Food'/>
                <button>Search</button>
            </div>
          
        </div>
    );
};

export default LogoSearchBar;