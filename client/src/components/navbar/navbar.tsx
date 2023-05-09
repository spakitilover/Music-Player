import React, { useState } from "react";
import Intro from "../intro/intro";
import Logout from "@mui/icons-material/Logout";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/usersSlice";
import { logOut } from "../../redux/musicSlice";
import { useNavigate } from "react-router-dom";
import Search from "@mui/icons-material/Search";
import SearchModel from "../../models/searchModel";
import Menu from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import PersonOutlineOutlined from "@mui/icons-material/PersonOutlineOutlined";
import LibraryMusicOutlined from "@mui/icons-material/LibraryMusicOutlined";
import CottageOutlined from "@mui/icons-material/CottageOutlined";
import StarBorderOutlined from "@mui/icons-material/StarBorderOutlined";
import Clear from "@mui/icons-material/Clear";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
    dispatch(logOut());
    navigate("/");
  };
  const CurrentUser = useSelector((state: any) => state.users.CurrentUser);

  return (
    <div className="w-full top-0 fixed bg-black z-50 lg:border-none border-b-2">
      <div className="flex items-center">
        <div className="w-full lg:p-5 p-3 flex items-center">
          <div className="flex items-center gap-2 lg:w-full text-rose-600">
            <Link to="/home">
              <div className="lg:text-4xl text-xl lg:w-auto w-[200px] font-['Russo_One']">
                Kabaki Music
              </div>
            </Link>

            <img
              className="w-[40px] h-[40px] lg:visible invisible"
              src="https://cdn-icons-png.flaticon.com/512/882/882634.png"
            />
          </div>

          <div className="gap-5 flex items-center lg:visible invisible">
            <SearchModel />
            <span
              onClick={handleLogout}
              className="cursor-pointer bg-yellow-500 hover:text-rose-600 duration-200 p-2 rounded-full flex items-center justify-center"
            >
              <Logout />
            </span>
          </div>
          <div
            className="text-white lg:invisible visible absolute right-0 p-3"
            onClick={handleOpen}
          >
            <div className="p-2 bg-rose-600 rounded-full hover:bg-gray-900 duration-300 cursor-pointer">
              <Menu />
            </div>
          </div>
          <div
            className={`bg-gray-950 h-full w-[350px] fixed z-30 right-0 bottom-0 ${
              open === false
                ? "translate-x-[400px] duration-500"
                : "duration-500"
            }`}
          >
            <div className="text-white flex p-5" onClick={handleClose}>
              <div className="p-2 bg-rose-600 rounded-full hover:bg-gray-900 duration-300 cursor-pointer">
                <Clear />
              </div>
            </div>

            <div className="text-white">
              <div className="lg:p-5 md:p-2 p-2">
                <Link to={"/home"}>
                  <div className="flex items-center cursor-pointer mb-3 gap-2  hover:bg-rose-600 hover:text-white duration-200 p-4 rounded-md">
                    <div className="p-2 bg-blue-900 bg-opacity-50 rounded-lg">
                      <CottageOutlined className="text-white" />
                    </div>
                    <span className="font-['Poppins'] text-white ">Home</span>
                  </div>
                </Link>

                <Link to={"/profile"}>
                  <div className="flex items-center cursor-pointer mb-3 gap-2  hover:bg-rose-600 hover:text-white duration-200 p-4 rounded-md">
                    <div className="p-2 bg-blue-900 bg-opacity-50 rounded-lg">
                      <PersonOutlineOutlined className="text-white" />
                    </div>
                    <span className="font-['Poppins'] text-white ">
                      Profile
                    </span>
                  </div>
                </Link>

                <Link to={"/albums"}>
                  <div className="flex items-center cursor-pointer mb-3 gap-2  hover:bg-rose-600 duration-200 p-4 rounded-md">
                    <div className="p-2 bg-blue-900 bg-opacity-50 rounded-lg">
                      <LibraryMusicOutlined className="text-white" />
                    </div>
                    <span className="font-['Poppins'] text-white ">Albums</span>
                  </div>
                </Link>

                <Link to={"/likedSongs"}>
                  <div className="flex items-center cursor-pointer mb-3 gap-2  hover:bg-rose-600 hover:text-white duration-200  p-4 rounded-md">
                    <div className="p-2 bg-blue-900 bg-opacity-50 rounded-lg">
                      <StarBorderOutlined className="text-white" />
                    </div>

                    <span className="font-['Poppins'] text-white">
                      Favourites
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <hr className=" w-[70%] border-blue-950 mb-5" />
            </div>

            <div className="p-5">
              <div className="flex justify-center">
                {CurrentUser?.image === null ? (
                  <div>
                    <img
                      className="w-[100px] h-[100px] object-cover rounded-full bg-gray-700"
                      src={
                        "https://img.freepik.com/free-icon/user_318-552176.jpg"
                      }
                    />
                  </div>
                ) : (
                  <img
                    className="w-[100px] h-[100px] object-cover rounded-full"
                    src={`${process.env.REACT_APP_LOCALHOST}users/${CurrentUser?.image}`}
                  />
                )}
              </div>
              <div className="p-3 flex justify-center">
                <div>
                  <Link to={"/profile"}>
                    <span className="font-['Poppins'] text-white hover:underline cursor-pointer">
                      {CurrentUser?.fullname}
                    </span>
                  </Link>
                  <div className="flex justify-center">
                    <span className="text-slate-500 font-['Poppins']">
                      {CurrentUser?.username}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex justify-center">
              <span
                onClick={handleLogout}
                className="cursor-pointer w-[50%] bg-yellow-500 hover:text-rose-600 duration-200 p-2 rounded-full flex items-center justify-center"
              >
                <Logout />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
