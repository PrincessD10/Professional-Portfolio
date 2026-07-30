import introductionImage from "../assets/introduction.png";
import ImageFrame from "../components/ImageFrame";


function Introduction(){

return (

<section className="introduction">


<div className="container two-column">


<div className="introduction-content">


<p className="subtitle">

WELCOME

</p>


<h1 className="section-title">

Introduction

</h1>


<p className="text">

Welcome to my professional portfolio.

I am Awara Diana Tengwi, a Computer Engineering graduate with a focus in Cloud Computing.

</p>



<p className="text">

My journey combines software development, cloud technologies and networking.

I enjoy designing secure and scalable solutions that solve real-world problems.

</p>



<p className="text">


Through this portfolio, I showcase my technical skills, projects and continuous growth as I

prepare for opportunities in Cloud Engineering, Cybersecurity and Networking.

</p>


</div>




<div className="introduction-image">


<ImageFrame>

<img

src={introductionImage}

alt="Cloud computing introduction"

/>

</ImageFrame>


</div>



</div>


</section>

);

}


export default Introduction;