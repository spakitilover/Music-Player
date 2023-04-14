import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import Playlist from "../../components/playlist/playlist";

const Albums = () => {
  return (
    <>
      <Sidebar />
      <Navbar />
      <Playlist />
      <div className="flex bg-black">
        <div className="ml-[300px] mt-[130px]">
          <div className="text-3xl font-['Russo_One'] text-rose-600 p-5 ">
            English Albums .
          </div>
          <div className="flex flex-wrap gap-10 p-5 ">
            <div>
              <div className="w-[200px] h-[200px] overflow-hidden rounded-md  ">
                <img
                  className="object-cover cursor-pointer hover:opacity-80 hover:scale-105 duration-300"
                  src="https://media.pitchfork.com/photos/5e273d36d7f8cd0008150f58/1:1/w_600/eminem_music.jpg"
                />
              </div>
              <div className="text-white p-3 font-[poppins]">Eminem</div>
            </div>
            <div>
              <div className="w-[200px] h-[200px]  overflow-hidden rounded-md ">
                {" "}
                <img
                  className=" object-cover cursor-pointer  hover:opacity-80 hover:scale-105 duration-300 "
                  src="https://yt3.googleusercontent.com/ytc/AGIKgqPfEfAWZaGDcCZjDo55mLDlb-Tqj3M_YOrIJdIqgQ=s900-c-k-c0x00ffffff-no-rj"
                />
              </div>
              <div className="text-white p-3 font-[poppins]">
                System of a down
              </div>
            </div>
            <div>
              <div className="w-[200px] h-[200px] rounded-md overflow-hidden">
                {" "}
                <img
                  className=" object-cover cursor-pointer  hover:opacity-80 hover:scale-105 duration-300"
                  src="https://res.klook.com/image/upload/x_519,y_0,w_881,h_1234,c_crop/c_fill,ar_1:1/v1659946710/events_admin/kgvluv2e4qe5nzptjtcz.jpg"
                />
              </div>
              <div className="text-white p-3 font-[poppins]">Alan Wolker</div>
            </div>
          </div>
          <div className="text-3xl font-['Russo_One'] text-rose-600 p-5 ">
            Arab Rap Albums .
          </div>
          <div className="flex flex-wrap gap-10 p-5 ">
            <div>
              <div className="w-[200px] h-[200px] overflow-hidden rounded-md ">
                {" "}
                <img
                  className=" object-cover cursor-pointer  hover:opacity-80 hover:scale-105 duration-300"
                  src="https://i.scdn.co/image/ab6761610000e5eb6d9d36888cf60c07345622a3"
                />
              </div>
              <div className="text-white p-3 font-[poppins]">T-FLOW</div>
            </div>

            <div>
              <div className="w-[200px] h-[200px] overflow-hidden rounded-md  ">
                <img
                  className="object-cover cursor-pointer hover:opacity-80 hover:scale-105 duration-300"
                  src="https://images.genius.com/3840f9abae5f6d441628f2e4c8f54e04.517x517x1.jpg"
                />
              </div>
              <div className="text-white p-3 font-[poppins]">PAUSE FLOW</div>
            </div>
          </div>
          <div className="text-3xl font-['Russo_One'] text-rose-600 p-5 ">
            Nightcore Albums .
          </div>
          <div className="mb-20">
            <div className="flex flex-wrap gap-10 p-5 ">
              <div>
                <div className="w-[200px] h-[200px] overflow-hidden rounded-md ">
                  {" "}
                  <img
                    className=" object-cover cursor-pointer  hover:opacity-80 hover:scale-105 duration-300 "
                    src="https://resources.tidal.com/images/758bda3f/0ac8/407e/b3d4/d6037ac067cc/640x640.jpg"
                  />
                </div>
                <div className="text-white p-3 font-[poppins]">Nightcore</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Albums;
