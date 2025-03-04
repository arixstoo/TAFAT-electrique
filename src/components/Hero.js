// src/components/Hero.js
import React from 'react';
import '../styles/Hero.css';
import FeatureItem from './FeatureItem';

const Hero = () => {
  const features = [
    {
      id: 1,
      icon: 'experience',
      title: '+5 ans',
      description: "d'expérience dans l'électricité et la protection contre la foudre."
    },
    {
      id: 2,
      icon: 'solutions',
      title: '',
      description: 'Solutions sur mesure pour bâtiments, industries et infrastructures.'
    },
    {
      id: 3,
      icon: 'partner',
      title: '',
      description: 'Partenaire de grandes entreprises comme AADL et ABB.'
    },
    {
      id: 4,
      icon: 'security',
      title: '',
      description: 'Respect des normes de sécurité et qualité rigoureuse.'
    },
  ];

  return (
    <section className="hero-section" id="hero-page">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">TAFAT ÉLECTRIQUE</h1>
          <h2 className="hero-subtitle">
            Sécuriser, éclairer, protéger – <br />
            <span className="highlight">votre sécurité pour demain</span>
          </h2>
          <p className="hero-description">
            N°1 en Algérie dans la protection contre la foudre et les installations électriques sécurisées !
          </p>
          <a className="contact-button" href="#footer" >Contactez-nous</a>
        </div>
        
        <div className="hero-features">
          {features.map(feature => (
            <FeatureItem 
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;