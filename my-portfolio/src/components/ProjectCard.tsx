import type { Project } from "../data/projects";


interface Props{

project:Project;

}



function ProjectCard({project}:Props){


return(

<div className="project-card">


<img

src={project.image}

alt={project.title}

className="project-image"

/>



<div className="project-content">


<h2>

{project.title}

</h2>



<h4>

{project.role}

</h4>



<p>

{project.description}

</p>



<div className="technology-list">


{

project.technologies.map((tech)=>(


<span key={tech}>

{tech}

</span>


))

}


</div>



<div className="project-actions">


<div className="project-actions">


<a

href={project.github}

target="_blank"

rel="noreferrer"

className="project-link"

>

GitHub

</a>



<a

href={project.preview}

target="_blank"

rel="noreferrer"

className="project-link"

>

Demo

</a>



<a

href={project.report}

target="_blank"

rel="noreferrer"

className="project-link secondary"

>

Technical Report

</a>


</div>

{

/*project.architecture &&

<a

href={project.architecture}

target="_blank"

rel="noreferrer"

className="project-link secondary"

>

Architecture

</a>*/

}


</div>


</div>


</div>


);


}



export default ProjectCard;