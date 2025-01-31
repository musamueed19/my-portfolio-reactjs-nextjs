import { headerData } from "@/constants/constants"
import Image from "next/image";

// icons
import { FaMapMarkerAlt } from "react-icons/fa";

const Header = () => {

    const {image, name, fatherName, profession, address, experience, resume, linkedin, github, contact, education} = headerData;

  return (
    <div className="flex items-center gap-x-8 justify-center flex-grow">
      {/* Image Section */}
      <div className="relative w-[150px] h-[150px] rounded-full overflow-hidden hover:scale-110 transition-all duration-500 hover:rotate-2 rotate-12">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover h-full w-full rotate-12"
          priority
        />
      </div>

      {/* Name Section */}
      <div>
        {/* My Name */}
        <h1 className="text-4xl md:text-5xl font-black capitalize text-violet-700 dark:text-white">
          {name}
              </h1>
              

              {/* My Profession */}
              <h3 className="mt-2 text-xl font-bold capitalize dark:text-zinc-400">{profession}</h3>
              
              {/* 3 Section - address, education, experience */}
              <div className="flex items-center gap-x-4">
                  
                  {/* 1st section */}
                  <div className="flex items-center space-x-2"><FaMapMarkerAlt /> <span>{address}</span></div>
              </div>
      </div>
    </div>
  );
}

export default Header