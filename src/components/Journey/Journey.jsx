import React from "react";
import "./Journey.css";

const Journey = () => {
  const timeline = [
    { year: "2021", text: "Started exploring digital art and poster design." },
    { year: "2022", text: "Discovered esports design and created my first team banner." },
    { year: "2023", text: "Enhanced my branding and UI/UX design skills." },
    { year: "2024", text: "Worked on sports, ads, and apparel graphics for clients." },
    {
      year: "May – Jul 2025",
      text: "Web & UI Designer at Coldstart Philippines — Designed and developed a modern informational website showcasing the company's services and brand identity.",
      tag: "Freelance"
    },
    { year: "2025", text: "Building my personal creative portfolio website." },
    {
      year: "Oct 2025 – Feb 2026",
      text: "Web Designer & Developer at Wondrous Massage — Built a modern website with animations and an integrated booking system to help the business manage client connections.",
      tag: "Freelance"
    },
  ];

  return (
    <section id="journey" className="journey">
      <div className="journey-container">
        <h2 className="journey-title">My Creative Journey</h2>
        <p className="journey-subtitle">
          A look back at how I've grown and evolved as a designer through years of creativity,
          dedication, and passion.
        </p>

        <div className="timeline">
          {timeline.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <span className="year">{item.year}</span>
                {item.tag && <span className="timeline-tag">{item.tag}</span>}
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