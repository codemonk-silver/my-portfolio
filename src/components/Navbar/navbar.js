import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header id="header" className="header-container">
        <h1 className="logo">Codemonkrh</h1>
        
        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <a href="#header" onClick={toggleMenu}>Home</a>
            <a href="#about" onClick={toggleMenu}>About</a>
            <a href="#experience" onClick={toggleMenu}>Experience</a>
            <a href="#projects" onClick={toggleMenu}>Featured Project</a>
            <a href="#contact" onClick={toggleMenu}>Contact</a>
        </nav>

        <button 
          className={`hamburger-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </button>
    </header>
  )
}

export default Navbar