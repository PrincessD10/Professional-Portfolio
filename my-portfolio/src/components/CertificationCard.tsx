import type {Certification} from "../data/certifications";


interface Props{

certification:Certification;

}



function CertificationCard({

certification

}:Props){


return(

<div className="certification-card">


<h3>

{certification.name}

</h3>


<p>

{certification.issuer}

</p>


{

certification.date &&

<p>

{certification.date}

</p>

}



<a

href={certification.link}

target="_blank"

rel="noreferrer"

className="project-link"

>

View Certificate

</a>


</div>

);


}


export default CertificationCard;