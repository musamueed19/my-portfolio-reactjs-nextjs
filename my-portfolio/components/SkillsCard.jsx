import classNames from "classnames";
import Image from "next/image";

const SkillsCard = ({ key, skill }) => {

  const { src, label } = skill;

  return (
    //   Container for 2 sections (1) Skills Image, and (2) Title
    <div
      key={key}
      className="flex items-center space-x-2 border dark:border-zinc-700 py-1.5 px-2 rounded-md bg-zinc-50 dark:bg-zinc-800/50 hover:bg-zinc-100 dark:hover:bg-zinc-800  cursor-pointer"
    >
      {/* Skill icon img */}
      <div className={classNames("relative w-[25px] h-[25px]", {
        'bg-white rounded-full': label.includes("next"),
        'bg-white rounded-sm': label.includes("styled components"),
      })}>
        <Image
          src={src}
          alt={label + "image"}
          fill
          className="w-full h-full object-cover"
        />
      </div>

      {/* Skill name */}
      <span className="capitalize text-base text-zinc-700 font-bold dark:text-zinc-200">
        {label}
      </span>
    </div>
  );
};

export default SkillsCard;
