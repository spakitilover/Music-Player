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
import { customPrev, next, prev } from "../../redux/musicSlice";
import { singleAlbum } from "../../interface/singleAlbum";
import { selectAlbum } from "../../redux/musicSlice";
import { selectSong } from "../../redux/musicSlice";
import { customNext } from "../../redux/musicSlice";
import AlbumSongs from "../../pages/albumSongs/albumSongs";

const Playlist = () => {
  const audioElm = useRef<any>(null);
  const Click = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [length, setLength] = useState(0);
  const [liveDuration, setLiveDuration] = useState("");
  const [volume, setVolume] = useState(1.0);
  const dispatch = useDispatch();
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

  const CustomNext = () => {
    dispatch(customNext());
    audioElm.current.currentTime = 0;
  };

  const CustomPrev = () => {
    dispatch(customPrev());
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

  return (
    <>
      <div className="bg-black flex items-center h-[100px] w-full fixed bottom-0 z-40">
        <div>
          <img
            src={
              singleAlbum[0]?.music[curr]?.image ||
              singleAlbum[curr]?.music.image
            }
            className="absolute w-full h-full left-0 top-0 object-cover opacity-50 lg:blur-[8px]  "
          />
        </div>
        <audio
          ref={audioElm}
          src={`${process.env.REACT_APP_LOCALHOST}music/${
            singleAlbum[0]?.music?.[curr]?.song ||
            singleAlbum[curr]?.music?.song
          }`}
          onTimeUpdate={onPlaying}
          onEnded={() => (singleAlbum[curr]?.users ? CustomNext() : NextSong())}
        />
        {singleAlbum.length < 1 ? (
          <div className="text-white flex items-center justify-center w-full p-10 gap-3 text-center">
            <span className="font-['Press_Start_2P']">
              Start With Selecting Your Album ,Songs
            </span>
          </div>
        ) : (
          <div className="text-white flex items-center justify-between relative w-full lg:p-5">
            <div className="flex justify-start items-center lg:w-[30%] w-[0%]">
              <div className=" lg:relative md:absolute absolute lg:visible invisible">
                <img
                  className="lg:w-[70px] lg:h-[70px]  rounded-full  object-cover"
                  src={
                    singleAlbum[0]?.music[curr]?.image ||
                    singleAlbum[curr]?.music.image
                  }
                />
              </div>
              <div className="p-5 lg:visible md:invisible invisible">
                <div>
                  <span className="font-[poppins] lg:text-[14px] text-[10px]">
                    {singleAlbum[0]?.music[curr]?.song?.slice(0, 25) ||
                      singleAlbum[curr]?.music.song.slice(0, 25)}
                    ....
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 font-[poppins] lg:text-[14px] text-[10px]">
                    {singleAlbum[0]?.name ||
                      singleAlbum[curr]?.music?.albums?.name ||
                      singleAlbum[0]?.music[curr]?.albums?.name}
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:w-[40%] w-[100%] flex justify-center lg:p-0 p-5">
              <div className="w-full">
                <div className="flex justify-center lg:gap-5 md:gap-3 gap-1">
                  {singleAlbum[curr]?.users ? (
                    <div
                      className="cursor-pointer bg-slate-900 hover:bg-opacity-70 duration-300 hover:text-rose-500  lg:p-1 rounded-full"
                      onClick={CustomPrev}
                    >
                      <SkipPrevious style={{ fontSize: "40px" }} />
                    </div>
                  ) : (
                    <div
                      className="cursor-pointer bg-slate-900 hover:bg-opacity-70 duration-300 hover:text-rose-500  lg:p-1 rounded-full"
                      onClick={PrevSong}
                    >
                      <SkipPrevious style={{ fontSize: "40px" }} />
                    </div>
                  )}

                  {isPlaying ? (
                    <div className="cursor-pointer bg-slate-900 hover:bg-opacity-70 duration-300 hover:text-rose-500  lg:p-1 rounded-full">
                      <Pause
                        style={{ fontSize: "40px" }}
                        onClick={handlePlay}
                      />
                    </div>
                  ) : (
                    <div
                      className=" cursor-pointer bg-slate-900 hover:bg-opacity-70 duration-300 lg:p-1 hover:text-rose-500 rounded-full "
                      onClick={handlePlay}
                    >
                      <PlayArrow style={{ fontSize: "40px" }} />
                    </div>
                  )}

                  {singleAlbum[curr]?.users ? (
                    <div
                      className=" cursor-pointer bg-slate-900 hover:bg-opacity-70 duration-300 lg:p-1 hover:text-rose-500  rounded-full"
                      onClick={CustomNext}
                    >
                      <SkipNext style={{ fontSize: "40px" }} />
                    </div>
                  ) : (
                    <div
                      className=" cursor-pointer bg-slate-900 hover:bg-opacity-70 duration-300 lg:p-1 hover:text-rose-500  rounded-full"
                      onClick={NextSong}
                    >
                      <SkipNext style={{ fontSize: "40px" }} />
                    </div>
                  )}
                </div>
                <div className="lg:w-[40vw] w-full flex items-center gap-5">
                  <div className="lg:text-sm text-[10px] font-[poppins]  text-white">
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
                  <div className="lg:text-sm text-[10px] font-[poppins] text-white">
                    {total}
                  </div>
                </div>
              </div>
            </div>

            <div className="gap-3 lg:w-[30%]   w-[0%] flex justify-end lg:visible invisible">
              <div className="lg:w-[130px] w-[0%] flex gap-3 items-center">
                {volume < 0.01 ? (
                  <VolumeOff style={{ fontSize: "20px" }} />
                ) : (
                  <VolumeUp style={{ fontSize: "20px" }} />
                )}
                <Slider
                  size="small"
                  defaultValue={volume}
                  max={1.0}
                  step={0.01}
                  aria-label="Small"
                  onChange={(e: any) => handleVolume(e.target.value)}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Playlist;
