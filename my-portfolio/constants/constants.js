// icons
import {
  FaBehance,
  FaEnvelope,
  FaFacebook,
  FaFilePdf,
  FaGithub,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaBehanceSquare } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";

export const headerData = {
  image: {
    src: "/musa.jpg",
    alt: "Musa src",
  },
  name: "Muhammad Musa Mueed",
  fatherName: "Muhammad Mueed Anwar",
  profession: "Full-Stack Developer",
  address: "Lahore, Pakistan",
  // experience: "More than a year of experinece in web development",
  experience: "2+ Years in Web Development",
  contact: "musavuswh@gmail.com",
  linkedin: "https://www.linkedin.com/in/musamueed19",
  github: "https://www.github.com/musamueed19",
  resume: "/files/cv.pdf",
  education: "BS Computer Science",
};

export const socialLinkData = [
  {
    name: "github",
    label: "github",
    href: "http://github.com/musamueed19",
    icon: <FaGithub className="text-amber-950 dark:text-zinc-300" />,
  },
  // {
  //     //   name: "twitter",
  //   label: "twitter",
  //   href: "http://twitter.com/username",
  //   icon: <FaSquareXTwitter />,
  // },
  {
    name: "linkedin",
    label: "linkedin",
    href: "http://linkedin.com/in/musamueed19",
    icon: <FaLinkedin className="text-[#2b6adf]" />,
  },
  {
    name: "youtube",
    label: "youtube",
    href: "http://youtube.com/@sayedu",
    icon: <FaYoutube className="text-red-600" />,
  },
  // {
  //     //   name: "instagram",
  //   label: "instagram",
  //   href: "http://instagram.com/musamueed19",
  //   icon: <FaInstagram className="text-pink-600" />,
  // },
  // {
  //       //   name: "behance",
  //   label: "behance",
  //   href: "http://behance.com/username",
  //   icon: <FaBehance className="text-blue-800" />,
  // },
  // {
  //       //   name: "medium",
  //   label: "medium",
  //   href: "http://medium.com/username",
  //   icon: <FaMedium />,
  // },
  {
    name: "facebook",
    label: "facebook",
    href: "http://facebook.com/sayedu.pk",
    icon: <FaFacebook className="text-blue-600" />,
  },
  {
    name: "cv",
    label: "Resume",
    href: "/files/cv.pdf",
    icon: <FaFilePdf />,
  },
  {
    name: "email",
    label: "email",
    href: "mailto:musavuswh@gmail.com",
    icon: <FaEnvelope />,
  },
];

export const aboutData = {
  heading: "Hello Everyone",
  bio: "I'm Muhammad Musa Mueed, a fullstack web developer experienced in Javascript, TypeScript,  Tailwind CSS, React, Redux, Next, Express.js, MongoDB, PostreSQL, SQL Server. I am a React Developer with a passion for building scalable and efficient web applications. I am a quick learner and a team player. I am always looking for new challenges and opportunities to grow. I am a strong believer in the importance of continuous learning and self-improvement. I am a creative problem solver and a critical thinker.",
  extraDetail:
    "I am a good communicator and a team player. I am a strong believer in the importance of teamwork and collaboration. I am a good listener and a respectful person. I am a strong believer in the importance of empathy and understanding.",
};

