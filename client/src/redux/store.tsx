import { configureStore } from "@reduxjs/toolkit";
import musicSlice from "./musicSlice";

export default configureStore({
  reducer: {
    music: musicSlice,
  },
});
