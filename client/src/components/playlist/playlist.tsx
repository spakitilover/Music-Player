import React, { useState, useEffect, useRef } from "react";
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
import axios from "axios";

const Playlist = () => {
  const audioElm = useRef<any>(null);
  const Click = useRef<any>(null);
  const [songs, setSongs] = useState<Songs[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [length, setLength] = useState(0);
  const [currentSong, setCurrentSong] = useState<any>(0);

  interface Songs {
    id: number;
    song: string;
    image: string;
    name: string;
    albums: Albums;
  }

  interface Albums {
    id: number;
    image: string;
    type: string;
    name: string;
  }

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_LOCALHOST}music`)
      .then((res) => setSongs(res.data));
  }, []);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      audioElm.current?.play();
    } else {
      audioElm.current?.pause();
    }
  }, [isPlaying]);

  const NextSong = () => {
    const isLast = currentSong === songs.length - 1;
    const newI = isLast ? 0 : currentSong + 1;
    setCurrentSong(newI);
    setIsPlaying(!isPlaying);
    audioElm.current.currentTime = 0;
  };

  const PrevSong = () => {
    const isFirstSlide = currentSong === 0;
    const newI = isFirstSlide ? songs.length - 1 : currentSong - 1;
    setCurrentSong(newI);
    setIsPlaying(!isPlaying);
    audioElm.current.currentTime = 0;
  };

  const onPlaying = () => {
    const duration = audioElm.current?.duration;
    const getLiveDuration = audioElm.current?.currentTime;

    setDuration(duration);
    setLength((getLiveDuration / duration) * 100);
  };

  const handleWidth = (e: any) => {
    const getWidth = Click.current?.clientWidth;
    const offset = e.nativeEvent.offsetX;

    const divProgress = (offset / getWidth) * 100;
    audioElm.current.currentTime = (divProgress / 100) * duration;
  };

  const min = Math.floor(duration / 60);

  const sec = Math.floor(duration % 60);

  const total = `${padTo2Digits(min)}:${padTo2Digits(sec)}`;

  function padTo2Digits(num: any) {
    return num.toString().padStart(2, "0");
  }

  return (
    <>
      <audio
        ref={audioElm}
        src={`${process.env.REACT_APP_LOCALHOST}music/${songs[currentSong]?.song}`}
        onTimeUpdate={onPlaying}
      />
      <div className="border-t-[1px] bg-black flex items-center border-rose-900 h-[100px] w-full fixed bottom-0 z-40">
        <div className="text-white flex items-center justify-between w-full p-10">
          <div className="flex justify-start items-center  w-[30%]">
            <div className="">
              <img
                className="w-[70px] h-[70px] rounded-md  object-cover"
                src={songs[currentSong]?.image}
              />
            </div>
            <div className="p-5">
              <div>
                <span className="font-[poppins]">
                  {songs[currentSong]?.song}
                </span>
              </div>
              <div>
                <span className="text-slate-500 font-[poppins]">
                  {songs[currentSong]?.albums.name}
                </span>
              </div>
            </div>
          </div>

          <div className="w-[40%] flex justify-center">
            <div>
              <div className="flex justify-center gap-5">
                <div
                  className=" cursor-pointer hover:bg-rose-500 p-1  rounded-full duration-200 "
                  onClick={PrevSong}
                >
                  <SkipPrevious style={{ fontSize: "40px" }} />
                </div>
                <div className=" cursor-pointer hover:bg-rose-500 p-1  rounded-full duration-200">
                  <PlayArrow
                    style={{ fontSize: "40px" }}
                    onClick={handlePlay}
                  />
                </div>
                <div
                  className=" cursor-pointer hover:bg-rose-500 p-1  rounded-full duration-200"
                  onClick={NextSong}
                >
                  <SkipNext style={{ fontSize: "40px" }} />
                </div>
              </div>
              <div className="w-[30vw] flex items-center gap-5">
                <div className="text-sm font-[poppins] text-slate-500">
                  0:00
                </div>
                <Slider
                  size="small"
                  defaultValue={0}
                  aria-label="Small"
                  valueLabelDisplay="auto"
                  value={length}
                  onClick={handleWidth}
                  ref={Click}
                />
                <div className="text-sm font-[poppins] text-slate-500">
                  {total}
                </div>
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
    </>
  );
};

export default Playlist;
