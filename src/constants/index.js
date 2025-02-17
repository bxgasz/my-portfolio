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
       "Membuat dan mengembangkan aplikasi web menggunakan Laravel, dan Vue.js.",
       "Mengoptimalisasi query database untuk meningkatkan kecepatan dan performa pemrosesan data.",
       "Mengimplementasikan design responsive pada aplikasi web agar kompatibel di seluruh device.",
     ],
   },
   {
     title: "Freelance Fullstack Developer",
     company_name: "Self Employeed",
     icon: company,
     iconBg: "#383E56",
     date: "July 2023 - present",
     points: [
       "Menegerjakan project dengan berbagai macam tech Stack dan bahasa pemrograman",
       "Melakukan Slicing dan design UI/UX",
     ],
   },
   {
     title: "Student of SMK Tunas Media",
     company_name: "Rekayasa Perangkat Lunak",
     icon: company,
     iconBg: "#383E56",
     date: "July 2020 - juny-203",
     points: [
       "Mengerjakan project tugas akhir dengan membuat aplikasi POS penjualan baju bekas",
       "Membuat aplikasi lelang online untuk tes uji kompetensi",
       "Mendapatkan sertifikasi BNSP dengan title Junior Web Programmmer",
     ],
   },
 ];
 
 const projects = [
   {
     name: "Lelang Online",
     description:
       "Aplkasi lelang berbasis web untuk mempermudah proses pelelangan antar klien dan penjual. Di bangun menggunakan Laravel",
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
       "Sebuah Klon dari aplikasi video terkenal yaitu Youtube, Membuat ulang tampilan youtube serta fungsi nya menggunakan React.js dan styling dengan TailwindCSS",
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
       "Sebuah website untuk membantu memperkenalkan dan mempromosikan produk, layanan serta jasa dari sebuah perusahaan.",
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