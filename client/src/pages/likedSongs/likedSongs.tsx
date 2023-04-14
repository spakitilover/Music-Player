import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import Playlist from "../../components/playlist/playlist";
import PlayArrow from "@mui/icons-material/PlayArrow";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

const LikedSongs = () => {
  return (
    <>
      <Sidebar />
      <Navbar />
      <Playlist />
      <div className="flex bg-black">
        <div className="ml-[300px] mt-[130px] w-full">
          <div className="p-5 flex gap-10">
            <div className="w-[400px] h-[400px] rounded-md overflow-hidden">
              <img
                className="object-cover"
                src="https://preview.redd.it/rnqa7yhv4il71.jpg?width=640&crop=smart&auto=webp&s=819eb2bda1b35c7729065035a16e81824132e2f1"
              />
            </div>
            <div className="flex items-center">
              <span className="text-8xl  text-white font-['Russo_One'] ">
                Liked Songs
              </span>
            </div>
          </div>
          <div className="text-white p-5">
            <div className="w-full h-[500px] bg-slate-800 bg-opacity-40  rounded-md p-5">
              <ul className="flex w-full mb-3 bg-slate-800 bg-opacity-50 hover:bg-rose-900 duration-300 cursor-pointer p-2 rounded-md">
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
                        <Favorite className="text-rose-600" />
                      </div>
                      <div className="font-[poppins]">3 : 54</div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LikedSongs;
