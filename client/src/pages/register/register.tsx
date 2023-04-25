import axios from "axios";
import React, { useState } from "react";
import ArrowBackOutlined from "@mui/icons-material/ArrowBackOutlined";
import { Link } from "react-router-dom";

const Register: React.FC = () => {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    axios
      .post(`${process.env.REACT_APP_LOCALHOST}users/create`, {
        fullname,
        username,
        email,
        password,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="h-[937px] bg-slate-950 flex items-center z-[999] relative">
      <div className="w-full">
        <div className="lg:text-6xl md:text-6xl text-4xl font-['Russo_One'] w-full text-rose-600 flex justify-center mb-5">
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
                REGISTER
              </span>
            </div>
            <div>
              <div className="w-full flex justify-center mb-5 ">
                <input
                  className="p-4 w-[60%] rounded-full bg-inherit border-2 border-white text-rose-400 focus:outline-none font-['poppins'] placeholder:text-gray-500"
                  placeholder="Username"
                  onChange={(e: any) => setUsername(e.target.value)}
                />
              </div>
              <div className="w-full flex justify-center mb-5 ">
                <input
                  className="p-4 w-[60%] rounded-full bg-inherit border-2 border-white text-rose-400 focus:outline-none font-['poppins'] placeholder:text-gray-500"
                  placeholder="Fullname"
                  onChange={(e: any) => setFullname(e.target.value)}
                />
              </div>
              <div className="w-full flex justify-center mb-5 ">
                <input
                  className="p-4 w-[60%] rounded-full bg-inherit border-2 border-white text-rose-400 focus:outline-none font-['poppins'] placeholder:text-gray-500"
                  placeholder="Email"
                  onChange={(e: any) => setEmail(e.target.value)}
                />
              </div>
              <div className="w-full flex justify-center">
                <input
                  className="p-4 w-[60%]  rounded-full bg-inherit border-2 border-white text-rose-400 focus:outline-none font-['poppins'] placeholder:text-gray-500"
                  placeholder="Password"
                  type="password"
                  onChange={(e: any) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="my-10 w-full flex justify-center">
              <button
                onClick={handleRegister}
                className="p-3 w-[50%] rounded-full bg-inherit border-2 border-white text-white font-['poppins'] hover:border-green-500 duration-300"
              >
                REGISTER
              </button>
            </div>
            <div className="my-10 w-full flex justify-center ">
              <Link to={"/login"}>
                <span className="text-slate-200 font-['Press_Start_2P'] hover:text-rose-500 duration-300 cursor-pointer flex items-center justify-center gap-3">
                  <ArrowBackOutlined />
                  Go Back
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
