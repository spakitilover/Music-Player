import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import jwtDecode from "jwt-decode";
import { loginUser } from "../../redux/usersSlice";
import { Link, useNavigate } from "react-router-dom";
import { getAllAlbums } from "../../redux/musicSlice";
import { getAllMusic } from "../../redux/musicSlice";
import ErrorOutlineOutlined from "@mui/icons-material/ErrorOutlineOutlined";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState(false);
  const [err, setErr] = useState(false);
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
        // decode a jwt Token before the insert
        dispatch(loginUser(jwtDecode(res.data.Token)));
        // geting all musics after login
        axios.get(`${process.env.REACT_APP_LOCALHOST}music`).then((res) => {
          dispatch(getAllMusic(res.data));
          // geting all albums after login
          axios.get(`${process.env.REACT_APP_LOCALHOST}albums`).then((res) => {
            dispatch(getAllAlbums(res.data));
          });
        });
      })
      .catch((err) => {
        console.log(err);
        setErr(true);
      });
  };

  return (
    <div className="h-[936px] bg-slate-950 flex items-center z-[999] relative">
      <div className="w-full">
        <div className="lg:text-6xl md:text-6xl text-4xl font-['Russo_One'] w-full text-rose-500 flex justify-center mb-5">
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
            <div className="mb-5">
              <div className="w-full flex justify-center mb-5 ">
                <input
                  className="p-4 w-[60%] rounded-full bg-inherit border-2 border-white text-rose-400 focus:outline-none font-['poppins'] placeholder:text-gray-500"
                  placeholder="Username"
                  onChange={(e: any) => setUsername(e.target.value)}
                />
              </div>
              <div className="w-full flex justify-center">
                <input
                  className="p-4 w-[60%] rounded-full bg-inherit border-2 border-white  text-rose-400 focus:outline-none font-['poppins'] placeholder:text-gray-500"
                  placeholder="Password"
                  type="password"
                  onChange={(e: any) => setPassword(e.target.value)}
                />
              </div>
            </div>
            {err ? (
              <div className="w-full flex justify-center items-center gap-2 text-rose-600">
                <ErrorOutlineOutlined />
                <span className="text-rose-600 font-['poppins']">
                  Wrong Username Or Password
                </span>
              </div>
            ) : null}
            <div className="my-10 w-full flex justify-center">
              <button
                onClick={handleLogin}
                className="p-3 w-[50%] rounded-full border-white text-white border-2 font-['poppins'] hover:border-green-500 duration-300"
              >
                LOGIN
              </button>
            </div>
            <div className="my-10 w-full flex justify-center">
              <Link to={"/register"}>
                <span className="text-slate-200 font-['poppins'] hover:text-rose-600 duration-300 cursor-pointer">
                  REGISTER
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
