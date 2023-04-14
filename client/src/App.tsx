import React from "react";
import "./App.css";
import Home from "./pages/home/home";
import Albums from "./pages/albums/albums";
import AlbumSongs from "./pages/albumSongs/albumSongs";
import LikedSongs from "./pages/likedSongs/likedSongs";
import Profile from "./pages/profile/profile";

function App() {
  return (
    <div className="App">
      <Profile />
    </div>
  );
}

export default App;