export const skillsData = [
  { label: "HTML", src: "/skills/html-5.png" },
  { label: "CSS", src: "/skills/css3.png" },
  // { label: "sass", src: "/skills/sass.png" },
  { label: "bootstrap", src: "/skills/bootstrap.png" },
  { label: "tailwindcss", src: "/skills/tailwind.png" },
  { label: "figma", src: "/skills/figma.png" },
  { label: "JavaScript", src: "/skills/javascript.png" },
  { label: "TypeScript", src: "/skills/typescript.png" },
  { label: "react", src: "/skills/react.png" },
  { label: "react native", src: "/skills/react-native.png" },
  { label: "redux", src: "/skills/redux.png" },
  { label: "next", src: "/skills/next-js.png" },
  // { label: "styled components", src: "/skills/styled.png" },
  { label: "MUI", src: "/skills/mui.png" },
  // { label: "vue", src: "/skills/vuejs.png" },
  // { label: "vuex", src: "/skills/vuex.png" },
  { label: "angular", src: "/skills/angularjs.png" },
  { label: "c++", src: "/skills/cplusplus.png" },
  { label: "node", src: "/skills/node-js.png" },
  { label: "graphql", src: "/skills/graphql.png" },
  { label: "express", src: "/skills/express.png" },
  { label: "mongodb", src: "/skills/mongodb.png" },
  // { label: "PHP", src: "/skills/php.png" },
  { label: "MySQL", src: "/skills/mysql.png" },
  { label: "postgres", src: "/skills/postgresql.png" },
  { label: "jest", src: "/skills/js.png" },
  { label: "heroku", src: "/skills/heroku.png" },
  { label: "netlify", src: "/skills/netlify.png" },
  // { label: "solidity", src: "/skills/ethereum.png" },
  // { label: "ethers js", src: "/skills/ethersjs.png" },
  // { label: "hardhat", src: "/skills/hardhat.png" },
  { label: "AWS", src: "/skills/aws.png" },
  { label: "docker", src: "/skills/docker.png" },
  { label: "GitHub", src: "/skills/git.png" },
];

