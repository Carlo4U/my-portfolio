import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../components/Projects/Projects.css";


import alleniverson from "../../assets/png/alleniverson.png"
import jalengreen from "../../assets/png/jalen-green.jpg"
import james from "../../assets/png/james.jpg"
import antman from "../../assets/png/antman.jpg"
import shohei from "../../assets/png/shohei.jpg"
import trent from "../..//assets/png/trent.jpg"
import lamr from "../../assets/png/lamr.jpg"
import lewis from "../../assets/png/lewis.jpg" 

import adidasspezial from "../../assets/png/ADS/adidasspezial.jpg"
import heinneken from "../../assets/png/ADS/heineken.jpg"
import matcha from "../../assets/png/ADS/matcha.jpg"

import food from "../../assets/png/SOCIAL/food.jpg"
import iphone17 from "../../assets/png/SOCIAL/iphone17.png"

import net from "../../assets/png/UIUX/net.jpg"

import wondrous from "../../assets/png/UIUX/wondrous.png"
import coldstart from "../../assets/png/UIUX/coldstart.png"

const Project = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // 🖼️ Project data — replace these placeholder paths with your real images
  const projects = [
    { id: 3, title: "Basketball Poster", category: "Sports Design", image: alleniverson },
    { id: 6, title: "Basketball Poster", category: "Sports Design", image: james },
    { id: 9, title: "Basketball Poster", category: "Sports Design", image: trent },
    { id: 5, title: "Basketball Poster", category: "Sports Design", image: jalengreen },
    { id: 7, title: "Basketball Poster", category: "Sports Design", image: antman },
    { id: 8, title: "Basketball Poster", category: "Sports Design", image: shohei },
    { id: 10, title: "Basketball Poster", category: "Sports Design", image: lamr },
    { id: 10, title: "Basketball Poster", category: "Sports Design", image: lewis },

    { id: 1, title: "Product Ad", category: "Advertisement", image: adidasspezial },
    { id: 11, title: "Product Ad", category: "Advertisement", image: heinneken },
    { id: 16, title: "Product Ad", category: "Advertisement", image: matcha },

    { id: 17, title: "Food Promo", category: "Social Media", image: food },
    { id: 18, title: "iPhone17 Launch", category: "Social Media", image: iphone17 },

    { id: 12, title: "Streaming App UI", category: "UX/UI", image: net },
    
    { id: 13, title: "Wondrous App Design", category: "UX/UI", image: wondrous },
    { id: 14, title: "ColdStart App Design", category: "UX/UI", image: coldstart },
  ];

  const categories = [
    "All",
    "Sports Design",
    "Advertisement",
    "Social Media",
    "UX/UI",
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);


  // 🔍 Filter logic
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    
    <section className="projects-section">
      <h2 className="projects-title">My Projects</h2>

      {/* 🔘 Category Buttons */}
      <div className="category-buttons" role="tablist" aria-label="Project categories">
        {categories.map((category) => (
          <button
            key={category}
            role="tab"
            aria-selected={activeCategory === category}
            className={`category-btn ${
              activeCategory === category ? "active" : ""
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* 🖼️ Animated Project Grid */}
      <motion.div  key={activeCategory}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.25, ease: "easeOut" }} className="projects-grid"
      >
        <AnimatePresence mode="wait">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1]}}
              className="project-card"
              tabIndex="0"
            >
              <img
                src={project.image}
                alt={project.title}
                className="project-img"
                 onClick={() => {
                setSelectedImage(project.image);
                setIsModalOpen(true);
                 }}
              />
              <h3 className="project-title">{project.title}</h3>
              <p className="project-category">{project.category}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      {/* 🖼️ Image Modal */}
{isModalOpen && (
  <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <img src={selectedImage} alt="Full view" className="modal-image" />
      <button className="close-btn" onClick={() => setIsModalOpen(false)}>×</button>
    </div>
  </div>
)}

    </section>
  );
};

export default Project;
