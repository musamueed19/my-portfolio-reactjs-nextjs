// icons
import { FaBehance, FaEnvelope, FaFacebook, FaFilePdf, FaGithub } from "react-icons/fa";
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
    id: 1,
    name: "github",
    label: "github",
    href: "http://github.com/musamueed19",
    icon: <FaGithub className="text-amber-950" />,
  },
  {
    id: 2,
    name: "twitter",
    label: "twitter",
    href: "http://twitter.com/username",
    icon: <FaSquareXTwitter />,
  },
  {
    id: 3,
    name: "linkedin",
    label: "linkedin",
    href: "http://linkedin.com/in/musamueed19",
    icon: <FaLinkedin className="text-[#2b6adf]" />,
  },
  {
    id: 4,
    name: "youtube",
    label: "youtube",
    href: "http://youtube.com/@sayedu",
    icon: <FaYoutube className="text-red-600" />,
  },
  {
    id: 5,
    name: "instagram",
    label: "instagram",
    href: "http://instagram.com/musamueed19",
    icon: <FaInstagram className="text-pink-600" />,
  },
  {
    id: 6,
    name: "facebook",
    label: "facebook",
    href: "http://facebook.com/sayedu.pk",
    icon: <FaFacebook className="text-blue-600" />,
  },
  {
    id: 7,
    name: "behance",
    label: "behance",
    href: "http://behance.com/username",
    icon: <FaBehance className="text-blue-800" />,
  },
  {
    id: 8,
    name: "medium",
    label: "medium",
    href: "http://medium.com/username",
    icon: <FaMedium />,
  },
  {
    id: 9,
    name: "email",
    label: "email",
    href: "mailto:musa.swh@gmail.com",
    icon: <FaEnvelope />,
  },
  {
    id: 10,
    name: "cv",
    label: "download cv",
    href: "/files/cv.pdf",
    icon: <FaFilePdf />,
  },
];
