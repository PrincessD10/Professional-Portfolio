import type {Experience} from "../data/experience";


interface Props{

experience:Experience;

}



function ExperienceCard({experience}:Props){


return(

<div className="experience-card">


<h2>

{experience.institution}

</h2>



<h3>

{experience.role}

</h3>



<p className="experience-duration">

{experience.duration}

|

{experience.period}

</p>



<ul className="experience-responsibilities">

{

experience.responsibilities.map((item)=>(

<li key={item}>

{item}

</li>

))

}

</ul>



<a

href={experience.report}

target="_blank"

rel="noreferrer"

className="project-link"

>

View Internship Report

</a>



</div>

);


}


export default ExperienceCard;