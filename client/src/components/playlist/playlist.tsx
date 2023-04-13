import React from "react";
import StarBorder from "@mui/icons-material/StarBorder";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";

const Playlist = () => {
  return (
    <div className="border-t-[1px] bg-black flex items-center border-rose-500 h-[150px] w-full fixed bottom-0 z-40">
      <div className="text-white flex items-center justify-between w-full p-10">
        <div className="flex">
          <div className="w-[100px] h-[100px] rounded-md overflow-hidden">
            <img
              className=" object-cover"
              src="https://i.scdn.co/image/ab67616d0000b273dc139ce5434df86c492a93df"
            />
          </div>
          <div className="p-5">
            <div>
              <span className="font-[poppins]">7LIWA - SEÑORITA FT. DJ </span>
            </div>
            <div>
              <span className="text-slate-500 font-[poppins]">7LIWA</span>
            </div>
          </div>
        </div>

        <div>
          <audio />
        </div>
        <div className="flex gap-3">
          <div>
            <FavoriteBorder />
          </div>
          <div>
            <StarBorder />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playlist;
