// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-brand">
          <div className="navbar-logo">
            <svg className="navbar-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
            </svg>
          </div>
          <div className="navbar-title">
            <h1>TAFAT ELECTRIQUE</h1>
          </div>
        </div>
        
        <nav className="navbar-nav">
          <ul className="navbar-menu">
            <li><a href="#hero-page" className="navbar-link" >Accueil</a></li>
            <li><a href="#apropos" className="navbar-link">À Propos</a></li>
            <li><a href="#services" className="navbar-link">Services</a></li>
            <li><a href="#realisations" className="navbar-link">Réalisations</a></li>
            <li><a href="#partenaires" className="navbar-link">Partenaires</a></li>
            <li><a href="#footer" className="navbar-link">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;