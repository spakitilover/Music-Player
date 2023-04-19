import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import Playlist from "../../components/playlist/playlist";
import PlayArrow from "@mui/icons-material/PlayArrow";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectAlbum } from "../../redux/musicSlice";
import axios from "axios";

const AlbumSongs = () => {
  const [singleAlbum, setSingleAlbum] = useState<SingleAlbum>();
  const [singleSong, setSingleSong] = useState<any>();
  const dispatch = useDispatch();
  const param = useParams();

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
  }

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_LOCALHOST}albums/${param.id}`)
      .then((res) => setSingleAlbum(res.data))
      .catch((err) => console.log(err));
  }, []);

  const test = (id: number) => {
    axios
      .get(`${process.env.REACT_APP_LOCALHOST}music/${id}`)
      .then((res) => setSingleSong(res.data))
      .catch((err) => console.log(err));
  };

  const handleSelectAlbum = () => {
    dispatch(selectAlbum(singleAlbum?.id));
  };

  return (
    <>
      <Sidebar />
      <Navbar />
      <Playlist />
      <div className="flex bg-black">
        <div className="ml-[300px] mt-[130px] w-full">
          <div className="p-5 flex gap-10">
            <div className="w-[400px] h-[400px] rounded-full overflow-hidden">
              <img className="object-cover" src={singleAlbum?.image} />
            </div>
            <div className="flex items-center gap-5">
              <span className="text-5xl font-[poppins] text-white">
                {singleAlbum?.name}
              </span>
              <div
                onClick={handleSelectAlbum}
                className="bg-rose-600 w-[60px] h-[60px] flex items-center cursor-pointer justify-center rounded-full p-3 hover:bg-rose-900 duration-300"
              >
                <PlayArrow style={{ fontSize: "35px", color: "white" }} />
              </div>
            </div>
          </div>

          <div className="text-white p-5">
            <div className="w-full h-[500px] bg-slate-800 bg-opacity-40  rounded-md p-5">
              {singleAlbum?.music.map((item) => (
                <ul className="flex w-full mb-3 bg-slate-800 bg-opacity-50 hover:bg-rose-900 duration-300 cursor-pointer p-2 rounded-xl">
                  <li className="text-white flex items-center gap-2 ml-3 w-[45%]  ">
                    <div
                      className="p-2 bg-gray-900 rounded-md flex justify-center items-center hover:bg-gray-700 duration-200"
                      onClick={() => test(item.id)}
                    >
                      <PlayArrow />
                    </div>

                    <div className="">
                      <img
                        className=" object-cover w-[40px] h-[40px] rounded-md "
                        src={item?.image}
                      />
                    </div>
                    <span className="font-[poppins] text-sm w-[50%]">
                      {item.song}
                    </span>
                  </li>
                  <li className="text-white  w-[10%]">
                    <div className="h-[50px] flex justify-end items-center">
                      <div className="font-[poppins] text-sm">
                        {singleAlbum.name}
                      </div>
                    </div>
                  </li>
                  <li className="text-white w-[45%]">
                    <div className="h-[50px] flex justify-end items-center">
                      <div className="font-[poppins] text-sm gap-5 flex items-center">
                        <div>
                          <FavoriteBorder className="text-slate-300" />
                        </div>
                        <div className="font-[poppins]">3 : 54</div>
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

export default AlbumSongs;
