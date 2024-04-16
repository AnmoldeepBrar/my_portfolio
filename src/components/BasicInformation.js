import React from 'react';
import projectImages from '../images/p.jpg'; 

const BasicInformation = () => {
  return (
    <div className="basic-info-container">
       <img src={projectImages} alt="Profile" className="profile-image" />
      <h1>Full Stack Web developers</h1>
      <h2>Web programmer</h2>
      <div className="info-box">
        <p>Welcome to My Portfolio</p>
        <p>
          Hey there! I'm Anmoldeep, a dedicated and innovative software developer deeply immersed in the world of web development. My journey revolves around transforming concepts into practical and refined software solutions. With a meticulous approach and a genuine passion for coding, I'm committed to crafting intuitive and effective applications that deliver impactful user experiences.
        </p>
        <p>
          My expertise lies in full-stack web development, where I thrive in bringing visions to fruition, right from inception to deployment. Whether it's front-end design or back-end functionality, I ensure seamless integration and optimal performance throughout. I'm proficient with a variety of technologies, including React, Vue.js, Node.js, and Express, constantly expanding my skill set to stay ahead in this ever-evolving industry.
        </p>
        <p>
          Contact Me: Feel free to reach out to me at <a href="mailto:anmoldeepbrar700@gmail.com">anmoldeepbrar700@gmail.com</a>, or <a href="tel:2045583366">204-558-3366</a> to discuss potential collaborations or simply chat about all things tech!
        </p>
      </div>
    </div>
  );
};

export default BasicInformation;
