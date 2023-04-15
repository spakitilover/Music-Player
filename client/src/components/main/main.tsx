import React, { useState } from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className=" h-screen w-full bg-orange-400">
      <div className="flex h-full ">
        <div className="flex-1 flex justify-center items-center bubble ">
          <div className="w-full h-full flex justify-center items-center">
            <img
              className="w-[800px] h-[800px] z-10 object-contain"
              src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/52746/headphone-emoji-clipart-xl.png"
            />
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="w-full h-full  flex items-center justify-center ">
            <div className="">
              <div className=" flex justify-center items-center my-10">
                <span className="text-6xl text-center font-['Russo_One']">
                  MUSIC FOR EVERYONE
                </span>
              </div>
              <div className="flex justify-center items-center my-5">
                <p className="text-2xl text-slate-100 text-center font-[poppins]">
                  Without Music , Life would be a mistake
                </p>
              </div>
              <div className=" flex justify-center items-center ">
                <Link to={"/home"}>
                  <button className="p-5 bg-slate-800 text-white w-[300px] rounded-md font-['Press_Start_2P'] hover:text-rose-600 duration-300">
                    START LISTENING
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
