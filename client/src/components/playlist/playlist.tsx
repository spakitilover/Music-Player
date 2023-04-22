import React, { useState, useEffect, useRef } from "react";
import StarBorder from "@mui/icons-material/StarBorder";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import PlayArrow from "@mui/icons-material/PlayArrow";
import Pause from "@mui/icons-material/Pause";
import SkipNext from "@mui/icons-material/SkipNext";
import SkipPrevious from "@mui/icons-material/SkipPrevious";
import Slider from "@mui/material/Slider";
import VolumeUp from "@mui/icons-material/VolumeUp";
import { useSelector } from "react-redux";
import VolumeOff from "@mui/icons-material/VolumeOff";
import MusicNote from "@mui/icons-material/MusicNote";
import { useDispatch } from "react-redux";
import { next, prev } from "../../redux/musicSlice";
import { singleAlbum } from "../../interface/singleAlbum";

const Playlist = (songId: any): JSX.Element => {
  const audioElm = useRef<any>(null);
  const Click = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [length, setLength] = useState(0);
  const [liveDuration, setLiveDuration] = useState("");
  const [volume, setVolume] = useState(1.0);
  const singleAlbum = useSelector(
    (state: singleAlbum) => state.music.singleAlbum
  );
  const curr = useSelector((state: any) => state.music.curr);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };
  const NextSong = () => {
    dispatch(next());
    audioElm.current.currentTime = 0;
  };

  const PrevSong = () => {
    dispatch(prev());
    audioElm.current.currentTime = 0;
  };

  useEffect(() => {
    if (isPlaying) {
      audioElm.current?.play();
    } else {
      audioElm.current?.pause();
    }
  }, [isPlaying, NextSong, PrevSong]);

  const onPlaying = () => {
    const duration = audioElm.current?.duration;
    const getLiveDuration = audioElm.current?.currentTime;
    setDuration(duration);
    setLength((getLiveDuration / duration) * 100);
    const mins = Math.floor(getLiveDuration / 60);
    const secs = Math.floor(getLiveDuration % 60);
    const totals = `${padTo2Digits(mins)}:${padTo2Digits(secs)}`;
    setLiveDuration(totals);
  };

  const handleWidth = (e: any) => {
    const getWidth = Click.current?.clientWidth;
    const offset = e.nativeEvent.offsetX;
    const divProgress = (offset / getWidth) * 100;
    audioElm.current.currentTime = (divProgress / 100) * duration;
  };

  //Format For Duration
  function padTo2Digits(num: any) {
    return num.toString().padStart(2, "0");
  }
  const min = Math.floor(duration / 60);
  const sec = Math.floor(duration % 60);
  const total = `${padTo2Digits(min)}:${padTo2Digits(sec)}`;

  const handleVolume = (e: number) => {
    setVolume(e);
    audioElm.current.volume = e;
  };

  const dispatch = useDispatch();

  return (
    <>
      <div className="border-t-[1px] bg-black flex items-center border-rose-900 h-[100px] w-full fixed bottom-0 z-40">
        <audio
          ref={audioElm}
          src={`${process.env.REACT_APP_LOCALHOST}music/${singleAlbum[0]?.music?.[curr]?.song}`}
          onTimeUpdate={onPlaying}
        />
        {singleAlbum.length < 1 ? (
          <div className="text-white flex items-center justify-center w-full p-10 gap-3">
            <span className="font-['Press_Start_2P']">
              Start With Selecting Your Album ,Songs
            </span>

            <div className="w-[35px] h-[35px] rounded-full bg-gray-800 flex justify-center items-center">
              <MusicNote />
            </div>
          </div>
        ) : (
          <div className="text-white flex items-center justify-between w-full p-10">
            <div className="flex justify-start items-center  w-[30%]">
              <div className="">
                <img
                  className="w-[70px] h-[70px] rounded-md  object-cover"
                  src={singleAlbum[0]?.music[curr]?.image}
                />
              </div>
              <div className="p-5">
                <div>
                  <span className="font-[poppins]">
                    {singleAlbum[0]?.music[curr]?.song}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 font-[poppins]">
                    {singleAlbum[0]?.name}
                  </span>
                </div>
              </div>
            </div>

            <div className="w-[40%] flex justify-center">
              <div>
                <div className="flex justify-center gap-5">
                  <div
                    className=" cursor-pointer bg-slate-900 hover:bg-opacity-70 duration-300 hover:text-rose-500  p-1 rounded-full "
                    onClick={PrevSong}
                  >
                    <SkipPrevious style={{ fontSize: "40px" }} />
                  </div>
                  {isPlaying ? (
                    <div className=" cursor-pointer bg-slate-900 hover:bg-opacity-70 duration-300 hover:text-rose-500  p-1 rounded-full">
                      <Pause
                        style={{ fontSize: "40px" }}
                        onClick={handlePlay}
                      />
                    </div>
                  ) : (
                    <div
                      className=" cursor-pointer bg-slate-900 hover:bg-opacity-70 duration-300 p-1 hover:text-rose-500   rounded-full "
                      onClick={handlePlay}
                    >
                      <PlayArrow style={{ fontSize: "40px" }} />
                    </div>
                  )}

                  <div
                    className=" cursor-pointer bg-slate-900 hover:bg-opacity-70 duration-300 p-1 hover:text-rose-500  rounded-full"
                    onClick={NextSong}
                  >
                    <SkipNext style={{ fontSize: "40px" }} />
                  </div>
                </div>
                <div className="w-[30vw] flex items-center gap-5">
                  <div className="text-sm font-[poppins] text-slate-500">
                    {liveDuration}
                  </div>
                  <Slider
                    size="small"
                    defaultValue={0}
                    aria-label="Small"
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
              <div className="w-[150px] flex gap-3 items-center">
                {volume < 0.01 ? <VolumeOff /> : <VolumeUp />}
                <Slider
                  size="small"
                  defaultValue={volume}
                  max={1.0}
                  step={0.01}
                  aria-label="Small"
                  onChange={(e: any) => handleVolume(e.target.value)}
                />
              </div>
              <div>
                <FavoriteBorder />
              </div>
              <div>
                <StarBorder />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Playlist;
