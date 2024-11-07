// Navbar.jsx

import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Form } from 'react-bootstrap';
import { ThemeContext } from '../context/ThemeContext.jsx'; // Correctly import ThemeContext




const CustomNavbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);  // Access theme and toggleTheme from ThemeContext
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar expand="lg" variant="light" fixed="top" className="shadow-sm" style={{ backgroundImage: 'linear-gradient(180deg, #801091, #c13fac)' }}>
      <Container fluid>
        <Form.Check
          type="switch"
          id="custom-switch"
          label={theme === 'light' ? 'Go Dark 🌙' : 'Brighten Up ☀️'}
          checked={theme === 'dark'}
          onChange={toggleTheme}
          style={{ color: theme === 'light' ? '#4b0082' : '#ffe66d', fontWeight: 'bold' }}
        />
        <Navbar.Toggle aria-controls="navbar-nav" onClick={() => setMenuOpen(!menuOpen)} />
        <Navbar.Collapse id="navbar-nav" className={menuOpen ? 'show' : ''}>
          <Nav className="justify-content-center w-100">
            <Nav.Link as={Link} to="/" className="fw-bold" style={{ color: 'white', fontSize: '1.2rem', margin: '0 0.5rem', padding: '0.4rem 0.8rem', borderRadius: '8px', transition: 'color 0.3s ease, background-color 0.3s ease' }}>Home</Nav.Link>
            <Nav.Link as={Link} to="/create" className="fw-bold" style={{ color: 'white', fontSize: '1.2rem', margin: '0 0.5rem', padding: '0.4rem 0.8rem', borderRadius: '8px', transition: 'color 0.3s ease, background-color 0.3s ease' }}>Create Flashcards</Nav.Link>
            <Nav.Link as={Link} to="/study" className="fw-bold" style={{ color: 'white', fontSize: '1.2rem', margin: '0 0.5rem', padding: '0.4rem 0.8rem', borderRadius: '8px', transition: 'color 0.3s ease, background-color 0.3s ease' }}>Study & Review</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
