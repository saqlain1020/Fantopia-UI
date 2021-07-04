import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUser } from "src/Api";
import { LANGUAGES } from "src/Config/localization";

const initialState = [];

export const fetchNotifications = createAsyncThunk(
  "notifications/fetchNotifications",
  async (account, thunkApi) => {
    try {
    } catch (e) {
      console.log(e);
    }
  }
);

const applicationSlice = createSlice({
  name: "notifications",
  initialState: initialState,
  reducers: {
    changeLanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
  extraReducers: {
    [fetchNotifications.fulfilled]: (state, action) => {
      state = action.payload;
    },
  },
});

export const { changeLanguage } = applicationSlice.actions;

export default applicationSlice.reducer;
