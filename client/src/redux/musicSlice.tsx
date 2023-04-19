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
  },
});

export const { getAllMusic, getAllAlbums, selectAlbum } = MusicSlice.actions;

export default MusicSlice.reducer;
