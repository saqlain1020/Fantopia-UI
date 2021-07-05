import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getNotifications } from "src/Api";

const initialState = {
  list: [],
  loading: false,
};

export const fetchNotifications = createAsyncThunk(
  "notifications/fetchNotifications",
  async (account, thunkApi) => {
    try {
      const noti = await getNotifications(account);
      return noti;
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
      state.list = action.payload;
    },
  },
  extraReducers: {
    [fetchNotifications.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchNotifications.rejected]: (state, action) => {
      state.loading = false;
    },
    [fetchNotifications.fulfilled]: (state, action) => {
      state = action.payload;
      state.loading = false;
    },
  },
});

export const { changeLanguage } = applicationSlice.actions;

export default applicationSlice.reducer;
