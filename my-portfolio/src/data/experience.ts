export interface Experience {


institution:string;

role:string;

duration:string;

period:string;

workMode: "Onsite" | "Remote" | "Hybrid";

responsibilities:string[];

report:string;

}



export const experiences:Experience[]=[


{

institution:"National Social Insurance Fund (NSIF) Cameroon",

role:"Administrative and System Support Intern",

duration:"6 Months",

period:"September 2025 - March 2026",

workMode: "Onsite",

responsibilities:[

"Participated in daily technical and administrative activities.",

"Assisted with documentation and workflow management.",

"Applied academic knowledge in a professional environment.",

"Developed communication and problem-solving skills."

],

report:

"/documents/NSIF Internship Report.pdf"


},


{

institution:"Codveda Technologies",

role:"Frontend Development Intern",

duration:"1 Month",

period:"August 2026 - September 2026",

workMode: "Remote",

responsibilities:[

"Participated in daily technical and administrative activities.",

"Assisted with documentation and workflow management.",

"Applied academic knowledge in a professional environment.",

"Developed communication and problem-solving skills."

],

report:

"/documents/NSIF Internship Report.pdf"


},


];