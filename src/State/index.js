import { configureStore } from "@reduxjs/toolkit";
import applicationReducers from "./application";
import notificationReducers from "./application";

export default configureStore({
  devTools: process.env.NODE_ENV !== "production",
  reducer: {
    application: applicationReducers,
    notifications: notificationReducers,
  },
});
