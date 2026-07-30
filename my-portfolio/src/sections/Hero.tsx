import profileImage from "../assets/profile.png";
import ImageFrame from "../components/ImageFrame";


function Hero(){

return (

<section className="hero">


<div className="container hero-container">


<div className="hero-image">

<ImageFrame>

<img

src={profileImage}

alt="Awara Diana profile"

/>

</ImageFrame>


</div>



<div className="hero-content">


<p className="subtitle">

PROFESSIONAL PORTFOLIO

</p>


<h1>

Awara Diana Tengwi

</h1>



<h2>

Bachelor of Technology in 

<br/>

Computer Engineering

</h2>



<p className="career">

Aspiring Network Engineer

<br/>

Cybersecurity Enthusiast

</p>



<p className="text">

Building secure, scalable and innovative

cloud solutions while exploring

networking, cybersecurity and modern cloud

architectures.

</p>



<a

href="/documents/Diana CV.pdf"

target="_blank"

className="resume-button"

>

Download Resume

</a>


</div>


</div>


</section>

);

}


export default Hero;