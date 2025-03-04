import React from 'react';
import '../styles/Partenaires.css';
import AADL from '../assets/AADL_logo.png';
import ABB from '../assets/ABB_logo.png';

// Component for Partners Section
export const Partenaires = () => {
    const logos = [
        AADL,
        ABB,
        AADL,
        ABB,
        AADL,
        ABB
    ];

    return (
        <div className="partenaires-section" id="partenaires">
          <h1 className="partenaires-title">NOS PARTENAIRES</h1>
          
          <div className="partners-marquee-container">
            <div className="partners-marquee">
              {/* First set of logos */}
              <div className="partners-track">
                {logos.map((logo, index) => (
                  <div key={`logo1-${index}`} className="partner-logo">
                    <img src={logo} alt={`Partner Logo ${index + 1}`} />
                  </div>
                ))}
              </div>
              
              {/* Duplicate set of logos for seamless looping */}
              <div className="partners-track">
                {logos.map((logo, index) => (
                  <div key={`logo2-${index}`} className="partner-logo">
                    <img src={logo} alt={`Partner Logo ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
    );
};

export default Partenaires;
