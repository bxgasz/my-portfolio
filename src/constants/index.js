import {
   mobile,
   backend,
   creator,
   web,
   javascript,
   typescript,
   html,
   css,
   reactjs,
   redux,
   tailwind,
   nodejs,
   mongodb,
   git,
   company,
   lelang,
   ytClone,
   tumpu,
   threejs,
   bootstrap,
   express,
   php,
   laravel,
   codeigniter,
   python,
   postreSql,
   mysql,
 } from "../assets";
 
 export const navLinks = [
   {
     id: "about",
     title: "About",
   },
   {
     id: "work",
     title: "Work",
   },
   {
     id: "project",
     title: "Project",
   },
   {
     id: "contact",
     title: "Contact",
   },
 ];
 
 const services = [
   {
     title: "Web Developer",
     icon: web,
   },
   {
     title: "Frontend Developer",
     icon: mobile,
   },
   {
     title: "Backend Developer",
     icon: backend,
   },
   {
     title: "Fullstack Developer",
     icon: creator,
   },
 ];
 
 const technologies = [
  {
    name: "Html",
    icon: html,
  },
  {
    name: "Css",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "php",
    icon: php,
  },
  {
    name: "laravel",
    icon: laravel,
  },
  {
    name: "codeigniter",
    icon: codeigniter,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PostreSQL",
    icon: postreSql,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  },
 ];
 
 const experiences = [
   {
     title: "Web Developer",
     company_name: "Pasukan Tempur Digital",
     icon: company,
     iconBg: "#383E56",
     date: "September 2024 - present",
     points: [
      "Create and develop web applications using Laravel, and Vue.js.",
      "Optimize database queries to improve data processing speed and performance.",
      "Implement responsive design in web applications to be compatible across devices.",
     ],
   },
   {
     title: "Freelance Fullstack Developer",
     company_name: "Self Employeed",
     icon: company,
     iconBg: "#383E56",
     date: "July 2023 - present",
     points: [
      "Working on projects with various tech stacks and programming languages",
      "Slicing and UI/UX design",
     ],
   },
   {
     title: "Student of SMK Tunas Media",
     company_name: "Software Engineering",
     icon: company,
     iconBg: "#383E56",
     date: "July 2020 - June-2023",
     points: [
      "Working on the final project by creating a POS application for selling used clothes",
      "Creating an online auction application for competency test",
      "Obtained BNSP certification with the title Junior Web Programmer",
     ],
   },
 ];
 
 const projects = [
   {
     name: "Online Auction",
     description:
       "Web-based auction application to facilitate the auction process between clients and sellers. Built using Laravel.",
     tags: [
       {
         name: "Laravel",
         color: "blue-text-gradient",
       },
       {
         name: "MySQL",
         color: "green-text-gradient",
       },
       {
         name: "Livewire",
         color: "pink-text-gradient",
       },
     ],
     image: lelang,
     source_code_link: "https://github.com/bxgasz/Lelang-Online-Laravel",
   },
   {
     name: "Youtube Clone",
     description:
       "A Clone of the famous video application Youtube, Recreate the appearance of youtube and its functions.",
     tags: [
       {
         name: "react",
         color: "blue-text-gradient",
       },
       {
         name: "api",
         color: "green-text-gradient",
       },
       {
         name: "tailwind",
         color: "pink-text-gradient",
       },
     ],
     image: ytClone,
     source_code_link: "https://github.com/bxgasz/youtube-clone-reactjs",
   },
   {
     name: "Tumpu Greeny",
     description:
       "A website to help introduce and promote the products, services and services of a company.",
     tags: [
       {
         name: "html",
         color: "blue-text-gradient",
       },
       {
         name: "css",
         color: "pink-text-gradient",
       },
     ],
     image: tumpu,
     source_code_link: "https://tumpugreenery.com",
   },
 ];
 
 export { services, technologies, experiences, projects };