export interface Project {

title:string;

role:string;

description:string;

technologies:string[];

github:string;

preview:string;

report:string;

image:string;

}


export const projects:Project[]=[


{
title:"DocuTrack Pro",

role:"Full Stack Cloud Developer",

description:
"Cloud-based document tracking system designed using a serverless AWS architecture. The project includes frontend development, authentication, REST API design, database integration and cloud security considerations. Live deployment is temporarily unavailable due to inactive cloud infrastructure. The GitHub repository and technical report provide a complete overview of the system architecture, implementation, and features.",


technologies:[

"React",

"TypeScript",

"AWS Lambda",

"API Gateway",

"Amazon RDS",

"MySQL"

],


github:
"https://github.com/PrincessD10/AWS_DocuTrack-Pro.git",


preview:
"https://vercel.com/dianas-projects-7c49a078/front-end-l/ATySo7nT4cHeS5SgKWttJyLm5UD4",


report:
"/documents/DocuTrack Pro Report.pdf",


image:
"/projects/docutrack.png"

},

/*{

title:"Cloud Budget Tracker",

role:"Cloud Developer",

description:

"Cloud-based expense management application with analytics dashboard and backend integration.",

technologies:[

"React",

"Cloud Services",

"Database Design",

"REST API"

],

github:

"https://github.com/PrincessD10",

image:

"/projects/budget.png"


}*/


];