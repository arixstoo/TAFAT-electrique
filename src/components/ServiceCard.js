// src/components/ServiceCard.js
import React from 'react';
import '../styles/ServiceCard.css';

const ServiceCard = ({ image, title, description }) => {
  return (
    <div className="service-card">
      <div className="service-image">
        <img src={image} alt={title} />
      </div>
      <div className="service-title">
        <h3>{title}</h3>
      </div>
      <div className="service-description">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;