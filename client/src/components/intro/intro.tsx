import React from "react";
import PlayArrow from "@mui/icons-material/PlayArrow";
import BookmarkBorderOutlined from "@mui/icons-material/BookmarkBorderOutlined";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";

const Intro = () => {
  return (
    <div className="p-5 w-full ml-[300px] mt-[100px]">
      <div className="text-3xl font-['Russo_One'] text-rose-600 p-5">
        Albums
      </div>
      <div className="flex flex-wrap gap-10  ">
        <div>
          <div className="w-[200px] h-[200px] overflow-hidden rounded-md  ">
            <img
              className="object-cover cursor-pointer hover:opacity-80 hover:scale-105 duration-300"
              src="https://images.genius.com/3840f9abae5f6d441628f2e4c8f54e04.517x517x1.jpg"
            />
          </div>
          <div className="text-white p-3 font-[poppins]">PAUSE FLOW</div>
        </div>
        <div>
          <div className="w-[200px] h-[200px] overflow-hidden rounded-md  ">
            {" "}
            <img
              className=" object-cover cursor-pointer  hover:opacity-80 hover:scale-105 duration-300"
              src="https://media.pitchfork.com/photos/5e273d36d7f8cd0008150f58/1:1/w_600/eminem_music.jpg"
            />
          </div>
          <div className="text-white p-3 font-[poppins]">Eminem</div>
        </div>
        <div>
          <div className="w-[200px] h-[200px] overflow-hidden rounded-md ">
            {" "}
            <img
              className=" object-cover cursor-pointer  hover:opacity-80 hover:scale-105 duration-300"
              src="https://i.scdn.co/image/ab6761610000e5eb6d9d36888cf60c07345622a3"
            />
          </div>
          <div className="text-white p-3 font-[poppins]">T-FLOW</div>
        </div>
        <div>
          <div className="w-[200px] h-[200px]  overflow-hidden rounded-md ">
            {" "}
            <img
              className=" object-cover cursor-pointer  hover:opacity-80 hover:scale-105 duration-300 "
              src="https://yt3.googleusercontent.com/ytc/AGIKgqPfEfAWZaGDcCZjDo55mLDlb-Tqj3M_YOrIJdIqgQ=s900-c-k-c0x00ffffff-no-rj"
            />
          </div>
          <div className="text-white p-3 font-[poppins]">System of a down</div>
        </div>
        <div>
          <div className="w-[200px] h-[200px] overflow-hidden rounded-md ">
            {" "}
            <img
              className=" object-cover cursor-pointer  hover:opacity-80 hover:scale-105 duration-300 "
              src="https://resources.tidal.com/images/758bda3f/0ac8/407e/b3d4/d6037ac067cc/640x640.jpg"
            />
          </div>
          <div className="text-white p-3 font-[poppins]">Nightcore</div>
        </div>
        <div>
          <div className="w-[200px] h-[200px] rounded-md overflow-hidden">
            {" "}
            <img
              className=" object-cover cursor-pointer  hover:opacity-80 hover:scale-105 duration-300"
              src="https://res.klook.com/image/upload/x_519,y_0,w_881,h_1234,c_crop/c_fill,ar_1:1/v1659946710/events_admin/kgvluv2e4qe5nzptjtcz.jpg"
            />
          </div>
          <div className="text-white p-3 font-[poppins]">Alan Wolker</div>
        </div>
      </div>
      <div className="text-3xl font-['Russo_One'] text-rose-600 p-5">Songs</div>
      <div className="w-[50vw] h-[350px]  ">
        <ul className="flex w-full mb-3 bg-slate-900 hover:bg-rose-900 duration-300 cursor-pointer p-2 rounded-xl">
          <li className="text-white flex items-center gap-2 ml-3 w-[45%]  ">
            <PlayArrow />
            <div className="w-[40px] h-[40px] rounded-md overflow-hidden">
              <img
                className=" object-cover"
                src="https://i.scdn.co/image/ab67616d0000b273dc139ce5434df86c492a93df"
              />
            </div>
            <span className="font-[poppins] text-sm w-[50%]">
              7LIWA - SEÑORITA FT. DJ{" "}
            </span>
          </li>
          <li className="text-white  w-[10%]">
            <div className="h-[50px] flex justify-end items-center">
              <div className="font-[poppins] text-sm">7liwa</div>
            </div>
          </li>
          <li className="text-white w-[45%]">
            <div className="h-[50px] flex justify-end items-center">
              <div className="font-[poppins] text-sm gap-5 flex items-center">
                <div>
                  <FavoriteBorder className="text-slate-300" />
                </div>
                <div className="font-[poppins]">3 : 54</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Intro;

/**  <ul className="flex w-full mb-3">
          <li className="text-white flex-1">
            <h2 className=" flex  text-slate-500 text-sm justify-center">
              Songs
            </h2>
          </li>
          <li className="text-white flex-1 ">
            {" "}
            <h2 className=" text-slate-500 font-[poppins] text-sm">Albums</h2>
          </li>
          <li className="text-white flex-2">
            {" "}
            <h2 className=" text-slate-500 font-[poppins] text-sm">Time</h2>
          </li>
        </ul> */
