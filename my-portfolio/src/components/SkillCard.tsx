import type { ReactNode } from "react";


interface SkillCardProps {

icon: ReactNode;

title: string;

skills: string[];

}



function SkillCard({

icon,

title,

skills

}: SkillCardProps){


return (

<div className="skill-card">


<div className="skill-icon">

{icon}

</div>


<h3>

{title}

</h3>


<ul>

{

skills.map((skill)=>(

<li key={skill}>

{skill}

</li>

))

}

</ul>


</div>

);


}


export default SkillCard;