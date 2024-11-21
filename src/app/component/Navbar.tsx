import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="navbar-logo">Sehrish</div>
        <ul className={`navbar-menu ${menuOpen ? 'show' : ''}`}>
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <AiOutlineMenu 
          className="menu-icon" 
          size={30} 
          onClick={() => setMenuOpen(!menuOpen)} 
        />
      </div>
    </div>
  );
};

export default Navbar;
