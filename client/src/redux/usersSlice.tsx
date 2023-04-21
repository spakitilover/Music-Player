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

    addLike: (state: any, action) => {
      state.CurrentUser.likes.push(action.payload);
    },

    removeUserLike: (state: any, action) => {
      state.CurrentUser.likes.splice(
        state.CurrentUser.likes.findIndex(
          (item: any) => item.id === action.payload.id
        ),
        1
      );
    },
  },
});

export const { loginUser, logoutUser, addLike, removeUserLike } =
  UsersSlice.actions;

export default UsersSlice.reducer;
