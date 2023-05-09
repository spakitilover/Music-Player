import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import Playlist from "../../components/playlist/playlist";
import axios from "axios";
import { Link } from "react-router-dom";

const Albums = () => {
  const [albums, setAlbums] = useState<Album[]>([]);

  interface Album {
    id: number;
    name: string;
    image: string;
    type: string;
  }

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_LOCALHOST}albums`)
      .then((res) => setAlbums(res.data))
      .catch((err) => console.log(err));
  }, []);

  const AlbumsEG = albums.filter((item) => item.type === "english");
  const AlbumsAR = albums.filter((item) => item.type === "arab");
  const AlbumsNG = albums.filter((item) => item.type === "nighcore");

  return (
    <>
      <Sidebar />
      <Navbar />
      <div className="flex bg-black">
        <div className="lg:ml-[300px] mt-[130px]">
          <div className="text-3xl font-['Russo_One'] lg:flex lg:justify-start text-rose-600 p-5 ">
            English Albums .
          </div>
          <div className="lg:flex lg:justify-start flex  w-full flex-wrap gap-10 lg:p-5 p-5">
            {AlbumsEG.map((item) => (
              <div>
                <div className="lg:w-[200px] lg:h-[200px] md:w-[180px] md:h-[180px] w-[140px] h-[140px] overflow-hidden rounded-md  ">
                  <Link to={`/albumsSongs/${item.id}`}>
                    <img
                      className="object-cover cursor-pointer hover:opacity-80 hover:scale-105 duration-300"
                      src={item.image}
                    />
                  </Link>
                </div>
                <div className="text-white  p-3 font-[poppins]">
                  {item.name}
                </div>
              </div>
            ))}
          </div>
          <div className="text-3xl font-['Russo_One'] text-rose-600 p-5 ">
            Arab Rap Albums .
          </div>
          <div className="lg:flex lg:justify-start flex justify-start  flex-wrap gap-10 p-5 ">
            {AlbumsAR.map((item) => (
              <div>
                <div className="lg:w-[200px] lg:h-[200px] md:w-[180px] md:h-[180px] w-[160px] h-[160px] overflow-hidden rounded-md ">
                  {" "}
                  <Link to={`/albumsSongs/${item.id}`}>
                    <img
                      className=" object-cover cursor-pointer  hover:opacity-80 hover:scale-105 duration-300"
                      src={item.image}
                    />
                  </Link>
                </div>
                <div className="text-white p-3 font-[poppins]">{item.name}</div>
              </div>
            ))}
          </div>
          <div className="text-3xl font-['Russo_One'] text-rose-600 p-5 ">
            Nightcore Albums .
          </div>
          <div className="mb-20">
            <div className="lg:flex lg:justify-start flex justify-start  flex-wrap gap-10 p-5 ">
              {AlbumsNG.map((item) => (
                <div>
                  <div className="lg:w-[200px] lg:h-[200px] md:w-[180px] md:h-[180px] w-[160px] h-[160px] overflow-hidden rounded-md ">
                    {" "}
                    <Link to={`/albumsSongs/${item.id}`}>
                      <img
                        className=" object-cover cursor-pointer  hover:opacity-80 hover:scale-105 duration-300 "
                        src={item.image}
                      />
                    </Link>
                  </div>
                  <div className="text-white p-3 font-[poppins]">
                    {item.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Albums;
