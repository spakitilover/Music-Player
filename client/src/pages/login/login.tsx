import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import jwtDecode from "jwt-decode";
import { loginUser } from "../../redux/usersSlice";
import { useNavigate } from "react-router-dom";
import { getAllAlbums } from "../../redux/musicSlice";
import { getAllMusic } from "../../redux/musicSlice";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const handleLogin = () => {
    axios
      .post(`${process.env.REACT_APP_LOCALHOST}auth/login`, {
        username,
        password,
      })
      .then((res) => {
        Navigate("/home");
        dispatch(loginUser(jwtDecode(res.data.Token)));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_LOCALHOST}music`).then((res) => {
      dispatch(getAllMusic(res.data));
    });
  }, []);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_LOCALHOST}albums`).then((res) => {
      dispatch(getAllAlbums(res.data));
    });
  }, []);

  return (
    <div className="h-screen  bg-slate-950 flex items-center">
      <div className="w-full">
        <div className="text-6xl font-['Pacifico'] w-full text-rose-600 flex justify-center mb-5">
          Kabaki Music
        </div>
        <div className="flex justify-center items-center h-full">
          <div className="w-[550px] h-auto">
            <div className="flex items-center justify-center mb-5">
              <div className="my-5 flex justify-center items-center">
                <img
                  src="https://t3.ftcdn.net/jpg/04/54/66/12/360_F_454661277_NtQYM8oJq2wOzY1X9Y81FlFa06DVipVD.jpg"
                  className=" flex justify-center items-center w-[150px] h-[150px] rounded-full border-white border-2 "
                />
              </div>
            </div>

            <div className="mb-10 flex justify-center">
              <span className="text-white text-3xl font-['Press_Start_2P']">
                LOGIN
              </span>
            </div>
            <div>
              <div className="w-full flex justify-center mb-5 ">
                <input
                  className="p-4 w-[70%] rounded-full bg-slate-200 focus:outline-none font-['poppins'] placeholder:text-gray-500"
                  placeholder="Username"
                  onChange={(e: any) => setUsername(e.target.value)}
                />
              </div>
              <div className="w-full flex justify-center">
                <input
                  className="p-4 w-[70%]  rounded-full bg-slate-200 focus:outline-none font-['poppins'] placeholder:text-gray-500"
                  placeholder="Password"
                  type="password"
                  onChange={(e: any) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="my-10 w-full flex justify-center">
              <button
                onClick={handleLogin}
                className="p-3 w-[50%] rounded-full bg-white border-black border-2 font-['Pacifico']"
              >
                LOGIN
              </button>
            </div>
            <div className="my-10 w-full flex justify-center">
              <span className="text-slate-200 font-['Press_Start_2P']">
                REGISTER
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
