import React from 'react';
import { Link, NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark navcol">
      <div className="container">
        <Link className="navbar-brand navcol" href="/">
          Vaccine Distribution Management
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/home">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/about">
                About
              </NavLink>
            </li>
          </ul>
        </div>

        
      </div>
    </nav>
    );
};


export default Navbar;