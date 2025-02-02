"use client";
import { reviewsData } from "@/constants/constants";
import Heading from "./Heading";
import SectionWrapper from "./SectionWrapper";

import Image from "next/image";

// recat-msonry
import Masonry from "react-masonry-css";
import { useState } from "react";

export const Reviews = () => {
  // counter for showing reviews
  const [showing, setShowing] = useState(6);

  return (
    <SectionWrapper>
      {/* Heading Section */}
      <Heading>Testimonials</Heading>
      <h1 className="font-black text-3xl md:text-5xl capitalize mt-5">
        What{" "}
        <strong className="text-violet-600 dark:text-zinc-400">
          People Say
        </strong>
      </h1>

      {/* More detail for me */}
      <p className="text-lg font-medium w-full lg:w-6/12 mt-5 mb-10 leading-6">
        I developed products that are more than pretty. I make them shippable
        and useable.
      </p>

      {/* grid for reviews */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4"> */}
      <div className="relative w-full">
        {showing < reviewsData.length && (
          <>
            {/* Show button */}
            <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-white/80 dark:from-black/80 to-transparent flex justify-center items-end">
              <button type="button" onClick={() => setShowing(prev => (prev + 6))} className="bg-violet-500 text-white rounded-lg hover:bg-violet-600 shadow-lg px-3.5 py-2 font-bold text-base">Show more</button>
            </div>
          </>
        )}
        <Masonry
          breakpointCols={{
            default: 3,
            1200: 3,
            1000: 2,
            700: 1,
          }}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {reviewsData.slice(0, showing).map((item, index) => (
            //   Container div
            <div
              key={index}
              className="bg-zinc-50 dark:bg-zinc-900 rounded-md p-7 border border-zinc-100 dark:border-zinc-800 transition-all duration-300"
            >
              <div className="flex flex-grow gap-x-5">
                {/* Another card div - 2 main section */}
                {/* 1st section */}
                <div className="relative w-[56px] h-[56px] rounded-full overflow-hidden">
                  <Image
                    src={item.src}
                    className="w-full h-full"
                    fill
                    alt={item.name}
                  />
                </div>

                {/* 2nd section */}
                <div className="flex-1">
                  {/* client name */}
                  <h1 className="font-bold capitalize text-lg text-zinc-900 dark:text-zinc-300">
                    {item.name}
                  </h1>

                  {/* company name */}
                  <span className="block mt-[1px] text-base text-zinc-500 dark:text-zinc-300/85 font-semibold leading-5">
                    {item.company}
                  </span>
                </div>
              </div>

              {/* comment */}
              <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
                {item.comment}
              </p>
            </div>
          ))}
        </Masonry>
      </div>
    </SectionWrapper>
  );
};
