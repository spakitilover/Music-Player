import React from "react";
import ArrowForward from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

const Section = () => {
  return (
    <div className="h-[937px] bg-slate-950 flex items-center justify-center z-[999] relative">
      <div>
        <div className="lg:text-6xl md:text-6xl text-4xl font-['Russo_One'] w-full text-rose-500 flex justify-center mb-10">
          Kabaki Music
        </div>
        <div className="lg:text-6xl text-white font-['Russo_One'] text-2xl flex justify-center mb-10">
          Welcome Tarik Kabaki
        </div>
        <div className=" lg:text-4xl text-white font-['Russo_One'] text-2xl flex justify-center mb-10">
          You're Almost There
        </div>
        <div className=" lg:text-4xl  text-white font-['Russo_One'] text-2xl flex justify-center mb-10">
          Just One Final Step
        </div>
        <div className="flex justify-center mb-10">
          <img
            className="w-[250px] h-[250px] object-cover rounded-full"
            src={
              "https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
            }
          />
        </div>
        <div className="flex justify-center mb-10 ">
          <button className="p-5 border-2 border-white text-white w-[300px] rounded-md font-['Press_Start_2P'] hover:border-green-500 duration-300">
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
