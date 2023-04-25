import React from "react";
import Profile from "../../pages/profile/profile";
import Albums from "../../pages/albums/albums";
import Home from "../../pages/home/home";
import AlbumSongs from "../../pages/albumSongs/albumSongs";
import LikedSongs from "../../pages/likedSongs/likedSongs";
import Playlist from "../../components/playlist/playlist";

const AppLayout = () => {
  return (
    <div>
      <Playlist />
    </div>
  );
};

export default AppLayout;
