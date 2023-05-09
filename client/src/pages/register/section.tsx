import React, { useState } from "react";
import ArrowForward from "@mui/icons-material/ArrowForward";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import axios from "axios";

const Section = () => {
  const [image, setImage] = useState<any>(undefined);
  const RegistredUserId = useParams();

  const formData = new FormData();
  formData.append("file", image);

  const handleUpdateImage = () => {
    axios
      .patch(
        `${process.env.REACT_APP_LOCALHOST}users/create/image/${RegistredUserId.id}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="h-[937px] bg-slate-950 flex items-center justify-center z-[999] relative">
      <div>
        <div className="lg:text-6xl text-white font-['Russo_One'] text-2xl flex justify-center mb-10">
          Welcome Tarik Kabaki
        </div>
        <div className=" lg:text-3xl text-slate-600 font-['Russo_One'] text-2xl flex justify-center mb-10">
          You're Almost There
        </div>
        <div className=" lg:text-3xl text-slate-600 font-['Russo_One'] text-2xl flex justify-center mb-10">
          Just One Final Step
        </div>
        <div className="flex justify-center mb-10">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <input
              hidden
              type="file"
              onChange={(e: any) => setImage(e.target.files[0])}
            />
            <img
              className="w-[250px] h-[250px] object-cover rounded-full bg-slate-700"
              src={"https://img.freepik.com/free-icon/user_318-552176.jpg"}
            />
          </IconButton>
        </div>
        <div className="text-white flex justify-center mb-5">
          {image?.name || null}
        </div>
        <div className="flex justify-center mb-10 ">
          <button
            onClick={handleUpdateImage}
            className="p-5 border-2 border-white text-white w-[300px] rounded-md font-['Press_Start_2P'] hover:border-green-500 duration-300"
          >
            UPLOAD IMAGE
          </button>
        </div>
        <div className="flex justify-center">
          <Link to={"/login"}>
            <div className="cursor-pointer text-white rounded-md font-['poppins'] hover:text-green-500 duration-300">
              NOT NOW
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Section;
