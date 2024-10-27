import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = ({ toggleTheme, currentTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <button className="navButton" onClick={toggleTheme}>
        {currentTheme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
      <div className="mobile-menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
      <ul className={menuOpen ? "show" : ""}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/create">Create Flashcards</Link></li>
        <li><Link to="/study">Study Flashcards</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
