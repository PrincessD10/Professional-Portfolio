export interface Experience {


institution:string;

role:string;

duration:string;

period:string;

workMode: "Onsite" | "Remote" | "Hybrid";

responsibilities:string[];

report?:string;

}



export const experiences:Experience[]=[


{

institution:"National Social Insurance Fund (NSIF) Cameroon",

role:"Administrative and System Support Intern",

duration:"6 Months",

period:"September 2025 - March 2026",

workMode: "Onsite",

responsibilities:[

"Classified, organized, and maintained documents for efficient storage and retrieval.",
"Received clients, identified their needs, and provided appropriate guidance.",
"Managed records accurately while maintaining attention to detail and confidentiality.",
"Collaborated with colleagues to address client requests and daily workplace needs."

],

report:

"/documents/NSIF Internship Report.pdf"


},

{
  institution: "Cameroon Telecommunications (CAMTEL)",

  role: "Network Engineering Intern",

  duration: "3 Months",

  period: "September 2026 - Present",

  workMode: "Onsite",

  responsibilities: [
    "Gained practical exposure to telecommunications infrastructure, network-related equipment, and technical working environments.",

    "Participated in technical learning activities and departmental assignments under the guidance of experienced personnel.",

    "Contributed to a warehouse management digitalization project through physical inventory, material identification, and inventory data preparation using Microsoft Excel.",

    "Verified physical inventory against existing records, updated inventory files, and helped identify and resolve discrepancies.",

    "Prepared structured inventory data for submission to the responsible team for processing through the warehouse management application."
  ],

}


/*{

institution:"Codveda Technologies",

role:"Frontend Development Intern",

duration:"1 Month",

period:"August 2026 - September 2026",

workMode: "Remote",

responsibilities:[

"Built responsive, accessible web pages using semantic HTML5, CSS, and mobile-first design.",

"Developed a React single-page application with client-side routing and shared state management.",

"Integrated REST APIs with Axios, handling loading/error states and debounced search.",

"Localized a product concept for a real market (Cameroon), including currency and phone validation."

],

report:

""


},*/


];