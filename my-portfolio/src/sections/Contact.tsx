import profileImage from "../assets/profile.png";

import ImageFrame from "../components/ImageFrame";


import {

FaLinkedin,

FaGithub,

FaWhatsapp,

FaEnvelope,

FaFileAlt,

FaMapMarkerAlt

} from "react-icons/fa";



function Contact(){


return (

<section className="contact">


<div className="container two-column">


<div className="contact-image">


<ImageFrame>


<img

src={profileImage}

alt="Awara Diana"

/>


</ImageFrame>


</div>





<div className="contact-content">


<p className="subtitle">

CONTACT

</p>



<h1 className="section-title">

Let's Connect

</h1>



<p className="text">


Thank you for taking the time to explore

my portfolio. I am always interested in

connecting with professionals, organizations

and opportunities where I can contribute and

continue growing in Cloud Computing, Networking and

Cybersecurity.

</p>




<div className="contact-links">


<a>

<FaMapMarkerAlt/>

Douala, Cameroon

</a>


<a

href="mailto:awaradiana40@gmail.com"

>

<FaEnvelope/>

Email

</a>




<a

href="https://www.linkedin.com/in/awara-diana-8383b822b/"

target="_blank"

rel="noreferrer"

>

<FaLinkedin/>

LinkedIn

</a>





<a

href="https://github.com/PrincessD10"

target="_blank"

rel="noreferrer"

>

<FaGithub/>

GitHub

</a>





<a

href="https://wa.me/+237680939424"

target="_blank"

rel="noreferrer"

>

<FaWhatsapp/>

WhatsApp / Phone

</a>




<a

href="/documents/Diana CV.pdf"

target="_blank"

>

<FaFileAlt/>

Resume

</a>


</div>


</div>


</div>


</section>


);


}


export default Contact;