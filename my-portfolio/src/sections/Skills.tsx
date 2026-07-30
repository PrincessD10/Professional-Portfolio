import skillsImage from "../assets/skills.png";

import ImageFrame from "../components/ImageFrame";

import SkillCard from "../components/SkillCard";


import {

FaCloud,

//FaShieldAlt,

//FaNetworkWired,

FaLaptopCode,

FaDesktop,

//FaCode

} from "react-icons/fa";



function Skills(){


return (

<section className="skills">


<div className="container skills-container">


<div className="skills-image">


<ImageFrame>


<img

src={skillsImage}

alt="IT skills"

/>


</ImageFrame>


</div>




<div className="skills-content">


<p className="subtitle">

TECHNICAL PROFILE

</p>


<h1 className="section-title">

Skills & Expertise

</h1>



<div className="skills-grid">


<SkillCard

icon={<FaLaptopCode/>}

title="Web Development (Frontend)"

skills={[

"React",

"TYpeScript",

"HTML5",

"CSS3"

]}

/>


<SkillCard

icon={<FaCloud/>}

title="Cloud Technologies"

skills={[

"AWS",

"GitHub",

"Docker (Beginner)"

]}

/>


{/*
<SkillCard

icon={<FaShieldAlt/>}

title="Cybersecurity"

skills={[

"Network Security",

"IAM",

"Security Principles",

"Threat Awareness"

]}

/>
*/}



<SkillCard

icon={<FaDesktop/>}

title="Operating Systems"

skills={[

"Microsoft Windows",

"Ubuntu Linux"


]}

/>

{/*
<SkillCard

icon={<FaNetworkWired/>}

title="Networking"

skills={[

"TCP/IP",

"Cisco Networking"


]}

/>
*/}



</div>


</div>


</div>


</section>

);


}


export default Skills;