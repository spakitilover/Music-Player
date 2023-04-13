import React from "react";
import Intro from "../intro/intro";

const Navbar = () => {
  return (
    <div className="w-full top-0 fixed bg-black z-50">
      <div className="flex items-center">
        <div className="w-full p-10 flex">
          <div className=" text-4xl font-['Russo_One'] w-full text-rose-600">
            Kabati Music
          </div>
          <input
            className="p-3 rounded-full border-[1px] border-rose-600 bg-inherit text-white outline-none font-[poppins] w-[500px]"
            placeholder="Search for Song..."
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
