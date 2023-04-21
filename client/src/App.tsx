import React from "react";
import "./App.css";
import Home from "./pages/home/home";
import Albums from "./pages/albums/albums";
import AlbumSongs from "./pages/albumSongs/albumSongs";
import LikedSongs from "./pages/likedSongs/likedSongs";
import Profile from "./pages/profile/profile";
import { Routes, Route, Navigate } from "react-router-dom";
import Main from "./components/main/main";
import Playlist from "./components/playlist/playlist";
import Login from "./pages/login/login";
import { useSelector } from "react-redux";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/albumsSongs/:id" element={<AlbumSongs />} />
        <Route path="/likedSongs" element={<LikedSongs />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Playlist />
    </div>
  );
}

export default App;
