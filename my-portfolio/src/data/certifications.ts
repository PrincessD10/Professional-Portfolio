export interface Certification {

  name: string;

  issuer: string;

  date?: string;

  description: string;

  link: string;

}


export const certifications: Certification[] = [

  {

    name: "Introduction to Cybersecurity",

    issuer: "Cisco Networking Academy",

    date: "August 2026",

    description:
      "Completed the Introduction to Cybersecurity course and gained foundational knowledge of cybersecurity concepts, threats, vulnerabilities, and security practices.",

    link: "/certificates/cisco-introduction-to-cybersecurity.pdf"

  },

  {
  name: "Certificate of Participation",

  issuer: "CAMTEL",

  date: "October 2026",

  description:
    "Participated in inventory counting at CAMTEL telecommunications warehouses in Douala as part of the CAMTEL Warehouse Digitalization Project 2026 (WMS-CT).",
  
    link: "/certificates/certificate-of-participation.pdf"
}



];