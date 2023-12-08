import React from 'react';
import { Link } from 'react-router-dom'; 
import './NavBar.css';
import LogoImage from '../logoAsso.jpg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={LogoImage} alt="Logo" className="logo" />
      </div>
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/questions">Questions</Link></li>
        <li><Link to="/association">Association</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

