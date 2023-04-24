import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import Playlist from "../../components/playlist/playlist";
import PlayArrow from "@mui/icons-material/PlayArrow";
import Favorite from "@mui/icons-material/Favorite";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";
import { removeUserLike } from "../../redux/usersSlice";
import { removeLikes } from "../../redux/musicSlice";
import { selectAlbum } from "../../redux/musicSlice";
import { customAlbums } from "../../redux/musicSlice";

const LikedSongs = () => {
  const dispatch = useDispatch();
  const likesSongs = useSelector((state: any) => state.users.CurrentUser);

  const removeLike = (id: any) => {
    axios
      .delete(`${process.env.REACT_APP_LOCALHOST}likes/unlike/${id}`)
      .then((res) => {
        dispatch(removeUserLike({ id: id }));
        dispatch(removeLikes({ id: id.id, ...res.data }));
      })
      .catch((err) => console.log(err));
  };

  const handleCustomAlbum = () => {
    dispatch(customAlbums(likesSongs?.likes));
  };

  return (
    <>
      <Sidebar />
      <Navbar />
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
              <div
                onClick={handleCustomAlbum}
                className="bg-rose-600 w-[60px] h-[60px] flex items-center cursor-pointer justify-center rounded-full p-3 hover:bg-rose-900 duration-300"
              >
                <PlayArrow style={{ fontSize: "35px", color: "white" }} />
              </div>
            </div>
          </div>
          <div className="text-white p-5">
            <div className="w-full h-[500px] bg-slate-800 bg-opacity-40  rounded-md p-5">
              {likesSongs.likes.map((item: any) => (
                <ul className="flex w-full mb-3 bg-slate-900 hover:bg-opacity-70 duration-300 cursor-pointer p-1 rounded-md">
                  <li className="text-white flex items-center gap-2 w-[45%]">
                    <div className="hover:bg-rose-800 duration-200 p-2 rounded-full">
                      <PlayArrow />
                    </div>

                    <div className="">
                      <img
                        className=" object-cover w-[40px] h-[40px] rounded-md flex justify-center items-center"
                        src={item?.music?.image}
                      />
                    </div>
                    <span className="font-[poppins] text-sm w-[50%]">
                      {item?.music?.song.slice(0, 30)}....
                    </span>
                  </li>
                  <li className="text-white  w-[10%]">
                    <div className="h-[50px] flex justify-end items-center">
                      <div className="font-[poppins] text-sm">
                        {" "}
                        {item?.music?.albums?.name}
                      </div>
                    </div>
                  </li>
                  <li className="text-white w-[45%] mr-[5px]">
                    <div className="h-[50px] flex justify-end items-center">
                      <div className="font-[poppins] text-sm gap-5 flex items-center">
                        <div className="" onClick={() => removeLike(item.id)}>
                          <Favorite className="text-rose-600" />
                        </div>
                        <div className="font-[poppins]">
                          {item?.music?.duration}
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LikedSongs;
