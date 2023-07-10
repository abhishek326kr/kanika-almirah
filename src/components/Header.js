import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'; // Import the CSS file for the Header component
import logo from './Images/logo.jpeg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <img src={logo} alt="Company Logo" />
        </div>
        <div className={`mobile-menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="hamburger"></div>
        </div>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li>
            <NavLink exact to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" activeClassName="active">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
