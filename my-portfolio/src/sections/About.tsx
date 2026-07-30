import aboutImage from "../assets/about.png";
import ImageFrame from "../components/ImageFrame";


function About(){

return (

<section className="about">


<div className="container two-column">


<div className="about-content">


<p className="subtitle">

MY JOURNEY

</p>


<h1 className="section-title">

About Me

</h1>



{/*<p className="text">

I am Awara Diana Tengwi, a Bachelor of Technology

graduate in Computer Engineering with some focus 

in Cloud Computing.

</p>*/}



<p className="text">

My academic journey has allowed me to develop knowledge in cloud architecture, software

development, networking and system security.

</p>



<p className="text">

I am passionate about building reliable and secure digital solutions, with a strong interest

in Cloud Engineering, Cybersecurity and Network Security.

</p>



<p className="text">

My professional goal is to continue developing my expertise through advanced studies, practical

projects and industry experience while contributing to innovative technology solutions.

</p>



</div>




<div className="about-image">


<ImageFrame>

<img

src={aboutImage}

alt="Professional growth and career journey"

/>

</ImageFrame>


</div>



</div>


</section>

);

}


export default About;