import React, { useState } from "react";
import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import Playlist from "../../components/playlist/playlist";
import PlayArrow from "@mui/icons-material/PlayArrow";
import Favorite from "@mui/icons-material/Favorite";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";
import { removeUserLike } from "../../redux/usersSlice";
import {
  removeIntroLike,
  removeLikes,
  selectCustom,
} from "../../redux/musicSlice";
import { selectAlbum } from "../../redux/musicSlice";
import { customAlbums } from "../../redux/musicSlice";

const LikedSongs = () => {
  const [playing, setPlaying] = useState(false);
  const dispatch = useDispatch();
  const likesSongs = useSelector((state: any) => state.users.CurrentUser);

  const removeLike = (id: any) => {
    axios
      .delete(`${process.env.REACT_APP_LOCALHOST}likes/unlike/${id}`)
      .then((res) => {
        dispatch(removeUserLike({ id: id }));
        dispatch(removeLikes({ id: id.id, ...res.data }));
        dispatch(removeIntroLike({ id: id.id, ...res.data }));
      })
      .catch((err) => console.log(err));
  };

  const handleCustomAlbum = () => {
    dispatch(customAlbums(likesSongs?.likes));
  };

  const handleSelectSong = (item: any) => {
    dispatch(selectCustom({ likes: likesSongs?.likes, songId: item?.id }));
  };

  return (
    <>
      <Sidebar />
      <Navbar />
      <div className="flex bg-black">
        <div className="lg:ml-[300px] mt-[130px] w-full">
          <div className="p-5 flex lg:gap-10 gap-5">
            <div className="lg:w-[400px] lg:h-[400px] md:w-[300px] md:h-[300px] w-[100px] h-[100px] rounded-md overflow-hidden">
              <img
                className="object-cover"
                src="https://preview.redd.it/rnqa7yhv4il71.jpg?width=640&crop=smart&auto=webp&s=819eb2bda1b35c7729065035a16e81824132e2f1"
              />
            </div>
            <div className="flex items-center gap-5">
              <span className="lg:text-8xl md:text-6xl text-2xl  text-white font-['Russo_One'] ">
                Liked Songs
              </span>
              <div
                onClick={handleCustomAlbum}
                className="bg-rose-600 lg:w-[60px] lg:h-[60px] w-[40px] h-[40px] flex items-center cursor-pointer justify-center rounded-full p-3 hover:bg-rose-900 duration-300"
              >
                <PlayArrow style={{ fontSize: "35px", color: "white" }} />
              </div>
            </div>
          </div>
          <div className="text-white lg:p-5">
            <div className="w-full h-[500px] bg-slate-800 bg-opacity-30 rounded-md overflow-scroll mb-24 ">
              {likesSongs.likes.map((item: any) => (
                <div>
                  <ul
                    onClick={() => handleSelectSong(item)}
                    className="flex w-full hover:bg-opacity-70 hover:bg-rose-900 duration-300 cursor-pointer p-2"
                  >
                    <li className="text-white flex items-center gap-1 w-[100%]">
                      <div className="w-[50px]">
                        <img
                          className="object-cover w-[40px] h-[40px] rounded-sm"
                          src={item?.music?.image}
                        />
                      </div>
                      <span className="font-[poppins] lg:text-sm md:text-sm text-[10px] w-[100%]">
                        {item?.music?.song.slice(0, 25)}....
                      </span>
                    </li>
                    <li className="text-white  w-[10%] lg:visible invisible">
                      <div className="h-[50px] flex justify-end items-center">
                        <div className="font-[poppins] text-sm">
                          {" "}
                          {item?.music?.albums?.name}
                        </div>
                      </div>
                    </li>
                    <li className="text-white w-[45%] lg:mr-[5px]">
                      <div className="h-[50px] flex justify-end items-center">
                        <div className="font-[poppins] text-sm w-[30px] flex items-center">
                          <div className="" onClick={() => removeLike(item.id)}>
                            <Favorite className="text-rose-600" />
                          </div>
                        </div>
                        <div className="font-[poppins] w-[50px] lg:text-sm text-[10px] flex justify-center">
                          {item?.music?.duration}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LikedSongs;
