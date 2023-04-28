import React from "react";
import Home from "@mui/icons-material/Home";
import DashboardOutlined from "@mui/icons-material/DashboardOutlined";
import PersonOutlineOutlined from "@mui/icons-material/PersonOutlineOutlined";
import LibraryMusicOutlined from "@mui/icons-material/LibraryMusicOutlined";
import CottageOutlined from "@mui/icons-material/CottageOutlined";
import StarBorderOutlined from "@mui/icons-material/StarBorderOutlined";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { current } from "@reduxjs/toolkit";

const Sidebar = () => {
  const CurrentUser = useSelector((state: any) => state.users.CurrentUser);

  return (
    <div className="lg:visible md:invisible invisible h-full lg:w-[300px] md:w-[50px] w-[50px] fixed bg-black lg:border-none md:border-r-2 border-r-2 border-rose-900 z-30 lg:mt-[100px]">
      <div className="lg:visible md:invisible invisible flex p-8">
        <div className="flex justify-center">
          {CurrentUser?.image === null ? (
            <div>
              <img
                className="lg:w-[80px] lg:h-[80px] object-cover rounded-full bg-gray-700"
                src={"https://img.freepik.com/free-icon/user_318-552176.jpg"}
              />
            </div>
          ) : (
            <img
              className="lg:w-[80px] lg:h-[80px] object-cover rounded-full"
              src={`${process.env.REACT_APP_LOCALHOST}users/${CurrentUser?.image}`}
            />
          )}
        </div>
        <div className="p-3">
          <Link to={"/profile"}>
            <span className="font-['Poppins'] text-white hover:underline cursor-pointer">
              {CurrentUser?.fullname}
            </span>
          </Link>
          <div>
            <span className="text-slate-500 font-['Poppins']">
              {CurrentUser?.username}
            </span>
          </div>
        </div>
      </div>
      <div className="lg:p-5 md:p-2 p-2">
        <Link to={"/home"}>
          <div className="flex items-center cursor-pointer mb-8 gap-2 hover:bg-rose-600 hover:text-white duration-200 lg:p-3 p-1 rounded-md">
            <CottageOutlined className="text-white" />
            <span className="font-['Poppins'] text-white lg:visible md:invisible invisible">
              Home
            </span>
          </div>
        </Link>
        <Link to={"/profile"}>
          <div className="flex items-center cursor-pointer mb-8 gap-2 hover:bg-rose-600 hover:text-white duration-200 lg:p-3 p-1 rounded-md">
            <PersonOutlineOutlined className="text-white" />
            <span className="font-['Poppins'] text-white lg:visible md:invisible invisible">
              Profile
            </span>
          </div>
        </Link>
        <Link to={"/albums"}>
          <div className="flex items-center cursor-pointer mb-8 gap-2 hover:bg-rose-600  duration-200 lg:p-3 p-1 rounded-md">
            <LibraryMusicOutlined className="text-white" />
            <span className="font-['Poppins'] text-white lg:visible md:invisible invisible">
              Albums
            </span>
          </div>
        </Link>
        <Link to={"/likedSongs"}>
          <div className="flex items-center cursor-pointer mb-8 gap-2 hover:bg-rose-600 hover:text-white duration-200 lg:p-3 p-1 rounded-md">
            <StarBorderOutlined className="text-white" />
            <span className="font-['Poppins'] text-white lg:visible md:invisible invisible">
              Favourites
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;

/*  <div className="flex items-center cursor-pointer mb-8 gap-2 hover:bg-rose-600 hover:text-white duration-200 p-3 rounded-md">
          <DashboardOutlined className="text-white" />
          <span className="font-['Poppins'] text-white">Dashboard</span>
        </div>
 */
