import React from 'react';
import { Link } from 'react-router-dom';

const navStyle = {
  padding: '1rem',
  backgroundColor: '#f0f0f0',
  borderBottom: '1px solid #ccc',
  display: 'flex',
  justifyContent: 'space-around',
  fontSize: '1.1rem',
};

const linkStyle = {
  textDecoration: 'none',
  color: '#333',
};

function NavigationBar() {
  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>🏠 Home</Link>
      <Link to="/profile" style={linkStyle}>👤 Profile</Link>
      <Link to="/resume" style={linkStyle}>📄 Resume</Link>
      <Link to="/projects" style={linkStyle}>💻 Projects</Link>
      <Link to="/contact" style={linkStyle}>✉️ Contact</Link>
    </nav>
  );
}

export default NavigationBar;
