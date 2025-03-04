import React, { useState } from 'react';
import '../styles/ProtectionFoudre.css';

const ProtectionFoudre = () => {
  // État pour suivre l'ouverture/fermeture de chaque section
  const [openSections, setOpenSections] = useState({
    arf: true,
    etf: false
  });
  
  // Fonction pour basculer l'état d'une section
  const toggleSection = (section) => {
    setOpenSections({
      ...openSections,
      [section]: !openSections[section]
    });
  };

  return (
    <div className="a-propos-container">
      <h1>PROTECTION CONTRE LA FOUDRE</h1>
      
      <div className="accordion-section">
        <div 
          className={`accordion-header ${openSections.arf ? 'active' : ''}`}
          onClick={() => toggleSection('arf')}
        >
          <h2>L'Analyse du Risque Foudre (ARF)</h2>
          <div className="toggle-btn"></div>
        </div>
        <div className={`accordion-content ${openSections.arf ? 'active' : ''}`}>
          <div className="content-inner">
                <p><span className="highlight">L'Analyse du Risque Foudre (ARF)</span> permet d'évaluer les dangers liés à <strong>la foudre</strong> pour assurer la sécurité des personnes et des biens. Basée sur les normes <strong>NF EN 62305-2</strong> et <strong>NF C 17-102</strong>, elle détermine la nécessité et le niveau de <strong>protection</strong> requis pour un site. En France, les <strong>ICPE</strong> soumises à l'arrêté du 4 octobre 2010 doivent obligatoirement réaliser une <strong>ARF</strong> par un organisme qualifié comme <strong>QUALIFOUDRE</strong>. Nos <strong>spécialistes certifiés QUALIFOUDRE</strong> effectuent ces analyses selon les normes en vigueur et proposent également des analyses simplifiées suivant le guide <strong>FDC 17-108</strong>.</p>
          </div>
        </div>
      </div>

      <div className="accordion-section">
        <div 
          className={`accordion-header ${openSections.etf ? 'active' : ''}`}
          onClick={() => toggleSection('etf')}
        >
          <h2>L'Étude Technique Foudre (ETF)</h2>
          <div className="toggle-btn"></div>
        </div>
        <div className={`accordion-content ${openSections.etf ? 'active' : ''}`}>
          <div className="content-inner">
                <p><span className="highlight">L'Étude Technique Foudre (ETF)</span> définit les solutions techniques pour installer un système de <strong>protection contre la foudre</strong>, en s'appuyant sur les résultats de <strong>l'Analyse du Risque Foudre (ARF)</strong> et les normes <strong>NF C 17-102</strong> et <strong>NF EN 62305</strong>. Elle vise à garantir le niveau de protection requis. En France, les <strong>ICPE</strong> soumises à l'arrêté du 4 octobre 2010 doivent obligatoirement faire réaliser une <strong>ETF</strong> par un organisme qualifié comme <strong>QUALIFOUDRE</strong>. Nos <strong>spécialistes certifiés QUALIFOUDRE</strong> (niveaux 2 et 3) réalisent ces études, ainsi que des analyses simplifiées si <strong>nécessaire</strong>.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProtectionFoudre;