import Heading from "./Heading";

//

import { socialLinkData } from "@/constants/constants";
import Link from "next/link";
import SectionWrapper from "./SectionWrapper";

const Contacts = () => {
  return (
    <SectionWrapper>
      <Heading>Contacts</Heading>

      {/* Social List Container */}
      <div className="flex flex-wrap items-center gap-x-5 gap-y-4">
        {/* Social contacts link */}
        {socialLinkData.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            target="_blank"
            className="flex items-center capitalize space-x-2 bg-zinc-200/55 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700/90 rounded-md transition-all duration-300 px-3 py-2"
          >
            {item.icon}
            <span className="text-sm capitalize font-medium text-zinc-700 dark:text-white">
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Contacts;
