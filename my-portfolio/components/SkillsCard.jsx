import classNames from "classnames";
import Image from "next/image";

const SkillsCard = ({ key, skill }) => {

  const { src, label } = skill;

  return (
    //   Container for 2 sections (1) Skills Image, and (2) Title
    // hover:bg-zinc-200/70
    <div
      key={key}
      className="flex items-center space-x-2 border dark:border-zinc-700 py-1.5 px-2.5 rounded-md bg-zinc-100/90 dark:bg-zinc-800/40 dark:hover:bg-zinc-800 cursor-pointer hover:scale-105 hover:shadow-lg transition-all duration-300"
    >
      {/* Skill icon img */}
      <div
        className={classNames("relative w-[25px] h-[25px]", {
          "bg-white rounded-full": label.toLowerCase().includes("next"),
          "bg-white rounded-md overflow-hidden": label
            .toLowerCase()
            .includes("styled components"),
        })}
      >
        <Image
          sizes="25"
          src={src}
          alt={label + " image"}
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
