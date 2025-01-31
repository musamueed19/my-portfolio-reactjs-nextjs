import { headerData } from "@/constants/constants";
import Image from "next/image";

// icons
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillTerminalFill } from "react-icons/bs";
import { IoSchoolSharp } from "react-icons/io5";

// 
import HeaderInfo from "./HeaderInfo";

const Header = () => {
  const {
    image,
    name,
    fatherName,
    profession,
    address,
    experience,
    resume,
    linkedin,
    github,
    contact,
    education,
  } = headerData;

  return (
    <header className="flex pb-7 flex-wrap flex-col gap-y-9 md:flex-row items-center gap-x-8 justify-center">
      {/* Image Section */}
      <div className="relative w-[200px] md:w-[150px] h-[200px] md:h-[150px] rounded-full overflow-hidden hover:scale-110 transition-all duration-500 hover:rotate-2 rotate-12">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover h-full rounded-full w-full rotate-12"
          priority
        />
      </div>

      {/* Name Section */}
      <div className="flex-1">
        {/* My Name */}
        <h1 className="text-[1.6rem] sm:text-4xl md:text-5xl text-center md:text-left font-bold capitalize text-violet-700 dark:text-white">
          {name}
        </h1>

        {/* My Profession */}
        <h3 className="mt-2 text-xl font-semibold md:font-bold capitalize dark:text-zinc-400 text-center md:text-left">
          {profession}
        </h3>

        {/* 3 Section - address, education, experience */}
        <div className="flex mt-2 items-center gap-x-4 xl:gap-x-6 flex-wrap gap-y-1">
          {/* 1st section */}
          <HeaderInfo
            Icon={
              <FaMapMarkerAlt
                className="text-violet-900 dark:text-zinc-300"
                size={16}
              />
            }
            label={address}
          />

          {/* 2nd section */}
          <HeaderInfo
            Icon={
              <BsFillTerminalFill
                className="text-violet-900 dark:text-zinc-300"
                size={15}
              />
            }
            label={experience}
          />

          {/* 3rd section */}
          <HeaderInfo
            Icon={
              <IoSchoolSharp className="text-violet-900 dark:text-zinc-300" size={16} />
            }
            label={education}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
