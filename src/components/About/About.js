import React from "react";
import "./About.css"; // Import your CSS file

function About() {
  document.title = "NewsMingle - About"
  return (
    <div className="about">
      <h2>About Me</h2>
      <p>
        Hello, I'm Karanbir Singh, a self-taught web developer passionate about
        creating web applications and learning cutting-edge technologies. My
        journey in the world of web development has been an exciting one, where
        I've acquired a diverse skill set.
      </p>
      <p>
        I have delved into various technologies, including HTML, CSS, JavaScript,
        ES6, Node.js, MongoDB, React.js, and Express. These tools have allowed me
        to craft dynamic and interactive web experiences while exploring the
        backend and database technologies that power the web.
      </p>
      <p>
        My dedication to staying up-to-date with the ever-evolving tech
        landscape ensures that I can provide the latest and most effective
        solutions for your web development needs.
      </p>
    </div>
  );
}

export default About;
