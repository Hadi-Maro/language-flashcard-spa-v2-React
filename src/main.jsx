import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext.jsx'; // Updated import
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

createRoot(document.getElementById('root')).render(
  <Router>
    <ThemeProvider> {/* Wrap the application in ThemeProvider */}
      <App />
    </ThemeProvider>
  </Router>
);
