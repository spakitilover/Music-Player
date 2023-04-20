import { configureStore } from "@reduxjs/toolkit";
import musicSlice from "./musicSlice";
import usersSlice from "./usersSlice";

export default configureStore({
  reducer: {
    music: musicSlice,
    users: usersSlice,
  },
});
