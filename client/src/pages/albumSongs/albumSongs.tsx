import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import Playlist from "../../components/playlist/playlist";
import PlayArrow from "@mui/icons-material/PlayArrow";
import BookmarkBorderOutlined from "@mui/icons-material/BookmarkBorderOutlined";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";

const AlbumSongs = () => {
  return (
    <>
      <Sidebar />
      <Navbar />
      <Playlist />
      <div className="flex bg-black">
        <div className="ml-[300px] mt-[130px] w-full">
          <div className="p-5 flex gap-10">
            <div className="w-[400px] h-[400px] rounded-full overflow-hidden">
              <img
                className="object-cover"
                src="https://images.genius.com/3840f9abae5f6d441628f2e4c8f54e04.517x517x1.jpg"
              />
            </div>
            <div className="flex items-center">
              <span className="text-5xl font-[poppins] text-white">
                PUASE FLOW
              </span>
            </div>
          </div>
          <div className="text-white p-5">
            <div className="w-full h-[500px] bg-slate-800 bg-opacity-40  rounded-md p-5">
              <ul className="flex w-full mb-3 bg-slate-800 bg-opacity-50 hover:bg-rose-900 duration-300 cursor-pointer p-2 rounded-xl">
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
        </div>
      </div>
    </>
  );
};

export default AlbumSongs;
