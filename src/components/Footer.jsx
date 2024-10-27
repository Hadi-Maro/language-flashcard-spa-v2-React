// Footer.jsx
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <p>
            © {new Date().getFullYear()} Hadi Marousi
            <br/> This web application was developed as a project for a Full Stack Web Development course. All rights reserved.
        </p>
    </footer>
  );
};

export default Footer;
