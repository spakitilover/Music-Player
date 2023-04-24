import React from "react";
import Intro from "../intro/intro";
import Logout from "@mui/icons-material/Logout";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/usersSlice";
import { logOut } from "../../redux/musicSlice";
import { useNavigate } from "react-router-dom";
import Search from "@mui/icons-material/Search";
import SearchModel from "../../models/searchModel";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
    dispatch(logOut());
    navigate("/");
  };

  return (
    <div className="w-full top-0 fixed bg-black z-50">
      <div className="flex items-center">
        <div className="w-full p-10 flex  items-center">
          <div className=" text-4xl font-['Russo_One'] w-full text-rose-600">
            Kabaki Music
          </div>
          <div className="gap-5 flex items-center">
            <SearchModel />
            <span
              onClick={handleLogout}
              className="text-white cursor-pointer bg-rose-600 hover:bg-rose-900 duration-200 p-2 rounded-full flex items-center justify-center"
            >
              <Logout />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
