import { createSlice } from "@reduxjs/toolkit";
import { Albums, Music, singleAlbum } from "../interface/singleAlbum";

export const MusicSlice = createSlice({
  name: "music",
  initialState: {
    curr: 0,
    singleSong: [],
    singleAlbum: [],
    Album: [],
    Music: [],
  },
  reducers: {
    getAllMusic: (state: any, action) => {
      state.Music.push(...action.payload);
    },

    getAllAlbums: (state: any, action) => {
      state.Album.push(...action.payload);
    },

    selectAlbum: (state: any, action) => {
      const album = state.Album.filter(
        (item: any) => item.id == action.payload
      );
      // clearing the array after insert another album !
      state.singleAlbum = [];

      state.singleAlbum.push(...album);
    },

    next: (state: any) => {
      const isLast = state.curr === state.singleAlbum[0]?.music.length - 1;
      const newI = isLast ? 0 : state.curr + 1;
      state.curr = newI;
    },

    prev: (state: any) => {
      const isFirstSlide = state.curr === 0;
      const newI = isFirstSlide
        ? state.singleAlbum[0]?.music?.length - 1
        : state.curr - 1;
      state.curr = newI;
    },

    selectSong: (state: any, action) => {
      const album = state.Album.filter(
        (item: any) => item.id == action.payload.albumId
      );
      // clearing the array after insert another album !
      state.singleAlbum = [];

      state.singleAlbum.push(...album);
      const SelectedSongId = state.singleAlbum[0]?.music.findIndex(
        (item: any) => item.id === action.payload.musicId
      );
      state.curr = SelectedSongId;
    },

    addingLike: (state: any, action) => {
      state.Album.find((it: any) => it.id === action.payload.music.albums.id)
        .music.find((item: any) => item.id === action.payload.music.id)
        .like.push(action.payload);
    },

    removeLikes: (state: any, action) => {
      const albums = state.Album.find(
        (item: any) => item.id === action.payload.music.albums.id
      );

      albums.music
        .find((i: any) => i.id === action.payload.music.id)
        .like.splice(
          albums.music
            .find((x: any) => x.id === action.payload.music.id)
            .like.findIndex((it: any) => it.id === action.payload.id),
          1
        );
    },
  },
});

export const {
  getAllMusic,
  getAllAlbums,
  selectAlbum,
  next,
  prev,
  selectSong,
  addingLike,
  removeLikes,
} = MusicSlice.actions;

export default MusicSlice.reducer;
