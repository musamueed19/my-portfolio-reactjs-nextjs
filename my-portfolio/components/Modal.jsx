// icons
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import SkillsCard from "./SkillsCard";

import Link from "next/link";

// icons
import { FaGithub } from "react-icons/fa";
import { TbWorldSearch } from "react-icons/tb";

const Modal = ({ content, setModal }) => {
  const { label, description, src, skills, href, demo } = content;
  return (
    <div
      className="fixed inset-0 w-full h-screen bg-black/25 p-4 backdrop-blur-md z-10"
      id="modal"
    >
      {/* Inner COntainer */}

      <div className="flex items-center justify-center h-full w-full">
        {/* Content on the Modal Overlay */}
        <div className="relative flex max-w-screen-xl w-full max-h-[80vh] overflow-auto scrollbar-hide bg-white dark:bg-zinc-900 p-6 rounded-lg border border-zinc-100 dark:border-zinc-700">
          {/* Close Icon */}
          <IoClose
            size={24}
            className="absolute top-1 right-1 cursor-pointer text-zinc-700 dark:text-zinc-400 hover:text-black hover:dark:text-zinc-300"
            onClick={() => setModal(false)}
          />

          {/* <div>
            <h2 className="font-bold mt-3 mb-6 text-xl md:text-xl text-zinc-700 dark:text-zinc-200 leading-[24px]">
              {label}
            </h2>
            <p className="text-base text-zinc-500 dark:text-zinc-400 font-semibold mt-2">
              {description}
            </p>
          </div> */}

          <div className="flex flex-wrap h-fit gap-x-6">
            {/* Main 2 - Sections */}

            {/* Section - 1 */}
            <div className="relative w-full lg:w-[400px] rounded-lg overflow-hidden my-6">
              <div className="pt-[56.25%]">
                <Image
                  sizes="24"
                  src={src}
                  alt={label}
                  fill
                                  className="w-full h-full absolute inset-0"
                                  priority
                />
              </div>
            </div>

            {/* Section - 2 */}
            <div className="flex-1 space-y-3">
              {/* Heading */}
              <h2 className="font-bold mt-3 mb-6 text-xl md:text-xl text-zinc-700 dark:text-zinc-200 leading-[24px]">
                {label}
              </h2>

              {/* Skills Section, if any */}
              <div className="flex flex-wrap gap-x-2 gap-y-2">
                {skills?.map((item, index) => (
                  <SkillsCard key={index} skill={item} />
                ))}
              </div>

              {/* Description */}
              <p className="text-base text-zinc-500 dark:text-zinc-400 font-semibold mt-2">
                {description}
              </p>

              {/* Share Source Code & Demo Link */}
              <div className="flex flex-wrap items-center justify-start gap-2">
                <Link
                  href={href}
                  target="_blank"
                  className="font-bold flex items-center justify-center border border-zinc-400/90 dark:border-zinc-700/90 bg-zinc-50 dark:bg-zinc-800 w-fit rounded-md px-3 py-2 gap-x-2 transition-all duration-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/40 cursor-pointer"
                >
                  Discover Code
                  <FaGithub
                    size={20}
                    className="text-amber-950 dark:text-zinc-400"
                  />
                </Link>
                <Link
                  href={demo}
                  target="_blank"
                  className="font-bold flex items-center justify-center border border-zinc-400/90 dark:border-zinc-700/90 bg-zinc-50 dark:bg-zinc-800 w-fit rounded-md px-3 py-2 gap-x-2 transition-all duration-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/40 cursor-pointer"
                >
                  Explore
                  <TbWorldSearch
                    size={20}
                    className="text-zinc-700 dark:text-zinc-400"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
