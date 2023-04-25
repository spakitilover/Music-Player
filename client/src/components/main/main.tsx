import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { getAllMusic } from "../../redux/musicSlice";
import { getAllAlbums } from "../../redux/musicSlice";
import { useDispatch } from "react-redux";

const Main = () => {
  const dispatch = useDispatch();

  return (
    <div className="h-[936px] w-full bg-orange-400 z-[999] relative">
      <div className="lg:flex h-full">
        <div className="flex-1 flex justify-center items-center bg-rose-500">
          <div className="w-full h-full flex justify-center items-center">
            <img
              className="lg:w-[800px] lg:h-[800px] w-[500px] h-[500px] z-10 object-contain p-5"
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
                <Link to={"/login"}>
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
