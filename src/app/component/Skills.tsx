import React from 'react';

const Skills = () => {
  return (
    <div id="skills" className="skills-container">
      <div className="skills-grid">
        <div className="skills-description">
          <h2 className="skills-heading">Technologies I work with</h2>
          <p className="skills-text">
            I have strong proficiency in programming languages such as Python, JavaScript, and C++. I`&apos;m experienced in web development using HTML, CSS, and React, and skilled in back-end technologies like Node.js. I excel in problem-solving and thrive in Agile team environments.
          </p>
        </div>
        <div className="skills-list">
          <div className="skills-column">
            <h2 className="skill-item">Typescript</h2>
            <h2 className="skill-item">HTML</h2>
            <h2 className="skill-item">CSS</h2>
          </div>
          <div className="skills-column">
            <h2 className="skill-item">Tailwind</h2>
            <h2 className="skill-item">Node.JS</h2>
            <h2 className="skill-item">Next.JS</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
