import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth scroll to section
  const handleScroll = (e, id) => {
    e.preventDefault();
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { name: "Home", id: "#hero" },
    { name: "About", id: "#about" },
    { name: "Projects", id: "#projects" },
    { name: "Journey", id: "#journey" },
    { name: "Tools", id: "#tools" },
    { name: "Contact", id: "#contact" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* 🔰 Logo */}
        <div className="navbar-logo" onClick={(e) => handleScroll(e, "#hero")}>
          <div className="logo-box">C</div>
          <span className="logo-text">Carlo Suba</span>
        </div>

        {/* 🖥️ Desktop Navigation */}
        <div className="nav-links">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.id}
              onClick={(e) => handleScroll(e, item.id)}
              className="nav-item"
            >
              {item.name}
            </a>
          ))}
          <a href="/resume.pdf" download className="btn-resume">
            Download Resume
          </a>
        </div>

        {/* 📱 Mobile Menu Toggle */}
        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

        {/* 📲 Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.id}
                onClick={(e) => handleScroll(e, item.id)}
                className="mobile-item"
              >
                {item.name}
              </a>
            ))}
            <a href="/resume.pdf" download className="btn-resume mobile-btn">
              Download Resume
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
