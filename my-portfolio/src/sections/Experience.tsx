import { experiences } from "../data/experience";
import { certifications } from "../data/certifications";

import ExperienceCard from "../components/ExperienceCard";
import CertificationCard from "../components/CertificationCard";

function Experience() {

  return (

    <section id="experience" className="experience">

      <div className="container">

        <p className="subtitle-experience">
          PROFESSIONAL JOURNEY
        </p>

        <h1 className="section-title-experience">
          Experience & Documentation
        </h1>


        {/* EXPERIENCE */}

        <div className="experience-grid">

          {experiences.map((item) => (

            <ExperienceCard
              key={item.institution}
              experience={item}
            />

          ))}

        </div>


        {/* CERTIFICATIONS & ACHIEVEMENTS */}

        {certifications.length > 0 && (

          <div className="certifications-section">

            <div className="certifications-divider"></div>

            <h2 className="subsection-title">
              Certifications & Achievements
            </h2>

            <div className="certifications-grid">

              {certifications.map((cert) => (

                <CertificationCard
                  key={cert.name}
                  certification={cert}
                />

              ))}

            </div>

          </div>

        )}

      </div>

    </section>

  );

}

export default Experience;