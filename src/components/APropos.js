import React, { useState } from 'react';
import '../styles/APropos.css';

const APropos = () => {
  // État pour suivre l'ouverture/fermeture de chaque section
  const [openSections, setOpenSections] = useState({
    aboutTafat: true,
    proximity: false,
    expertise: false,
    quality: false,
    strategicChoice: false
  });

  // Fonction pour basculer l'état d'une section
  const toggleSection = (section) => {
    setOpenSections({
      ...openSections,
      [section]: !openSections[section]
    });
  };

  return (
    <div className="a-propos-container" id="apropos">
      <h1>À PROPOS DE NOUS</h1>
      
      <div className="accordion-section">
        <div 
          className={`accordion-header ${openSections.aboutTafat ? 'active' : ''}`}
          onClick={() => toggleSection('aboutTafat')}
        >
          <h2>À Propos de TAFAT ÉLECTRIQUE</h2>
          <div className="toggle-btn"></div>
        </div>
        <div className={`accordion-content ${openSections.aboutTafat ? 'active' : ''}`}>
          <div className="content-inner">
            <p>Société fondée en <strong>2019</strong>, <span className="highlight">TAFAT ELECTRIQUE Paratonnerres</span> a eu le coup de foudre pour la région de <strong>Béjaïa</strong>. Depuis <strong>5 ans</strong>, notre société rayonne grâce à son savoir-faire <strong>mondialement reconnu</strong> dans le domaine de la protection contre <strong>la foudre</strong>.</p>
          </div>
        </div>
      </div>
      
      <div className="accordion-section">
        <div 
          className={`accordion-header ${openSections.proximity ? 'active' : ''}`}
          onClick={() => toggleSection('proximity')}
        >
          <h2>Une proximité avec nos clients</h2>
          <div className="toggle-btn"></div>
        </div>
        <div className={`accordion-content ${openSections.proximity ? 'active' : ''}`}>
          <div className="content-inner">
            <p>Entreprise à taille humaine, nous sommes proches de <strong>nos clients</strong> et défendons <strong>des valeurs d'éthique et de responsabilité sociétale</strong>. Notre <strong>mission</strong> est claire : <span className="highlight">vous protéger au mieux des caprices de la foudre</span>.</p>
          </div>
        </div>
      </div>
      
      <div className="accordion-section">
        <div 
          className={`accordion-header ${openSections.expertise ? 'active' : ''}`}
          onClick={() => toggleSection('expertise')}
        >
          <h2>Une expertise reconnue</h2>
          <div className="toggle-btn"></div>
        </div>
        <div className={`accordion-content ${openSections.expertise ? 'active' : ''}`}>
          <div className="content-inner">
            <p>Le savoir-faire complet de <strong>nos experts</strong> fait de notre société une référence dans le secteur. En tant qu'installateur, nous nous engageons à toujours <strong>développer et produire</strong> <span className="highlight">des solutions</span> alliant <strong>innovation et fiabilité</strong>.</p>
          </div>
        </div>
      </div>
      
      <div className="accordion-section">
        <div 
          className={`accordion-header ${openSections.quality ? 'active' : ''}`}
          onClick={() => toggleSection('quality')}
        >
          <h2>Un gage de qualité et de fiabilité</h2>
          <div className="toggle-btn"></div>
        </div>
        <div className={`accordion-content ${openSections.quality ? 'active' : ''}`}>
          <div className="content-inner">
            <p>Tous nos produits sont soumis à des <strong>contrôles qualité rigoureux</strong> et sont testés dans notre <strong>laboratoire interne</strong> et auprès de partenaires d'excellence. Cela garantit une <strong>qualité et une traçabilité inégalées</strong>.</p>
          </div>
        </div>
      </div>
      
      <div className="accordion-section">
        <div 
          className={`accordion-header ${openSections.strategicChoice ? 'active' : ''}`}
          onClick={() => toggleSection('strategicChoice')}
        >
          <h2>Un choix stratégique de produits et de services</h2>
          <div className="toggle-btn"></div>
        </div>
        <div className={`accordion-content ${openSections.strategicChoice ? 'active' : ''}`}>
          <div className="content-inner">
            <p>Notre exigence en matière de <strong>qualité</strong> et de <strong>perfection</strong> nous a conduits à sélectionner nos propres produits. Grâce aux retours terrains de nos installateurs, cette activité d'installation est devenue une <span className="highlight">spécialité</span> qui nous a permis de <strong>protéger des sites industriels et des bâtiments comme AADL</strong>.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default APropos;