import { skillsData } from "@/constants/constants"
import Heading from "./Heading"
import SectionWrapper from "./SectionWrapper"
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <SectionWrapper>
      {/* Heading Section */}
      <Heading>Skills</Heading>

      {/* Skills Card Loop - Section */}
      <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
        {skillsData.map((item, index) => (
          <SkillsCard key={index} skill={item} />
        ))}
      </div>
    </SectionWrapper>
  );
}

export default Skills