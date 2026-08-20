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
                    src="/images/profile-pic2.PNG"
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
                    Computer Engineering Graduate | Cloud &amp; Cybersecurity
                    Enthusiast
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
              Computer Engineering graduate specializing in Cloud Computing
              with hands-on experience developing web applications and
              implementing cloud-based solutions using AWS services.
              Experienced in React, TypeScript, serverless architectures,
              databases, and Linux environments. Interested in building
              secure, scalable cloud infrastructures with a strong focus on
              cloud security, network security, and cybersecurity.
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
                  <li>Docker</li>
                  <li>GitHub</li>
                  <li>VS Code</li>
                  <li>MySQL</li>
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
                  Supported daily administrative operations and internal
                  document management processes within a public institution.
                </li>

                <li>
                  Gained exposure to enterprise information workflows and
                  organizational systems.
                </li>

                <li>
                  Assisted staff with digital documentation processes and
                  developed an understanding of institutional IT operations.
                </li>

                <li>
                  Developed professional skills in communication,
                  organization, and workplace collaboration.
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