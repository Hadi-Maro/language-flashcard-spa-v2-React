import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = ({ toggleTheme, currentTheme }) => {
  return (
    <nav className="navbar">
      {/* Left-aligned theme toggle button */}
      <div>
        <button className="navButton" onClick={toggleTheme}>
          {currentTheme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
      </div>
      
      {/* Centered navigation links */}
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/create">Create Flashcards</Link></li>
        <li><Link to="/study">Study Flashcards</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
