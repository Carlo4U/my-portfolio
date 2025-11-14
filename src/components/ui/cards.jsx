import React from "react";
import "./Cards.css";

const Cards = ({ image, title, description }) => {
  return (
    <div className="info-card">
      <img src={image} alt={title} className="card-img" />
      <div className="card-overlay">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Cards;
