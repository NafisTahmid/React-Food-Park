import React from 'react';
import logo from '../../Images/Logo.png'
import './Navbar.css'
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/"></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">

            <ul className="navbar-nav ms-auto text-center">

                <li className="nav-item">
                    <a className="nav-link" href="/">Home</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="/">Foods</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="/">Profile</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="/">Dashboard</a>
                </li>

            </ul>

          </div>
        </div>
      </nav>
    );
};

export default Navbar;