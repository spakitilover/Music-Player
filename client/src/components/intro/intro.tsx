import React, { useState, useEffect } from "react";
import PlayArrow from "@mui/icons-material/PlayArrow";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Music } from "../../interface/singleAlbum";
import Favorite from "@mui/icons-material/Favorite";
import {
  addIntroLike,
  removeIntroLike,
  selectAlbum,
  selectIntroSongs,
  selectSingleIntroSong,
} from "../../redux/musicSlice";
import { addLike } from "../../redux/usersSlice";

const Intro = () => {
  const [albums, setAlbums] = useState<Albums[]>([]);
  const dispatch = useDispatch();
  const Musics = useSelector((state: any) => state.music.Music);
  const songsLikesLength = Musics.map((i: any) => i.like.length);
  const MaxSongLikesValue = Math.max(...songsLikesLength);
  const MostLikedSong = Musics.find(
    (i: any) => i.like.length === MaxSongLikesValue
  );
  const ms = useSelector((state: any) => state.music.Music);
  const CurrentUser = useSelector((state: any) => state.users.CurrentUser);

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

  const handleIntroSelecet = (item: any) => {
    dispatch(selectSingleIntroSong({ music: ms, songId: item.id }));
  };

  const handleLike = (id: any) => {
    axios
      .post(
        `${process.env.REACT_APP_LOCALHOST}likes/addlike/${CurrentUser.id}`,
        {
          musicId: id,
        }
      )
      .then((res) => {
        dispatch(addLike(res.data));
        dispatch(addIntroLike({ songId: id, ...res.data }));
      });
  };

  const handleRemoveIntroLike = (item: any) => {
    axios
      .delete(`${process.env.REACT_APP_LOCALHOST}likes/unlike/${item.id}`)
      .then((res) => {
        dispatch(removeIntroLike({ id: item.id, ...res.data }));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="lg:p-5 w-full lg:ml-[300px]  mt-[120px]">
      <div className="text-3xl font-['Russo_One'] text-rose-600 p-5">
        Albums
      </div>
      <div className="lg:flex lg:justify-start md:flex md:justify-center flex justify-center flex-wrap lg:gap-10 gap-5 ">
        {albums.map((item) => (
          <div>
            <div className="lg:w-[200px] lg:h-[200px] md:w-[180px] md:h-[180px] w-[160px] h-[160px] overflow-hidden rounded-md border-b-2 border-rose-500 ">
              <Link to={`/albumsSongs/${item.id}`}>
                <img
                  className="object-cover cursor-pointer hover:opacity-80 hover:scale-105 duration-300 "
                  src={item.image}
                />
              </Link>
            </div>
            <div className="text-white p-2 font-['Russo_One']">{item.name}</div>
          </div>
        ))}
      </div>
      <div className="text-3xl font-['Russo_One'] text-rose-600 p-5">
        My Playlist
      </div>
      <div className="lg:flex">
        <div className="lg:w-[70%] lg:w-[100%] h-[300px] overflow-auto p-3">
          {Musics.map((item: any) => (
            <div>
              <ul
                className="flex w-full hover:bg-opacity-30 hover:bg-rose-800 duration-300 cursor-pointer p-2"
                onClick={() => handleIntroSelecet(item)}
              >
                <li className="text-white flex items-center lg:gap-2 gap-1 lg:w-[45%] w-[80%]">
                  <div className="">
                    <img
                      className="lg:w-[40px] lg:h-[40px] w-[30px] h-[30px] rounded-md object-cover"
                      src={item.image}
                    />
                  </div>
                  <span className="font-[poppins] lg:text-sm text-[8px] w-[50%]">
                    {item.song.slice(0, 18)}...
                  </span>
                </li>
                <li className="text-white  lg:w-[10%] w-[30%] lg:visible invisible">
                  <div className="h-[50px] flex justify-end items-center">
                    <div className="font-[poppins] lg:text-sm text-[8px]">
                      {" "}
                      {item.albums.name}
                    </div>
                  </div>
                </li>
                <li className="text-white lg:w-[45%] w-[40%] lg:mr-2 mr-0">
                  <div className="h-[50px] flex justify-end items-center">
                    <div className="font-[poppins] text-sm gap-5 flex items-center">
                      {item.like
                        ?.map((i: any) => i.users.id)
                        .includes(CurrentUser.id) ? (
                        <div
                          onClick={() =>
                            handleRemoveIntroLike(
                              item.like.find(
                                (itm: any) => itm.users.id === CurrentUser.id
                              )
                            )
                          }
                        >
                          It works
                        </div>
                      ) : (
                        <div
                          className="text-slate-500 hover:text-rose-600 duration-300"
                          onClick={() => handleLike(item.id)}
                        >
                          <Favorite className="" />
                        </div>
                      )}

                      <div className="font-[poppins] lg:text-sm text-[10px]">
                        {item?.duration}
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          ))}
        </div>

        <div className="lg:w-[30%] w-full mb-24">
          <div className="lg:text-3xl font-['Russo_One'] text-rose-600 lg:p-5 p-1 flex justify-center my-5">
            Most Liked Song!
          </div>
          <div className="text-white gap-3 p-1 flex justify-center">
            <div className="lg:flex gap-5">
              <Link to={`/albumsSongs/${MostLikedSong?.albums?.id}`}>
                <div className="flex justify-center lg:w-[130px]">
                  <img
                    className="object-cover cursor-pointe hover:opacity-80 hover:scale-105 duration-300 rounded-md lg:w-[130px] lg:h-[130px] w-[100px] h-[100px]"
                    src={MostLikedSong?.image}
                  />
                </div>
              </Link>
              <div className="text-center">
                <div className="font-['poppins'] lg:text-md text-sm text-slate-400 p-1">
                  {MostLikedSong?.albums?.name}
                </div>
                <div className="font-['poppins'] text-md text-sm p-1">
                  {MostLikedSong?.song.slice(0, 30)}
                </div>
                <div className="text-rose-600 p-1 gap-1 lg:flex lg:items-center  flex justify-center  ">
                  <div>
                    <Favorite />
                  </div>
                  <div className="font-['Russo_One']">
                    {MostLikedSong?.like?.length}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
