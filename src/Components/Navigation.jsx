import React, { useState } from 'react';


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">MyStore</a>
        </div>
        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className="navbar-toggle-icon"></span>
        </div>
      </div>
    </nav>
  );
}
