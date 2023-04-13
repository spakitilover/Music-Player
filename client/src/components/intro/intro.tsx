import React from "react";

const Intro = () => {
  return (
    <div className="p-5 w-full ml-[300px] mt-[100px]">
      <div className="text-3xl font-['poppins'] text-white p-5">Albums</div>
      <div className="flex flex-wrap gap-10 justify-center p-5">
        <div className="w-[200px] h-[200px] overflow-hidden  ">
          <img
            className=" object-cover rounded-lg "
            src="https://static-cse.canva.com/blob/1035322/1600w-1Nr6gsUndKw.jpg"
          />
        </div>
        <div className="w-[200px] h-[200px] overflow-hidden  ">
          {" "}
          <img
            className=" object-cover rounded-lg "
            src="https://static.stereogum.com/uploads/2021/12/Best-Jazz-Albums-2021-1638893270.jpg"
          />
        </div>
        <div className="w-[200px] h-[200px] overflow-hidden ">
          {" "}
          <img
            className=" object-cover rounded-lg"
            src="https://media.npr.org/assets/img/2019/12/05/tyler-the-creator-igor_custom-967b87cf7029273e8d6975883b44a31a1d43a26e-s1100-c50.jpg"
          />
        </div>
        <div className="w-[200px] h-[200px]  overflow-hidden ">
          {" "}
          <img
            className=" object-cover rounded-lg "
            src="https://i.scdn.co/image/ab67616d0000b273dc139ce5434df86c492a93df"
          />
        </div>
        <div className="w-[200px] h-[200px] overflow-hidden ">
          {" "}
          <img
            className=" object-cover rounded-lg "
            src="https://media.npr.org/assets/img/2019/12/05/tyler-the-creator-igor_custom-967b87cf7029273e8d6975883b44a31a1d43a26e-s1100-c50.jpg"
          />
        </div>
        <div className="w-[200px] h-[200px] rounded-md  overflow-hidden ">
          {" "}
          <img
            className=" object-cover"
            src="https://i.scdn.co/image/ab67616d0000b273dc139ce5434df86c492a93df"
          />
        </div>
      </div>
      <div className="w-[50vw] h-[350px]">
        <ul className="flex w-full mb-3">
          <li className="text-white flex-1">
            <h2 className=" flex justify-center text-slate-500">Songs</h2>
          </li>
          <li className="text-white flex-1 ">
            {" "}
            <h2 className=" text-slate-500">Albums</h2>
          </li>
          <li className="text-white flex-2">
            {" "}
            <h2 className=" text-slate-500">Time</h2>
          </li>
        </ul>
        <ul className="flex w-full mb-3 hover:bg-rose-500 duration-300 cursor-pointer p-2 rounded-lg">
          <li className="text-white flex-1 flex items-center gap-2">
            <div className="w-[40px] h-[40px] rounded-md overflow-hidden">
              <img
                className=" object-cover"
                src="https://i.scdn.co/image/ab67616d0000b273dc139ce5434df86c492a93df"
              />
            </div>
            <span className="font-[poppins]">7LIWA - SEÑORITA FT. DJ </span>
          </li>
          <li className="text-white flex-1 ">
            <div className="h-[50px] flex items-center">
              <div className="font-[poppins]">7liwa</div>
            </div>
          </li>
          <li className="text-white flex-2">
            {" "}
            <div className="h-[50px] flex items-center">
              <div className="font-[poppins]">3:28</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Intro;
