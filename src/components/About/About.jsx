import React from "react";
import "./About.css";
import aboutBg from "../../assets/aboutbg.png";
import Button from "../ui/button.jsx";


const About = () => {
  return (
    <section id="about" className="about"  style={{ backgroundImage: `url(${aboutBg})` }}>
      
      <div className="about-container">
        {/* Left Side - Image */}
        <div className="about-work">
          <div className="about-work-label">
              <h3 className="label-title">About my role</h3>
          </div>
          <div className="Bold">
              <h1 className="Bold-text">Web Designer/Developer</h1>
              <h1 className="Bold-text">graphics Designer</h1>
          </div>
          <div className="work-label">
              <h4 className="label">Graphics Design</h4>
              <h4 className="label">Poster Design</h4>
              <h4 className="label">UI/UX Design</h4>
              <h4 className="label">Web Dev/Design</h4>
              <h4 className="label">Digital Marketing</h4>
          </div>
        </div>

        {/* Right Side - Text */}
        <div className="about-text">
          <p className="about-description">
            I’m <span className="highlight">Carlo Justine Suba</span>, a motivated and creative BSIT student and designer specializing in web, UI/UX, and graphic design. 
            I’m passionate about blending technology and creativity to craft functional, visually engaging, and user-centered experiences. My work spans from Smart Home 
            app development to branding and digital designs for clients like ColdstartPH and a local massage business.
          </p>

          <p className="about-description">
           As a Creative Designer, I love turning ideas into visuals that inspire — from sports graphics and esports banners to ad posters and T-shirt designs. For me, 
           great design goes beyond aesthetics — it’s about storytelling, emotion, and connection. Every project reflects my dedication to quality, originality, and meaningful impact.
          </p>

          <div className="about-buttons">
            <Button text="View Projects" color="var(--secondary)" target="#projects" variant="primary"/>
            <Button text="View Skills" color="var(--secondary)" target="#tools" variant="outline"/>

          </div>
        </div>
      </div>
      
    </section>
  );
};

export default About;