export const experienceData = [
  // {
  //   src: "/work/nordic.jpg",
  //   company: "nordic software solution",
  //   role: "MERN Stack Developer",
  //   type: "remote",
  //   date: "11/2022 - present",
  //   skills: [
  //     { label: "node JS", src: "/skills/node-js.png" },
  //     { label: "express JS", src: "/skills/express.png" },
  //     { label: "mongoDB", src: "/skills/mongodb.png" },
  //     { label: "react JS", src: "/skills/react.png" },
  //     { label: "Next JS", src: "/skills/next-js.png" },
  //     { label: "redux", src: "/skills/redux.png" },
  //     { label: "tailwind CSS", src: "/skills/tailwind.png" },
  //     { label: "material UI", src: "/skills/mui.png" },
  //     { label: "github", src: "/skills/git.png" },
  //   ],
  // },
  // {
  //   src: "/work/devsinc.jpeg",
  //   role: "backend developer",
  //   company: "Devsinc",
  //   type: "remote",
  //   date: "10/2022 - 11/2022",
  //   skills: [
  //     { label: "node JS", src: "/skills/node-js.png" },
  //     { label: "express JS", src: "/skills/express.png" },
  //     { label: "Heroku", src: "/skills/heroku.png" },
  //     { label: "github", src: "/skills/git.png" },
  //   ],
  // },
  // {
  //   src: "/work/lookup.jpeg",
  //   role: "frontend developer",
  //   company: "lookup it solution",
  //   type: "remote",
  //   date: "10/2022 - 11/2022",
  //   skills: [
  //     { label: "next", src: "/skills/next-js.png" },
  //     { label: "react", src: "/skills/react.png" },
  //     { label: "redux", src: "/skills/redux.png" },
  //     { label: "tailwindcss", src: "/skills/tailwind.png" },
  //   ],
  // },

  // {
  //   src: "/work/udemy.png",
  //   role: "instructor",
  //   company: "udemy",
  //   type: "online",
  //   date: "5/2017 - present",
  //   options: ["45000+ udemy students", "Courses are includes projects"],
  // },
  // {
  //   src: "/work/youtube.jpg",
  //   role: "instructor",
  //   company: "youtube",
  //   type: "online",
  //   date: "2/2016 - present",
  //   options: [
  //     "1200+ youtube subsribers",
  //     "Created courses on React, Redux, Context API, Sass etc.",
  //     "Tutorial videos included projects such as social networks, Ecommerce, blogs, stripe integrations and more",
  //   ],
  // },
  {
    src: "/work/vu.png",
    // company: "Virtual University of Pakistan Software House (VUSWH)",
    company: "Virtual University of Pakistan (VU)",
    role: "Frontend Developer",
    type: "On-site",
    date: "04/2024 - 03/2025",
    skills: [
      { label: "c++", src: "/skills/cplusplus.png" },
      { label: "figma", src: "/skills/figma.png" },
      { label: "github", src: "/skills/git.png" },
      { label: "HTML", src: "/skills/html-5.png" },
      { label: "CSS", src: "/skills/css3.png" },
      { label: "JavaScript", src: "/skills/javascript.png" },
      { label: "TypeScript", src: "/skills/typescript.png" },
      { label: "tailwind CSS", src: "/skills/tailwind.png" },
      { label: "node JS", src: "/skills/node-js.png" },
      { label: "react JS", src: "/skills/react.png" },
      { label: "Next JS", src: "/skills/next-js.png" },
      { label: "redux", src: "/skills/redux.png" },
      { label: "express JS", src: "/skills/express.png" },
      { label: "MySQL", src: "/skills/mysql.png" },
      { label: "mongoDB", src: "/skills/mongodb.png" },
      { label: "docker", src: "/skills/docker.png" },
    ],
  },
  {
    src: "/work/vu.png",
    company: "Virtual University of Pakistan (VU)",
    role: "Teaching Assistant",
    type: "On-site",
    date: "03/2025 - Present",
    skills: [
      { label: "c++", src: "/skills/cplusplus.png" },
      { label: "github", src: "/skills/git.png" },
      { label: "JavaScript", src: "/skills/javascript.png" },
      { label: "TypeScript", src: "/skills/typescript.png" },
      { label: "tailwind CSS", src: "/skills/tailwind.png" },
      { label: "bootstrap", src: "/skills/bootstrap.png" },
      { label: "node JS", src: "/skills/node-js.png" },
      { label: "react JS", src: "/skills/react.png" },
      { label: "Next JS", src: "/skills/next-js.png" },
      { label: "redux", src: "/skills/redux.png" },
      { label: "express JS", src: "/skills/express.png" },
      { label: "postgres", src: "/skills/postgresql.png" },
      { label: "mongoDB", src: "/skills/mongodb.png" },
      { label: "react native", src: "/skills/react-native.png" },
      // { label: "MUI", src: "/skills/mui.png" },
      // { label: "angular", src: "/skills/angularjs.png" },
      { label: "graphql", src: "/skills/graphql.png" },
      { label: "jest", src: "/skills/js.png" },
      { label: "netlify", src: "/skills/netlify.png" },
      { label: "heroku", src: "/skills/heroku.png" },
      { label: "docker", src: "/skills/docker.png" },
      { label: "AWS", src: "/skills/aws.png" },
    ],
  },
];

