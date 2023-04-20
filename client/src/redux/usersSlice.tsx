import { createSlice } from "@reduxjs/toolkit";

export const UsersSlice = createSlice({
  name: "users",
  initialState: {
    CurrentUser: null,
  },
  reducers: {
    loginUser: (state: any, action) => {
      state.CurrentUser = action.payload;
    },

    logoutUser: (state: any) => {
      state.CurrentUser = null;
    },
  },
});

export const { loginUser, logoutUser } = UsersSlice.actions;

export default UsersSlice.reducer;
