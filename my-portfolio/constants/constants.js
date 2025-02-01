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
    alt: "Musa Image",
  },
  name: "Muhammad Musa Mueed",
  fatherName: "Muhammad Mueed Anwar",
  profession: "Frontend React Web Developer",
  address: "Lahore, Pakistan",
  experience: "More than a year of experinece in web development",
  contact: "musa.swh@gmail.com",
  linkedin: "https://www.linkedin.com/in/musamueed19",
  github: "https://www.github.com/musamueed19",
  resume: "https://drive.google.com/file/d/1u6Q7Q7Q",
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
    href: "mailto:musa.swh@gmail.com",
    icon: <FaEnvelope />,
  },
];

export const aboutData = {
  heading: "Hello Everyone",
  bio: "I'm Muhammad Musa Mueed, a frontend web developer experienced in Javascript, React, Next, and Tailwind CSS. I am a React Developer with a passion for building scalable and efficient web applications. I am a quick learner and a team player. I am always looking for new challenges and opportunities to grow. I am a strong believer in the importance of continuous learning and self-improvement. I am a creative problem solver and a critical thinker.",
  extraDetail:
    "I am a good communicator and a team player. I am a strong believer in the importance of teamwork and collaboration. I am a good listener and a respectful person. I am a strong believer in the importance of empathy and understanding.",
};

export const skillsData = [
  { label: "HTML", src: "/skills/html-5.png" },
  { label: "CSS", src: "/skills/css3.png" },
  { label: "sass", src: "/skills/sass.png" },
  { label: "bootstrap", src: "/skills/bootstrap.png" },
  { label: "tailwindcss", src: "/skills/tailwind.png" },
  { label: "figma", src: "/skills/figma.png" },
  { label: "JavaScript", src: "/skills/javascript.png" },
  { label: "TypeScript", src: "/skills/typescript.png" },
  { label: "react", src: "/skills/react.png" },
  { label: "react native", src: "/skills/react-native.png" },
  { label: "redux", src: "/skills/redux.png" },
  { label: "next", src: "/skills/next-js.png" },
  { label: "styled components", src: "/skills/styled.png" },
  { label: "MUI", src: "/skills/mui.png" },
  { label: "vue", src: "/skills/vuejs.png" },
  { label: "vuex", src: "/skills/vuex.png" },
  { label: "angular", src: "/skills/angularjs.png" },
  { label: "c++", src: "/skills/cplusplus.png" },
  { label: "node", src: "/skills/node-js.png" },
  { label: "graphql", src: "/skills/graphql.png" },
  { label: "express", src: "/skills/express.png" },
  { label: "mongodb", src: "/skills/mongodb.png" },
  { label: "PHP", src: "/skills/php.png" },
  { label: "MySQL", src: "/skills/mysql.png" },
  { label: "postgres", src: "/skills/postgresql.png" },
  { label: "jest", src: "/skills/js.png" },
  { label: "heroku", src: "/skills/heroku.png" },
  { label: "netlify", src: "/skills/netlify.png" },
  { label: "solidity", src: "/skills/ethereum.png" },
  { label: "ethers js", src: "/skills/ethersjs.png" },
  { label: "hardhat", src: "/skills/hardhat.png" },
  { label: "AWS", src: "/skills/aws.png" },
  { label: "docker", src: "/skills/docker.png" },
  { label: "GitHub", src: "/skills/git.png" },
];

