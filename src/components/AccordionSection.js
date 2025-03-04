import React from 'react';
import '../styles/AccordionSection.css';

// Composant réutilisable pour les sections d'accordéon
const AccordionSection = ({ title, content, isOpen, toggleSection }) => {
  return (
    <div className="accordion-section">
      <div 
        className={`accordion-header ${isOpen ? 'active' : ''}`}
        onClick={toggleSection}
      >
        <h2>{title}</h2>
        <div className="toggle-btn"></div>
      </div>
      <div className={`accordion-content ${isOpen ? 'active' : ''}`}>
        {content}
      </div>
    </div>
  );
};

export default AccordionSection;