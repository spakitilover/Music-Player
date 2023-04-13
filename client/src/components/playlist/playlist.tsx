import React from "react";
import StarBorder from "@mui/icons-material/StarBorder";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import PlayArrow from "@mui/icons-material/PlayArrow";
import Pause from "@mui/icons-material/Pause";
import SkipNext from "@mui/icons-material/SkipNext";
import SkipPrevious from "@mui/icons-material/SkipPrevious";
import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";

const Playlist = () => {
  return (
    <div className="border-t-[1px] bg-black flex items-center border-rose-500 h-[100px] w-full fixed bottom-0 z-40">
      <div className="text-white flex items-center justify-between w-full p-10">
        <div className="flex justify-start items-center  w-[30%]">
          <div className="w-[70px] h-[70px] rounded-md overflow-hidden">
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

        <div className="w-[40%] flex justify-center">
          <div>
            <div className="flex justify-center gap-5">
              <div className=" cursor-pointer hover:bg-rose-500 p-1  rounded-full duration-200">
                <SkipPrevious style={{ fontSize: "40px" }} />
              </div>
              <div className=" cursor-pointer hover:bg-rose-500 p-1  rounded-full duration-200">
                <PlayArrow style={{ fontSize: "40px" }} />
              </div>
              <div className=" cursor-pointer hover:bg-rose-500 p-1  rounded-full duration-200">
                <SkipNext style={{ fontSize: "40px" }} />
              </div>
            </div>
            <div className="w-[30vw] flex items-center gap-5">
              <div className="text-sm font-[poppins] text-slate-500">0:00</div>
              <Slider
                size="small"
                defaultValue={70}
                aria-label="Small"
                valueLabelDisplay="auto"
              />
              <div className="text-sm font-[poppins] text-slate-500">3:32</div>
            </div>
          </div>
        </div>

        <div className=" gap-3 w-[30%] flex justify-end">
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
