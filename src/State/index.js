import { configureStore } from "@reduxjs/toolkit";
import applicationReducers from "./application";

export default configureStore({
  devTools: process.env.NODE_ENV !== "production",
  reducer: { application: applicationReducers },
});
