import { createSlice } from "@reduxjs/toolkit";

export const MusicSlice = createSlice({
  name: "music",
  initialState: {
    singleSong: null,
    album: [],
    Music: [],
  },
  reducers: {
    getAllMusic: (state: any, action: any) => {
      state.Music.push(...action.payload);
    },
  },
});

export const { getAllMusic } = MusicSlice.actions;

export default MusicSlice.reducer;
