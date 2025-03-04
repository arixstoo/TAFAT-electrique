import React, { useState, useEffect } from 'react';
import '../styles/Realisations.css';
import photo1 from '../assets/Realisations/IMG-20250223-WA0009.jpg';
import photo2 from '../assets/Realisations/IMG-20250223-WA0004.jpg';
import photo3 from '../assets/Realisations/IMG-20250223-WA0005.jpg';
import photo4 from '../assets/Realisations/IMG-20250223-WA0006.jpg';
import photo5 from '../assets/Realisations/IMG-20250223-WA0012.jpg';
import photo6 from '../assets/Realisations/IMG-20250223-WA0016.jpg';
import photo7 from '../assets/Realisations/IMG-20250223-WA0014.jpg';
import photo8 from '../assets/Realisations/IMG-20250223-WA0008.jpg';
import photo9 from '../assets/Realisations/IMG-20250223-WA0002.jpg';

// Component for Realisations Section with Slider
export const Realisations = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
    photo8,
    photo9
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  // Function to change slide
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="section-container" id="realisations">
      <h1>NOS REALISATIONS</h1>
      
      <div className="slider-container">
        <div className="slider-wrapper" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={index} className="slide">
              <img src={slide} alt={`Réalisation ${index + 1}`} />
            </div>
          ))}
        </div>
        
        <div className="slider-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${currentSlide === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Realisations;

// bqaw tsawer tae sah