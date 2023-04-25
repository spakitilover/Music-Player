import React from "react";
import Main from "../../components/main/main";
import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import Intro from "../../components/intro/intro";
import Profile from "../profile/profile";
import AlbumSongs from "../albumSongs/albumSongs";
import Playlist from "../../components/playlist/playlist";

const Home = () => {
  return (
    <>
      <Sidebar />
      <Navbar />
      <div className="flex bg-black">
        <Intro />
      </div>
    </>
  );
};

export default Home;
