import { createSlice } from "@reduxjs/toolkit";

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
    getAllMusic: (state: any, action: any) => {
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
  },
});

export const { getAllMusic, getAllAlbums, selectAlbum, next, prev } =
  MusicSlice.actions;

export default MusicSlice.reducer;
