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
              <h1 className="Bold-text">UI/UX Designer</h1>
              <h1 className="Bold-text">graphics Designer</h1>
          </div>
          <div className="work-label">
              <h4 className="label">UI/UX Design</h4>
              <h4 className="label">Graphic Design</h4>
              <h4 className="label">Web Development</h4>
          </div>
        </div>

        {/* Right Side - Text */}
        <div className="about-text">
  <p className="about-description">
    I'm <span className="highlight">Carlo Justine Suba</span>, a Creative Designer specializing in UI/UX design, graphic design, and front-end web development, 
    passionate about blending technology and art to create meaningful digital experiences. I design user-centered web and mobile interfaces while producing 
    impactful visuals for marketing, sports graphics, and advertising.
  </p>

  <p className="about-description">
    With experience in both design and development, I build modern, responsive interfaces that balance aesthetics, usability, and functionality. 
    Every project reflects my dedication to quality, originality, and meaningful impact.
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
