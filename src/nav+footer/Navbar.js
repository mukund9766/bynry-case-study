// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../nav+footer/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Profile Viewer</Link>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/">Profiles</Link>
        </li>
        <li className="nav-item">
          <Link to="/admin">Admin</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;