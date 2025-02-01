"use client";

import { useEffect, useState } from "react";

// icons
import { BsMoonStarsFill } from "react-icons/bs";
import { MdWbSunny } from "react-icons/md";

// useTheme
import { useTheme } from "next-themes";

// We also need dynamic classes, many ways are present - we will use classnames
import classNames from "classnames";

const DarkLight = () => {
  // set theme stats
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setTheme("dark");

  }, [])

  return (
    //   from bg-zinc-700 to bg-violet-300 of 'div' container
    <div className="fixed top-4 right-4 w-12 h-[18px] rounded-full bg-violet-300 flex items-center">
      {/*  inner container for icons - switch button*/}

      <span
        className={classNames(
          "w-7 h-7 flex items-center justify-center rounded-full",
          {
            "ml-5 bg-[#033ba4] border-[#01276d]": theme === "dark",
            "bg-[#2db7f3] border border-[#0aa0e0]": theme !== "dark",
          }
        )}
      >
        {/*  */}

        {theme !== "dark" ? (
          <MdWbSunny
            onClick={() => setTheme("dark")}
            className="cursor-pointer text-[#fff701]"
            size={20}
          />
        ) : (
          <BsMoonStarsFill
            onClick={() => setTheme("light")}
            className="cursor-pointer text-[#faffbd]"
            size={16}
          />
        )}
      </span>
    </div>
  );
};

export default DarkLight;
