import React from 'react';

const Resources = () => {
  return (
    <div className="resources-container">
    <h2>Resources</h2>
    <div className="resource-list">
      <div className="resource-box">
        <a href="https://www.w3schools.com/">W3 School: Best Friend of web learners</a>
        <p>
          This resource provides in-depth tutorials and guides on various web development topics. It covers everything from HTML and CSS to advanced JavaScript frameworks. I found the step-by-step examples and practical projects particularly helpful in solidifying my skills.
        </p>
      </div>
      <div className="resource-box">
        <a href="https://stackoverflow.com/">Stackoverflow: Supporter for developers</a>
        <p>
          This resource offers a collection of coding challenges and exercises to sharpen your problem-solving skills. It's a fantastic platform to practice algorithms, data structures, and coding techniques. I regularly use it to challenge myself and improve my coding abilities.
        </p>
      </div>
      {/* Add more resource boxes here */}
    </div>
  </div>
  );
};

export default Resources;

