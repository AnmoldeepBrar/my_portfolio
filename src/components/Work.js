import React from 'react';
import projectImage from '../images/p2.jpg';
import projectImages from '../images/p1.jpg'; 

const Work = () => {
  return (
    <div>
      <h2>Work/Projects</h2>
      <ul>
        <li>
          <h3>Brar Book Store</h3>
          <p>
            Developed a dynamic bookstore website utilizing HTML, CSS, and JavaScript.<br />
            Implemented interactive features including search functionality, category filters, and responsive design to enhance user experience.<br />
            Utilized modern web development techniques to create an intuitive and visually appealing interface, resulting in improved accessibility and user engagement.
          </p>
          <img src={projectImages} alt="Project 1" style={{ width: '200px', height: '200px' }} />
          <a href="https://www.brars.com/">Project Link</a>
        </li>
        <li>
          <h3>Online Library System</h3>
          <p>
            Designed and implemented a robust online library system using PHP.<br />
            Integrated Database Management System for efficient data management and retrieval, ensuring seamless operation of the library platform.<br />
            Implemented user authentication and authorization functionalities to ensure secure access to library resources, enhancing data privacy and system integrity.
          </p>
          <img src={projectImage} alt="Project 2" style={{ width: '200px', height: '200px' }} />
          <a href="https://www.brars.com/">Project Link</a>
        </li>
        {/* Add more projects here */}
      </ul>
    </div>
  );
};

export default Work;
