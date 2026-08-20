import {projects} from "../data/projects";

import ProjectCard from "../components/ProjectCard";



function Projects(){


return(

<section id="projects" className="projects">


<div className="container">


<p className="subtitle-projects">

MY WORK

</p>



<h1 className="section-title-projects">

Projects

</h1>



<div className="projects-grid">


{

projects.map((project)=>(


<ProjectCard

key={project.title}

project={project}

/>


))

}


</div>


</div>


</section>


);


}



export default Projects;