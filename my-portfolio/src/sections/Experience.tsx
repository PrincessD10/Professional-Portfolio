import {experiences} from "../data/experience";

import {certifications} from "../data/certifications";


import ExperienceCard from "../components/ExperienceCard";

import CertificationCard from "../components/CertificationCard";



function Experience(){


return(

<section className="experience">


<div className="container">


<p className="subtitle">

PROFESSIONAL JOURNEY

</p>


<h1 className="section-title">

Experience & Documentation

</h1>



<div className="experience-grid">


{

experiences.map((item)=>(

<ExperienceCard

key={item.institution}

experience={item}

/>

))

}


</div>




{

certifications.length > 0 &&


<>

<h2 className="subsection-title">

Certifications & Achievements

</h2>



<div className="experience-grid">


{

certifications.map((cert)=>(


<CertificationCard

key={cert.name}

certification={cert}

/>


))


}


</div>


</>


}



</div>


</section>

);


}


export default Experience;