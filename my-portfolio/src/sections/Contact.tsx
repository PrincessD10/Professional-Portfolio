import { useState } from "react";

import profileImage from "../assets/profile.png";
import dianacv from "../assets/dianacv.pdf";

import ImageFrame from "../components/ImageFrame";

import {
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaEnvelope,
  FaFileAlt,
  FaMapMarkerAlt,
  FaTimes,
} from "react-icons/fa";


function Contact(){

const [showResume, setShowResume] = useState(false);

return (

<section id="contact" className="contact">


<div className="container two-column-contact">


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




<button
  type="button"
  className="resume-button"
  onClick={() => setShowResume(true)}
>
  <FaFileAlt />
  Resume
</button>


</div>


</div>


</div>


{showResume && (

  <div className="resume-modal">

    <div className="resume-viewer">

      <div className="resume-viewer-header">

        <h2>My Resume</h2>

        <button
          type="button"
          className="close-resume"
          onClick={() => setShowResume(false)}
          aria-label="Close resume"
        >
          <FaTimes />
        </button>

      </div>


      <div className="resume-document">

        <iframe
          src={dianacv}
          title="Awara Diana Resume"
        />

      </div>

    </div>

  </div>

)}

</section>


);


}


export default Contact;