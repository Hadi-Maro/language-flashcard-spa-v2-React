import React from 'react';
import '../styles/Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-fluid text-center">
        <p className="mb-1">
          © {new Date().getFullYear()} Hadi Marousi
        </p>
        <p>
          This web application was developed as a project for a Full Stack Web Development course. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
