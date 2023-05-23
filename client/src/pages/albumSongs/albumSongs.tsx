import React, { useEffect, useState, useRef } from "react";
import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import Playlist from "../../components/playlist/playlist";
import PlayArrow from "@mui/icons-material/PlayArrow";
import Favorite from "@mui/icons-material/Favorite";
import { Link, useLocation, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addIntroLike,
  addingLike,
  removeIntroLike,
  selectAlbum,
  selectSong,
} from "../../redux/musicSlice";
import axios from "axios";
import { useSelector } from "react-redux";
import { addLike } from "../../redux/usersSlice";
import { removeUserLike } from "../../redux/usersSlice";
import { removeLikes } from "../../redux/musicSlice";

const AlbumSongs: React.FC = () => {
  // const [singleAlbum, setSingleAlbum] = useState<SingleAlbum>();
  const [singleSong, setSingleSong] = useState<any>();
  const [songId, setSongId] = useState<any>();
  const dispatch = useDispatch();
  const param = useParams();
  const CurrentUser = useSelector((state: any) => state.users.CurrentUser);
  const singleAlbums = useSelector((state: any) => state.music.Album);
  const location = useLocation();
  const idId = location.pathname.split("/")[2];

  const singleAlbum = singleAlbums.find((i: any) => i.id == idId);

  interface SingleAlbum {
    id: number;
    name: string;
    image: string;
    music: Music[];
  }

  interface Music {
    id: number;
    song: string;
    image: string;
    like: any;
  }

  /* useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_LOCALHOST}albums/${param.id}`)
      .then((res) => setSingleAlbum(res.data))
      .catch((err) => console.log(err));
  }, []);
*/
  const handleSelectAlbum = () => {
    dispatch(selectAlbum(singleAlbum?.id));
  };

  const HandleSelectSong = (item: any) => {
    axios
      .get(`${process.env.REACT_APP_LOCALHOST}music/single/${item}`)
      .then((res) =>
        dispatch(
          selectSong({ musicId: res.data.id, albumId: res.data.albums.id })
        )
      )
      .catch((err) => console.log(err));
  };

  // handling likes API

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
        dispatch(addingLike(res.data));
        dispatch(addIntroLike({ songId: id, ...res.data }));
      });
  };

  const removeLike = (id: any) => {
    axios
      .delete(`${process.env.REACT_APP_LOCALHOST}likes/unlike/${id.id}`)
      .then((res) => {
        dispatch(removeUserLike({ id: id.id }));
        dispatch(removeLikes({ id: id.id, ...res.data }));
        dispatch(removeIntroLike({ id: id.id, ...res.data }));
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Sidebar />
      <Navbar />
      <div className="flex bg-black">
        <div className="lg:ml-[300px] mt-[130px] w-full ">
          <div className="p-5 flex items-center lg:gap-10 gap-5 ">
            <div>
              <div className="lg:w-[400px] lg:h-[400px] md:w-[300px] md:h-[300px] w-[100px] h-[100px] overflow-hidden rounded-full">
                <img className="object-cover" src={singleAlbum?.image} />
              </div>
            </div>
            <div className="flex items-center gap-5">
              <span className="lg:text-6xl md:text-5xl text-3xl font-['Russo_One'] text-white">
                {singleAlbum?.name}
              </span>
              <div
                onClick={handleSelectAlbum}
                className="bg-rose-600 lg:w-[60px] lg:h-[60px] w-[40px] h-[40px] flex items-center cursor-pointer justify-center rounded-full p-3 hover:bg-rose-900 duration-300"
              >
                <PlayArrow style={{ fontSize: "35px", color: "white" }} />
              </div>
            </div>
          </div>

          <div className="text-white lg:p-5">
            <div className="w-full h-[500px] bg-slate-800 bg-opacity-30 rounded-md overflow-scroll lg:mb-16 mb-28 ">
              {singleAlbum?.music.map((item: any) => (
                <div>
                  <ul
                    onClick={() => HandleSelectSong(item.id)}
                    className="flex w-full hover:bg-opacity-70 hover:bg-rose-900 duration-300 cursor-pointer lg:p-2 p-2 "
                  >
                    <li className="text-white flex items-center gap-2 ml-3 lg:w-[45%] w-[100%]  ">
                      <div className="">
                        <img
                          className="object-cover w-[40px] h-[40px] rounded-md "
                          src={item?.image}
                        />
                      </div>
                      <span className="font-[poppins] lg:text-sm md:text-sm text-[12px] w-[80%]">
                        {item.song.slice(0, 30)}....
                      </span>
                    </li>
                    <li className="text-white w-[10%] lg:visible invisible">
                      <div className="h-[50px] flex justify-end items-center">
                        <div className="font-[poppins] text-sm hover:text-green-600 duration-200">
                          {singleAlbum.name}
                        </div>
                      </div>
                    </li>
                    <li className="text-white w-[45%]">
                      <div className="h-[50px] flex justify-end items-center">
                        <div className="font-[poppins] text-sm flex items-center">
                          {item.like
                            ?.map((it: any) => it.users.id)
                            .includes(CurrentUser.id) ? (
                            <div
                              className="text-rose-600 w-[30px]"
                              onClick={() =>
                                removeLike(
                                  item.like.find(
                                    (itm: any) =>
                                      itm.users.id === CurrentUser.id
                                  )
                                )
                              }
                            >
                              <Favorite className="" />
                            </div>
                          ) : (
                            <div
                              className=" text-slate-500 hover:text-rose-600 duration-300 w-[30px]"
                              onClick={() => handleLike(item.id)}
                            >
                              <Favorite className="" />
                            </div>
                          )}
                        </div>
                        <div className="font-[poppins] lg:w-[50px] w-[20px] lg:text-sm text-[8px] flex justify-center">
                          {item?.duration}
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

export default AlbumSongs;
