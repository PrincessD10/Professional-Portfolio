import {projects} from "../data/projects";

import ProjectCard from "../components/ProjectCard";



function Projects(){


return(

<section className="projects">


<div className="container">


<p className="subtitle">

MY WORK

</p>



<h1 className="section-title">

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