export const projectsData = [
  // {
  //   label: "Build Amazone clone in Next.js, Node.js and TypeScript",
  //   src: "/projects/amazon.png",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,quam dolores accusamus delectus harum molestiae iure nesciunt amet molestias?",
  //   skills: [
  //     { label: "react", src: "/skills/react.png" },
  //     { label: "typescript", src: "/skills/typescript.png" },
  //     { label: "next", src: "/skills/next-js.png" },
  //     { label: "tailwindcss", src: "/skills/tailwind.png" },
  //     { label: "node", src: "/skills/node-js.png" },
  //     { label: "mongodb", src: "/skills/mongodb.png" },
  //   ],
  //   href: "http://github.com/link",
  //   demo: "http://www.demo.com/mydemo",
  // },
  // {
  //   label: "Build Youtube clone in Next.js 14, Graphql and TypeScript",
  //   src: "/projects/youtube.png",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,quam dolores accusamus delectus harum molestiae iure nesciunt amet molestias?",
  //   skills: [
  //     { label: "react", src: "/skills/react.png" },
  //     { label: "typescript", src: "/skills/typescript.png" },
  //     { label: "next", src: "/skills/next-js.png" },
  //     { label: "tailwindcss", src: "/skills/tailwind.png" },
  //     { label: "graphql", src: "/skills/graphql.png" },
  //   ],
  //   href: "http://github.com/link",
  //   demo: "http://www.demo.com/mydemo",
  // },

  // {
  //   label:
  //     "Build a Decentralized Charity Platform with Next.js, TypeScript, and Solidity",
  //   src: "/projects/web3.png",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,quam dolores accusamus delectus harum molestiae iure nesciunt amet molestias?",
  //   skills: [
  //     { label: "react", src: "/skills/react.png" },
  //     { label: "typescript", src: "/skills/typescript.png" },
  //     { label: "next", src: "/skills/next-js.png" },
  //     { label: "tailwindcss", src: "/skills/tailwind.png" },
  //     { label: "solidity", src: "/skills/ethereum.png" },
  //     { label: "hardhat", src: "/skills/hardhat.png" },
  //   ],
  //   href: "http://github.com/link",
  //   demo: "http://www.demo.com/mydemo",
  // },
  // {
  //   label: "Build Upwork clone using Next.js 14, TypeScript and Graphql",
  //   src: "/projects/upwork.png",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,quam dolores accusamus delectus harum molestiae iure nesciunt amet molestias?",
  //   skills: [
  //     { label: "react", src: "/skills/react.png" },
  //     { label: "typescript", src: "/skills/typescript.png" },
  //     { label: "next", src: "/skills/next-js.png" },
  //     { label: "tailwindcss", src: "/skills/tailwind.png" },
  //     { label: "solidity", src: "/skills/graphql.png" },
  //   ],
  //   href: "http://github.com/link",
  //   demo: "http://www.demo.com/mydemo",
  // },
  {
    label: "Appify Landing Page - Next.js 14, TypeScript",
    src: "/projects/appify0.png",
    description: (
      <>
        <ul className="list-inside space-y-2">
          <li>1- Section based Routing </li>
          <li>2- Design Responsiveness with TailwindCSS</li>
          <li>3- Strongly typed with TypeScript</li>
          <li>4- Scrolling Animation with Asios</li>
        </ul>
      </>
    ),
    skills: [
      { label: "git", src: "/skills/git.png" },
      { label: "typescript", src: "/skills/typescript.png" },
      { label: "tailwindcss", src: "/skills/tailwind.png" },
      { label: "react", src: "/skills/react.png" },
      { label: "next", src: "/skills/next-js.png" },
    ],
    href: "https://github.com/musamueed19/Appify-Landing-WW",
    demo: "https://musa-appify.vercel.app/",
  },
  {
    label: "Movix App - React, TMDB API",
    src: "/projects/movix0.png",
    description: (
      <>
        <ul className="list-inside space-y-2">
          <li>1- All Movies Information</li>
          <li>2- Collection of All movies and tv shows</li>
          <li>
            3- Secure API Integration & Redux for Global States Management
          </li>
          <li>4- Movies, Casts, Role and Trailer Information</li>
        </ul>
      </>
    ),
    skills: [
      { label: "git", src: "/skills/git.png" },
      { label: "javascript", src: "/skills/javascript.png" },
      { label: "tailwindcss", src: "/skills/tailwind.png" },
      { label: "react", src: "/skills/react.png" },
      { label: "redux", src: "/skills/redux.png" },
    ],
    href: "https://github.com/musamueed19/Movix-Web-App",
    demo: "https://musa-movix.vercel.app/",
  },
  {
    label: "Point Of Sales (POS) Application - React, Redux, Express",
    src: "/projects/igpos11.png",
    description: (
      <>
        <ul className="list-inside space-y-2">
          <li>1- List of all Categories based Items</li>
          <li>2- Add to Cart & Cart Management Functionality</li>
          <li>3- Order Details & Order Bill Print</li>
          <li>4- User & Admin (Auth) Management</li>
          <li>5- Products, Bills & Customers Management</li>
        </ul>
      </>
    ),
    skills: [
      { label: "git", src: "/skills/git.png" },
      { label: "javascript", src: "/skills/javascript.png" },
      { label: "tailwindcss", src: "/skills/tailwind.png" },
      { label: "react", src: "/skills/react.png" },
      { label: "redux", src: "/skills/redux.png" },
      { label: "express JS", src: "/skills/express.png" },
      { label: "mongoDB", src: "/skills/mongodb.png" },
    ],
    href: "https://github.com/musamueed19/POS-Application",
    demo: "https://igpos.vercel.app/",
  },
];

