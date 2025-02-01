import { aboutData } from "@/constants/constants";
import Heading from "./Heading";
import SectionWrapper from "./SectionWrapper";
import Image from "next/image";

const About = () => {
  const {heading, bio, extraDetail} = aboutData;

  return (
    <SectionWrapper>
      {/* Heading - Section */}
      <Heading>About Me</Heading>

      {/* About Data - Section */}

      <div className="relative flex items-center">
      {/* About Me, Heading */}
      <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white">{`${heading}`}</h3>

      {/* 👋🏻 */}
        <Image sizes="24" src={"/wave.svg"} alt="wave emoji" height={50} width={50} />
      </div>

      {/* About me bio */}
      <p className="text-base md:text-lg mt-3 text-black dark:text-zinc-400 font-semibold">
        {bio}
      </p>
    </SectionWrapper>
  );
};

export default About;
