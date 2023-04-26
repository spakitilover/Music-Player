import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import Playlist from "../../components/playlist/playlist";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { useSelector } from "react-redux";

const Profile = () => {
  const CurrentUser = useSelector((state: any) => state.users.CurrentUser);
  return (
    <>
      <Sidebar />
      <Navbar />
      <div className="flex bg-black">
        <div className="ml-[300px] mt-[130px] w-full p-5">
          <div className="p-5 flex gap-5">
            <div className="">
              {CurrentUser.image === null ? (
                <img
                  className="w-[250px] h-[250px] bg-slate-700 rounded-full object-cover flex items-center justify-center"
                  src="https://img.freepik.com/free-icon/user_318-552176.jpg"
                />
              ) : (
                <img
                  className="w-[250px] h-[250px] rounded-full object-cover flex items-center justify-center"
                  src={`${process.env.REACT_APP_LOCALHOST}users/${CurrentUser?.image}`}
                />
              )}
            </div>
            <div className="flex items-center">
              <span className="text-5xl font-[poppins] text-white">
                {CurrentUser.fullname}
              </span>
            </div>
          </div>
          <div className="w-auto h-auto p-5">
            <div className="p-5 flex flex-wrap  gap-8">
              <input
                placeholder="Fullname"
                className="p-4 w-[500px] border-b-2 border-rose-600 bg-inherit focus:outline-none text-white font-[poppins]"
              />
              <input
                placeholder="Email"
                className="p-4 w-[500px] border-b-2 border-rose-600 bg-inherit focus:outline-none text-white font-[poppins]"
              />
              <input
                placeholder="Password"
                className="p-4 w-[500px] border-b-2 border-rose-600 bg-inherit focus:outline-none text-white font-[poppins]"
              />
            </div>
            <div className="p-5 flex items-center">
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
              >
                <input hidden accept="image/*" type="file" />
                <PhotoCamera />
              </IconButton>
              <span className="text-white font-[poppins]">
                Upload Your Profile Image
              </span>
            </div>
            <div className="p-5 mb-24">
              <button className="p-4 text-white bg-gray-700 bg-opacity-40 rounded-md w-[250px]">
                UPDATE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