export const experienceData = [
  {
    src: "/work/nordic.jpg",
    company: "nordic software solution",
    role: "MERN Stack Developer",
    type: "remote",
    date: "11/2022 - present",
    skills: [
      { label: "node JS", src: "/skills/node-js.png" },
      { label: "express JS", src: "/skills/express.png" },
      { label: "mongoDB", src: "/skills/mongodb.png" },
      { label: "react JS", src: "/skills/react.png" },
      { label: "Next JS", src: "/skills/next-js.png" },
      { label: "redux", src: "/skills/redux.png" },
      { label: "tailwind CSS", src: "/skills/tailwind.png" },
      { label: "material UI", src: "/skills/mui.png" },
      { label: "github", src: "/skills/git.png" },
    ],
  },
  {
    src: "/work/devsinc.jpeg",
    role: "backend developer",
    company: "Devsinc",
    type: "remote",
    date: "10/2022 - 11/2022",
    skills: [
      { label: "node JS", src: "/skills/node-js.png" },
      { label: "express JS", src: "/skills/express.png" },
      { label: "Heroku", src: "/skills/heroku.png" },
      { label: "github", src: "/skills/git.png" },
    ],
  },
  {
    src: "/work/lookup.jpeg",
    role: "frontend developer",
    company: "lookup it solution",
    type: "remote",
    date: "10/2022 - 11/2022",
    skills: [
      { label: "next", src: "/skills/next-js.png" },
      { label: "react", src: "/skills/react.png" },
      { label: "redux", src: "/skills/redux.png" },
      { label: "tailwindcss", src: "/skills/tailwind.png" },
    ],
  },

  {
    src: "/work/udemy.png",
    role: "instructor",
    company: "udemy",
    type: "online",
    date: "5/2017 - present",
    options: ["45000+ udemy students", "Courses are includes projects"],
  },
  {
    src: "/work/youtube.jpg",
    role: "instructor",
    company: "youtube",
    type: "online",
    date: "2/2016 - present",
    options: [
      "1200+ youtube subsribers",
      "Created courses on React, Redux, Context API, Sass etc.",
      "Tutorial videos included projects such as social networks, Ecommerce, blogs, stripe integrations and more",
    ],
  },
];

export const projectsData = [
  {
    label: "Build Amazone clone in Next.js, Node.js and TypeScript",
    src: "/projects/amazon.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,quam dolores accusamus delectus harum molestiae iure nesciunt amet molestias?",
    skills: [
      { label: "react", src: "/skills/react.png" },
      { label: "typescript", src: "/skills/typescript.png" },
      { label: "next", src: "/skills/next-js.png" },
      { label: "tailwindcss", src: "/skills/tailwind.png" },
      { label: "node", src: "/skills/node-js.png" },
      { label: "mongodb", src: "/skills/mongodb.png" },
    ],
    href: "http://github.com/link",
    demo: "http://www.demo.com/mydemo",
  },
  {
    label: "Build Youtube clone in Next.js 14, Graphql and TypeScript",
    src: "/projects/youtube.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,quam dolores accusamus delectus harum molestiae iure nesciunt amet molestias?",
    skills: [
      { label: "react", src: "/skills/react.png" },
      { label: "typescript", src: "/skills/typescript.png" },
      { label: "next", src: "/skills/next-js.png" },
      { label: "tailwindcss", src: "/skills/tailwind.png" },
      { label: "graphql", src: "/skills/graphql.png" },
    ],
    href: "http://github.com/link",
    demo: "http://www.demo.com/mydemo",
  },

  {
    label:
      "Build a Decentralized Charity Platform with Next.js, TypeScript, and Solidity",
    src: "/projects/web3.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,quam dolores accusamus delectus harum molestiae iure nesciunt amet molestias?",
    skills: [
      { label: "react", src: "/skills/react.png" },
      { label: "typescript", src: "/skills/typescript.png" },
      { label: "next", src: "/skills/next-js.png" },
      { label: "tailwindcss", src: "/skills/tailwind.png" },
      { label: "solidity", src: "/skills/ethereum.png" },
      { label: "hardhat", src: "/skills/hardhat.png" },
    ],
    href: "http://github.com/link",
    demo: "http://www.demo.com/mydemo",
  },
  {
    label: "Build Upwork clone using Next.js 14, TypeScript and Graphql",
    src: "/projects/upwork.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,quam dolores accusamus delectus harum molestiae iure nesciunt amet molestias?",
    skills: [
      { label: "react", src: "/skills/react.png" },
      { label: "typescript", src: "/skills/typescript.png" },
      { label: "next", src: "/skills/next-js.png" },
      { label: "tailwindcss", src: "/skills/tailwind.png" },
      { label: "solidity", src: "/skills/graphql.png" },
    ],
    href: "http://github.com/link",
    demo: "http://www.demo.com/mydemo",
  },
];
