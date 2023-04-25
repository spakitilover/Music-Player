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
    <div className="h-full w-[300px] fixed bg-black z-30 mt-[100px]">
      <div className="my-10">
        <div className="flex justify-center mb-3">
          {CurrentUser?.image === null ? (
            <img
              className="w-[80px] h-[80px] object-cover rounded-full"
              src={
                "https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
              }
            />
          ) : (
            <img
              className="w-[80px] h-[80px] object-cover rounded-full"
              src={CurrentUser?.image}
            />
          )}
        </div>
        <div className="flex justify-center">
          <Link to={"/profile"}>
            <span className="font-['Poppins'] text-white hover:underline cursor-pointer">
              {CurrentUser?.fullname}
            </span>
          </Link>
        </div>
        <div className="flex justify-center">
          <span className="text-slate-500 font-['Poppins']">
            {CurrentUser?.username}
          </span>
        </div>
      </div>
      <div className="p-5">
        <Link to={"/home"}>
          <div className="flex items-center cursor-pointer mb-8 gap-2 hover:bg-rose-600 hover:text-white duration-200 p-3 rounded-md">
            <CottageOutlined className="text-white" />
            <span className="font-['Poppins'] text-white">Home</span>
          </div>
        </Link>
        <Link to={"/profile"}>
          <div className="flex items-center cursor-pointer mb-8 gap-2 hover:bg-rose-600 hover:text-white duration-200 p-3 rounded-md">
            <PersonOutlineOutlined className="text-white" />

            <span className="font-['Poppins'] text-white">Profile</span>
          </div>
        </Link>
        <Link to={"/albums"}>
          <div className="flex items-center cursor-pointer mb-8 gap-2 hover:bg-rose-600  duration-200 p-3 rounded-md">
            <LibraryMusicOutlined className="text-white" />
            <span className="font-['Poppins'] text-white">Albums</span>
          </div>
        </Link>
        <Link to={"/likedSongs"}>
          <div className="flex items-center cursor-pointer mb-8 gap-2 hover:bg-rose-600 hover:text-white duration-200 p-3 rounded-md">
            <StarBorderOutlined className="text-white" />
            <span className="font-['Poppins'] text-white">Favourites</span>
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
