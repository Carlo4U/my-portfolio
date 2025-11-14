import React from "react";
import "./hero.css";

const Hero = () => {
  const handleScroll = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-section" id="hero">
      <div className="hero-content">
        <h1 className="hero-text-left">CREATIVE</h1>
        <h1 className="hero-text-right">DESIGNER</h1>

        <p className="hero-description">
          I design with purpose and create with passion. <br />
          Every piece I make blends artistry, balance, and bold ideas.
        </p>

        <div className="hero-btn-container">
          <button
            className="hero-btn primary"
            onClick={() => handleScroll("#about")}
          >
            Learn More
          </button>
          <button
            className="hero-btn secondary"
            onClick={() => handleScroll("#contact")}
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
