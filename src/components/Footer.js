// src/components/Footer.js
import React from 'react';
import '../styles/Footer.css';
import FacebookIcon from '../assets/facebook.png';
import InstagramIcon from '../assets/instagram.png';

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-logo">
            <svg className="lightning-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
            </svg>
            <h2 className="footer-title">TAFAT ELECTRIQUE</h2>
          </div>
          <p className="footer-slogan">Sécuriser, éclairer, protéger – votre sécurité pour demain</p>
          
          <div className="social-section">
            <h3 className="social-title">Suivez-nous</h3>
            <div className="social-icons">
                <a 
                    href="https://www.facebook.com/your-page" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-icon facebook"
                >
                    <img 
                        src={FacebookIcon}
                        alt="Facebook" 
                        className="social-icon-image" 
                    />
                </a>
                <a 
                    href="https://www.instagram.com/your-page" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-icon instagram"
                >
                    <img 
                        src={InstagramIcon} 
                        alt="Instagram" 
                        className="social-icon-image" 
                    />
                </a>
            </div>
          </div>
        </div>

        <div className="footer-contact">
          <h3 className="contact-title">Contactez-Nous</h3>
          <div className="contact-info">
            <div className="contact-item">
              <svg className="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <a href="mailto:mouhousjuba@gmail.com" className="contact-text">mouhousjuba@gmail.com</a>
            </div>
            
            <div className="contact-item">
              <svg className="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span className="contact-text">+213 541 50 84 73</span>
            </div>
            
            <div className="contact-item">
              <svg className="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span className="contact-text">Village Akhenak, Seddouk, Béjaia</span>
            </div>
          </div>
        </div>

        <div className="footer-navigation">
          <nav className="footer-nav">
            <ul className="footer-menu">
              <li><a href="#hero-page" className="footer-link">Accueil</a></li>
              <li><a href="#apropos" className="footer-link">À Propos</a></li>
              <li><a href="#services" className="footer-link">Services</a></li>
              <li><a href="#realisations" className="footer-link">Réalisations</a></li>
              <li><a href="#partenaires" className="footer-link">Partenaires</a></li>
              <li><a className="footer-link">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">Copyright © 2025 TAFAT ELECTRIQUE</p>
      </div>
    </footer>
  );
};

export default Footer;