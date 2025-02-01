import { experienceData } from "@/constants/constants";
import Heading from "./Heading";
import SectionWrapper from "./SectionWrapper";
import Image from "next/image";
import SkillsCard from "./SkillsCard";

const Experience = () => {
  return (
    <SectionWrapper>
      {/* Heading Section */}
      <Heading>Work History</Heading>

      {/* Experience Card loop - Section */}
      <div>
        {experienceData.map((item, index) => (
          // Div container section
          <div key={index} className="flex items-start mt-6 gap-x-5">
            {/* Image */}
            <div className="relative rounded-full overflow-hidden h-[50px] w-[50px] border dark:border-zinc-700">
              <Image
                sizes="24"
                alt={item.label + " Image"}
                src={item.src}
                fill
                className="w-full h-full object-cover"
              />
            </div>

            {/* 2nd Column - Take rest space */}
            <div className="flex-1">
              {/* Role in Company */}
              <h2 className="text-black dark:text-white capitalize font-extrabold text-base md:text-lg">
                {item.role}
              </h2>

              {/* Comapny Name */}
              <span className="text-[14.5px] capitalize text-zinc-500 font-bold">
                {item.company}
              </span>

              {/* Job Type - Time Span */}
              <p className="capitalize text-sm font-bold text-zinc-900 dark:text-zinc-300">{`${item.type} - ${item.date}`}</p>

              {/* Skills Section, if any */}
              <div className="mt-3 flex flex-wrap gap-x-2 gap-y-2">
                {item?.skills?.map((item, index) => (
                  <SkillsCard key={index} skill={item} />
                ))}
              </div>


              {/* Options Section, if any */}
              <ul>
                {item?.options?.map((item, index) => (
                  <li key={index} className="font-semibold list-disc text-base text-zinc-700 dark:text-zinc-400/95">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Experience;
