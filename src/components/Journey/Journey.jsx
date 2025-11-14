import React from "react";
import "./Journey.css";

const Journey = () => {
  const timeline = [
    { year: "2021", text: "Started exploring digital art and poster design." },
    { year: "2022", text: "Discovered esports design and created my first team banner." },
    { year: "2023", text: "Enhanced my branding and UI/UX design skills." },
    { year: "2024", text: "Worked on sports, ads, and apparel graphics for clients." },
    { year: "2025", text: "Building my personal creative portfolio website." },
  ];

  return (
    <section id="journey" className="journey">
      <div className="journey-container">
        <h2 className="journey-title">My Creative Journey</h2>
        <p className="journey-subtitle">
          A look back at how I’ve grown and evolved as a designer through years of creativity,
          dedication, and passion.
        </p>

        <div className="timeline">
          {timeline.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <span className="year">{item.year}</span>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
