'use client'
import { projectsData } from "@/constants/constants";
import Heading from "./Heading";

import Image from "next/image";

// icons
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import Modal from "./Modal";
import { useState } from "react";

const { default: SectionWrapper } = require("./SectionWrapper");

const Projects = () => {

    const [modal, setModal] = useState(false);
    const [modalData, setModalData] = useState(null);


    return (
      <>
        {modal && <Modal content={modalData} setModal={setModal} />}
        <SectionWrapper>
          {/* Heading Section */}
          <Heading>My Projects</Heading>

          {/* Project Crads Loop - Section */}
          <div className="mt-6 flex flex-col items-center sm:items-start flex-grow flex-wrap gap-y-8">
            {projectsData.map((item, index) => (
              //   container for card - 2 Sections, Images & for other content
              <div
                key={index}
                className="flex flex-col md:flex-row gap-x-5 gap-y-4 w-full lg:w-8/12 mb-10"
              >
                {/* Image */}
                {/* <div className="relative w-[290px] h-[200px] rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-xl">
                          <Image sizes="24" src={item.src} fill className="h-full w-full object-center" />
                      </div> */}

                <div className="relative w-[95%] mx-auto md:mx-0 md:w-[200px] pt-[56.20%] md:pt-0 md:h-28 rounded-lg overflow-hidden hover:scale-105 cursor-pointer transition-all duration-300 hover:shadow-lg">
                        <Image
                            sizes="24"
                    src={item.src}
                    alt={item.label}
                    fill
                    loading="lazy"
                    className="h-full w-full absolute top-0 left-0 right-0 bottom-0"
                  />
                </div>

                {/* Other Info - Section */}
                <div className="md:flex-1 w-[96%] mx-auto space-y-2">
                  {/* project - title */}
                  <h2 className="font-bold text-lg md:text-xl text-zinc-700 dark:text-zinc-300 leading-[24px]">
                    {item.label}
                  </h2>

                  {/* Project description */}
                  <p className="text-base text-zinc-500 dark:text-zinc-400 font-semibold leading-4 md:leading-4 mt-2">
                    {item.description.length > 100
                      ? item.description.slice(0, 100) + " ..."
                      : item.description}
                  </p>

                  {/* Details Icon */}
                  <div
                    className="font-bold flex items-center justify-center border border-zinc-400/90 dark:border-zinc-400/90 w-fit rounded-md px-2 py-1 gap-x-2 transition-all duration-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/40 cursor-pointer group"
                    onClick={() => {
                      setModal(true);
                        setModalData(item)
                    }}
                  >
                    Details
                    <FaArrowRight
                      size={16}
                      className="text-zinc-700 dark:text-zinc-400 transition-all duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </>
    );
};

export default Projects;
