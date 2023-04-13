import React from "react";
import Home from "@mui/icons-material/Home";
import DashboardOutlined from "@mui/icons-material/DashboardOutlined";
import PersonOutlineOutlined from "@mui/icons-material/PersonOutlineOutlined";
import LibraryMusicOutlined from "@mui/icons-material/LibraryMusicOutlined";
import CottageOutlined from "@mui/icons-material/CottageOutlined";
import StarBorderOutlined from "@mui/icons-material/StarBorderOutlined";

const Sidebar = () => {
  return (
    <div className="h-full w-[300px] fixed bg-black z-30 mt-[100px]">
      <div className="my-10">
        <div className="flex justify-center mb-3">
          <img
            className="w-[80px] h-[80px] object-cover rounded-full"
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?cs=srgb&dl=pexels-stefan-stefancik-91227.jpg&fm=jpg"
          />
        </div>
        <div className="flex justify-center">
          <span className="font-['Poppins'] text-white">Tarik Kabaki</span>
        </div>
        <div className="flex justify-center">
          <span className="text-slate-500 font-['Poppins']">
            Full stack Developer
          </span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center cursor-pointer mb-8 gap-2 hover:bg-rose-600 hover:text-white duration-200 p-3 rounded-md">
          <CottageOutlined className="text-white" />
          <span className="font-['Poppins'] text-white">Home</span>
        </div>
        <div className="flex items-center cursor-pointer mb-8 gap-2 hover:bg-rose-600 hover:text-white duration-200 p-3 rounded-md">
          <PersonOutlineOutlined className="text-white" />
          <span className="font-['Poppins'] text-white">Profile</span>
        </div>
        <div className="flex items-center cursor-pointer mb-8 gap-2 hover:bg-rose-600 hover:text-white duration-200 p-3 rounded-md">
          <DashboardOutlined className="text-white" />
          <span className="font-['Poppins'] text-white">Dashboard</span>
        </div>
        <div className="flex items-center cursor-pointer mb-8 gap-2 hover:bg-rose-600  duration-200 p-3 rounded-md">
          <LibraryMusicOutlined className="text-white" />
          <span className="font-['Poppins'] text-white">Albums</span>
        </div>
        <div className="flex items-center cursor-pointer mb-8 gap-2 hover:bg-rose-600 hover:text-white duration-200 p-3 rounded-md">
          <StarBorderOutlined className="text-white" />
          <span className="font-['Poppins'] text-white">Favourites</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
