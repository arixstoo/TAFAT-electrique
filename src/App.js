// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import APropos from './components/APropos';
import ProtectionFoudre from './components/ProtectionFoudre';
import Services from './components/Services';
import Realisations from './components/Realisations';
import Partenaires from './components/Partenaires';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <APropos />
      <ProtectionFoudre />
      <Services />
      <Realisations />
      <Partenaires />
      <Footer />
    </div>
  );
}

export default App;