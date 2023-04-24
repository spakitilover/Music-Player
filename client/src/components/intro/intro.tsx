import React, { useState, useEffect } from "react";
import PlayArrow from "@mui/icons-material/PlayArrow";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Music } from "../../interface/singleAlbum";
import Favorite from "@mui/icons-material/Favorite";

const Intro = () => {
  const [albums, setAlbums] = useState<Albums[]>([]);
  const dispatch = useDispatch();
  const Musics = useSelector((state: any) => state.music.Music);

  interface Albums {
    id: number;
    name: string;
    image: string;
    music: Music[];
  }

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_LOCALHOST}albums`)
      .then((res) => setAlbums(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-5 w-full ml-[300px] mt-[100px]">
      <div className="text-3xl font-['Russo_One'] text-rose-600 p-5">
        Albums
      </div>
      <div className="flex flex-wrap gap-10  ">
        {albums.map((item) => (
          <div>
            <div className="w-[200px] h-[200px] overflow-hidden rounded-md  ">
              <Link to={`/albumsSongs/${item.id}`}>
                <img
                  className="object-cover cursor-pointer hover:opacity-80 hover:scale-105 duration-300"
                  src={item.image}
                />
              </Link>
            </div>
            <div className="text-white p-3 font-[poppins]">{item.name}</div>
          </div>
        ))}
      </div>
      <div className="text-3xl font-['Russo_One'] text-rose-600 p-5">Songs</div>
      <div className="w-[50vw] h-[300px] overflow-auto p-3">
        {Musics.map((item: any) => (
          <ul className="flex w-full mb-3 bg-slate-900 hover:bg-opacity-70 duration-300 cursor-pointer p-1 rounded-md">
            <li className="text-white flex items-center gap-2  w-[45%]  ">
              <div className="p-2 hover:bg-rose-800 duration-200 rounded-full">
                <PlayArrow />
              </div>

              <div className="">
                <img
                  className="w-[40px] h-[40px] rounded-md  object-cover"
                  src={item.image}
                />
              </div>
              <span className="font-[poppins] text-sm w-[50%]">
                {item.song.slice(0, 18)}...
              </span>
            </li>
            <li className="text-white  w-[10%]">
              <div className="h-[50px] flex justify-end items-center">
                <div className="font-[poppins] text-sm">
                  {" "}
                  {item.albums.name}
                </div>
              </div>
            </li>
            <li className="text-white w-[45%] mr-2">
              <div className="h-[50px] flex justify-end items-center">
                <div className="font-[poppins] text-sm gap-5 flex items-center">
                  <div className="text-slate-500 hover:text-rose-600 duration-300 ">
                    <Favorite className="" />
                  </div>
                  <div className="font-[poppins]">{item?.duration}</div>
                </div>
              </div>
            </li>
          </ul>
        ))}
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
