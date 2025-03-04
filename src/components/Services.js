// src/components/Services.js
import React from 'react';
import ServiceCard from './ServiceCard';
import '../styles/Services.css';

// Import images
import lightningImg from '../assets/lightning.png';
import groundingImg from '../assets/grounding-system.png';
import surveillanceImg from '../assets/surveillance-camera.png';
import buildingElecImg from '../assets/building-electricity.png';
import industrialElecImg from '../assets/industrial-electricity.png';

const Services = () => {
  const serviceData = [
    {
      id: 1,
      image: lightningImg,
      title: 'Protection contre la foudre (Paratonnerre)',
      description: 'Étude et installation de systèmes de protection contre la foudre pour sécuriser vos bâtiments contre les impacts électriques dangereux.'
    },
    {
      id: 2,
      image: groundingImg,
      title: 'Systèmes de mise à terre',
      description: 'Conception et mise en place de solutions de mise à terre pour garantir la dissipation efficace des courants électriques et assurer la sécurité des installations.'
    },
    {
      id: 3,
      image: surveillanceImg,
      title: 'Installation de caméras de surveillance',
      description: 'Mise en place de systèmes de vidéosurveillance pour une sécurité renforcée des locaux professionnels et résidentiels.'
    },
    {
      id: 4,
      image: buildingElecImg,
      title: 'Électricité bâtiment',
      description: 'Réalisation de travaux électriques pour bâtiments, incluant l\'installation d\'interphones, d\'éclairages et de systèmes de distribution électrique.'
    },
    {
      id: 5,
      image: industrialElecImg,
      title: 'Électricité industrielle',
      description: 'Installation et maintenance de réseaux électriques industriels, assurant un fonctionnement optimal et sécurisé pour les infrastructures professionnelles.'
    }
  ];

  return (
    <section className="services-section" id="services">
      <h2 id="services-title">NOS SERVICES</h2>
      <div className="services-container">
        <div className="services-row">
          {serviceData.slice(0, 3).map(service => (
            <ServiceCard 
              key={service.id}
              image={service.image}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        <div className="services-row">
          {serviceData.slice(3, 5).map(service => (
            <ServiceCard 
              key={service.id}
              image={service.image}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;