export const reviewsData = [
  {
    src: "/reviews/1.jpg",
    name: "Ryan Florence",
    company: "Remix & React Training",
    comment: "I feel like an idiot for not using Tailwind CSS until now.",
  },
  {
    src: "/reviews/2.jpg",
    name: "Debbie O'Brien",
    company: "Senior Program Manager at Microsoft",
    comment:
      "Have been working with CSS for over ten years and Tailwind just makes my life easier. It is still CSS and you use flex, grid, etc. but just quicker to write and maintain.",
  },
  {
    src: "/reviews/3.jpg",
    name: "Kent C. Dodds",
    company: "Developer and Educator",
    comment: "Skip to the end. Use @tailwindcss.",
  },
  {
    src: "/reviews/4.jpg",
    name: "Guillermo Rauch",
    company: "vercel",
    comment:
      "If I had to recommend a way of getting into programming today, it would be HTML + CSS with Tailwind CSS.",
  },
  {
    src: "/reviews/5.jpg",
    name: "Ben Furfie",
    company: "Developer",
    comment:
      "I’ve been writing CSS for over 20 years, and up until 2017, the way I wrote it changed frequently. It’s not a coincidence Tailwind was released the same year. It might look wrong, but spend time with it and you’ll realize semantic CSS was a 20 year mistake.",
  },
  {
    src: "/reviews/6.jpg",
    name: "Shruti Balasa",
    company: "Full Stack Web Developer & Tech Educator",
    comment:
      "I was bad at front-end until I discovered Tailwind CSS. I have learnt a lot more about design and CSS itself after I started working with Tailwind. Creating web pages is 5x faster now.",
  },
  {
    src: "/reviews/7.jpg",
    name: "Sara Vieira",
    company: "CodeSandbox",
    comment:
      "I have no design skills and with Tailwind I can actually make good looking websites with ease and it's everything I ever wanted in a CSS framework.",
  },
  {
    src: "/reviews/8.jpg",
    name: "Didier Catz",
    company: "Co-Founder @StyptApp",
    comment: "Tailwind makes writing code feel like I’m using a design tool.",
  },
  {
    src: "/reviews/9.jpg",
    name: "Pieter Levels",
    company: "Maker",
    comment: "I don't use it but if I would use something I'd use Tailwind!",
  },
  {
    src: "/reviews/10.jpg",
    name: 'Bret "The Hitman" Hart',
    company: "Former WWE Champion",
    comment: "Tailwind CSS is the greatest CSS framework on the planet.",
  },
  {
    src: "/reviews/11.jpg",
    name: "Sarah Dayan",
    company: "Staff Software Engineer @Algolia",
    comment:
      "Tailwind CSS is bridging the gap between design systems and products. It’s becoming the defacto API for styling.",
  },
  {
    src: "/reviews/12.jpg",
    name: "Greg Sullivan",
    company: "WordPress Developer",
    comment:
      "With Tailwind I can offer my clients faster turnaround times on custom WordPress themes, both for initial builds and for future revisions.",
  },
];
