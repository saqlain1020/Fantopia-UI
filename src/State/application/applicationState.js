import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUser } from "src/Api";
import { LANGUAGES } from "src/Config/localization";

const initialState = {
  loadingUser: false,
  user: {},
  lang: LANGUAGES.en,
};

export const loadUser = createAsyncThunk(
  "application/loadUser",
  async (account, thunkApi) => {
    try {
      const _user = await getUser(account);
      console.log(account, _user);
      return _user;
    } catch (e) {
      console.log(e);
    }
  }
);

const applicationSlice = createSlice({
  name: "application",
  initialState: initialState,
  reducers: {
    changeLanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
  extraReducers: {
    [loadUser.pending]: (state) => {
      state.loadingUser = true;
    },
    [loadUser.rejected]: (state) => {
      state.loadingUser = false;
    },
    [loadUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.loadingUser = false;
    },
  },
});

export const { changeLanguage } = applicationSlice.actions;

export default applicationSlice.reducer;
