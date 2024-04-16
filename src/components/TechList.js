import React from 'react';
import { FaCode, FaReact, FaVuejs, FaNodeJs, FaDatabase } from 'react-icons/fa';

const TechList = () => {
  return (
    <div className="tech-list-container">
    <h2>Technical Skills</h2>
    <ul className="tech-list">
      <li><FaCode /> Programming Languages: JavaScript, HTML, CSS</li>
      <li><FaReact /> Frontend: React, Vue.js</li>
      <li><FaNodeJs /> Backend: Node.js, Express</li>
      <li><FaDatabase /> Database: MongoDB, PostgreSQL</li>
      {/* Add more skills here */}
    </ul>
  </div>
  );
};

export default TechList;
