import "./Tools.css";
import photoshop from "../../assets/photoshop.png";
import figma from "../../assets/figma.png";
import canva from "../../assets/canva.png";
import vscode from "../../assets/vscode.png";

const Tools = () => {
  const designTools = [
    { name: "Canva", desc: "Graphic Design & Visual Content", img: canva },
    { name: "Figma", desc: "UI/UX Design & Prototyping", img: figma },
    { name: "Photoshop", desc: "Photo Editing & Digital Art", img: photoshop },
    { name: "VS Code", desc: "Code Editing & Web Development", img: vscode },
  ];

  const designSkills = [
    { skill: "Graphics Design", level: 90 },
    { skill: "UI/UX Design", level: 85 },
    { skill: "Web Design", level: 85 },
    { skill: "Poster Design", level: 90 },
    { skill: "Brand Identity", level: 85 },
    { skill: "Digital Marketing", level: 90 },
  ];

  return (
    <section className="tools-section" id="tools">
      <h2 className="tools-heading">Skills & Tools</h2>
      <p className="tools-subtitle">
        The creative tools and skills that bring my design visions to life.
      </p>

      <div className="tools-content">
        {/* LEFT SIDE - Design Tools */}
        <div className="tools-column">
          <h3>Design Tools</h3>
          <div className="tool-list">
            {designTools.map((tool, index) => (
              <div className="tool-card" key={index}>
                <img src={tool.img} alt={tool.name} />
                <div>
                  <h4>{tool.name}</h4>
                  <p>{tool.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE - Design Skills */}
        <div className="skills-column">
          <h3>Design Skills</h3>
          <div className="skills-list">
            {designSkills.map((item, index) => (
              <div className="skill-bar" key={index}>
                <div className="skill-info">
                  <span>{item.skill}</span>
                  <span>{item.level}%</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-fill"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
