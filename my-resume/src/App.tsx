//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'

import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import './App.css';

const App = () => {
  return (
    <div className="resume-container">
      <div className="resume">
        {/* Header Section */}
        <header className="resume-header">
          <div className="header-content">
            <div className="name-title">
              <h1>Awara Diana Tengwi</h1>
              <br></br>
              <h2>Computer Engineering Graduate | Cloud & Cybersecurity Enthusiast</h2>
              <br>
              </br>
              <ul className="contact-info">
                <li>
                <FaMapMarkerAlt className="contact-icon" />
                  Douala, Cameroon
                </li>
                <li>
                  <FaPhone className="contact-icon" />
                  +237 680 939 424
                </li>
                <li>
                  <FaEnvelope className="contact-icon" />
                  awaradiana40@gmail.com
                </li>
                <li>
                  <FaLinkedin className="contact-icon" />
                  https://www.linkedin.com/in/awara-diana
                </li>
                <li>
                  <FaGithub className="contact-icon" />
                  https://github.com/PrincessD10
                </li>
              </ul>
            </div>
            
            <div className="profile-photo">
              <img src="/public/images/profile-pic2.PNG" alt="Your Name" className="photo-img" />
              {/*<div className="photo-placeholder">
                <span>Profile Photo</span>
              </div>*/}
            </div>
          </div>
        </header>

        {/*<hr className="divider" />*/}

        {/* Profile Section */}
        <section className="resume-section">
          <h3>About Me</h3>
          <p>
            Computer Engineering graduate specializing in Cloud Computing with hands-on experience developing web applications and 
            implementing cloud-based solutions using AWS services. Experienced in React, TypeScript, serverless architectures, 
            databases, and Linux environments. Interested in building secure, scalable cloud infrastructures and pursuing 
            opportunities in cloud engineering and cybersecurity.
          </p>
        </section>

        {/*<hr className="divider" />*/}

        {/* Education Section */}
        <section className="resume-section">
          <h3>Education</h3>
          <div className="education-item">
            <h4>Bachelor of Technology in Computer Engineering</h4>
            <p className="institution">Institut Universitaire de la Cote (IUC)</p>
            <p className="date">2024 - 2025</p>
            {/*<p className="gpa">Current GPA: 3.84</p>*/}
          </div>
          <div className="education-item">
            <h4>Higher National Diploma (HND) in Software Engineering</h4>
            <p className="institution">Jacky Felly Nafack Hightech University Institute (JFN-HUI)</p>
            <p className="date">2022 - 2024</p>
            {/*<p className="awards"></p>*/}
          </div>
        </section>

        {/*<hr className="divider" />*/}

        {/* Technical Skills Section */}
        {<section className="resume-section">
          <h3>Technical Skills</h3>
          <div className="skills-grid">
            <div className="skill-category">
              <h4>Frontend Development</h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>React</li>
                <li>Typescript</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Cloud Platforms</h4>
              <ul>
                <li>AWS (EC2, S3, Lambda, RDS, API Gateway)</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>DevOps and Tools</h4>
              <ul>
                <li>Docker</li>
                <li>GitHub</li>
                <li>Linux (Ubuntu)</li>
                <li>VS Code</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Databases</h4>
              <ul>
                <li>MySQL</li>
                <li>Amazon RDS (MySQL)</li>
              </ul>
            </div>
          </div>
        </section>}

        {/* <hr className="divider" /> */}

        {/* Projects Section */}
        <section className="resume-section">
          <h3>Projects</h3>

          <div className="project-item">
            <h4>DocuTrack Pro – Cloud-Based Document Management System</h4>

            <p className="project-tech">
              <strong>Technologies:</strong> React, TypeScript, AWS Lambda, API Gateway,
              Amazon S3, Amazon RDS (MySQL), IAM, REST API
            </p>

            <ul>
              <li>
                Developed a cloud-based document tracking system with role-based access
                for clients, processing staff and administrators.
              </li>

              <li>
                Built a serverless backend using AWS Lambda and API Gateway for secure
                document processing and user authentication.
              </li>

              <li>
                Integrated Amazon RDS (MySQL) for data storage and Amazon S3 for document storage, ensuring scalablity and reliability.
              </li>

              <li>
                Designed a responsive user interface using React and TypeScript to
                streamline document submission and tracking.
              </li>
            </ul>

            {/* Uncomment once deployed 
            
            <p className="project-links">
              GitHub: <a>github.com/PrincessD10/AWS_DocuTrack-Pro</a> <br />
              Portfolio: <a>https://professional-portfolio-iota-three.vercel.app/</a>
            </p>*/}
            
          </div>
        </section>

        {/* Experience Section */}
        {<section className="resume-section">
          <h3>Experience</h3>
          <div className="experience-item">
            <h4>Administrative and System Support Intern</h4>
            <p className="company">National Social Insurance Fund (NSIF) Cameroon</p>
            <p className="date">September 2025 - March 2026</p>
            {/*<p>Gained practical exposure to the operational workflow of a major public social security institution while
              assisting staff with administrative  and document processing tasks. Supported internal information management
              and developed an understanding of the institutional information systems and administrative procedures used in
              daily operations.
            </p>*/}
            <ul>
              <li>Supported daily administrative operations and internal document management processes within a public institution.</li>
              <li>Gained exposure to enterprise information workflows and organizational systems.</li>
              <li>Assisted staff with digital documentation processes and improved understanding of institutional IT operations.</li>
              <li>Developed professional skills in communication, organization, and workplace collaboration.</li>
            </ul>
          </div>
          
          {/*<div className="experience-item">
            <h4>Full-Stack Developer (Project)</h4>
            <p className="company">University Capstone Project</p>
            <p className="date">January 2023 - May 2023</p>
            <ul>
              <li>Developed a cloud-based document management system using React and Node.js</li>
              <li>Deployed application using Docker containers on AWS ECS</li>
              <li>Implemented secure user authentication with AWS Cognito</li>
            </ul>
          </div>*/}
        </section>}

        {/*<hr className="divider" />*/}

        {/* Languages Section */}
        <section className="resume-section">
          <h3>Languages</h3>
          <div className="languages">
            <div className="language">
              <span className="language-name">English</span>
              {/*<span className="language-proficiency">Native</span>*/}
            </div>
            <div className="language">
              <span className="language-name">French</span>
              {/*n<span className="language-proficiency">Intermediate</span>*/}
            </div>
          </div>
        </section>

        {/*<hr className="divider" />*/}

        {/* Interests Section */}
        <section className="resume-section">
          <h3>Interests</h3>
          <p>
            I'm enthusiastic about Cybersecurity, Cloud Security, Network Security, Linux, Emerging Cloud Technologies
          </p>
        </section>
      </div>
    </div>
  );
};

export default App;
