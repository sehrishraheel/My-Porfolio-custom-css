import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div id="hero" className="hero-container">
      <Navbar />
      <div className="hero-grid">
        <div className="hero-image"></div>
        <div className="hero-text">
          <div>
            <p className="flip-right">I&apos;m</p>
            <p className="flip-right">Sehrish</p>
            <p className="flip-right">Muneer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
