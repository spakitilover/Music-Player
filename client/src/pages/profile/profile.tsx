import React, { useState } from "react";
import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import Playlist from "../../components/playlist/playlist";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { useSelector } from "react-redux";
import axios from "axios";
import UploadModal from "../../models/uploadModal";

const Profile = () => {
  const CurrentUser = useSelector((state: any) => state.users.CurrentUser);

  return (
    <>
      <Sidebar />
      <Navbar />
      <div className="flex bg-black">
        <div className="lg:ml-[300px] mt-[130px] w-full p-5">
          <div className="p-5 gap-5">
            <div className="flex justify-center items-center mb-10">
              {CurrentUser.image === null ? (
                <img
                  className="lg:w-[250px] lg:h-[250px] w-[200px] h-[200px] bg-slate-700 rounded-full object-cover flex items-center justify-center"
                  src="https://img.freepik.com/free-icon/user_318-552176.jpg"
                />
              ) : (
                <img
                  className="lg:w-[250px] lg:h-[250px] w-[200px] h-[200px] rounded-full object-cover flex items-center justify-center"
                  src={`${process.env.REACT_APP_LOCALHOST}users/${CurrentUser?.image}`}
                />
              )}
            </div>

            <div className="lg:flex lg:items-center flex justify-center mb-10">
              <span className="text-5xl font-[poppins] text-white">
                {CurrentUser.fullname}
              </span>
            </div>
            <div className="flex justify-center">
              <UploadModal />
            </div>
          </div>

          <div className="w-auto flex justify-center h-auto p-5">
            <div className="">
              <div className="mb-5">
                <input
                  placeholder="Fullname"
                  className="p-4 lg:w-[500px] w-[100%] border-b-2 border-rose-600 bg-inherit focus:outline-none text-white font-[poppins]"
                />
              </div>
              <div className="mb-5">
                <input
                  placeholder="Email"
                  className="p-4 lg:w-[500px] w-[100%] border-b-2 border-rose-600 bg-inherit focus:outline-none text-white font-[poppins]"
                />
              </div>
              <div className="mb-5">
                <input
                  placeholder="Password"
                  className="p-4 lg:w-[500px] w-[100%] border-b-2 border-rose-600 bg-inherit focus:outline-none text-white font-[poppins]"
                />
              </div>
            </div>
          </div>
          <div className="p-5 flex justify-center mb-24">
            <button className="lg:p-4 p-3 text-white bg-gray-700 bg-opacity-40 rounded-md w-[250px]">
              UPDATE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
