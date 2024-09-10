import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
      <div className="flex flex-row gap-3 items-center">
        <h1 className=" text-blue-500 font-bold text-2xl">
          tkokfor93171 portfolio
        </h1>
      </div>

       <div className="flex flex-row gap-7 mb-2">
        {Socials.map((social) => (
          <Image
            key={social.name}
            className={`text-${social.color}`}
            src={social.src}
            alt={social.name}
            width={28}
            height={28}
          />
        ))}  
      </div>
    </div>
  );
};

export default Navbar;