import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUser } from "src/Api";

const initialState = {
  loadingUser: false,
  user: {
    name: "TESTING",
  },
};

export const loadUser = createAsyncThunk(
  "application/loadUser",
  async (account, thunkApi) => {
    try {
      const _user = await getUser(account);
      return _user;
    } catch (e) {
      console.log(e);
    }
  }
);

const userSlice = createSlice({
  name: "application",
  initialState: initialState,
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

export default userSlice.reducer;
