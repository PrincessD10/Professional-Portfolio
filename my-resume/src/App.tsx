import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import "./App.css";

const App = () => {
  return (
    <main className="page-wrapper">
      <div className="resume-container">
        <div className="resume">
          {/* ================= HEADER ================= */}
          <header className="resume-header">
            <div className="header-content">

              {/* PHOTO - LEFT */}
              <div className="profile-photo-container">
                <div className="profile-photo">
                  <img
                    src="/images/profilepic.png"
                    alt="Awara Diana Tengwi"
                    className="photo-img"
                  />
                </div>
              </div>

              {/* INFORMATION - RIGHT */}
              <div className="header-information">
                <div className="name-title">
                  <h1>Awara Diana Tengwi</h1>

                  <h2>
                    Computer Engineering Graduate | Aspiring Network Engineer
                  </h2>
                </div>

                <div className="contact-info">
                  <div className="contact-item">
                    <FaMapMarkerAlt className="contact-icon" />
                    <span>Douala, Cameroon</span>
                  </div>

                  <div className="contact-item">
                    <FaPhone className="contact-icon" />
                    <span>+237 680 939 424</span>
                  </div>

                  <div className="contact-item">
                    <FaEnvelope className="contact-icon" />
                    <a href="mailto:awaradiana40@gmail.com">
                      awaradiana40@gmail.com
                    </a>
                  </div>

                  <div className="contact-item">
                    <FaLinkedin className="contact-icon" />
                    <a
                      href="https://www.linkedin.com/in/awara-diana"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      linkedin.com/in/awara-diana
                    </a>
                  </div>

                  <div className="contact-item">
                    <FaGithub className="contact-icon" />
                    <a
                      href="https://github.com/PrincessD10"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      github.com/PrincessD10
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* ================= PROFILE ================= */}
          <section className="resume-section">
            <h3>Profile</h3>

            <p>
              Computer Engineering graduate specializing in Cloud Computing with a strong interest in
              network engineering, and IT infrastructure. Experienced in frontend development using 
              React and TypeScript, as well as implementing cloud-based solutions using AWS services. 
              Possess hands-on knowledge of the Linux environment, and cloud technologies, while developing
              practical skills in computer networking, network configuration, troubleshooting, and security. 
              Interested in building and maintaining secure, reliable, and scalable network infrastructures.

            </p>
          </section>

          {/* ================= EDUCATION ================= */}
          <section className="resume-section">
            <h3>Education</h3>

            <div className="education-item">
              <div className="item-heading">
                <div>
                  <h4>Bachelor of Technology in Computer Engineering</h4>
                  <p className="institution">
                    Institut Universitaire de la Côte (IUC)
                  </p>
                </div>

                <span className="date">2024 – 2025</span>
              </div>
            </div>

            <div className="education-item">
              <div className="item-heading">
                <div>
                  <h4>
                    Higher National Diploma (HND) in Software Engineering
                  </h4>

                  <p className="institution">
                    Jacky Felly Nafack Hightech University Institute (JFN-HUI)
                  </p>
                </div>

                <span className="date">2022 – 2024</span>
              </div>
            </div>
          </section>

          {/* ================= TECHNICAL SKILLS ================= */}
          <section className="resume-section">
            <h3>Technical Skills</h3>

            <div className="skills-grid">
              <div className="skill-category">
                <h4>Frontend Development</h4>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>React</li>
                  <li>TypeScript</li>
                </ul>
              </div>

              <div className="skill-category">
                <h4>Cloud &amp; AWS</h4>
                <ul>
                  <li>AWS EC2</li>
                  <li>Amazon S3</li>
                  <li>AWS Lambda</li>
                  <li>Amazon RDS</li>
                  <li>API Gateway</li>
                </ul>
              </div>

              {/*<div className="skill-category">
                <h4>Networking &amp; Security</h4>
                <ul>
                  <li>Computer Networking</li>
                  <li>Network Security</li>
                  <li>Cloud Security</li>
                  <li>Access Control &amp; IAM</li>
                  <li>REST APIs</li>
                </ul>
              </div>*/}

              <div className="skill-category">
                <h4>DevOps, Systems &amp; Tools</h4>
                <ul>
                  <li>Linux (Ubuntu)</li>
                  <li>GitHub</li>
                  <li>VS Code</li>
                  <li>CISCO Packet Tracer</li>
                </ul>
              </div>
            </div>
          </section>

          {/* ================= PROJECTS ================= */}
          <section className="resume-section">
            <h3>Projects</h3>

            <div className="project-item">
              <div className="item-heading">
                <div>
                  <h4>
                    DocuTrack Pro – Cloud-Based Document Management System
                  </h4>
                </div>
              </div>

              <p className="project-tech">
                <strong>Technologies:</strong> React, TypeScript, AWS Lambda,
                API Gateway, Amazon S3, Amazon RDS (MySQL), IAM, REST API
              </p>

              <ul>
                <li>
                  Developed a cloud-based document management system with
                  role-based access for clients, processing staff, and
                  administrators.
                </li>

                <li>
                  Built a serverless backend using AWS Lambda and API Gateway
                  to support authentication and document-processing workflows.
                </li>

                <li>
                  Integrated Amazon RDS (MySQL) for structured data storage and
                  Amazon S3 for hosting, supporting scalability and
                  reliability.
                </li>

                <li>
                  Designed a responsive user interface using React and
                  TypeScript to streamline document submission and tracking.
                </li>
              </ul>
            </div>

            <div className="project-item">
              <div className="item-heading">
                <div>
                  <h4>
                    Digitalization of CAMTEL's Warehouse Management
                  </h4>
                </div>
              </div>

              <p className="project-tech">
                <strong>Tools and Skills:</strong> Microsoft Excel, Inventory
                Management, Data Preparation, Data Verification, Data Reconciliation.
              </p>

              <ul>
                <li>
                  Participated in a warehouse digitalization project involving
                  physical inventory and data preparation across CAMTEL warehouse
                  locations in Douala.
                </li>

                <li>
                  Counted and identified materials and equipment on-site, recording
                  inventory details and quantities in Excel using the required format.
                </li>

                <li>
                  Cross-checked inventory records against physical stock and helped
                  identify and correct discrepancies, including inaccurate location
                  classifications and unreconciled items.
                </li>

                <li>
                  Prepared and submitted structured Excel inventory files to the
                  responsible team for processing through the warehouse management
                  application.
                </li>

                <li>
                  Prepared a dedicated Excel file for accessories to be managed as
                  kits within the digital platform.
                </li>
              </ul>
            </div>
          </section>

          {/* ================= EXPERIENCE ================= */}
          <section className="resume-section">
            <h3>Experience</h3>

            <div className="experience-item">
              <div className="item-heading">
                <div>
                  <h4>Administrative and System Support Intern</h4>

                  <p className="company">
                    National Social Insurance Fund (NSIF) Cameroon
                  </p>
                </div>

                <span className="date">September 2025 – March 2026</span>
              </div>

              <ul>
                <li>
                  Document & Records Management (Archiving).
                </li>

                <li>
                  Communication & Customer Service.
                </li>

                <li>
                  Organization & Attention to Detail.
                </li>

                <li>
                  Teamwork & Problem-Solving.
                </li>
              </ul>
            </div>

            <div className="experience-item">
              <div className="item-heading">
                <div>
                  <h4>Network Engineering Intern</h4>

                  <p className="company">
                    Cameroon Telecommunications (CAMTEL)
                  </p>
                </div>

                <span className="date">September 2026 – Present</span>
              </div>

              <ul>
                <li>
                  Gain practical exposure to telecommunications infrastructure,
                  network-related equipment, and technical working environments.
                </li>

                <li>
                  Participate in assigned technical and operational activities
                  under the guidance of experienced personnel.
                </li>

                <li>
                  Contributed to a warehouse management digitalization project
                  involving physical inventory, data preparation, and inventory
                  verification using Microsoft Excel.
                </li>
              </ul>
            </div>
          </section>

          {/* ================= LANGUAGES ================= */}
          <section className="resume-section">
            <h3>Languages</h3>

            <div className="languages">
              <span>English</span>
              <span>French</span>
            </div>
          </section>

          {/* ================= INTERESTS ================= */}
          <section className="resume-section">
            <h3>Interests</h3>

            <p>
              Cybersecurity, Cloud Security, Network Security, Linux,
              Networking, Emerging Cloud Technologies, and Secure Cloud
              Infrastructure.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default App;